import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';

import { getMenuListAction } from '../../store/sagas/partnersSaga';
import OpenMenu from '../OpenMenu/OpenMenu';
import { useStylesHeader } from './HeaderStyles';

const customStyles = {
  content: {
    top: '14%',
    left: '68%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
//
function Header({ menuList, getMenuListAction }) {
  const classes = useStylesHeader();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  useEffect(() => {
    getMenuListAction();
  }, [getMenuListAction]);

  Modal.setAppElement('#root');
  return (
    <div className={classes.header_continer}>
      <div className={classes.header}>
        <Link href="/" className={classes.header__logo}>
          <img src={'img/logo.svg'} alt="logo" />
        </Link>
        {matches ? (
          <ul className={classes.header__menu}>
            {menuList.map((i, index) => {
              return (
                <li key={index}>
                  <a href="/">{i.name}</a>
                </li>
              );
            })}
          </ul>
        ) : null}

        <div className={classes.header__navigation}>
          <div className={classes.header__navigation_sities}>
            <div className={classes.header__navigation_triangle}>
              <img src={'img/triangle.svg'} alt="triangle" />
            </div>
            <p>Санкт-Петербург</p>
          </div>

          <div className={classes.header__navigation_wrap}>
            <button
              className={classes.header__navigation_search}
              onClick={openModal}
            >
              <img src={'img/search.svg'} alt="search" />
            </button>

            <div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <form className={classes.header__wrapper_search}>
                  <input
                    placeholder="Поиск"
                    className={classes.header__search_input}
                  />
                  <button
                    className={classes.header__navigation_search}
                    onClick={closeModal}
                  >
                    <img src={'img/search.svg'} alt="search" />
                  </button>
                </form>
              </Modal>
            </div>

            <button className={classes.header__navigation_button}>Войти</button>
          </div>
        </div>
        {matches ? null : <OpenMenu />}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  menuList: state.partnersReducer.menuList,
});

const mapDispatchToProps = (dispatch) => ({
  getMenuListAction: () => dispatch(getMenuListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

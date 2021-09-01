import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getMenuListAction } from '../../store/sagas/partnersSaga';
import { useStylesFooter } from './FooterStyles';

function Footer({ menuList, getMenuListAction }) {
  const classes = useStylesFooter();

  useEffect(() => {
    getMenuListAction();
  }, [getMenuListAction]);

  return (
    <div className={classes.footer_continer}>
      <div className={classes.footer}>
        <div className={classes.footer__content}>
          <div className={classes.footer__phone_wrapper}>
            <a href="tel:900" className={classes.footer__phone_link}>
              <span>900</span>
            </a>
            <span className={classes.footer__phone_subtitle}>
              По России бесплатно
            </span>
          </div>

          <ul className={classes.footer__menu}>
            {menuList.map((i, index) => {
              return (
                <li key={index}>
                  <a href="/">{i.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.footer__links}>
          <a href="/" className={classes.footer__links_sber}>
            <img src={'img/sberlogo.svg'} alt="logo_sber" />
          </a>

          <div className={classes.footer__links_wrapper}>
            <div className={classes.footer__links_mobile}>
              <a
                href="https://play.google.com/"
                className={classes.footer__links_mobile_continer}
              >
                <img src={'img/google-play.svg'} alt="google-play" />
              </a>
              <a
                href="https://www.apple.com/"
                className={classes.footer__links_mobile_continer}
              >
                <img src={'img/app-store.svg'} alt="app-store" />
              </a>
            </div>

            <div className={classes.footer__links_sites}>
              <a
                href="https://ok.ru/"
                className={classes.footer__links_sites_continer}
              >
                <img src={'img/ok.svg'} alt="ok" />
              </a>
              <a
                href="https://ru-ru.facebook.com/"
                className={classes.footer__links_sites_continer}
              >
                <img src={'img/fm_link.svg'} alt="face" />
              </a>
              <a
                href="https://vk.com/"
                className={classes.footer__links_sites_continer}
              >
                <img src={'img/vc_link.svg'} alt="vkontakte" />
              </a>
              <a
                href="https://www.instagram.com/"
                className={classes.footer__links_sites_continer}
              >
                <img src={'img/inst.svg'} alt="inst" />
              </a>
            </div>
          </div>
        </div>

        <div className={classes.footer__policy_wrapper}>
          <p className={classes.footer__copyright}>© 1997—2019 ПАО Сбербанк.</p>
          <p className={classes.footer__policy}>
            <a href="/">Политика</a> АО «ЦПЛ» в отношении обработки персональных
            данных и&nbsp;<a href="/">Согласие</a> на обработку данных участника
            Программы «Спасибо от Сбербанка»
          </p>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

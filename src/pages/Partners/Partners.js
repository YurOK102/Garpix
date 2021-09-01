import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getPartnersAction,
  getOffersAction,
  getPartnersMenuListAction,
} from '../../store/sagas/partnersSaga';

import Layout from '../../layouts/Layout/Layout';
import CheckboxMcd from '../../components/CheckboxMcd/CheckboxMcd';
import PartnersList from '../../components/PartnersList/PartnersList';
import OfferList from '../../components/OfferList/OfferList';
import Advantage from '../../components/Advantage/Advantage';
import { useStylesPartners } from './PartnersStyles';

function Partners({
  partnersMenuList,
  getPartnersMenuListAction,
  partners,
  getPartnersAction,
  offers,
  getOffersAction,
}) {
  const classes = useStylesPartners();

  useEffect(() => {
    getPartnersAction();
    getOffersAction();
    getPartnersMenuListAction();
  }, [getPartnersAction, getOffersAction, getPartnersMenuListAction]);

  const [bonusCheckbox, setBonusCheckbox] = useState(true);
  const handleBonusCheckbox = () => {
    setBonusCheckbox(!bonusCheckbox);
  };

  const [visibleMenuList, setVisibleMenuList] = useState(9);
  const showMoreMenuList = () => {
    setVisibleMenuList((prev) => prev + 3);
  };

  const [visiblePartners, setVisiblePartners] = useState(5);
  const showMorePartners = () => {
    setVisiblePartners((prev) => prev + 4);
  };

  const [visibleOffers, setVisibleOffers] = useState(3);
  const showMoreOffers = () => {
    setVisibleOffers((prev) => prev + 4);
  };

  return (
    <Layout>
      <div className={classes.partners}>
        <h1 className={classes.partners__title}>Партнеры и предложения</h1>

        <div className={classes.partners__menu_continer}>
          <ul className={classes.partners__menu}>
            {partnersMenuList.slice(0, visibleMenuList).map((i, index) => {
              return (
                <li key={index} className={classes.partners__menu_list}>
                  <a href="/">{i.name}</a>
                </li>
              );
            })}
            {visibleMenuList >= partnersMenuList.length ? null : (
              <button
                className={classes.partners__menu_btn}
                onClick={showMoreMenuList}
              >
                ...
              </button>
            )}
          </ul>
        </div>

        <div className={classes.partners__menu_checkbox}>
          <p
            className={
              bonusCheckbox
                ? `${classes.partners__menu_checkbox_text}`
                : `${classes.partners__menu_checkbox_text} active`
            }
          >
            Начисляют спасибо
          </p>
          <CheckboxMcd
            handleChange={handleBonusCheckbox}
            checked={bonusCheckbox}
          />
          <p
            className={
              !bonusCheckbox
                ? `${classes.partners__menu_checkbox_text}`
                : `${classes.partners__menu_checkbox_text} active`
            }
          >
            Принимают спасибо
          </p>
        </div>

        <div className={classes.partners__list}>
          <div className={classes.partners__list_group}>
            {partners.slice(0, visiblePartners).map((i) => {
              return (
                <PartnersList
                  key={i.id}
                  sale={i.sale}
                  image={i.img}
                  name={i.name}
                />
              );
            })}
          </div>
          {visiblePartners >= partners.length ? null : (
            <button
              className={classes.partners__btn}
              onClick={showMorePartners}
            >
              Еще 4 партнера
            </button>
          )}
        </div>

        <div className={classes.partners__offer}>
          <div className={classes.partners__wrapper_subtitle}>
            <h2 className={classes.partners__subtitle}>
              3 предложения в категории «Электроника и бытовая техника»
            </h2>
          </div>
          <div className={classes.partners__offer_group}>
            {offers.slice(0, visibleOffers).map((i) => {
              return (
                <OfferList
                  key={i.id}
                  image={i.img}
                  logo={i.logo}
                  name={i.name}
                  discription={i.discription}
                />
              );
            })}
          </div>
          {visibleOffers >= offers.length ? null : (
            <button className={classes.partners__btn} onClick={showMoreOffers}>
              Еще 4 предложения
            </button>
          )}
        </div>
        <Advantage />
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  partnersMenuList: state.partnersReducer.partnersMenuList,
  partners: state.partnersReducer.partners,
  offers: state.partnersReducer.offers,
});

const mapDispatchToProps = (dispatch) => ({
  getPartnersMenuListAction: () => dispatch(getPartnersMenuListAction()),
  getPartnersAction: () => dispatch(getPartnersAction()),
  getOffersAction: () => dispatch(getOffersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Partners);

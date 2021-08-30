import React, { useState } from 'react';

import Layout from '../../layouts/Layout/Layout';
import CheckboxMcd from '../../components/CheckboxMcd/CheckboxMcd';
import PartnersList from '../../components/PartnersList/PartnersList';
import OfferList from '../../components/OfferList/OfferList';
import Advantage from '../../components/Advantage/Advantage';
import { useStylesPartners } from './PartnersStyles';

function Partners() {
  const classes = useStylesPartners();

  const arr = [
    { name: 'Все партнеры' },
    { name: 'Популярные' },
    { name: 'Супермаркеты' },
    { name: 'Кафе и рестораны' },
    { name: 'Такси' },
    { name: 'Красота' },
    { name: 'Электроника и бытовая техника' },
    { name: 'Зоотовары' },
    { name: 'Кино и театр' },
    { name: '...' },
  ];
  const [bonusCheckbox, setBonusCheckbox] = useState(true);
  const handleBonusCheckbox = () => {
    setBonusCheckbox(!bonusCheckbox);
  };

  const partners = [
    {
      id: 1,
      sale: '1,5%',
      img: 'img/img_1.png',
      name: 'М.Видео',
    },
    {
      id: 2,
      sale: '3%',
      img: 'img/img_2.png',
      name: 'Бургер Кинг',
    },
    {
      id: 3,
      sale: '4,5%',
      img: 'img/img_3.png',
      name: 'Холодильник.ру',
    },
    {
      id: 4,
      sale: 'От 1,5%',
      img: 'img/img_4.png',
      name: 'BORK',
    },
    {
      id: 5,
      sale: '1,5%',
      img: 'img/img_5.png',
      name: 'Евросеть',
    },
  ];

  const offers = [
    {
      id: 1,
      img: 'img/offer_1.png',
      logo: 'img/partner-small1.png',
      name: 'Технопарк',
      discription: '20% спасибо за технику Electrolux',
    },
    {
      id: 2,
      img: 'img/offer_2.png',
      logo: 'img/partner-small5.png',
      name: 'Евросеть',
      discription: '10% спасибо за покупки в черную пятницу',
    },
    {
      id: 3,
      img: 'img/offer_3.png',
      logo: 'img/partner-small6.png',
      name: 'М.Видео',
      discription: '15% спасибо для студентов',
    },
  ];

  return (
    <Layout>
      <div className={classes.partners}>
        <h1 className={classes.partners__title}>Партнеры и предложения</h1>

        <div className={classes.partners__menu_continer}>
          <ul className={classes.partners__menu}>
            {arr.map((i, index) => {
              return (
                <li key={index} className={classes.partners__menu_list}>
                  <a href="/">{i.name}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.partners__menu_checkbox}>
          <p className={classes.partners__menu_checkbox_text}>
            Начисляют спасибо
          </p>
          <CheckboxMcd
            handleChange={handleBonusCheckbox}
            checked={bonusCheckbox}
          />
          <p className={classes.partners__menu_checkbox_text}>
            Принимают спасибо
          </p>
        </div>

        <div className={classes.partners__list}>
          <div className={classes.partners__list_group}>
            {partners.map((i) => {
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
          {/* <MyButton>Еще 4 партнера</MyButton> */}
          <button className={classes.partners__btn}>Еще 4 партнера</button>
        </div>

        <div className={classes.partners__offer}>
          <div className={classes.partners__wrapper_subtitle}>
            <h2 className={classes.partners__subtitle}>
              3 предложения в категории «Электроника и бытовая техника»
            </h2>
          </div>
          <div className={classes.partners__offer_group}>
            {offers.map((i) => {
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
          <button className={classes.partners__btn}>Еще 4 предложения</button>
        </div>
        <Advantage />
      </div>
    </Layout>
  );
}

export default Partners;

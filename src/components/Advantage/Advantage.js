import React from 'react';

import { useStylesAdvantage } from './AdvantageStyles';

function Advantage() {
  const classes = useStylesAdvantage();

  const sales = [
    { id: 1, img: 'img/mini_call_1.png' },
    { id: 2, img: 'img/mini_call_2.png' },
    { id: 3, img: 'img/mini_call_3.png' },
    { id: 4, img: 'img/mini_call_4.png' },
    { id: 5, img: 'img/mini_call_5.png' },
  ];
  const percents = [
    { id: 1, img: 'img/mini_call_6.png', percents: '3' },
    { id: 2, img: 'img/mini_call_7.png', percents: '1.5' },
    { id: 3, img: 'img/mini_call_8.png', percents: '5' },
  ];
  const coupons = [
    { id: 1, img: 'img/mini_call_9.png' },
    { id: 2, img: 'img/mini_call_10.png' },
    { id: 3, img: 'img/mini_call_11.png' },
  ];
  const persinalDates = [
    { id: 1, img: 'img/mini_call_12.png' },
    { id: 2, img: 'img/mini_call_13.png' },
    { id: 3, img: 'img/mini_call_14.png' },
    { id: 4, img: 'img/mini_call_15.png' },
    { id: 5, img: 'img/mini_call_16.png' },
  ];

  return (
    <div className={classes.advantage}>
      <div className={classes.advantage__wrapper}>
        <div className={classes.advantage__roll}>
          <div className={classes.advantage__img_wrapper}>
            {sales.map((i) => {
              return (
                <div key={i.id} className={classes.advantage__img}>
                  <img src={i.img} alt="images" />
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.advantage__text_wrapper}>
          <div className={classes.advantage__bg_left}>
            <img
              className={classes.advantage__bg_left}
              src={'img/mini_path_1.png'}
              alt=""
            />
          </div>
          <span className={classes.advantage__text}>Скидки за бонусы</span>
          <div className={classes.advantage__bg_right}>
            <img
              className={classes.advantage__bg_right}
              src={'img/mini_path_2.png'}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={classes.advantage__middle_wrapper}>
        <div className={classes.advantage__wrapper}>
          <div className={classes.advantage__roll}>
            <div className={classes.advantage__img_wrapper_middle}>
              {percents.map((i) => {
                return (
                  <div key={i.id} className={classes.advantage__img}>
                    <img src={i.img} alt="images" />
                    <div className={classes.advantage__img_percent}>
                      {i.percents} %
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.advantage__text_wrapper}>
            <div className={classes.advantage__bg_left}>
              <img
                className={classes.advantage__bg_left}
                src={'img/mini_path_1.png'}
                alt=""
              />
            </div>
            <span className={classes.advantage__text}>
              Большой % начисления
            </span>
            <div className={classes.advantage__bg_right}>
              <img
                className={classes.advantage__bg_right}
                src={'img/mini_path_2.png'}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={classes.advantage__wrapper}>
          <div className={classes.advantage__roll}>
            <div className={classes.advantage__img_wrapper_middle}>
              {coupons.map((i) => {
                return (
                  <div key={i.id} className={classes.advantage__img}>
                    <img src={i.img} alt="images" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.advantage__text_wrapper}>
            <div className={classes.advantage__bg_left}>
              <img
                className={classes.advantage__bg_left}
                src={'img/mini_path_1.png'}
                alt=""
              />
            </div>
            <span className={classes.advantage__text}>Выгодные купоны</span>
            <div className={classes.advantage__bg_right}>
              <img
                className={classes.advantage__bg_right}
                src={'img/mini_path_2.png'}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.advantage__wrapper}>
        <div className={classes.advantage__roll}>
          <div className={classes.advantage__img_wrapper}>
            {persinalDates.map((i) => {
              return (
                <div key={i.id} className={classes.advantage__img}>
                  <img src={i.img} alt="images" />
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.advantage__text_wrapper}>
          <div className={classes.advantage__bg_left}>
            <img
              className={classes.advantage__bg_left}
              src={'img/mini_path_1.png'}
              alt=""
            />
          </div>
          <span className={classes.advantage__text}>
            Персональное исходя из трат
          </span>
          <div className={classes.advantage__bg_right}>
            <img
              className={classes.advantage__bg_right}
              src={'img/mini_path_2.png'}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;

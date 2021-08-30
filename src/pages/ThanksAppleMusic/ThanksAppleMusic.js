import React, { useState } from 'react';

import Layout from '../../layouts/Layout/Layout';
import { useStylesThanksAppleMusic } from './ThanksAppleMusicStyle';

function ThanksAppleMusic() {
  const classes = useStylesThanksAppleMusic();

  const description = [
    { name: 'Получите доступ к миллионам альбомов, исполнителей и песен' },
    { name: 'Эксклюзивный и оригинальный контент' },
    { name: 'Вы можете отказаться от подписки в любой момент' },
    { name: 'Скачивайте любимую музыку и слушайте офлайн' },
  ];
  const faq = [
    {
      name: `1.  Откройте приложение «Музыка» и введите существующий Apple ID и пароль для входа в учетную запись. 
    (Если у   вас нет Apple ID, вам будет предложено его создать).`,
    },
    {
      name: '2.  Нажмите на «3 месяца бесплатно» (специальное предложение для новых пользователей).',
    },
    {
      name: '3.  Выберите индивидуальную подписку и нажмите «3 месяца бесплатно».',
    },
    { name: '4.  Перейдите в учетную запись.' },
    { name: '5.  Нажмите «Использовать код».' },
    { name: '6.  Введите 12-значный код.' },
    { name: '7.  Получите сообщение с подтверждением использования кода.' },
  ];

  const address = [
    {
      id: 1,
      logo: 'img/mini_logo_thanks.png',
      logo_2: 'img/ellipse_group.png',
      address: 'Москва, ул. Большая Татарская, 21',
      metro_1: 'Маяковская',
      metro_2: 'Лубянка',
      phone: '+7 495 220-30-44',
    },
    {
      id: 2,
      logo: 'img/mini_logo_thanks.png',
      logo_2: 'img/ellipse_group.png',
      address: 'Москва, ул. Большая Татарская, 22',
      metro_1: 'Маяковская',
      metro_2: 'Лубянка',
      phone: '+7 495 220-30-44',
    },
    {
      id: 3,
      logo: 'img/mini_logo_thanks.png',
      logo_2: 'img/ellipse_group.png',
      address: 'Москва, ул. Большая Татарская, 23',
      metro_1: 'Маяковская',
      metro_2: 'Лубянка',
      phone: '+7 495 220-30-44',
    },
  ];
  return (
    <Layout>
      <div className={classes.thanks}>
        <ul className={classes.thanks__breadcrumb}>
          <li>
            <a href="/src/">Скидочные купоны</a>
          </li>
          <div className={classes.thanks__breadcrumb_void}></div>
          <li>
            <a href="/">Развлечения</a>
          </li>
        </ul>
        <h1 className={classes.thanks__title}>Apple Music за СПАСИБО</h1>
        <div className={classes.thanks__content}>
          <img src={'img/action_thanks.png'} alt="bg" />

          <div className={classes.thanks__content_wrapper}>
            <span className={classes.thanks__content_subtitle}>
              C 17 Декабря 2018г. по 17 Декабря 2019г.
            </span>
            <span className={classes.thanks__description}>
              Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и
              наслаждайтесь любимой музыкой без перерыва.
            </span>

            <div className={classes.thanks__box}>
              {description.map((i, index) => {
                return (
                  <div key={index} className={classes.thanks__box_wrapper}>
                    <div className={classes.thanks__box_void}></div>
                    <span className={classes.thanks__box_description}>
                      {i.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <span className={classes.thanks__faq}>
              Как использовать промо-код:
            </span>
            <div className={classes.thanks__box}>
              {faq.map((i, index) => {
                return (
                  <div key={index} className={classes.thanks__box_wrapper}>
                    <span className={classes.thanks__box_description}>
                      {i.name}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className={classes.thanks__rules}>
              Под персональными данными в целях настоящих Правил понимаются
              персональные данные Участников Акции и иных лиц - субъектов
              персональных данных как они определены в Законе «О персональных
              данных». Под обработкой персональных данных в настоящих{' '}
              <span>Правилах понимается любое действие</span> (операция),
              совершаемое в целях проведения Акции, или совокупность
              действий(операций), совершаемых с использованием средств
              автоматизации или без использования таких средств с персональными
              данными, включая сбор, запись, систематизацию, накопление,
              хранение, уточнение (обновление, изменение), извлечение,
              использование, передачу (распространение, предоставление, доступ),
              обезличивание, блокирование, удаление, уничтожение персональных
              данных, предоставленных Участником Акции Банку/ Уполномоченной
              Компании.
            </p>

            <a href="/" className={classes.thanks__links}>
              Подробнее об Apple Music для Android
            </a>
            <a href="/" className={classes.thanks__links}>
              Правила акции
            </a>

            <p className={classes.thanks__info}>
              Только при оформлении индивидуальной подписки. По окончании
              пробного периода подписка будет продлена автоматически. 4 месяца
              бесплатно только для новых подписчиков. Срок действия кода
              истекает 31 января 2020 года. Это промокод, который не подлежит
              перепродаже, обмену на денежный эквивалент и замене в случае кражи
              или потери. Предложение действительно при оформлении
              индивидуальной подписки на Apple Music на территории Российской
              Федерации. Требуется учетная запись iTunes. Применяются
              соответствующие условия <a href="/">(подробнее)</a>. Промокодом
              может воспользоваться лицо старше 13 лет, чье местоположение
              совпадает со страной/регионом магазина, в котором активируется
              код. Требуются совместимые продукты и сервисы. Apple Music —
              зарегистрированная торговая марка Apple. Apple не является
              участником или спонсором этой промоакции.
            </p>
          </div>
        </div>
        <div className={classes.thanks__product_wrapper}>
          <div className={classes.thanks__product_logo}>
            <img src={'img/apple_logo.png'} alt="logo" />
          </div>
          <span className={classes.thanks__product}>Apple Music</span>
        </div>

        <div className={classes.thanks__address}>
          {address.map((i) => {
            return (
              <div key={i.id} className={classes.thanks__address_wrapper}>
                <div className={classes.thanks__address_continer}>
                  <div
                    className={`${classes.thanks__address_img} active_hover`}
                  />

                  <div className={classes.thanks__address_list}>
                    <span className={classes.thanks__address_text}>
                      {i.address}
                    </span>
                    <div className={classes.thanks__address_box}>
                      <div className={classes.thanks__address_metro_wrapper}>
                        <div className={classes.thanks__address_metro_img}>
                          <img
                            src={'img/moscow-metro-logo_1.svg'}
                            alt="metro"
                          />
                        </div>
                        <span className={classes.thanks__address_metro}>
                          {i.metro_1}
                        </span>
                      </div>
                      <div className={classes.thanks__address_metro_wrapper}>
                        <div className={classes.thanks__address_metro_img}>
                          <img
                            src={'img/moscow-metro-logo_2.svg'}
                            alt="metro"
                          />
                        </div>
                        <span className={classes.thanks__address_metro}>
                          {i.metro_2}
                        </span>
                      </div>
                    </div>

                    <span className={classes.thanks__address_phone}>
                      {i.phone}
                    </span>
                    <span className={classes.thanks__working_hours}>
                      Ежедневно с 09:00 до 21:00
                    </span>
                    <a href="/" className={classes.thanks__address_link}>
                      apple.com
                    </a>
                  </div>
                </div>

                <div className={classes.thanks__address_btn}>
                  <button>Проложить маршрут</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className={classes.thanks__map}>
          <img src={'img/bitmap.png'} alt="logo" />
        </div>
      </div>
    </Layout>
  );
}

export default ThanksAppleMusic;

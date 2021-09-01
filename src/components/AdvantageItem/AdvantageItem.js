import React from 'react';
import { useStylesAdvantageItem } from './AdvantageItemStyles';

function AdvantageItem({ data }) {
  const classes = useStylesAdvantageItem();

  return (
    <div className={classes.advantage__wrapper}>
      <div className={classes.advantage__roll}>
        <div className={classes.advantage__img_wrapper}>
          {data?.map((i) => {
            return (
              <div key={i.id} className={classes.advantage__img}>
                <img src={i.img} alt="images" />
                {i.percents && (
                  <div className={classes.advantage__img_percent}>
                    {i.percents} %
                  </div>
                )}
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
  );
}

export default AdvantageItem;

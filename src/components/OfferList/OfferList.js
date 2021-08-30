import React from 'react';
import { Link } from 'react-router-dom';

import { useStylesOfferList } from './OfferListStyles';

function OfferList({ image, logo, name, discription }) {
  const classes = useStylesOfferList();

  return (
    <Link to="/tam" className={classes.list}>
      <img className={classes.list__img} src={image} alt="images" />

      <div className={classes.list__wrapper}>
        <div className={classes.list__logo}>
          <img src={logo} alt="images" />
        </div>
        <div className={classes.list__text}>
          <span className={classes.list__name}>{name}</span>
          <span className={classes.list__discription}>{discription}</span>
        </div>
      </div>
    </Link>
  );
}

export default OfferList;

import React from 'react';
import { Link } from 'react-router-dom';

import { useStylesPartnersList } from './PartnersListStyles';

function PartnersList({ sale, image, name }) {
  const classes = useStylesPartnersList();

  return (
    <Link to="/tam" className={classes.list}>
      <span className={classes.list__sale}>{sale}</span>
      <span className={classes.list__subtitle}>Спасибо от суммы покупки</span>
      <div className={classes.list__img}>
        <img src={image} alt="logo" />
      </div>
      <span className={classes.list__name}>{name}</span>
    </Link>
  );
}

export default PartnersList;

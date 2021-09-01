import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getBonusAction } from '../../store/sagas/partnersSaga';
import AdvantageItem from '../AdvantageItem/AdvantageItem';
import { useStylesAdvantage } from './AdvantageStyles';

function Advantage({ bonus, getBonusAction }) {
  const classes = useStylesAdvantage();

  useEffect(() => {
    getBonusAction();
  }, [getBonusAction]);

  const { sales, percents, coupons, persinalDates } = bonus;

  return (
    <div className={classes.advantage}>
      <AdvantageItem data={sales} />
      <div className={classes.advantage__middle_wrapper}>
        <AdvantageItem data={percents} />
        <AdvantageItem data={coupons} />
      </div>
      <AdvantageItem data={persinalDates} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  bonus: state.partnersReducer.bonus,
});

const mapDispatchToProps = (dispatch) => ({
  getBonusAction: () => dispatch(getBonusAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Advantage);

import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStylesCheckboxMcd } from './CheckboxMcdStyles';

const CheckboxMcd = ({ checked, handleChange }) => {
  const classes = useStylesCheckboxMcd();

  return (
    <FormGroup>
      <FormControlLabel
        className={classes.formControlLabel}
        control={
          <Checkbox
            onChange={handleChange}
            checked={checked}
            className={classes.checkbox_mcd}
            checkedIcon={<div className={classes.checkbox_mcd__no_checked} />}
            icon={<div className={classes.checkbox_mcd__no_checked} />}
            disableRipple
          />
        }
        label={
          <div
            className={`${classes.toggleLabel} ${checked ? 'active' : ''}`}
          />
        }
      />
    </FormGroup>
  );
};

export default CheckboxMcd;

/* eslint-disable global-require */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStylesCheckboxMcd } from './CheckboxMcdStyles';

const CheckboxMcd = ({ checked, handleChange }) => {
  const classes = useStylesCheckboxMcd();
  console.log('1', checked);
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

CheckboxMcd.propTypes = {
  textLabel: PropTypes.string,
  element: PropTypes.element,
  classLabel: PropTypes.string,
  classFormControlLabel: PropTypes.string,
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
};
CheckboxMcd.defaultProps = {
  textLabel: '',
  element: null,
  classLabel: '',
  classFormControlLabel: '',
  checked: false,
  handleChange: () => {},
};

export default CheckboxMcd;

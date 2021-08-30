/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesCheckboxMcd = makeStyles((theme) => ({
  formControlLabel: {
    width: '58px',
    height: '24px',
    border: '1px solid #E4E6E9',
    background: theme.palette.primary.white,
    borderRadius: '12px',
    position: 'relative',
  },
  checkbox_mcd: {
    marginRight: '10px',
  },

  checkbox_mcd__checked: {
    display: 'block',
    width: '18px',
    height: '18px',
  },

  checkbox_mcd__no_checked: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    border: `2px solid ${theme.palette.primary.black_600}`,
  },
  toggleLabel: {
    position: 'absolute',
    top: '2px',
    right: '2px',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: theme.palette.primary.green,
    transitionDuration: '0.5s',
    '&.active': {
      right: '36px',
      transitionDuration: '0.5s',
    },
  },
}));

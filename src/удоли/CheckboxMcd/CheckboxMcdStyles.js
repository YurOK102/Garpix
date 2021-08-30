/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesCheckboxMcd = makeStyles((theme) => ({
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

}));

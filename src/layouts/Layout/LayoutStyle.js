import { makeStyles } from '@material-ui/core/styles';

export const useStylesLayout = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
  },

  layout__content: {
    padding: '0 10px',
    background: theme.palette.primary.grey,

    [theme.breakpoints.up('lg')]: {
      padding: '0px',
    },
    // [theme.up(theme.bp.bp_320)]: {
    //   padding: '0 15px 20px 15px',
    //   flexGrow: '1',
    // },
    // [theme.up(theme.bp.bp_414)]: {
    //   padding: '0 20px 20px 20px',
    // },
  },
}));

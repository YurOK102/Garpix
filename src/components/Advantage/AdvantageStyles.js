/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesAdvantage = makeStyles((theme) => ({
  advantage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '60px',

    [theme.breakpoints.up('xl')]: {
      marginTop: '120px',
    },
  },
  advantage__wrapper: {
    width: '100%',
    position: 'relative',
    marginBottom: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  advantage__roll: {
    width: '100%',
    padding: '12px 0px',
    background: theme.palette.primary.white,
    borderRadius: '80px',
    overflow: 'scroll',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    [theme.breakpoints.up('xs')]: {
      width: '360px',
      margin: '0 auto',
    },
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      overflow: 'visible',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '19px 9px',
    },
  },
  advantage__img_wrapper: {
    width: '600px',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      width: 'inherit',
    },
  },
  advantage__img: {
    maxWidth: '100px',
    height: '100px',
    width: '100%',
    margin: '0 10px',
    position: 'relative',

    '& img ': {
      width: '100%',
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: '120px',
      height: '120px',
    },
  },
  advantage__text_wrapper: {
    // width: '190px',
    position: 'absolute',
    top: '124px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',

    [theme.breakpoints.up('lg')]: {
      top: '157px',
    },
  },
  advantage__text: {
    // width: '100%',
    ...theme.typography.advantage_text,
    background: theme.palette.primary.white,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },

  advantage__bg_left: {
    height: '42px',
    '& img': {
      width: '100%',
    },
  },
  advantage__bg_right: {
    height: '42px',
    '& img': {
      width: '100%',
    },
  },

  advantage__middle_wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  advantage__img_wrapper_middle: {
    width: '360px',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      width: 'inherit',
    },
  },
  advantage__img_percent: {
    position: ' absolute',
    top: '-3px',
    left: '72%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '40px',
    fontFamily: 'Geometria',
    fontSize: '12px',
    lineHeight: '24px',
    fontWeight: 700,
    borderRadius: '50%',
    background: theme.palette.primary.black,
    color: theme.palette.primary.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.up('lg')]: {
      width: '50px',
      height: '50px',
      top: '-10px',
      left: '72%',
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
}));

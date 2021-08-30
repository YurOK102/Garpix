/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesHeader = makeStyles((theme) => ({
  header_continer: {
    width: '100%',
    padding: '0 10px',
    background: theme.palette.primary.white,

    [theme.breakpoints.up('lg')]: {
      padding: '0px',
    },
  },
  header: {
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid red',
    '& p': {
      ...theme.typography.p,
    },

    [theme.breakpoints.up('lg')]: {
      padding: '12px 0',
    },
    [theme.breakpoints.up('xl')]: {
      width: '1170px',
      height: '116px',
      margin: '0 auto',
    },
  },
  header__logo: {
    width: '110px',
    height: '50px',
    '& img': {
      width: '100%',
    },

    [theme.breakpoints.up('xl')]: {
      width: '180px',
      height: '80px',
    },
  },
  header__menu: {
    '& li': {
      margin: '10px 0',
    },
    '& a': {
      ...theme.typography.a,
      marginRight: '23px',
      color: theme.palette.primary.black,
      opacity: '0.5',
    },

    [theme.breakpoints.up('lg')]: {
      width: '610px',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('xl')]: {
      width: '750px',
    },
  },
  header__navigation: {
    width: '130px',

    [theme.breakpoints.up('xl')]: {
      width: '150px',
    },
  },
  header__navigation_sities: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    '& p': {
      ...theme.typography.p_sities,
    },
  },
  header__navigation_triangle: {
    width: '18px',
    height: '18px',
    '& img': {
      width: '100%',
    },

    [theme.breakpoints.up('xl')]: {
      width: '20px',
      height: '20px',
    },
  },
  header__navigation_wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header__navigation_search: {
    width: '16px',
    height: '16px',
    marginLeft: '14px',
    background: 'inherit',
    borderRadius: 'inherit',
    padding: 'inherit',
    '& img': {
      width: '100%',
    },

    [theme.breakpoints.up('xl')]: {
      width: '24px',
      height: '24px',
    },
  },
  ReactModal__Content: {
    '& ReactModal__Content--after-open': {
      inset: '14% auto auto 68%',
    },
  },
  header__wrapper_search: {
    borderBottom: `1px solid ${theme.palette.primary.black}`,
    paddingBottom: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  header__search_input: {
    border: 'none',
    height: '30px',
  },
  header__navigation_button: {
    width: '70px',
    ...theme.typography.header_btn,
    border: `1px solid ${theme.palette.primary.green}`,
    background: theme.palette.primary.white,
    color: theme.palette.primary.green,
    padding: '5px 0',

    [theme.breakpoints.up('xl')]: {
      width: '90px',
    },
  },
  header__open_menu: {
    display: 'none',
  },
}));

/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesFooter = makeStyles((theme) => ({
  footer_continer: {
    width: '100%',
    padding: '0 10px',
    background: theme.palette.primary.white,

    [theme.breakpoints.up('lg')]: {
      padding: '0px',
    },
  },
  footer: {
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    border: '1px solid red',

    [theme.breakpoints.up('lg')]: {
      padding: '40px 0',
    },
    [theme.breakpoints.up('xl')]: {
      width: '1170px',
      margin: '0 auto',
    },
  },
  footer__content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  footer__phone_wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer__phone_link: {
    ...theme.typography.h2,
    color: theme.palette.primary.black,
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      // display: 'none',
    },
  },
  footer__menu: {
    display: 'none',
    '& li': {
      margin: '10px 0',
    },
    '& a': {
      ...theme.typography.a,
      marginRight: '23px',
      color: theme.palette.primary.black,
    },

    [theme.breakpoints.up('md')]: {
      width: '520px',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('lg')]: {
      width: '770px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '875px',
    },
  },

  footer__phone_subtitle: {
    ...theme.typography.footer_p,
    color: theme.palette.primary.black,
    opacity: '0.5',
  },

  footer__links: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',

    [theme.breakpoints.up('md')]: {
      marginTop: '30px',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  footer__links_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',

    [theme.breakpoints.up('md')]: {
      width: '520px',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('lg')]: {
      width: '770px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '875px',
    },
  },
  footer__links_mobile: {
    width: '270px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer__links_mobile_continer: {
    width: '120px',
    height: '37px',
    marginBottom: '10px',
    '& img': {
      width: '100%',
      borderRadius: '8px',
    },

    [theme.breakpoints.up('md')]: {
      width: '130px',
      height: '40px',
      marginBottom: '0px',
    },
  },
  footer__links_sites: {
    width: '190px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer__links_sites_continer: {
    width: '35px',
    height: '35px',
    '& img': {
      width: '100%',
      borderRadius: '8px',
    },

    [theme.breakpoints.up('md')]: {
      width: '40px',
      height: '40px',
    },
  },

  footer__policy_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: '30px',
    },
  },
  footer__copyright: {
    ...theme.typography.footer_p,
    color: theme.palette.primary.black,
    opacity: '0.5',
  },
  footer__policy: {
    ...theme.typography.footer_p,
    color: theme.palette.primary.black,
    letterSpacing: '-0.1px',
    opacity: '0.5',
    textAlign: 'center',
    '& a': {
      textDecoration: 'underline',
      fontSize: '14px',
      lineHeight: '18px',
    },

    [theme.breakpoints.up('md')]: {
      width: '520px',
      textAlign: 'left',
    },
    [theme.breakpoints.up('lg')]: {
      width: '770px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '875px',
    },
  },
}));

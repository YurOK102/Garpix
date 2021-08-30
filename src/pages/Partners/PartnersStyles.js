/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesPartners = makeStyles((theme) => ({
  partners: {
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
      padding: '70px 0 170px',
    },
  },
  partners__title: {
    ...theme.typography.h1,
    textAlign: 'center',
  },

  partners__menu_continer: {
    width: ' 100%',
    margin: '0 auto',
    marginTop: '50px',
    overflow: 'scroll',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    [theme.breakpoints.up('md')]: {
      width: '730px',
      overflow: 'visible',
    },
    [theme.breakpoints.up('lg')]: {
      width: '890px',
    },
  },
  partners__menu: {
    width: '1280px',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      width: '100%',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.up('lg')]: {
      // width: '890px',visible
    },
  },
  partners__menu_list: {
    background: theme.palette.primary.white,
    borderRadius: '8px',
    padding: '12px',
    margin: '0 10px 10px 0',
    transitionDuration: '0.5s',
    border: `1px solid ${theme.palette.primary.white}`,
    '&:hover': {
      background: theme.palette.primary.white,
      borderRadius: '8px',
      padding: '12px',
      margin: '0 10px 10px 0',
      transitionDuration: '0.5s',
      border: `1px solid ${theme.palette.primary.green}`,
      '& a': {
        ...theme.typography.a,
        color: theme.palette.primary.green,
        transitionDuration: '0.5s',
      },
    },
    '& a': {
      ...theme.typography.a,
      color: theme.palette.primary.black,
      transitionDuration: '0.5s',
    },
  },
  partners__menu_checkbox: {
    width: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '30px auto 50px',
    '& label': {
      margin: 0,
    },

    [theme.breakpoints.up('lg')]: {
      width: '320px',
    },
  },
  partners__menu_checkbox_text: {
    ...theme.typography.p,
    textAlign: 'center',
  },

  partners__list_group: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridColumnGap: '30px',
    gridRowGap: '20px',
    marginBottom: '40px',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '19px',
      gridRowGap: '19px',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridColumnGap: '19px',
      gridRowGap: '19px',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridColumnGap: '19px',
      gridRowGap: '19px',
    },
    [theme.breakpoints.up('xl')]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
      gridColumnGap: '19px',
      gridRowGap: '19px',
    },
  },
  partners__btn: {
    ...theme.typography.btn,
    background: theme.palette.primary.green,
    color: theme.palette.primary.white,
    padding: '12px 20px',
    margin: '0 auto',
    display: 'block',

    [theme.breakpoints.up('xl')]: {
      // display: 'none',
    },
  },

  partners__offer: {
    marginTop: '70px',

    [theme.breakpoints.up('xl')]: {
      marginTop: '120px',
    },
  },
  partners__wrapper_subtitle: {
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
      width: '480px',
    },
    [theme.breakpoints.up('md')]: {
      width: '715px',
    },
  },
  partners__subtitle: {
    ...theme.typography.h2,
    textAlign: 'center',
  },
  partners__offer_group: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridColumnGap: '30px',
    gridRowGap: '19px',
    margin: '20px 0',

    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '19px',
      gridRowGap: '19px',
      margin: '40px 0',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridColumnGap: '19px',
      gridRowGap: '19px',
      margin: '40px 0',
    },
  },
}));

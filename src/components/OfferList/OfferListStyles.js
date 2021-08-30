/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesOfferList = makeStyles((theme) => ({
  list: {
    width: '300px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '0px',
    },
  },
  list__img: {
    width: '100%',
  },
  list__wrapper: {
    padding: '15px 0',
    display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  list__logo: {
    maxWidth: '50px',
    width: '100%',
    height: '50px',
    marginRight: '20px',
    '& img': {
      width: '100%',
    },
  },
  list__text: {
    maxWidth: '315px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  list__name: {
    ...theme.typography.offers_name,
    opacity: '0.5',
    marginBottom: '4px',
  },
  list__discription: {
    ...theme.typography.offers_discription,
  },
}));

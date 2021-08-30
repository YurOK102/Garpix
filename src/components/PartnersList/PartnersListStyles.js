/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@material-ui/core/styles';

export const useStylesPartnersList = makeStyles((theme) => ({
  list: {
    width: '270px',
    margin: '0 auto',
    padding: '20px 20px 30px',
    background: theme.palette.primary.white,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '20px 20px 30px',
    },
  },
  list__sale: {
    ...theme.typography.span_sale,
  },
  list__subtitle: {
    ...theme.typography.span_subtitle,
    marginTop: '6px',
    opacity: '0.4',
  },
  list__img: {
    width: '120px',
    height: '120px',
    margin: '30px auto 35px',
    '& img': {
      width: '100%',
    },
  },
  list__name: {
    ...theme.typography.span_name,
    textAlign: 'center',
    opacity: '0.5',
  },
}));

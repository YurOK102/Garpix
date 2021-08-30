import { makeStyles } from '@material-ui/core/styles';

export const useStylesThanksAppleMusic = makeStyles((theme) => ({
  thanks: {
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
      padding: '70px 0 120px',
    },
  },
  thanks__breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',

    '& a': {
      ...theme.typography.text_breadcrumb,
      color: theme.palette.primary.another_grey,
    },
  },
  thanks__breadcrumb_void: {
    width: '3px',
    height: '3px',
    background: theme.palette.primary.another_grey,
    borderRadius: '50%',
    margin: '0 5px',
  },
  thanks__title: {
    ...theme.typography.h1,
    color: theme.palette.primary.black,
    textAlign: 'center',
  },
  thanks__content: {
    margin: '20px 0 30px',
    background: theme.palette.primary.white,
    borderRadius: '30px 30px 0 0',
    '& img': {
      width: '100%',
    },

    [theme.breakpoints.up('lg')]: {
      margin: '40px 0 50px',
    },
  },
  thanks__content_wrapper: {
    padding: '10px',

    [theme.breakpoints.up('lg')]: {
      padding: '20px 50px 50px 50px',
    },
  },
  thanks__content_subtitle: {
    ...theme.typography.thanks_subtitle,
    color: theme.palette.primary.black,
    opacity: '0.5',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    textAlign: 'center',

    [theme.breakpoints.up('lg')]: {
      marginBottom: '40px',
    },
  },
  thanks__description: {
    ...theme.typography.thanks_spun,
    color: theme.palette.primary.black,
  },

  thanks__box: {
    paddingLeft: '0px',
    marginBottom: '40px',

    [theme.breakpoints.up('lg')]: {
      paddingLeft: '27px',
    },
  },
  thanks__box_wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '14px',
  },
  thanks__box_void: {
    maxWidth: '5px',
    width: '100%',
    height: '5px',
    background: theme.palette.primary.black,
    opacity: '0.5',
    borderRadius: '50%',
    marginRight: '14px',
  },
  thanks__box_description: {
    ...theme.typography.thanks_spun,
    color: theme.palette.primary.black,
  },
  thanks__faq: {
    ...theme.typography.thanks_spun,
    color: theme.palette.primary.black,
    fontWeight: 700,
  },
  thanks__rules: {
    ...theme.typography.thanks_spun,
    color: theme.palette.primary.black,
    marginBottom: '24px',
    '& span': {
      fontWeight: 700,
    },
  },
  thanks__links: {
    ...theme.typography.a,
    color: theme.palette.primary.green,
    textDecoration: 'underline',
    marginBottom: '14px',
    display: 'block',
  },
  thanks__info: {
    ...theme.typography.thanks__info,
    color: theme.palette.primary.black,
    opacity: '0.5',
    marginTop: '15px',
    '& a': {
      color: theme.palette.primary.green,
    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '64px',
    },
  },
  thanks__product_wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  thanks__product_logo: {
    maxWidth: '70px',
    width: '100%',
    height: '70px',
    marginRight: '15px',
  },
  thanks__product: {
    ...theme.typography.h3,
  },
  thanks__address: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '50px',
  },
  thanks__address_wrapper: {
    width: '300px',
    margin: '0 auto',
    marginBottom: '10px',
    border: `1px dashed ${theme.palette.primary.black}`,
    borderRadius: '8px',
    padding: '17px',
    display: 'flex',
    flexDirection: 'column',
    transitionDuration: '0.5s',
    '&:hover': {
      border: `1px solid ${theme.palette.primary.green}`,
      transitionDuration: '0.5s',
      '& .active_hover': {
        background: 'url(img/mini_logo_thanks.png) no-repeat',
      },
    },

    [theme.breakpoints.up('sm')]: {
      width: '49%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '33%',
    },
  },
  thanks__address_continer: {
    display: 'flex',
  },
  thanks__address_img: {
    maxWidth: '30px',
    width: '100%',
    marginRight: '15px',
    background: 'url(img/ellipse_group.png) no-repeat',
  },
  thanks__address_list: {
    display: 'flex',
    flexDirection: 'column',
  },
  thanks__address_text: {
    ...theme.typography.thanks__address,
    color: theme.palette.primary.black,
  },
  thanks__address_box: {
    display: 'flex',
    alignItems: 'center',
    margin: '4px 0',
  },
  thanks__address_metro_wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '15px',
  },
  thanks__address_metro_img: {
    maxWidth: '20px',
    width: '100%',
    height: '20px',
    marginRight: '5px',
    '& img': {
      width: '100%',
    },
  },
  thanks__address_metro: {
    ...theme.typography.thanks__address,
    color: theme.palette.primary.black,
  },
  thanks__address_phone: {
    ...theme.typography.thanks__address,
    color: theme.palette.primary.black,
  },
  thanks__working_hours: {
    ...theme.typography.thanks__address,
    color: theme.palette.primary.black,
    margin: '4px 0',
  },
  thanks__address_link: {
    ...theme.typography.thanks__address,
    color: theme.palette.primary.green,
  },
  thanks__address_btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
    '& button': {
      width: '124px',
      padding: '0',
      background: 'inherit',
      borderRadius: 'inherit',
      borderBottom: `1px solid ${theme.palette.primary.black}`,
      ...theme.typography.thanks__btn,
      color: theme.palette.primary.black,
      opacity: '0.5',
    },
  },
  thanks__map: {
    marginTop: '40px',
    '& img': {
      width: '100%',
    },
  },
}));

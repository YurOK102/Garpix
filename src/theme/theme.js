/* eslint-disable import/prefer-default-export */
import { createTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import GeometriaRegular from '../assets/fonts/Geometria-Regular.woff2';
import GeometriaMedium from '../assets/fonts/Geometria-Medium.woff2';

const geometriaRegular = {
  fontFamily: 'Geometria',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Geometria Regular'),
    local('Geometria-Regular'),
    url(${GeometriaRegular}) format('woff2')
  `,
};
const geometriaMedium = {
  fontFamily: 'Geometria',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: `
    local('Geometria Medium'),
    local('Geometria-Medium'),
    url(${GeometriaMedium}) format('woff2')
  `,
};

const breakpoints = createBreakpoints({
  values: {
    xs: 384,
    sm: 500,
    md: 760,
    lg: 1024,
    xl: 1170,
  },
});

const palette = {
  primary: {
    main: '#848484',
    white: '#ffffff',
    black: '#000000',
    green: '#00D36D',
    grey: '#E5E5E5',
    another_grey: '#7E7E7E',
  },
  secondary: {
    main: '#D9D9D9',
  },
};

const typography = {
  p: {
    fontFamily: 'Geometria',
    fontSize: '14px',
    lineHeight: '18px',

    [breakpoints.up('lg')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  a: {
    fontFamily: 'Geometria',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 400,

    [breakpoints.up('xl')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  p_sities: {
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 400,

    [breakpoints.up('xl')]: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  header_btn: {
    fontFamily: 'Geometria',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 400,

    [breakpoints.up('xl')]: {
      fontSize: '14px',
      lineHeight: '24px',
    },
  },
  h1: {
    fontFamily: 'Geometria',
    fontSize: '30px',
    lineHeight: '34px',
    fontWeight: 500,

    [breakpoints.up('md')]: {
      fontSize: '48px',
      lineHeight: '52px',
    },
  },
  h2: {
    fontFamily: 'Geometria',
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 500,

    [breakpoints.up('sm')]: {
      fontSize: '26px',
      lineHeight: '30px',
    },
    [breakpoints.up('lg')]: {
      fontSize: '32px',
      lineHeight: '40px',
    },
  },
  h3: {
    fontFamily: 'Geometria',
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: 500,
  },
  footer_p: {
    fontFamily: 'Geometria',
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 400,
  },
  span_sale: {
    fontFamily: 'Geometria',
    fontSize: '24px',
    lineHeight: '24px',
    fontWeight: 500,
  },
  span_subtitle: {
    fontFamily: 'Geometria',
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: 400,
  },
  span_name: {
    fontFamily: 'Geometria',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 500,
  },
  btn: {
    fontFamily: 'Geometria',
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 400,
  },
  offers_name: {
    fontFamily: 'Geometria',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
  },
  offers_discription: {
    fontFamily: 'Geometria',
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 400,
  },
  advantage_text: {
    fontFamily: 'Geometria',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 500,

    [breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
  text_breadcrumb: {
    fontFamily: 'Geometria',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,

    [breakpoints.up('lg')]: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  thanks_subtitle: {
    fontFamily: 'Geometria',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 500,

    [breakpoints.up('lg')]: {
      fontSize: '20px',
      lineHeight: '36px',
    },
  },
  thanks_spun: {
    fontFamily: 'Geometria',
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 400,

    [breakpoints.up('lg')]: {
      fontSize: '18px',
      lineHeight: '27px',
    },
  },
  thanks__info: {
    fontFamily: 'Geometria',
    fontSize: '10px',
    lineHeight: '16px',
    fontWeight: 400,

    [breakpoints.up('lg')]: {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
  thanks__address: {
    fontFamily: 'Geometria',
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 400,

    [breakpoints.up('lg')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  thanks__btn: {
    fontFamily: 'Geometria',
    fontSize: '10px',
    lineHeight: '14px',
    fontWeight: 400,

    [breakpoints.up('lg')]: {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
};

export const theme = createTheme({
  palette,
  breakpoints,
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [geometriaRegular, geometriaMedium],
        'h1, h2, h3, h4, h5, h6, p': {
          margin: 0,
        },
        ul: {
          padding: 0,
          margin: 0,
        },
        li: {
          listStyle: 'none',
        },
        a: {
          textDecoration: 'none',
          color: '#000000',
          padding: 0,
          margin: 0,
        },
        button: {
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          borderRadius: '8px',
        },
        body: {
          background: '#E5E5E5',
        },
      },
    },

    MuiFormLabel: {
      root: {
        fontFamily: 'Gilroy',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '22px',
      },
    },

    MuiOutlinedInput: {
      root: {
        borderRadius: '10px',
      },
      multiline: {
        padding: '20px',
      },
    },

    MuiInputBase: {
      root: {
        fontFamily: 'Gilroy',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '22px',
      },
    },

    // MuiContainer: {
    //   root: {
    //     [breakpoints.up('xs')]: {
    //       padding: '0 12px',
    //     },
    //     [breakpoints.up('sm')]: {
    //       padding: '0 24px',
    //     },
    //     [breakpoints.up('md')]: {
    //       padding: '0 32px',
    //     },
    //     [breakpoints.up('xl')]: {
    //       padding: '0 172px',
    //     },
    //   },
    // },
    // MuiButton: {
    //   contained: {
    //     boxShadow: 'none',
    //     '&:disabled': {
    //       color: palette.primary.gray_500,
    //       backgroundColor: palette.primary.gray_300,
    //     },
    //     '&:hover, &:focus': {
    //       boxShadow: 'none',
    //     },
    //   },
    // },
  },
});

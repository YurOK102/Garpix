import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.typography.btn,
    borderRadius: '8px',
    background: theme.palette.primary.green,
    color: theme.palette.primary.white,
    padding: '10px 20px',

    [theme.breakpoints.up('xl')]: {
      // display: 'none',
    },
  },
}));

function MyButton(props) {
  const classes = useStyles();

  return <button className={classes.button}>{props.children}</button>;
}

export default MyButton;

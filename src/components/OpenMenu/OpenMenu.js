import React from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menu: {
    display: 'block',
    '& button': {
      padding: 0,
    },

    [theme.breakpoints.up('lg')]: {
      // display: 'none',
    },
  },
}));

const options = [
  { name: 'Купоны и сертификаты' },
  { name: 'Впечатления' },
  { name: 'Авиабилеты' },
  { name: 'Ж/д билеты' },
  { name: 'Отели' },
  { name: 'Каршеринг' },
  { name: 'Театры' },
  { name: 'Страхование' },
  { name: 'Как подключиться' },
  { name: 'Партнеры' },
];

function OpenMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menu}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '212px',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            // selected={option === 'Pyxis'}
            onClick={handleClose}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default OpenMenu;

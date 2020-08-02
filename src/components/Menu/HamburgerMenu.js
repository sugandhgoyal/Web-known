import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  img: {
    height: '60px',
    objectFit: 'cover',
    padding: '0 0 0 30%',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuHeader: {
    display: 'flex',
    padding: '0 10px',
    alignItems: 'center',
  },
  sidenav: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    background: '#36415A',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    fontSize: '25px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  link: {
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    fontSize: '25px',
    color: 'white',
    display: 'block',
    transition: '0.3s',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    '& hover': {
      color: '#f1f1f1',
    },
  },
  closebtn: {
    position: 'absolute',
    top: '0',
    right: '25px',
    fontSize: '36px',
    marginLeft: '50px',
  }
}));

export const HamburgerMenu = () => {
  const classes = useStyles();

  const [toggleMenu, setToggleMenu] = useState(false);

  const openNav = () => {
    setToggleMenu(true);
  }

  const closeNav = () => {
    setToggleMenu(false);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.menuHeader}>
        <span className={classes.menuButton} onClick={openNav}>&#9776;</span>
        <img src={process.env.PUBLIC_URL + '/assets/logo4.jpg'} className={classes.img} />
      </div>
      {toggleMenu === true &&
        <div id="mySidenav" className={classes.sidenav}>
          <div className={classes.closebtn} onClick={closeNav}>&times;</div>
          <a href="#" className={classes.link}>About</a>
          <a href="#" className={classes.link}>Services</a>
          <a href="#" className={classes.link}>Clients</a>
          <a href="#" className={classes.link}>Contact</a>
        </div>
      }
    </div>
  )
}

export default HamburgerMenu;

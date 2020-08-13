import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    boxShadow: "0 1px 2px 0 rgba(148,150,159,.3)",
    padding: '0',
    [theme.breakpoints.up('600')]: {
      display: 'none',
    },
  },
  img: {
    height: '50px',
    objectFit: 'cover',
  },
  header: {
    fontSize: '19px',
    fontWeight: '500',
    fontFamily: `'Work Sans', sans-serif`,
    letterSpacing: '-0.5px',
    wordSpacing: '-2.9px',
    textAlign: 'center',
    marginLeft: '11%',
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
    zIndex: '2',
    top: '0',
    left: '0',
    background: '#36415A',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
    textAlign: 'left',
    '& a': {
      fontSize: '17px',
    }
  },
  menuButton: {
    fontSize: '28px',
  },
  link: {
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    fontSize: '25px',
    color: 'white',
    display: 'block',
    transition: '0.3s',
    '& hover': {
      color: '#f1f1f1',
    },
  },
  closebtn: {
    position: 'absolute',
    top: '4px',
    right: '21px',
    color: 'white',
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
        <div className={classes.header}>Web Known</div>
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

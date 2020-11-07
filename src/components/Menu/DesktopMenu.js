import React, { Component, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: '12',
    background: 'transparent',
    [theme.breakpoints.down('600')]: {
      display: 'none',
    },
  },
  img: {
    height: '45px',
    objectFit: 'cover',
    padding: '8px 0 0 130px',
  },
  linkslist: {
    listStyleType: 'none',
    display: 'flex',
    flexGrow: 2
  },
  gridItem: {
    padding: '10px 0',
  },
  link: {
    fontSize: '16px',
    color: '#36415a',
    padding: '0 20px',
    fontFamily: `'Work Sans', sans-serif`,
    fontWeight: '500',
    lineHeight: '30px',
  },
  button: {
    marginTop: '9px'
  }
}));

export const Menu = () => {
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = () => {
    let getHeader = window.document.getElementsByClassName('header');
    if (window.pageYOffset > 0) {
      if (getHeader && getHeader[0])
        getHeader[0].style.background = 'white';
    }
    else if (window.pageYOffset === 0)
      getHeader[0].style.background = 'transparent';
  }

  return (
    <Grid container className={`${classes.container} header`}>
      <Grid item lg={5} className={classes.gridItem}>
        <img src={process.env.PUBLIC_URL + '/assets/logo2.png'} className={classes.img} />
      </Grid>
      <Grid item lg={5} className={classes.gridItem}>
        <ul className={classes.linkslist}>
          <Link className={classes.link} href="/">
            Home</Link>
          <Link className={classes.link} href="#about">
            About</Link>
          <Link className={classes.link} href="#services">
            Services</Link>
          <Link className={classes.link} href="#blog">
            Blog</Link>
          <Link className={classes.link} href="#contact">
            Contact Us</Link>
        </ul>
      </Grid >
      {/* <Grid item lg={2} className={classes.gridItem}><Button className={classes.button} variant="outlined">Let's chat</Button></Grid> */}
    </Grid>
  )
}

export default Menu;




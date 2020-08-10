import React, { Component } from 'react';
import { Chip, Avatar, Container, Grid, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactJsTyping from 'reactjs-typing-effect';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '1% 8%',
    [theme.breakpoints.down('600')]: {
      padding: '15px',
    },
  },
  container: {
    '& p': {
      lineHeight: '27px',
      color: '#36415A',
    },
    [theme.breakpoints.down('600')]: {
      padding: '0',
      '& p': {
        lineHeight: '27px',
        color: '#36415A',
        minHeight: '82px',
      }
    },
  },
  leftHeading: {
    color: '#36415a',
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '55px',
    margin: '20px 0',
    [theme.breakpoints.down('600')]: {
      fontSize: '26px',
      lineHeight: '36px',
    },
  },
  image: {
    objectFit: 'contain',
    width: '100%',
    [theme.breakpoints.down('600')]: {
      display: 'none'
    }
  },
  button: {
    background: `${theme.palette.primary.main}`,
    display: 'inline-block',
    padding: '18px 29px',
    borderRadius: '5px',
    fontWeight: '600',
    fontFamily: `'Work Sans', sans-serif`,
    [theme.breakpoints.down('600')]: {
      fontSize: '14px',
      margin: '20px 0 0 0',
    },
    '& a': {
      color: 'white !important',
      fontSize: '16px',
    }
  },
  animation: {
    color: `${theme.palette.primary.main}`,
    display: 'inline',
    fontWeight: '600',
  },
}));

export const IntroPage = () => {
  const classes = useStyles();

  const listOfString = ['customers', 'companies', 'organizations', 'brands', 'people'];

  return (
    <div>
      <Grid container className={classes.wrapper}>
        <Grid item lg={6} xs={12}>
          <Chip avatar={<Avatar variant="rounded" className={classes.avatar}>Email</Avatar>} label="email@webknown.com" />
          <Container className={classes.container}>
            <h1 className={classes.leftHeading}>You want to change the world. We want to help you do it.</h1>
            <p>We help <div className={classes.animation} ><ReactJsTyping StringList={listOfString} speed={500} /></div>build their brand, improve their marketing and scale their impact.</p>
            <Button className={classes.button}><Link href="#services">
              Know More</Link></Button>
          </Container>
        </Grid>
        <Grid item lg={6} xs={12}>
          <img className={classes.image} src={process.env.PUBLIC_URL + '/assets/freelance.jpg'} />
        </Grid>
      </Grid>
    </div>
  )
}

export default IntroPage;

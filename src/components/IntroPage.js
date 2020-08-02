import React, { Component } from 'react';
import { Chip, Avatar, Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    color: 'white',
    [theme.breakpoints.down('600')]: {
      fontSize: '14px',
      margin: '30px 0',
    },
  }
}));

export const IntroPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.wrapper} id="#home">
        <Grid item lg={6} xs={12}>
          <Chip avatar={<Avatar variant="rounded" className={classes.avatar}>Email</Avatar>} label="email@webknown.com" />
          <Container className={classes.container}>
            <h1 className={classes.leftHeading}>How Much Traffic Should You Actually Be Getting!</h1>
            <p>Gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole that covered the whole</p>
            <Button className={classes.button}>Contact Today</Button>
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

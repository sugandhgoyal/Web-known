import React, { Component, useEffect, useState } from 'react';
import { Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RoundedCheckbox from './Fields/RoundedCheckbox';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '90px 160px',
    textAlign: 'center',
    maxWidth: '100%',
    background: '#fafafa',
    [theme.breakpoints.down('600')]: {
      padding: '30px 15px !important',
    }
  },
  dataContainer: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  img1: {
    width: '500px',
    objectFit: 'contain',
    [theme.breakpoints.down('600')]: {
      width: '300px',
    },
  },
  img2: {
    width: '500px',
    objectFit: 'contain',
    [theme.breakpoints.down('600')]: {
      display: 'none'
    },
  },
  rightPart: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    marginTop: '0',
    textAlign: 'left',
    fontSize: '30px',
    fontWeight: '700',
    textTransform: 'capitalize',
    color: '#36415A',
    fontFamily: `'Work Sans', sans-serif`,
    [theme.breakpoints.down('600')]: {
      fontSize: '26px',
    }
  },
  subtitle: {
    textAlign: 'left',
    fontSize: '16px',
    wordSpacing: '3px',
    lineHeight: '23px',
    fontWeight: '400',
    color: '#36415A',
    fontFamily: `'Work Sans', sans-serif`,
    marginTop: '0',
  },
}));

export const AboutUs = () => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 600)
      setIsMobile(true);
    else
      setIsMobile(false);
  }, []);

  const animationClass = isMobile ? '' : 'slide-in from-right';

  return (
    <Container id="about" className={classes.wrapper} maxWidth="lg">
      <Grid container className={classes.dataContainer}>
        <Grid item lg={6} xs={12} className={`${classes.rightPart} ${animationClass}`}>
          <h1 className={classes.title}>The world needs people like you. And you need people like us.</h1>
          <p className={classes.subtitle}>We believe that any enterprising individual has the ability to change the world. But we also recognise that changing the world by yourself is hard. Really hard. That’s why we exist!</p>
          <h1 className={classes.title}>Let’s face it… <br /> We live in interesting times.</h1>
          <p className={classes.subtitle}>Whether we are experiencing it in real life, or through our media feeds – change and conflict have become an everyday part of life. It might feel like it’s all doom and gloom. But on the flip side, where once we might have waited for our leaders to save the day, people across the globe are stepping up to lead the change they want to see in the world.</p>
          <p className={classes.subtitle}>We equip those who want to make a difference, with the strategy, systems & support they need to make an even bigger difference.</p>
        </Grid>
        <Grid item lg={5} xs={12}>
          <img className={`${classes.img1} ${animationClass}`} src={`${process.env.PUBLIC_URL}/assets/progress2.png`} />
        </Grid>
      </Grid>
      {/* <Grid item lg={6} xs={12} className={`${classes.rightPart} ${leftAnimationClass}`}> */}
      {/* <div className={classes.demo}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <RoundedCheckbox />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Targeted adverting"
                                    secondary="Web-known stays ahead of the curve with digital marketing trends. Our success has us leading the pack amongst."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RoundedCheckbox />
                                </ListItemIcon>
                                <ListItemText
                                    primary="In-depth analytics"
                                    secondary="Web-known stays ahead of the curverese from digital marketing trends"
                                />
                            </ListItem>
                        </List>
                    </div> */}
      {/* </Grid> */}
    </Container>
  )
}

export default AboutUs;

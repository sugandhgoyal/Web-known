import React, { Component, useEffect } from 'react';
import { Chip, Avatar, Container, Grid, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReactJsTyping from 'reactjs-typing-effect';
import TransitionsModal from './Modal/VideoModal';
// import { Widget, addResponseMessage } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '0 9% 1% 9%',
    [theme.breakpoints.down('600')]: {
      padding: '25px 15px',
    },
  },
  headerImage: {
    objectFit: 'cover',
    width: '100%',
    zIndex: '-1',
    marginBottom: '70px',
    [theme.breakpoints.down('600')]: {
      display: 'none'
    },
  },
  container: {
    '& p': {
      lineHeight: '27px',
      color: '#36415A',
      fontSize: '20px'
    },
    [theme.breakpoints.down('600')]: {
      padding: '0',
      '& p': {
        lineHeight: '27px',
        color: '#36415A',
        minHeight: '82px',
        fontSize: '17px',
      }
    },
  },
  leftHeading: {
    color: '#36415a',
    fontSize: '56px',
    fontWeight: '700',
    lineHeight: '55px',
    margin: '20px 0',
    [theme.breakpoints.down('600')]: {
      fontSize: '33px',
      lineHeight: '36px',
      margin: '15px 0',
    },
  },
  image: {
    objectFit: 'contain',
    width: '100%',
    height: '500px',
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
      margin: '0',
      padding: '13px 20px',
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
  toolbar: {
    display: 'flex',
    width: '65%',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('600')]: {
      width: '90%',
    },
  },
  playIcon: {
    height: '27px',
    width: '27px',
  },
  video: {
    width: '100%',
    height: '100%'
  },
  playIconContainer: {
    display: 'flex',
    height: '44px',
    width: '44px',
    textAlign: 'center',
    borderRadius: '50%',
    border: '1px solid #36415a',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    '& :hover': {
      transform: 'scale(1.5)',
      transition: 'all .3s',
      '& img': {
        background: 'blue'
      }
    }
  }
}));

export const IntroPage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const listOfString = ['customers', 'companies', 'organizations', 'brands', 'people'];

  // useEffect(() => {
  //   addResponseMessage('Welcome to this awesome chat!');
  //   addResponseMessage('Hello!');
  //   addResponseMessage('What can I help you with?!');
  // }, []);

  // const handleNewUserMessage = (newMessage) => {
  //   console.log(`New message incoming! ${newMessage}`);
  //   // Now send the message throught the backend API
  // };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container className={classes.wrapper}>
        <img className={classes.headerImage} src={`${process.env.PUBLIC_URL}/assets/header.jpeg`} />
        <Grid item lg={6} xs={12}>
          {/* <Widget
            handleNewUserMessage={handleNewUserMessage}
          /> */}
          <Chip
            avatar={<Avatar variant="rounded"
              className={classes.avatar}>Email</Avatar>}
            label="info@webknown.co"
            onClick={() => { window.location.href = "mailto:info@webknown.co?subject=Subject"; }}
          />
          <Container className={classes.container}>
            <h1 className={classes.leftHeading}>You want to change the world. We want to help you do it.</h1>
            <p>We help <div className={classes.animation} >
              <ReactJsTyping speed={1000} StringList={listOfString} speed={500} />
            </div>build their brand, <br />improve their marketing and scale their impact.</p>
            <div className={classes.toolbar}>
              <Button className={classes.button}><Link href="#services">
                Know More</Link></Button>
              {/* <span className={classes.playIconContainer} onClick={() => handleModalOpen()}>
                <img className={classes.playIcon} src={`${process.env.PUBLIC_URL}/assets/play_arrow.svg`} />
              </span>
              <div>Intro Video</div> */}
            </div>
          </Container>
          <TransitionsModal
            open={open}
            handleClose={handleModalClose} />
        </Grid>
        <Grid item lg={6} xs={12}>
          <video className={classes.video} autoPlay loop muted>
            <source src={`${process.env.PUBLIC_URL}/assets/home_animation.mp4`} type='video/mp4' />
            <source src={`${process.env.PUBLIC_URL}/assets/home_animation.mp4`} type="video/ogg" />
          </video>
        </Grid>
      </Grid>
    </div>
  )
}

export default IntroPage;

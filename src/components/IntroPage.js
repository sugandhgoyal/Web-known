import React, { Component } from 'react';
import { Chip, Avatar, Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
      padding: '1% 8%'
    },
    leftHeading: {
      color: '#36415a',
      fontSize: '48px',
      fontWeight: '700',
      lineHeight: '55px',
      margin: '20px 0',
    },
    image: {
      objectFit: 'contain',
      width: '100%'
    },
    button: {
      background: `${theme.palette.primary.main}`,
      display: 'inline-block',
      padding: '18px 29px',
      borderRadius: '5px',
      color: 'white',
    }
  }));
  
export const IntroPage = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.wrapper} id="#home">
                <Grid item lg={6}>
                    <Chip avatar={<Avatar variant="rounded" className={classes.avatar}>Email</Avatar>} label="email@webknown.com" />
                    <Container>
                        <h1 className={classes.leftHeading}>How Much Traffic Should You Actually Be Getting!</h1>
                        <p>Gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole that covered the whole</p>
                        <Button className={classes.button}>Contact Today</Button>
                    </Container>
                </Grid>
                <Grid item lg={6}>
                    <img className={classes.image} src={process.env.PUBLIC_URL + '/assets/freelance.jpg'} />
                </Grid>
            </Grid>
        </div>
    )
}

export default IntroPage;

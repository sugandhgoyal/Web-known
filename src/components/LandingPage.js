import React, { Component } from 'react'
import Menu from './Menu';
import { Chip, Avatar, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    leftHeading: {
        color: '#36415a',
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '55px',
        margin: '20px 0',
    }
}));


export const LandingPage = () => {
    const classes = useStyles();

    return (
        <>
            <Menu />
            <Grid container>
                <Grid item lg={6}>
                    <Chip avatar={<Avatar variant="rounded" className={classes.avatar}>Email</Avatar>} label="email@webknown.com" />
                    <Container>
                        <h1 className={classes.leftHeading}>How Much Traffic Should You Actually Be Getting!</h1>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}

export default LandingPage;

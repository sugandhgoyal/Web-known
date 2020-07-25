import React, { Component } from 'react'
import { Container, Typography, Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '50px 0',
        textAlign: 'center',
        maxWidth: '100%',
    },
    heading: {
        fontSize: '34px !important',
        lineHeight: '40px !important',
        fontWeight: '700'
    },
    imgContainer: {
        minHeight: '80px',
        display: 'flex',
        justifyContent: 'center',
    },
    img: {
        width: '66px',
        objectFit: 'contain',
    },
    submit: {
        color: 'white',
        margin: '10px',
        padding: '15px 63px',
    },
    root: {
        margin: '20px',
        height: '300px',
        width: '250px',
        transform: 'translateY(0)',
        transition: 'all 0.3s'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: ' 20px',
        fontWeight: '500',
        lineHeight: '24px',
        color: '#36415A',
    },
    pos: {
        marginBottom: 12,
    },
    cardcontainer: {
        'justifyContent': 'space-evenly',
        'padding': '0 160px'
    }
}));

export const Services = () => {
    const classes = useStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <h2 className={classes.heading}>High-End Services For Digital Business</h2>
            <p>The same way I wouldn’t book in Rome without using certainly would run.</p>
            <Grid container className={classes.cardcontainer}>
                <Grid item lg={3} sm={6} xs={12}>
                    <Card className={classes.root} lg={3}>
                        <CardContent>
                            <Container className={classes.imgContainer}>
                                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/eye.png`} />
                            </Container>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Keyword & Market Research</Typography>
                            <Typography variant="h5" component="h2">
                                Lock in and no minimum terms. Cash out to your account anytime.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <Card className={classes.root} lg={3}>
                        <CardContent>
                            <Container className={classes.imgContainer}>
                                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/heart.png`} />
                            </Container>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                UX & Product Design</Typography>
                            <Typography variant="h5" component="h2">
                                Lock in and no minimum terms. Cash out to your account anytime.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <Card className={classes.root} lg={3}>
                        <CardContent>
                            <Container className={classes.imgContainer}>
                                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/dart.png`} />
                            </Container>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Digital Marketing</Typography>
                            <Typography variant="h5" component="div">Lock in and no minimum terms. Cash out to your account anytime.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xs={12}>
                    <Card className={classes.root} lg={3}>
                        <CardContent>
                            <Container className={classes.imgContainer}>
                                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/chess.png`} />
                            </Container>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Social Media Strategy</Typography>
                            <Typography variant="h5" component="h2">
                                Lock in and no minimum terms. Cash out to your account anytime.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Services;

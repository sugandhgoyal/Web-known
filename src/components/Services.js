import React, { Component } from 'react';
import { Container, Typography, Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '90px 0',
        textAlign: 'center',
        maxWidth: '100%',
        background: '#fafafa',
        [theme.breakpoints.down('600')]: {
            padding: '0 15px 50px 15px;',
        }
    },
    subHeading: {
        lineHeight: '27px',
        color: '#36415A',
        fontSize: '16px',
        width: '40%',
        margin: '25px auto',
        [theme.breakpoints.down('600')]: {
            width: '100%',
            margin: '15px auto',
            fontSize: '15px',
            lineHeight: '23px',
        },
    },
    heading: {
        fontSize: '34px !important',
        lineHeight: '40px !important',
        fontWeight: '700',
        width: '40%',
        margin: '0 auto',
        color: theme.palette.text.primary,
        [theme.breakpoints.down('600')]: {
            fontSize: '26px !important',
            margin: '0',
            width: '100%',
            lineHeight: '28px !important',
        }
    },
    imgContainer: {
        minHeight: '80px',
        display: 'flex',
        justifyContent: 'center',
    },
    img: {
        width: '76px',
        objectFit: 'contain',
        [theme.breakpoints.down('600')]: {
            width: '40px',
        },
    },
    root: {
        // margin: '20px',
        height: '300px',
        width: '250px',
        transform: 'translateY(0)',
        transition: 'all 0.3s',
        [theme.breakpoints.down('600')]: {
            width: '96% !important',
            margin: '0px 5% 8% 0px',
            transform: 'none',
            transition: 'none',
            height: '250px',
        },
    },
    title: {
        fontSize: ' 20px',
        fontWeight: '600',
        lineHeight: '24px',
        color: '#36415A',
        [theme.breakpoints.down('600')]: {
            fontSize: '14px !important',
            lineHeight: '17px !important',
        }
    },
    content: {
        fontSize: '16px',
        lineHeight: '27px',
        fontFamily: `'Work Sans', sans-serif`,
        fontWeight: '500',
        [theme.breakpoints.down('600')]: {
            fontSize: '12px',
            lineHeight: '18px',
        }
    },
    cardcontainer: {
        justifyContent: 'space-between',
        'padding': '0 160px',
        [theme.breakpoints.down('600')]: {
            'padding': '0',
        }
    },
    contentContainer: {
        textAlign: 'left',
    },
}));

export const Services = () => {
    const classes = useStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg" id="services">
            <h2 className={classes.heading}>High-End Services For You</h2>
            <p className={classes.subHeading} >Wherever you are on your journey, we can help you get to the next stage with speed and ease.</p>
            <Grid container className={classes.cardcontainer}>
                <Grid item lg={3} sm={6} xs={6}>
                    <Card className={`${classes.root} fade-in`} lg={3}>
                        <Container className={classes.imgContainer}>
                            <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/eye.png`} />
                        </Container>
                        <CardContent className={classes.contentContainer}>
                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Website Design/Development</Typography>
                            <Typography className={classes.content} color="textSecondary" component="h2">
                                Lock in and no minimum terms. Cash out to your account anytime.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xs={6}>
                    <Card className={`${classes.root} fade-in`} lg={3}>
                        <Container className={classes.imgContainer}>
                            <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/heart.png`} />
                        </Container>
                        <CardContent className={classes.contentContainer}>
                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Social Media Management</Typography>
                            <Typography className={classes.content} color="textSecondary" component="h2">
                                Lock in and no minimum terms. Cash out to your account anytime.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xs={6}>
                    <Card className={`${classes.root} fade-in`} lg={3}>
                        <Container className={classes.imgContainer}>
                            <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/dart.png`} />
                        </Container>
                        <CardContent className={classes.contentContainer}>
                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Lead Generation</Typography>
                            <Typography className={classes.content} color="textSecondary" component="div">Lock in and no minimum terms. Cash out to your account anytime.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} sm={6} xs={6}>
                    <Card className={`${classes.root} fade-in`} lg={3}>
                        <CardContent className={classes.contentContainer}>
                            <Container className={classes.imgContainer}>
                                <img className={classes.img} src={`${process.env.PUBLIC_URL}/assets/chess.png`} />
                            </Container>
                            <Typography className={classes.title} color="textPrimary" gutterBottom>
                                Social Media Strategy</Typography>
                            <Typography className={classes.content} color="textSecondary" component="h2">
                                Lock in and no minimum terms. Cash out to your account anytime.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Services;

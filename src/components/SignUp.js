import React, { Component } from 'react'
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        background: `url(${process.env.PUBLIC_URL}/assets/background.jpg)`,
        padding: '100px 0',
        margin: '90px 0',
        textAlign: 'center',
        maxWidth: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        [theme.breakpoints.down('600')]: {
            margin: '50px 0',
            padding: '50px 15px',
            background: theme.palette.primary.main
        }
    },
    heading: {
        color: '#ffffff',
        fontSize: '42px !important',
        lineHeight: '40px !important',
        fontWeight: '700',
        width: '50%',
        margin: '30px auto',
        fontFamily: `'Work Sans', sans-serif`,
        [theme.breakpoints.down('600')]: {
            fontSize: '26px !important',
            margin: '0 auto',
            width: '100%',
        }
    },
    textfield: {
        margin: '10px',
        background: 'white',
        borderRadius: '5px',
        border: '1px solid white',
        border: 'none',
        fontFamily: `'Work Sans', sans-serif`,
        '& input': {
            padding: '18.5px 17px',
        },
        '& label': {
            color: "#747474",
        },
        [theme.breakpoints.down('600')]: {
            width: '90%',
        }
    },
    submit: {
        color: 'white',
        margin: '10px',
        padding: '15px 59px',
        fontWeight: '600',
        fontSize: '16px',
        fontFamily: `'Work Sans', sans-serif`,
        [theme.breakpoints.down('600')]: {
            width: '90%',
        }
    },
    label: {
        backgroundColor: "white"
    },
    circle: {
        top: '12%',
        left: '48%',
        position: 'absolute',
        animation: `8s $spin linear infinite`,
        zIndex: '1',
        [theme.breakpoints.down('600')]: {
            display: 'none'
        }
    },
    cross: {
        right: '5%',
        position: 'absolute',
        animation: `8s $spin linear infinite`,
        zIndex: '1',
        [theme.breakpoints.down('600')]: {
            display: 'none'
        }
    },
    triangle: {
        top: '12%',
        left: '9%',
        position: 'absolute',
        animation: `8s $spin linear infinite`,
        zIndex: '1',
        [theme.breakpoints.down('600')]: {
            display: 'none'
        }
    },
    '@keyframes spin': {
        "100%":
        {
            transform: 'rotate(360deg)',
        }
    }
}));

export const SignUp = () => {
    const classes = useStyles();

    return (
        <Container className={`${classes.wrapper}`} maxWidth="lg">
            <img className={classes.circle} src={`${process.env.PUBLIC_URL}/assets/circle.png`} />
            <h2 className={`${classes.heading} fade-in`}>Don’t Forget To Check Your Website Score. It’s Free!</h2>
            <TextField
                InputLabelProps={{
                    classes: {
                        root: classes.label
                    }
                }}
                key="Name"
                className={`${classes.textfield} fade-in`}
                id="outlined-basic"
                label="Name"
                variant="outlined" />
            <TextField
                InputLabelProps={{
                    classes: {
                        root: classes.label
                    }
                }}
                key="Email"
                className={`${classes.textfield} fade-in`}
                id="outlined-basic"
                label="Email"
                variant="outlined" />
            <Button size="large" className={`${classes.submit} fade-in`} variant="contained" color="secondary" >Submit</Button>
            <img className={classes.triangle} src={`${process.env.PUBLIC_URL}/assets/triangle.png`} />
            <img className={classes.cross} src={`${process.env.PUBLIC_URL}/assets/cross.png`} />
        </Container>
    )
}

export default SignUp;

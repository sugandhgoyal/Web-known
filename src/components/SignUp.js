import React, { Component } from 'react'
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        background: `${theme.palette.primary.main}`,
        padding: '120px 0',
        margin: '90px 0',
        textAlign: 'center',
        maxWidth: '100%',
        [theme.breakpoints.down('sm')]: {
            margin: '50px 0',
            padding: '50px 15px',
        }
    },
    heading: {
        color: '#ffffff',
        fontSize: '34px !important',
        lineHeight: '40px !important',
        fontWeight: '700',
        [theme.breakpoints.down('sm')]: {
            fontSize: '26px !important',
            margin: '0'
        }
    },
    textfield: {
        margin: '10px',
        background: 'white',
        borderRadius: '5px',
        border: '1px solid white',
        border: 'none',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    submit: {
        color: 'white',
        margin: '10px',
        padding: '15px 63px',
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    }
}));

export const SignUp = () => {
    const classes = useStyles();

    return (
        <Container className={`${classes.wrapper}`} maxWidth="lg">
            <h2 className={`${classes.heading} fade-in`}>Don’t Forget To Check Your Website Score. It’s Free!</h2>
            <TextField className={`${classes.textfield} fade-in`} id="outlined-basic" label="Name" variant="outlined" />
            <TextField className={`${classes.textfield} fade-in`} id="outlined-basic" label="Email" variant="outlined" />
            <Button size="large" className={`${classes.submit} fade-in`} variant="contained" color="secondary" >Submit</Button>
        </Container>
    )
}

export default SignUp;

import React, { Component } from 'react'
import { Container, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        background: '#047dff',
        padding: '120px 0',
        margin: '90px 0',
        textAlign: 'center',
        maxWidth: '100%',
    },
    heading: {
        color: '#ffffff',
        fontSize: '34px !important',
        lineHeight: '40px !important',
        fontWeight: '700'
    },
    textfield: {
        margin: '10px',
        background: 'white',
        borderRadius: '5px',
        border: '1px solid white',
        border: 'none'
    },
    submit: {
        color: 'white',
        margin: '10px',
        padding: '15px 63px',
    }
}));

export const SignUp = () => {
    const classes = useStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <h2 className={classes.heading}>Don’t Forget To Check Your Website Score. It’s Free!</h2>
            <TextField className={classes.textfield} id="outlined-basic" label="Name" variant="outlined" />
            <TextField className={classes.textfield} id="outlined-basic" label="Email" variant="outlined" />
            <Button size="large" className={classes.submit} variant="contained" color="secondary" >Submit</Button>
        </Container>
    )
}

export default SignUp;

import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        position: 'fixed',
        left: '0',
        top: '0',
        zIndex: '12',
        background: 'white',
        [theme.breakpoints.down('600')]: {
            display: 'none',
        },
    },
    img: {
        height: '50px',
        objectFit: 'cover',
        padding: '8px 0 0 80px',
    },
    linkslist: {
        listStyleType: 'none',
        display: 'flex',
        flexGrow: 2
    },
    gridItem: {
        padding: '15px 0',
    },
    link: {
        fontSize: '16px',
        color: '#36415a',
        padding: '0 40px'
    },
    button: {
        marginTop: '9px'
    }
}));

export const Menu = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item lg={4} className={classes.gridItem}>
                <img src={process.env.PUBLIC_URL + '/assets/logo2.png'} className={classes.img} />
            </Grid>
            <Grid item lg={6} className={classes.gridItem}>
                <ul className={classes.linkslist}>
                    <Link className={classes.link} href="/#home">
                        Home</Link>
                    <Link className={classes.link} href="#services">
                        Services</Link>
                    <Link className={classes.link} href="#blog">
                        Blog</Link>
                    <Link className={classes.link} href="#contact">
                        Contact Us</Link>
                </ul>
            </Grid >
            <Grid item lg={2} className={classes.gridItem}><Button className={classes.button} variant="outlined">Let's chat</Button></Grid>
        </Grid>
    )
}

export default Menu;




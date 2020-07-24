import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    img: {
        width: '200px',
        height: '70px',
        objectFit: 'cover'
    },
    linkslist: {
        listStyleType: 'none',
        display: 'flex',
        flexGrow: 2
    },
    gridItem: {
        padding: '20px 0',
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
        <Grid container >
            <Grid item lg={3} className={classes.gridItem}>
                <img src={process.env.PUBLIC_URL + '/assets/logo.png'} className={classes.img} />
            </Grid>
            <Grid item lg={6} className={classes.gridItem}>
                <ul className={classes.linkslist}>
                    <Link className={classes.link} href="/" onClick={(e) => e.preventDefault()}>
                        Link</Link>
                    <Link className={classes.link} href="/" onClick={(e) => e.preventDefault()}>
                        Services</Link>
                    <Link className={classes.link} href="/" onClick={(e) => e.preventDefault()}>
                        Blog</Link>
                    <Link className={classes.link} href="/" onClick={(e) => e.preventDefault()}>
                        Contact Us</Link>
                </ul>
            </Grid >
            <Grid item lg={3} className={classes.gridItem}><Button className={classes.button} variant="outlined">Let's chat</Button></Grid>
        </Grid>
    )
}

export default Menu;




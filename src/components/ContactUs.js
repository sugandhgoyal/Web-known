import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, TextField, Container, Link, Button,
    List, ListItem, ListItemText,
    Typography,
    CardContent
} from '@material-ui/core';
import { HorizontalLine } from './LandingPage';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '0 160px',
        textAlign: 'center',
        maxWidth: '100%',
        background: `url(${process.env.PUBLIC_URL}/assets/footer_background.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('600')]: {
            padding: '50px 15px 0 15px',
            background: '#323f57'
        }
    },
    top: {
        color: 'white',
        display: 'flex',
        padding: '40px 0',
        justifyContent: 'space-between',
        [theme.breakpoints.down('600')]: {
            padding: '0 0 30px 0',
        }
    },
    title: {
        fontWeight: '400',
        fontSize: '30px',
        color: '#ffffff',
        margin: '0',
        width: '30%',
        textAlign: 'left',
        [theme.breakpoints.down('600')]: {
            fontSize: '22px',
            width: '70%',
        }
    },
    bottom: {
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '50px 0',
        [theme.breakpoints.down('600')]: {
            flexDirection: 'column',
            padding: '30px 0',
        }

    },
    bottomPart1: {
        display: 'flex',
        textAlign: 'left',
        justifyContent: 'space-between',
    },
    bottomPart2: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    bottomPart3: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    },
    icon: {
        display: 'inline-block',
        height: '50px',
        width: '50px',
        color: '#ffffff',
        background: '#404B62',
        textAlign: 'center',
        lineHeight: '64px',
        transition: 'all 0.3s',
        '&:hover': {
            background: `${theme.palette.secondary.main}`,
            color: '#ffffff',
            transition: 'all 0.3s',
        }
    },
    root: {
        background: `${theme.palette.secondary.main}`,
        height: '310px',
        width: '290px',
        [theme.breakpoints.down('600')]: {
            width: '100%',
        }
    },
    cardTitle: {
        color: 'white',
        marginBottom: '20px',
        fontSize: '30px',
        fontWeight: '700',
    },
    button: {
        padding: '15px 10px'
    },
    input: {
        color: 'white',
        '::placeholderr': {
            color: 'white',
        }
    },
    list: {
        [theme.breakpoints.down('600')]: {
            padding: '0',
            margin: '0 0 30px 0',
            '& a': {
                padding: '0 10px',
            }
        }
    }
}));

export const ContactUs = () => {
    const classes = useStyles();

    const ListItemLink = (props) => {
        return <ListItem button component="a" {...props} />;
    }

    return (
        <Container className={classes.wrapper} maxWidth="lg" id="contact">
            <Container className={classes.top} maxWidth="lg">
                <h2 className={classes.title}>Sign up for SEO Updates</h2>
                <div>
                    <TextField className={classes.input} id="outlined-basic" label="Email Address..." variant="outlined" />
                    <Button className={classes.button} variant="contained" color="primary">Subscribe Now</Button>
                </div>
            </Container>
            <HorizontalLine />
            <Container className={classes.bottom} maxWidth="lg">
                <Container className={classes.bottomPart1} maxWidth="lg">
                    <Link href="#" className={classes.icon}>
                        <FacebookIcon />
                    </Link>
                    <Link href="#" className={classes.icon}>
                        <InstagramIcon />
                    </Link>
                    <Link href="#" className={classes.icon}>
                        <TwitterIcon />
                    </Link>
                    <Link href="#" className={classes.icon}>
                        <LinkedInIcon />
                    </Link>
                </Container>
                <Container className={classes.bottomPart2} maxWidth="lg">
                    <h3>Quick Links</h3>
                    <List component="nav" aria-label="main" className={classes.list}>
                        <ListItemLink href="#">
                            <ListItemText primary="Home" />
                        </ListItemLink>
                        <ListItem href="#services">
                            <ListItemText primary="Services" />
                        </ListItem>
                        <ListItem href="#blog">
                            <ListItemText primary="Blog" />
                        </ListItem>
                        <ListItem href="#contact">
                            <ListItemText primary="Contact Us" />
                        </ListItem>
                    </List>
                </Container>
                <Container className={classes.bottomPart3} maxWidth="lg">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.cardTitle} color="textSecondary" gutterBottom>
                                Contact Info</Typography>
                            <Typography variant="h5" component="h2">
                                EMAIL:</Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                email@webknown.com</Typography>
                        </CardContent>
                    </Card>
                </Container>
            </Container>
        </Container>
    )
}

export default ContactUs

import React from 'react';
import { Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '90px 160px',
        textAlign: 'center',
        maxWidth: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '50px 15px',
        }
    },
    img: {
        width: '500px',
        objectFit: 'contain',
        [theme.breakpoints.down('sm')]: {
            width: '300px',
        },
    },
    rightPart: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    title: {
        marginTop: '0',
        textAlign: 'left',
        fontSize: '30px',
        fontWeight: '700',
        textTransform: 'capitalize',
        color: '#36415A',
        fontFamily: '"Work Sans", sans-serif',
        [theme.breakpoints.down('sm')]: {
            fontSize: '26px',
        }
    },
    subtitle: {
        textAlign: 'left',
        fontSize: '16px',
        wordSpacing: '3px',
        lineHeight: '23px',
        fontWeight: '400',
        color: '#36415A',
        fontFamily: '"Work Sans", sans-serif',
        marginTop: '0',
    },
    checkbox: {
        color: `${theme.palette.secondary.main} !important`,
    }
}));

export const HowWeDoIt = () => {
    const classes = useStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container>
                <Grid item lg={6} xs={12} className={`${classes.rightPart} slide-in from-right`}>
                    <h1 className={classes.title}>Watch As Your Business Grows With Us</h1>
                    <p className={classes.subtitle}>Web known stays ahead of the curve with digital marketing trends. Our success has us leading ability and innovation.</p>
                    <div className={classes.demo}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon className={{ label: classes.checkbox }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Targeted adverting"
                                    secondary="Web-known stays ahead of the curve with digital marketing trends. Our success has us leading the pack amongst."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon className={{ label: classes.checkbox }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="In-depth analytics"
                                    secondary="Web-known stays ahead of the curverese from digital marketing trends"
                                />
                            </ListItem>
                        </List>
                    </div>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <img className={`${classes.img} slide-in from-right`} src={`${process.env.PUBLIC_URL}/assets/advertise.png`} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default HowWeDoIt;

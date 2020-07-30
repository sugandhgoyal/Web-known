import React, { Component } from 'react'
import { Container, Grid, Chip, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '50px 15px',
        textAlign: 'center',
        maxWidth: '100%',
        background: '#EFF0F1',
    },
    img: {
        width: '500px',
        objectFit: 'contain',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    leftPart: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
            width: '0'
        }
    },
    rightPart: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    title: {
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
        [theme.breakpoints.down('sm')]: {
            '& p': {
                lineHeight: '27px',
                fontSize: '16px'
            },
        }
    },
    checkbox: {
        color: `${theme.palette.secondary.main} !important`,
    }
}));

export const WorkingProcess = () => {
    const classes = useStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg" id="process">
            <Grid container>
                <Grid item lg={6} xs={6} className={`${classes.leftPart}`}>
                    <img className={`${classes.img} slide-in from-left`} src={`${process.env.PUBLIC_URL}/assets/graph.png`} />
                </Grid>
                <Grid item lg={6} xs={12} className={`${classes.rightPart} slide-in from-left`}>
                    <Chip label="Our working process" color="primary" />
                    <h1 className={classes.title}> Your Site’s Organic SEO Rankings Have A Definitive Effect On Your Business’s Bottom Line</h1>
                    <p className={classes.subtitle}>We stay ahead of the curve with digital marketing trends. Our success has us leading the pack amongst our competitors with our ability to anticipate change and innovation</p>
                    <div className={classes.demo}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon className={{ label: classes.checkbox }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Targeted adverting"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon className={{ label: classes.checkbox }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="In-depth analytics"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon className={{ label: classes.checkbox }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Social media optimization"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon className={{ label: classes.checkbox }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="SEO (Search Engine Optimization)"
                                />
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default WorkingProcess;

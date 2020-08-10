import React, { Component } from 'react'
import { Container, Grid, Chip, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RoundedCheckbox from './Fields/RoundedCheckbox';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '50px 160px',
        textAlign: 'center',
        maxWidth: '100%',
        background: '#EFF0F1',
        [theme.breakpoints.down('600')]: {
            padding: '50px 15px',
        }
    },
    dataContainer: {
        justifyContent: 'space-between',
    },
    img: {
        width: '100%',
        objectFit: 'contain',
        [theme.breakpoints.down('600')]: {
            display: 'none'
        }
    },
    leftPart: {
        [theme.breakpoints.down('600')]: {
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
    chip: {
        color: '#fff',
        backgroundColor: '#047dff',
        padding: '3px 10px',
        fontSize: '15px',
        fontWeight: '600',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        lineHeight: '23px'
    },
    title: {
        textAlign: 'left',
        fontSize: '30px',
        fontWeight: '600',
        textTransform: 'capitalize',
        color: theme.palette.text.primary,
        fontFamily: `'Work Sans', sans-serif`,
        [theme.breakpoints.down('600')]: {
            fontSize: '26px',
        }
    },
    bold: {
        textAlign: 'left',
        fontSize: '24px',
        fontWeight: '600',
        color: theme.palette.text.primary,
        fontFamily: `'Work Sans', sans-serif`,
        [theme.breakpoints.down('600')]: {
            fontSize: '23px',
        }
    },
    subtitle: {
        textAlign: 'left',
        fontSize: '16px',
        wordSpacing: '3px',
        lineHeight: '23px',
        fontWeight: '400',
        color: theme.palette.text.primary,
        fontFamily: `'Work Sans', sans-serif`,
        marginTop: '0',
        [theme.breakpoints.down('600')]: {
            '& p': {
                lineHeight: '27px',
                fontSize: '16px'
            },
        }
    },
}));

export const WorkingProcess = () => {
    const classes = useStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg" id="process">
            <Grid container className={classes.dataContainer}>
                <Grid item lg={5} xs={6} className={`${classes.leftPart}`}>
                    <img className={`${classes.img} slide-in from-left`} src={`${process.env.PUBLIC_URL}/assets/graph.png`} />
                </Grid>
                <Grid item lg={5} xs={12} className={`${classes.rightPart} slide-in from-left`}>
                    <div className={classes.chip}>Our working process</div>
                    <h1 className={classes.title}> With the right support, you really can change the world!</h1>
                    <p className={classes.subtitle}>We believe that any enterprising individual has the ability to change the world. But we also recognise that changing the world by yourself is hard. Really hard!</p>
                    <h3 className={classes.bold}>When you’re the founder, the fundraiser, the marketer and the project manager it can be difficult to make the kind of impact you dream of.</h3>
                    <div className={classes.subtitle}>The good news is, you don’t have to do it all by yourself. We exist to ensure good ideas and good causes gain the support they need to make a bigger difference.</div>
                    {/* <div className={classes.demo}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <RoundedCheckbox />
                                </ListItemIcon>
                                <ListItemText
                                    primary="When you’re the founder, the fundraiser, the marketer and the project manager it can be difficult to make the kind of impact you dream of."
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RoundedCheckbox />
                                </ListItemIcon>
                                <ListItemText
                                    primary="The good news is, you don’t have to do it all by yourself. We exist to ensure good ideas and good causes gain the support they need to make a bigger difference."
                                />
                            </ListItem>
                        </List>
                    </div> */}
                </Grid>
            </Grid>
        </Container>
    )
}

export default WorkingProcess;

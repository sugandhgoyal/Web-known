import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, TextField, Container, Link, Button,
  List, ListItem, ListItemText,
  Typography,
  CardContent,
  Grid
} from '@material-ui/core';
import { HorizontalLine } from './LandingPage';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

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
      flexDirection: 'column',
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
      width: '100%',
      textAlign: 'center',
      margin: '0 0 15px 0',

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
    flexDirection: 'column',
    '& a': {
      marginRight: '5px',
    }
  },
  iconContainer: {
    display: 'flex',
    marginTop: '20px',
    [theme.breakpoints.down('600')]: {
      justifyContent: 'space-between',
    }
  },
  bottomPart2: {
    display: 'flex',
    textAlign: 'left',
    padding: '20px 0',
    '& h3': {
      fontSize: '17px',
      fontWeight: '600',
      fontFamily: `'Work Sans', sans-serif`,
      margin: '0',
    },
    [theme.breakpoints.down('600')]: {
      padding: '40px 0',

    },
  },
  listContainer: {
    '& li': {
      padding: '10px',
    }
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
    },
    '& h2': {
      fontSize: '15px',
      fontWeight: '600',
      fontFamily: `'Work Sans', sans-serif`,
      padding: '0 0 0 10px',
    },
    '& p': {
      fontSize: '20px',
      fontWeight: '500',
      fontFamily: `'Work Sans', sans-serif`,
      color: 'white',
      textIndent: '34px',
    }
  },
  cardTitle: {
    color: 'white',
    margin: '0',
    fontSize: '30px',
    fontWeight: '700',
    padding: '0px 4px 4px 25px',
    borderLeft: '4px solid white',
    marginTop: '16px',
  },
  subHeader: {
    display: 'flex',
    alignItems: 'center',
    width: '60%',
  },
  button: {
    padding: '15px 10px',
    fontFamily: `'Work Sans', sans-serif`,
    [theme.breakpoints.down('600')]: {
      fontSize: '14px',
      fontWeight: '600',
    },
  },
  input: {
    color: 'white !important',
    fontFamily: `'Work Sans', sans-serif`,
    '&::placeholder': {
      color: 'white !important',
    },
    [theme.breakpoints.down('600')]: {
      width: '50%',
    }
  },
  list: {
    [theme.breakpoints.down('600')]: {
      padding: '0',
      margin: '0 0 30px 0',
      '& li': {
        padding: '0',
      }
    }
  },
  listItem: {
    '& span': {
      fontSize: '16px',
      fontWeight: '400 !important',
      fontFamily: `'Work Sans', sans-serif`,
      margin: '0',
    }
  },
  horizontalLine: {
    height: '1px',
    background: '#4b546b',
    width: '100%',
  },
  logo: {
    width: '170px',
    height: '50px',
    objectFit: 'contain',
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
      <div className={classes.horizontalLine} />
      <Grid className={classes.bottom}>
        <Grid item xs lg={4} className={classes.bottomPart1}>
          <img className={classes.logo} src={`${process.env.PUBLIC_URL}/assets/logo-white.png`} />
          <div className={classes.iconContainer}>
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
          </div>
        </Grid>
        <Grid item xs={12} lg={4} className={classes.bottomPart2}>
          <Grid item xs lg={3} className={classes.listContainer}>
            <div>
              <h3>Quick Links</h3>
              <List component="nav" aria-label="main" className={classes.list}>
                <ListItem href="#">
                  <ListItemText className={classes.listItem} primary="Home" />
                </ListItem>
                <ListItem href="#services">
                  <ListItemText className={classes.listItem} primary="Services" />
                </ListItem>
                <ListItem href="#blog">
                  <ListItemText className={classes.listItem} primary="Blog" />
                </ListItem>
                <ListItem href="#contact">
                  <ListItemText className={classes.listItem} primary="Contact Us" />
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs lg={3} className={classes.listContainer}>
            <div>
              <h3>Services</h3>
              <List component="nav" aria-label="main" className={classes.list}>
                <ListItem >
                  <ListItemText className={classes.listItem} primary="Website Design/Development" />
                </ListItem>
                <ListItem >
                  <ListItemText className={classes.listItem} primary="Social Media Management" />
                </ListItem>
                <ListItem >
                  <ListItemText className={classes.listItem} primary="Lead Generation" />
                </ListItem>
                <ListItem >
                  <ListItemText className={classes.listItem} primary="Social Media Strategy" />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
        <Grid item xs lg={4}>
          <Container className={classes.bottomPart3} maxWidth="lg">
            <Card className={classes.root}>
              <h3 className={classes.cardTitle} color="textSecondary" gutterBottom>
                Contact Info</h3>
              <CardContent>
                <div className={classes.subHeader}>
                  <MailOutlineOutlinedIcon />
                  <Typography
                    variant="h5"
                    component="h2"
                  >EMAIL:</Typography>
                </div>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  onClick={() => { window.location.href = "mailto:info@webknown.co?subject=Subject"; }}

                >
                  info@webknown.co</Typography>

                <div className={classes.subHeader}>
                  <CallRoundedIcon />
                  <Typography
                    variant="h5"
                    component="h2"
                  >Call Now:</Typography>
                </div>
                <Typography className={classes.pos} color="textSecondary"
                  onClick={() => { window.location.href = "tel:(+91) 8383808021"; }}
                >
                  (+91) 8383808021</Typography>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactUs

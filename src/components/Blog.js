import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import firebase from '../services/firebase';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: '60px 0 90px 0',
    textAlign: 'center',
    maxWidth: '100%',
    background: '#fafafa',

    '& p': {
      lineHeight: '27px',
      color: '#36415A',
      fontSize: '16px'
    },
    [theme.breakpoints.down('600')]: {
      padding: '50px 15px',
    }
  },
  heading: {
    fontSize: '34px !important',
    lineHeight: '40px !important',
    fontWeight: '700',
    color: theme.palette.text.primary,
    fontFamily: `'Work Sans', sans-serif`,
    [theme.breakpoints.down('600')]: {
      fontSize: '26px !important',
      marginTop: '0',
    }
  },
  subHeading: {
    lineHeight: '27px',
    color: '#36415A',
    fontSize: '16px',
    width: '40%',
    margin: '25px auto',
    [theme.breakpoints.down('600')]: {
      width: '100%',
    }
  },
  imgContainer: {
    minHeight: '80px',
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: '66px',
    objectFit: 'contain',
  },
  submit: {
    color: 'white',
    margin: '10px',
    padding: '15px 63px',
  },
  root: {
    margin: '20px',
    transform: 'translateY(0)',
    transition: 'all 0.3s',
    visibility: 'visible',
    animationDelay: '1s',
    animationName: 'fadeInUp',
  },
  title: {
    fontSize: ' 20px',
    fontWeight: '600',
    lineHeight: '26px',
    color: `${theme.palette.text.primary}`,
    marginBottom: '20px',
    textTransform: 'capitalize',
  },
  content: {
    fontSize: '16px',
    lineHeight: '27px',
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: '500',
  },
  contentContainer: {
    textAlign: 'left',
  },
  cardcontainer: {
    'justifyContent': 'space-between',
    'padding': '0 160px',
    [theme.breakpoints.down('600')]: {
      'padding': '0',
    }
  },
  button: {
    padding: '11px 33px',
    margin: '0 0 20px 10px',
    border: '1px solid #36415A',
  }
}));

export const Blog = () => {
  const [isMobile, setIsMobile] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 600)
        setIsMobile(true);
      else
        setIsMobile(false);
    }, false);

    const colorRef = firebase.database().ref('values');
    // console.log("colorRef", colorRef);
    colorRef.once('value', (snapshot) => {
      let colors = snapshot.val();
      console.log("colors", colors)
    })
  }, []);

  const animationClass = isMobile ? 'fade-in' : '';

  return (
    <Container className={classes.wrapper} maxWidth="lg" id="blog">
      <h2 className={classes.heading}>Our Latest Article</h2>
      <p className={classes.subHeading}>The same way I wouldn’t book an apartment in Rome without using certainly would run.</p>
      <Grid container className={classes.cardcontainer}>
        <Grid item lg={4} sm={6} xs={12}>
          <Card className={`${classes.root} ${animationClass}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={`${process.env.PUBLIC_URL}/assets/image1.jpg`}
                title="Contemplative Reptile"
              />
              <CardContent className={classes.contentContainer} >
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                  Lizard</Typography>
                <Typography variant="body2" color="textSecondary" className={classes.content} component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={classes.button} variant="outlined" color="textSecondary">Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <Card className={`${classes.root} ${animationClass}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={`${process.env.PUBLIC_URL}/assets/image2.jpg`}
                title="Contemplative Reptile"
              />
              <CardContent className={classes.contentContainer}>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                  Lizard</Typography>
                <Typography variant="body2" color="textSecondary" className={classes.content} component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={classes.button} variant="outlined" color="textSecondary" >Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} sm={6} xs={12}>
          <Card className={`${classes.root} ${animationClass}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={`${process.env.PUBLIC_URL}/assets/image3.jpg`}
                title="Contemplative Reptile"
              />
              <CardContent className={classes.contentContainer}>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                  Lizard</Typography>
                <Typography variant="body2" color="textSecondary" className={classes.content} component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={classes.button} variant="outlined" color="textSecondary">Read More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Blog;

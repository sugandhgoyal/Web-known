import React from 'react';
import { Container, Typography, Card, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        paddingBottom: '90px',
        textAlign: 'center',
        maxWidth: '100%',
    },
    heading: {
        fontSize: '34px !important',
        lineHeight: '40px !important',
        fontWeight: '700'
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
        'padding': '0 160px'
    },
    button: {
        padding: '11px 33px',
        margin: '0 0 20px 10px',
        border: '1px solid #36415A',
    }
}));

export const Blog = () => {
    const classes = useStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg" id="blog">
            <h2 className={classes.heading}>Our Latest Article</h2>
            <p>The same way I wouldn’t book an apartment in Rome without using certainly would run.</p>
            <Grid container className={classes.cardcontainer}>
                <Grid item lg={4} sm={6} xs={12}>
                    <Card className={`${classes.root} fade-in`}>
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
                    <Card className={`${classes.root} fade-in`}>
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
                    <Card className={`${classes.root} fade-in`}>
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

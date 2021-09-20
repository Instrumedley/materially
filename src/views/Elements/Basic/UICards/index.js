import React from 'react';
import { Grid, Typography, Card, CardContent, CardHeader, CardActions, CardMedia, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

import Card1 from './../../../../assets/images/cards/card-1.jpg';
import Card2 from './../../../../assets/images/cards/card-2.jpg';
import Card3 from './../../../../assets/images/cards/card-3.jpg';
import Card4 from './../../../../assets/images/cards/card-4.jpg';
import Card5 from './../../../../assets/images/cards/card-5.jpg';
import Card6 from './../../../../assets/images/cards/card-6.jpg';

const useStyles = makeStyles((theme) => ({
    overlayCard: {
        minHeight: 240,
        color: theme.palette.common.white,
    },
    cardTitle: {
        color: theme.palette.text.dark,
    },
}));

const UICards = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Breadcrumb title="Cards">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Cards
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item sm={6} md={4}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Body Content
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Typography variant="subtitle2">This is some text within a card body.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Titles, Text, and Links
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography variant="h5" className={classes.cardTitle}>
                                                Card Title
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">Card Subtitle</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2">
                                                Some quick example text to build on the card title and make up the bulk of the card's
                                                content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button variant="text" color="primary">
                                        Card Link
                                    </Button>
                                    <Button variant="text" color="secondary">
                                        Another
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Header and Footer
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <CardHeader
                                    title={
                                        <Typography component="div" className="card-header">
                                            Featured
                                        </Typography>
                                    }
                                />
                                <Divider />
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title treatment</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            <Button variant="contained" color="primary">
                                                Go Somewhere
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Left Align (Default)
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <Divider />
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title treatment</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container>
                                        <Grid item>
                                            <Button variant="contained" color="primary">
                                                Go Somewhere
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Center Align
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <Divider />
                                <CardContent>
                                    <Grid container spacing={1} justify="center" alignItems="center">
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title treatment</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container justify="center">
                                        <Grid item>
                                            <Button variant="contained" color="primary">
                                                Go Somewhere
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Right Align
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <Divider />
                                <CardContent>
                                    <Grid container spacing={1} justify="flex-end" alignItems="flex-end">
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title treatment</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2" align="right">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            <Button variant="contained" color="primary">
                                                Go Somewhere
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Image Cap
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <CardMedia component="img" image={Card1} title="Card 1" />
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container>
                                        <Grid item>
                                            <Typography variant="caption">Last updated 3 mins ago</Typography>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Image Cap
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item>
                                            <Typography variant="subtitle1">Special title</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle2">
                                                With supporting text below as a natural lead-in to additional content.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Grid container>
                                        <Grid item>
                                            <Typography variant="caption">Last updated 3 mins ago</Typography>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                                <CardMedia component="img" image={Card2} title="Card 2" />
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} md={4}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Image Overlay
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Card>
                                <CardMedia image={Card3} title="Card 3">
                                    <CardContent className={classes.overlayCard}>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <Typography variant="subtitle1" color="inherit">
                                                    Special title
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle2">
                                                    With supporting text below as a natural lead-in to additional content.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Grid container>
                                            <Grid item>
                                                <Typography variant="caption">Last updated 3 mins ago</Typography>
                                            </Grid>
                                        </Grid>
                                    </CardActions>
                                </CardMedia>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Card Style
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} md={4}>
                                    <Card className="bg-primary">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Primary
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Primary Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="bg-secondary">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Secondary
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Secondary Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="bg-error">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header" color="inherit">
                                                    Error
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Error Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="bg-warning">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header" color="inherit">
                                                    Warning
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Warning Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="bg-info">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header" color="inherit">
                                                    Info
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Info Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="bg-success">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header" color="inherit">
                                                    Success
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Success Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="bg-dark">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header" color="inherit">
                                                    Dark
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        Dark Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card>
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header" color="inherit">
                                                    Light
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Light Card Title</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Card Style
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} md={4}>
                                    <Card className="outline-primary">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Primary
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Primary Card Title</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="outline-secondary">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Secondary
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1" className={classes.cardTitle}>
                                                        Secondary Card Title
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="outline-error">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Error
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Error Card Title</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="outline-warning">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Warning
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Warning Card Title</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="outline-info">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Info
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Info Card Title</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="outline-success">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Success
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Success Card Title</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card className="outline-dark">
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Dark
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Dark Card Title</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item sm={6} md={4}>
                                    <Card>
                                        <CardHeader
                                            title={
                                                <Typography component="div" className="card-header">
                                                    Light
                                                </Typography>
                                            }
                                        />
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <Typography variant="subtitle1">Light Card Title</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle2">
                                                        Some quick example text to build on the card title and make up the bulk of the
                                                        card's content.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Card Groups
                            </Typography>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia component="img" image={Card4} title="Card 4" />
                                    <CardHeader
                                        title={
                                            <Typography component="div" className="card-header">
                                                Card Title
                                            </Typography>
                                        }
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle2">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia component="img" image={Card5} title="Card 5" />
                                    <CardHeader
                                        title={
                                            <Typography component="div" className="card-header">
                                                Card Title
                                            </Typography>
                                        }
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle2">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Card>
                                    <CardMedia component="img" image={Card6} title="Card 6" />
                                    <CardHeader
                                        title={
                                            <Typography component="div" className="card-header">
                                                Card Title
                                            </Typography>
                                        }
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle2">
                                            This is a wider card with supporting text below as a natural lead-in to additional content. This
                                            content is a little bit longer.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UICards;

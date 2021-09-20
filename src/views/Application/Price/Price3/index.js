import React from 'react';
import {
    Grid,
    Typography,
    Button,
    Hidden,
    Card,
    CardContent,
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import Medal from './../../../../assets/images/page/medal2.svg';
const useStyles = makeStyles((theme) => ({
    price: {
        // textAlign:'center',
    },
    pricetitle: {
        fontSize: '20px',
        fontWeight: '600',
        position: 'relative',
        color: theme.palette.primary.main,
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-15px',
            left: '0px',
            width: '50px',
            height: '4px',
            background: theme.palette.background.default,
            borderRadius: '3px',
        },
    },
    priceamt: {
        fontSize: '45px',
        fontWeight: '700',
        color: theme.palette.primary.main,

        '& > span': {
            fontSize: '20px',
            fontWeight: '500',
        },
    },
    pricelist: {
        margin: 0,
        padding: 0,
        '&> li': {
            padding: '5px 0px',
            '& svg': {
                fill: theme.palette.success.main,
            },
        },
    },
    sidebox: {
        background: '#cbe2ff',
        textAlign: 'center',
        borderRadius: '3px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'inset 0 0 60px 0px rgba(157, 198, 251, .44)',
    },
    featureaction: {
        borderLeft: '1px solid' + theme.palette.background.default,
    },
    featureblock: {
        borderLeft: '1px solid' + theme.palette.background.default,
        paddingTop: '12px',
        paddingBottom: '12px !important',
    },
    featurerow: {
        borderBottom: '1px solid' + theme.palette.background.default,
    },
    textsuccess: {
        color: theme.palette.success.main,
    },
    medalimg: {
        width: '120px',
        margin: '0 auto',
    },
}));

const Product = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Breadcrumb title="Pricing Plan">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Price
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Price 3
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Card className={classes.price}>
                        <CardContent className={classes.featureaction}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} sm={7} md={8}>
                                    <Grid container spacing={gridSpacing}>
                                        <Grid item xs={12}>
                                            <Typography component="div" variant="h6" className={classes.pricetitle}>
                                                Lifetime Premium Membership
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography component="div" variant="body2">
                                                For businesses wanting an out-of-the box payouts solution and API. Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography component="div" variant="h6">
                                                Premium Feature
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container spacing={gridSpacing}>
                                                <Grid item xs={12} sm={6}>
                                                    <div className={classes.pricefeature}>
                                                        <List className={classes.pricelist} component="ul">
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <DoneAllRoundedIcon />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Only 1 User uses" />
                                                            </ListItem>
                                                            <Divider />
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <DoneAllRoundedIcon />
                                                                </ListItemIcon>
                                                                <ListItemText primary="10 Projects for individuals" />
                                                            </ListItem>
                                                            <Divider />
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <DoneAllRoundedIcon />
                                                                </ListItemIcon>
                                                                <ListItemText primary="5GB of Storage" />
                                                            </ListItem>
                                                        </List>
                                                    </div>
                                                </Grid>
                                                <Hidden smUp>
                                                    <Grid item xs={12} sm={6}>
                                                        <Divider />
                                                    </Grid>
                                                </Hidden>
                                                <Grid item xs={12} sm={6}>
                                                    <div className={classes.pricefeature}>
                                                        <List className={classes.pricelist} component="ul">
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <DoneAllRoundedIcon />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Unlimited Bandwitch" />
                                                            </ListItem>
                                                            <Divider />
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <DoneAllRoundedIcon />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Unlimited Data" />
                                                            </ListItem>
                                                            <Divider />
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <DoneAllRoundedIcon />
                                                                </ListItemIcon>
                                                                <ListItemText primary="Fully Security Suite" />
                                                            </ListItem>
                                                        </List>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={5} md={4}>
                                    <CardContent className={classes.sidebox}>
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item xs={12}>
                                                <CardMedia component="img" image={Medal} title="Cover image" className={classes.medalimg} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography component="div" variant="body2" className={classes.priceamt}>
                                                    <sup>$</sup>25<span>/Month</span>
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" color="primary">
                                                    Order Now
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Product;

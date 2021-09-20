import React from 'react';
import { Grid, Typography, FormControlLabel, Hidden, Button, Switch, InputLabel, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

const useStyles = makeStyles((theme) => ({
    price: {
        textAlign: 'center',
    },
    pricetitle: {
        fontSize: '20px',
        fontWeight: '500',
        position: 'relative',
        color: theme.palette.primary.main,
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-15px',
            left: 'calc(50% - 25px)',
            width: '50px',
            height: '4px',
            background: theme.palette.background.default,
            borderRadius: '3px',
        },
    },
    priceamt: {
        fontSize: '25px',
        fontWeight: '700',
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
    featuretitle: {
        background: theme.palette.background.default,
        textAlign: 'left',
        paddingTop: '12px',
        paddingBottom: '12px !important',
    },
    featureaction: {
        borderLeft: '1px solid' + theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
    },
    pricebadge: {
        background: theme.palette.secondary.main,
        color: '#fff',
        display: 'inline-block',
        padding: '40px 40px 5px',
        fontSize: '13px',
        position: 'absolute',
        top: '-24px',
        right: '-55px',
        transform: 'rotate(45deg)',
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
    textmuted: {
        opacity: '0.3',
    },
    btntoggle: {
        width: '100%',
        '& > button': {
            border: 'none',
            borderRadius: '5px ​!important',
        },
        '& > button.Mui-selected': {
            background: theme.palette.background.default + '!important',
            color: theme.palette.primary.main,
        },
    },
}));

const Product = () => {
    const classes = useStyles();
    const [ccbccvalue, ccbccsetValue] = React.useState(0);
    const ccbcchandleChange = (event, newValue) => {
        ccbccsetValue((prev) => !prev);
    };
    const [mailinboxlistvalue, setmailinboxlist] = React.useState(1);

    const [view, setView] = React.useState('1');
    const handleChange = (event, nextView) => {
        setView(nextView);
    };
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
                    Price 2
                </Typography>
            </Breadcrumb>
            <Grid container justify="center" alignItems="center" spacing={gridSpacing}>
                <Grid item>
                    <InputLabel htmlFor="changeplan">Monthly</InputLabel>
                </Grid>
                <Grid item>
                    <FormControlLabel value="start" control={<Switch color="primary" id="changeplan" onClick={ccbcchandleChange} />} />
                </Grid>
                <Grid item>
                    <InputLabel htmlFor="changeplan">Annual</InputLabel>
                </Grid>
            </Grid>

            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Hidden smUp>
                        <Card>
                            <CardContent>
                                <ToggleButtonGroup
                                    orientation="vertical"
                                    value={view}
                                    exclusive
                                    onChange={handleChange}
                                    className={classes.btntoggle}
                                >
                                    <ToggleButton value="1" onClick={() => setmailinboxlist(1)}>
                                        Starters
                                    </ToggleButton>
                                    <ToggleButton value="2" onClick={() => setmailinboxlist(2)}>
                                        Scalability
                                    </ToggleButton>
                                    <ToggleButton value="3" onClick={() => setmailinboxlist(3)}>
                                        Enterprise
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </CardContent>
                        </Card>
                    </Hidden>
                </Grid>
                <Grid item xs={12}>
                    <Card className={classes.price}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} md={3}></Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <CardContent className={classes.featureaction}>
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item xs={12}>
                                                <Typography component="div" variant="h6" className={classes.pricetitle}>
                                                    Starters
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                {ccbccvalue ? (
                                                    <Typography component="div" variant="body2" className={classes.priceamt}>
                                                        <sup>$</sup>225<span>/Year</span>
                                                    </Typography>
                                                ) : (
                                                    <Typography component="div" variant="body2" className={classes.priceamt}>
                                                        <sup>$</sup>25<span>/Month</span>
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="outlined" color="secondary">
                                                    Order Now
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <CardContent className={classes.featureaction}>
                                        <div className={classes.pricebadge}>Popular</div>
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item xs={12}>
                                                <Typography component="div" variant="h6" className={classes.pricetitle}>
                                                    Scalability
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                {ccbccvalue ? (
                                                    <Typography component="div" variant="body2" className={classes.priceamt}>
                                                        <sup>$</sup>825<span>/Year</span>
                                                    </Typography>
                                                ) : (
                                                    <Typography component="div" variant="body2" className={classes.priceamt}>
                                                        <sup>$</sup>125<span>/Month</span>
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="contained" color="secondary">
                                                    Order Now
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 3}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <CardContent className={classes.featureaction}>
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item xs={12}>
                                                <Typography component="div" variant="h6" className={classes.pricetitle}>
                                                    Enterprise
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                {ccbccvalue ? (
                                                    <Typography component="div" variant="body2" className={classes.priceamt}>
                                                        <sup>$</sup>1025<span>/Year</span>
                                                    </Typography>
                                                ) : (
                                                    <Typography component="div" variant="body2" className={classes.priceamt}>
                                                        <sup>$</sup>225<span>/Month</span>
                                                    </Typography>
                                                )}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button variant="outlined" color="secondary">
                                                    Order Now
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <CardContent className={classes.featuretitle}>
                            <Typography component="div" variant="h6">
                                Features
                            </Typography>
                        </CardContent>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={3}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Only 1 User uses
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 3}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={3}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        10 Projects for individuals
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 3}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={3}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Unlimited Bandwitch
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 3}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={3}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Unlimited Data
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 3}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <CardContent className={classes.featuretitle}>
                            <Typography component="div" variant="h6">
                                Storage & Security
                            </Typography>
                        </CardContent>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={3}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        5GB of Storage
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 3}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0} className={classes.featurerow}>
                            <Grid item xs={8} sm={6} md={3}>
                                <CardContent className={classes.featureblock}>
                                    <Typography component="div" align="left" variant="body2">
                                        Fully Security Suite
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <RemoveRoundedIcon className={classes.textmuted} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 3}>
                                <Grid item xs={4} sm={6} md={3}>
                                    <CardContent className={classes.featureblock}>
                                        <DoneAllRoundedIcon className={classes.textsuccess} />
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} md={3}></Grid>
                            <Hidden smDown={mailinboxlistvalue !== 1}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <CardContent className={classes.featureaction}>
                                        <Button variant="outlined" color="secondary">
                                            Order Now
                                        </Button>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 2}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <CardContent className={classes.featureaction}>
                                        <Button variant="contained" color="secondary">
                                            Order Now
                                        </Button>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                            <Hidden smDown={mailinboxlistvalue !== 3}>
                                <Grid item xs={12} sm={6} md={3}>
                                    <CardContent className={classes.featureaction}>
                                        <Button variant="outlined" color="secondary">
                                            Order Now
                                        </Button>
                                    </CardContent>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Product;

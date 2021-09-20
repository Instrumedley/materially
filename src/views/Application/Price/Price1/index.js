import React from 'react';
import {
    Grid,
    Typography,
    FormControlLabel,
    Button,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Switch,
    InputLabel,
    Card,
    CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import AirportShuttleTwoToneIcon from '@material-ui/icons/AirportShuttleTwoTone';
import DirectionsBoatTwoToneIcon from '@material-ui/icons/DirectionsBoatTwoTone';

const useStyles = makeStyles((theme) => ({
    price: {
        textAlign: 'center',
        position: 'relative',
        paddingTop: '15px',
    },
    pricetitle: {
        fontSize: '25px',
        fontWeight: '500',
        position: 'relative',
        marginBottom: '15px',
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '-15px',
            left: 'calc(50% - 25px)',
            width: '50px',
            height: '4px',
            background: theme.palette.primary.main,
            borderRadius: '3px',
        },
    },
    priceamt: {
        fontSize: '35px',
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
    priceicon: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        width: '80px',
        height: '80px',
        background: '#eaf2fe',
        color: theme.palette.primary.main,
        '& > svg': {
            width: '35px',
            height: '35px',
        },
    },
    pricelistdisble: {
        opacity: '0.4',
        '& >div> svg': {
            fill: theme.palette.secondary.light,
        },
    },
    pricebadge: {
        background: theme.palette.secondary.main,
        color: '#fff',
        display: 'inline-block',
        padding: '40px 40px 5px',
        fontSize: '16px',
        position: 'absolute',
        top: '-10px',
        right: '-55px',
        transform: 'rotate(45deg)',
        textTransform: 'uppercase',
    },
}));

const Product = () => {
    const classes = useStyles();
    const [ccbccvalue, ccbccsetValue] = React.useState(0);
    const ccbcchandleChange = (event, newValue) => {
        ccbccsetValue((prev) => !prev);
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
                    Price 1
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
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.price}>
                        <CardContent>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <div className={classes.priceicon}>
                                        <MenuBookTwoToneIcon />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="div" variant="h6" className={classes.pricetitle}>
                                        Starters
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="div" variant="body2">
                                        For businesses wanting an out-of-the box payouts solution and API.
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
                                            <ListItem className={classes.pricelistdisble}>
                                                <ListItemIcon>
                                                    <DoneAllRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="5GB of Storage" />
                                            </ListItem>
                                            <Divider />
                                            <ListItem className={classes.pricelistdisble}>
                                                <ListItemIcon>
                                                    <DoneAllRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Unlimited Bandwitch" />
                                            </ListItem>
                                            <Divider />
                                            <ListItem className={classes.pricelistdisble}>
                                                <ListItemIcon>
                                                    <DoneAllRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Unlimited Data" />
                                            </ListItem>
                                            <Divider />
                                            <ListItem className={classes.pricelistdisble}>
                                                <ListItemIcon>
                                                    <DoneAllRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Fully Security Suite" />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" color="primary">
                                        Order Now
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.price}>
                        <CardContent>
                            <div className={classes.pricebadge}>Popular</div>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <div className={classes.priceicon}>
                                        <AirportShuttleTwoToneIcon />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="div" variant="h6" className={classes.pricetitle}>
                                        Scalability
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="div" variant="body2">
                                        For companies needing to important a payments platform as they continue to grow.
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
                                            <Divider />
                                            <ListItem className={classes.pricelistdisble}>
                                                <ListItemIcon>
                                                    <DoneAllRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Unlimited Bandwitch" />
                                            </ListItem>
                                            <Divider />
                                            <ListItem className={classes.pricelistdisble}>
                                                <ListItemIcon>
                                                    <DoneAllRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Unlimited Data" />
                                            </ListItem>
                                            <Divider />
                                            <ListItem className={classes.pricelistdisble}>
                                                <ListItemIcon>
                                                    <DoneAllRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Fully Security Suite" />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary">
                                        Order Now
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.price}>
                        <CardContent>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <div className={classes.priceicon}>
                                        <DirectionsBoatTwoToneIcon />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="div" variant="h6" className={classes.pricetitle}>
                                        Enterprise
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography component="div" variant="body2">
                                        For established businesses needing a sophisticated payments partner.
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
                                            <Divider />
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
                                <Grid item xs={12}>
                                    <Button variant="outlined" color="primary">
                                        Order Now
                                    </Button>
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

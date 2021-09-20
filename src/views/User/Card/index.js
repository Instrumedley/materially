import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Divider,
    Tabs,
    Tab,
    Box,
    IconButton,
    Menu,
    MenuItem,
    FormControlLabel,
    Badge,
    Button,
} from '@material-ui/core';

import { Link as ReactRouter } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import StarBorderTwoToneIcon from '@material-ui/icons/StarBorderTwoTone';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';

import Checkbox from './../../../component/Checkbox';
import Avatar from './../../../component/Avatar';
import Breadcrumb from './../../../component/Breadcrumb';
import { gridSpacing } from '../../../store/constant';
import Slider5 from './../../../assets/images/widget/slider5.jpg';
import Slider6 from './../../../assets/images/widget/slider6.jpg';
import Slider7 from './../../../assets/images/widget/slider7.jpg';
import Userblurimg from './../../../assets/images/widget/user-blur-bg.png';
import Userimground from './../../../assets/images/widget/img-round1.jpg';
import Profileperson1 from './../../../assets/images/widget/profile-person1.jpg';
import Blurbg from './../../../assets/images/widget/blur-bg.png';
import Avatar1 from './../../../assets/images/users/avatar-1.jpg';
import Avatar2 from './../../../assets/images/users/avatar-2.jpg';
import Avatar3 from './../../../assets/images/users/avatar-3.jpg';
import Imgavatar1 from './../../../assets/images/users/img-avatar-1.jpg';
import Imgavatar2 from './../../../assets/images/users/img-avatar-2.jpg';
import Imgavatar3 from './../../../assets/images/users/img-avatar-3.jpg';
import Cover from './../../../assets/images/users/cover.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    overlayCard: {
        minHeight: 240,
        color: theme.palette.common.white,
    },
    textWhite: {
        color: theme.palette.common.white,
    },
    bgSecondary: {
        background: theme.palette.secondary.main,
    },
    usercard: {
        textAlign: 'center',
    },
    usercover: {
        padding: '0.5rem 0.5rem 0',
    },
    clipleft: {
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 80%)',
    },
    clipcenter: {
        clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 50% 100%, 0% 80%)',
    },
    clipright: {
        clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 0% 100%)',
    },
    useravtar: {
        margin: '-44px auto 10px',
        width: '65px',
        height: '65px',
        boxShadow: '0 0 0 5px #fff',
    },
    useravtar2: {
        width: '80px',
        height: '80px',
        boxShadow: '0 0 0 5px #fff',
    },
    useravtar3: {
        width: '100px',
        height: '100px',
        boxShadow: '0 0 0 5px #fff',
    },
    useravtar4: {
        width: '150px',
        height: '150px',
    },
    useravtar5: {
        width: '115px',
        height: '115px',
        margin: '-75px auto 10px',
        border: '1px solid #f1f1f1',
        background: '#f0f2f8',
    },
    useravtar6: {
        width: '105px',
        height: '105px',
        margin: '10px auto',
        border: '1px solid #f1f1f1',
        background: '#f0f2f8',
    },
    useravtar7: {
        width: '60px',
        height: '60px',
        margin: '10px auto',
        border: '1px solid #f1f1f1',
        background: '#f0f2f8',
    },
    usercardoverlay: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(' + Slider5 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px 0',
    },
    usercardoverlay1: {
        minHeight: '410px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundImage: 'url(' + Profileperson1 + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '30px 20px',
        color: theme.palette.common.white,
    },
    usercardoverlay2: {
        minHeight: '450px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        backgroundImage: 'url(' + Blurbg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: theme.palette.common.white,
        '&> div:first-child': {
            padding: '25px 20px',
        },
    },
    usename4: {
        fontWeight: '400',
    },
    userbadge4: {
        '& > span': {
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            margin: '0 17px 17px 0',
            boxShadow: '0 0 0 4px #fff',
        },
    },
    textFacebook: {
        color: '#3C5A99',
    },
    textTwitter: {
        color: '#42C0FB',
    },
    textPinterest: {
        color: '#BF2131',
    },
    textYouTube: {
        color: '#E0291D',
    },
    textLinkedIn: {
        color: '#0077B5',
    },
    sociallink: {
        '& > svg': {
            marginRight: '5px',
            width: '25px',
            height: '25px',
        },
    },
    socialhovercard: {
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&:hover svg': {
            marginLeft: '0px',
        },
    },
    sociallink2: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        '& > svg': {
            marginLeft: '-100px',
            width: '25px',
            height: '25px',
            display: 'block',
            transition: 'all 0.2s ease-in-out',
        },
        '& > svg:nth-child(1)': {
            transitionDelay: '0.05s',
        },
        '& > svg:nth-child(2)': {
            transitionDelay: '0.1s',
        },
        '& > svg:nth-child(3)': {
            transitionDelay: '0.15s',
        },
        '& > svg:nth-child(4)': {
            transitionDelay: '0.2s',
        },
        '& > svg:nth-child(5)': {
            transitionDelay: '0.25s',
        },
    },
    usersocialdata: {
        marginTop: '-50px',
    },
    userdivider: {
        width: '80px',
        height: '0.25rem',
        margin: '1.5rem auto',
    },
    usersaprator: {
        margin: '1.5rem 0 0',
        background: 'transparent',
    },
    userbadge: {
        '& > span': {
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            margin: '7px 7px',
            boxShadow: '0 0 0 4px #fff',
        },
    },
    usersliderimg: {
        height: 'auto',
        display: 'block',
        maxWidth: '100%',
        overflow: 'hidden',
        width: '100%',
    },
    userhovercard: {
        overflow: 'hidden',
        position: 'relative',
        '& > span': {
            background: 'rgba(57, 68, 73, 0.92)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: '#fff',
            padding: '0 20px',
            transform: 'scale(0)',
            transition: 'transform .3s ease-in-out',
        },
        '&:hover > span': {
            transform: 'scale(1)',
        },
    },
    Buttonright: {
        marginLeft: 'auto !important',
    },
    accounttab: {
        marginBottom: '24px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        '& button': {
            minWidth: '100px',
        },
    },
    textwarning: {
        color: theme.palette.warning.main,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box p={0}>{children}</Box>}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: Slider5,
    },
    {
        label: 'Bird',
        imgPath: Slider6,
    },
    {
        label: 'Bali, Indonesia',
        imgPath: Slider7,
    },
];

const UICards = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };

    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const [checked, setChecked] = React.useState(true);
    const [checked1, setChecked1] = React.useState(true);
    const [checked2, setChecked2] = React.useState(true);

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const climgleft = [classes['usercover'], classes['clipleft']];
    const climgcenter = [classes['usercover'], classes['clipcenter']];
    const climgright = [classes['usercover'], classes['clipright']];

    return (
        <React.Fragment>
            <Breadcrumb title="User Card">
                <Typography component={ReactRouter} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    User
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Card
                </Typography>
            </Breadcrumb>
            <div className={classes.root}>
                <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} className={classes.accounttab}>
                    <Tab label="Simple" {...a11yProps(0)} />
                    <Tab label="Clip image" {...a11yProps(1)} />
                    <Tab label="Footer" {...a11yProps(2)} />
                    <Tab label="Social" {...a11yProps(3)} />
                    <Tab label="Other" {...a11yProps(4)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Simple
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider5} title="Slider5 image" className={classes.usercover} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar1} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        With option
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider7} title="Slider5 image" className={classes.usercover} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        icon={<StarBorderTwoToneIcon className={classes.textwarning} />}
                                                                        checkedIcon={<StarTwoToneIcon className={classes.textwarning} />}
                                                                        color="primary"
                                                                        name="checkedH"
                                                                    />
                                                                }
                                                                label=""
                                                            />
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Avatar alt="User 1" src={Avatar2} className={classes.useravtar} />
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <IconButton
                                                                aria-controls="simple-menu"
                                                                aria-haspopup="true"
                                                                onClick={handleClick}
                                                            >
                                                                <MoreHorizTwoToneIcon />
                                                            </IconButton>
                                                            <Menu
                                                                id="simple-menu"
                                                                anchorEl={anchorEl}
                                                                keepMounted
                                                                open={Boolean(anchorEl)}
                                                                onClose={handleClose}
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'center',
                                                                }}
                                                            >
                                                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                            </Menu>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Option selected
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider6} title="Slider5 image" className={classes.usercover} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        icon={<StarBorderTwoToneIcon className={classes.textwarning} />}
                                                                        checkedIcon={<StarTwoToneIcon className={classes.textwarning} />}
                                                                        color="primary"
                                                                        name="checkedH"
                                                                        checked={checked1}
                                                                        onChange={() => setChecked1(!checked1)}
                                                                    />
                                                                }
                                                                label=""
                                                            />
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Avatar alt="User 1" src={Avatar3} className={classes.useravtar} />
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <IconButton
                                                                aria-controls="simple-menu2"
                                                                aria-haspopup="true"
                                                                onClick={handleClick1}
                                                            >
                                                                <MoreHorizTwoToneIcon />
                                                            </IconButton>
                                                            <Menu
                                                                id="simple-menu2"
                                                                anchorEl={anchorEl1}
                                                                keepMounted
                                                                open={Boolean(anchorEl1)}
                                                                onClose={handleClose1}
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'center',
                                                                }}
                                                            >
                                                                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                                                                <MenuItem onClick={handleClose1}>My account</MenuItem>
                                                                <MenuItem onClick={handleClose1}>Logout</MenuItem>
                                                            </Menu>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Slider
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <div className={classes.usercover}>
                                            <AutoPlaySwipeableViews
                                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                                index={activeStep}
                                                onChangeIndex={handleStepChange}
                                                enableMouseEvents
                                            >
                                                {tutorialSteps.map((step, index) => (
                                                    <div key={step.label}>
                                                        {Math.abs(activeStep - index) <= 2 ? (
                                                            <img className={classes.usersliderimg} src={step.imgPath} alt={step.label} />
                                                        ) : null}
                                                    </div>
                                                ))}
                                            </AutoPlaySwipeableViews>
                                        </div>
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        icon={<StarBorderTwoToneIcon className={classes.textwarning} />}
                                                                        checkedIcon={<StarTwoToneIcon className={classes.textwarning} />}
                                                                        color="primary"
                                                                        name="checkedH"
                                                                        checked={checked2}
                                                                        onChange={() => setChecked2(!checked2)}
                                                                    />
                                                                }
                                                                label=""
                                                            />
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Avatar alt="User 1" src={Avatar3} className={classes.useravtar} />
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <IconButton
                                                                aria-controls="simple-menu2"
                                                                aria-haspopup="true"
                                                                onClick={handleClick1}
                                                            >
                                                                <MoreHorizTwoToneIcon />
                                                            </IconButton>
                                                            <Menu
                                                                id="simple-menu2"
                                                                anchorEl={anchorEl1}
                                                                keepMounted
                                                                open={Boolean(anchorEl1)}
                                                                onClose={handleClose1}
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'center',
                                                                }}
                                                            >
                                                                <MenuItem onClick={handleClose1}>Profile</MenuItem>
                                                                <MenuItem onClick={handleClose1}>My account</MenuItem>
                                                                <MenuItem onClick={handleClose1}>Logout</MenuItem>
                                                            </Menu>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Certificated badge
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider7} title="Slider5 image" className={classes.usercover} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        icon={<StarBorderTwoToneIcon className={classes.textwarning} />}
                                                                        checkedIcon={<StarTwoToneIcon className={classes.textwarning} />}
                                                                        color="primary"
                                                                        name="checkedH"
                                                                        checked={checked}
                                                                        onChange={() => setChecked(!checked)}
                                                                    />
                                                                }
                                                                label=""
                                                            />
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Badge
                                                                badgeContent={<StarsTwoToneIcon />}
                                                                className={classes.userbadge}
                                                                color="primary"
                                                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                                            >
                                                                <Avatar alt="User 1" src={Avatar1} className={classes.useravtar} />
                                                            </Badge>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <IconButton
                                                                aria-controls="simple-menu3"
                                                                aria-haspopup="true"
                                                                onClick={handleClick2}
                                                            >
                                                                <MoreHorizTwoToneIcon />
                                                            </IconButton>
                                                            <Menu
                                                                id="simple-menu3"
                                                                anchorEl={anchorEl2}
                                                                keepMounted
                                                                open={Boolean(anchorEl2)}
                                                                onClose={handleClose2}
                                                                transformOrigin={{
                                                                    vertical: 'top',
                                                                    horizontal: 'center',
                                                                }}
                                                            >
                                                                <MenuItem onClick={handleClose2}>Profile</MenuItem>
                                                                <MenuItem onClick={handleClose2}>My account</MenuItem>
                                                                <MenuItem onClick={handleClose2}>Logout</MenuItem>
                                                            </Menu>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Hover data
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.userhovercard}>
                                        <CardMedia component="img" image={Slider7} title="Slider5 image" className={classes.usercover} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar1} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <span>
                                            <Typography variant="h4" align="center">
                                                Hire Me?
                                            </Typography>
                                            <Divider className={classes.usersaprator} />
                                            <Typography variant="body1" align="center">
                                                Lorem Ipsum is simply dummy text been the industry's standard
                                            </Typography>
                                            <Divider className={classes.usersaprator} />
                                            <Grid container justify="center" spacing={1}>
                                                <Grid item>
                                                    <Button variant="contained" color="primary">
                                                        Primary
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color="secondary">
                                                        Secondary
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </span>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Left
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider5} title="Slider5 image" className={climgleft.join(' ')} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar1} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Center
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia
                                            component="img"
                                            image={Slider6}
                                            title="Slider5 image"
                                            className={climgcenter.join(' ')}
                                        />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar2} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Right
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider6} title="Slider5 image" className={climgright.join(' ')} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar2} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Left slider
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <div className={climgleft.join(' ')}>
                                            <AutoPlaySwipeableViews
                                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                                index={activeStep}
                                                onChangeIndex={handleStepChange}
                                                enableMouseEvents
                                            >
                                                {tutorialSteps.map((step, index) => (
                                                    <div key={step.label}>
                                                        {Math.abs(activeStep - index) <= 2 ? (
                                                            <img className={classes.usersliderimg} src={step.imgPath} alt={step.label} />
                                                        ) : null}
                                                    </div>
                                                ))}
                                            </AutoPlaySwipeableViews>
                                        </div>
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar1} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Center slider
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <div className={climgcenter.join(' ')}>
                                            <AutoPlaySwipeableViews
                                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                                index={activeStep}
                                                onChangeIndex={handleStepChange}
                                                enableMouseEvents
                                            >
                                                {tutorialSteps.map((step, index) => (
                                                    <div key={step.label}>
                                                        {Math.abs(activeStep - index) <= 2 ? (
                                                            <img className={classes.usersliderimg} src={step.imgPath} alt={step.label} />
                                                        ) : null}
                                                    </div>
                                                ))}
                                            </AutoPlaySwipeableViews>
                                        </div>
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar1} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Right slider
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <div className={climgright.join(' ')}>
                                            <AutoPlaySwipeableViews
                                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                                index={activeStep}
                                                onChangeIndex={handleStepChange}
                                                enableMouseEvents
                                            >
                                                {tutorialSteps.map((step, index) => (
                                                    <div key={step.label}>
                                                        {Math.abs(activeStep - index) <= 2 ? (
                                                            <img className={classes.usersliderimg} src={step.imgPath} alt={step.label} />
                                                        ) : null}
                                                    </div>
                                                ))}
                                            </AutoPlaySwipeableViews>
                                        </div>
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar1} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.userdivider} />
                                                <Grid item>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                37
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Mails
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                2749
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Followers
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Typography align="center" variant="h6" color="inherit">
                                                                678
                                                            </Typography>
                                                            <Typography align="center" variant="body2">
                                                                Following
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Footer gray
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider5} title="Slider5 image" className={classes.usercover} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar1} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions className={classes.bgSecondary}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6" className={classes.textWhite}>
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2" className={classes.textWhite}>
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6" className={classes.textWhite}>
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2" className={classes.textWhite}>
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6" className={classes.textWhite}>
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2" className={classes.textWhite}>
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Footer white
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider6} title="Slider5 image" className={classes.usercover} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar2} className={classes.useravtar} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Social link
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider7} title="Slider5 image" className={climgright.join(' ')} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Grid container spacing={2} alignItems="center" className={classes.usersocialdata}>
                                                        <Grid item xs={4}>
                                                            <Avatar alt="User 1" src={Avatar3} className={classes.useravtar2} />
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Typography variant="h6" color="inherit">
                                                                Josephin Doe
                                                            </Typography>
                                                            <Typography variant="body2" color="inherit">
                                                                UI/UX Designer
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="left" variant="body1">
                                                        Lorem Ipsum is simply dummy text been the industry's standard
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item align="left" className={classes.sociallink}>
                                                    <FacebookIcon className={classes.textFacebook} />
                                                    <TwitterIcon className={classes.textTwitter} />
                                                    <PinterestIcon className={classes.textPinterest} />
                                                    <YouTubeIcon className={classes.textYouTube} />
                                                    <LinkedInIcon className={classes.textLinkedIn} />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item sm={12}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Social profile
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Cover} title="Cover image" className={climgright.join(' ')} />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Grid
                                                        container
                                                        wrap="nowrap"
                                                        alignItems="center"
                                                        className={classes.usersocialdata}
                                                        spacing={2}
                                                    >
                                                        <Grid item>
                                                            <Avatar alt="User 1" src={Avatar3} className={classes.useravtar3} />
                                                        </Grid>
                                                        <Grid item xs zeroMinWidth>
                                                            <Typography align="left" variant="h6" color="inherit">
                                                                Josephin Doe
                                                            </Typography>
                                                            <Typography align="left" variant="body2" color="inherit">
                                                                UI/UX Designer
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Badge
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Badge
                                                        badgeContent={<VerifiedUserTwoToneIcon />}
                                                        className={classes.userbadge4}
                                                        color="primary"
                                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                    >
                                                        <Avatar alt="User 1" src={Imgavatar3} className={classes.useravtar4} />
                                                    </Badge>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Social link 1
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardContent>
                                            <Grid>
                                                <Grid item align="center">
                                                    <Avatar alt="User 1" src={Imgavatar1} className={classes.useravtar4} />
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item align="center" className={classes.sociallink}>
                                                    <FacebookIcon className={classes.textFacebook} />
                                                    <TwitterIcon className={classes.textTwitter} />
                                                    <PinterestIcon className={classes.textPinterest} />
                                                    <YouTubeIcon className={classes.textYouTube} />
                                                    <LinkedInIcon className={classes.textLinkedIn} />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Social link 2 on hover
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.socialhovercard}>
                                        <CardContent>
                                            <Grid>
                                                <Grid item align="center">
                                                    <Avatar alt="User 1" src={Imgavatar2} className={classes.useravtar4} />
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item align="center" className={classes.sociallink2}>
                                                    <FacebookIcon className={classes.textFacebook} />
                                                    <TwitterIcon className={classes.textTwitter} />
                                                    <PinterestIcon className={classes.textPinterest} />
                                                    <YouTubeIcon className={classes.textYouTube} />
                                                    <LinkedInIcon className={classes.textLinkedIn} />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        User card 3
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardContent>
                                            <Grid>
                                                <Grid item align="center">
                                                    <Avatar alt="User 1" src={Imgavatar1} className={classes.useravtar4} />
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        hover data
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.userhovercard}>
                                        <CardContent>
                                            <Grid>
                                                <Grid item align="center">
                                                    <Avatar alt="User 1" src={Imgavatar2} className={classes.useravtar4} />
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                        <span>
                                            <Typography variant="h4" align="center">
                                                Hire Me?
                                            </Typography>
                                            <Divider className={classes.usersaprator} />
                                            <Typography variant="body1" align="center">
                                                Lorem Ipsum is simply dummy text been the industry's standard
                                            </Typography>
                                            <Divider className={classes.usersaprator} />
                                            <Grid container justify="center" spacing={1}>
                                                <Grid item>
                                                    <Button variant="contained" color="primary">
                                                        Primary
                                                    </Button>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color="secondary">
                                                        Secondary
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </span>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Badge
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Badge
                                                        badgeContent={<VerifiedUserTwoToneIcon />}
                                                        className={classes.userbadge4}
                                                        color="primary"
                                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                    >
                                                        <Avatar alt="User 1" src={Imgavatar3} className={classes.useravtar4} />
                                                    </Badge>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Social link
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardContent>
                                            <Grid>
                                                <Grid item align="center">
                                                    <Avatar alt="User 1" src={Imgavatar1} className={classes.useravtar4} />
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item align="center" className={classes.sociallink}>
                                                    <FacebookIcon className={classes.textFacebook} />
                                                    <TwitterIcon className={classes.textTwitter} />
                                                    <PinterestIcon className={classes.textPinterest} />
                                                    <YouTubeIcon className={classes.textYouTube} />
                                                    <LinkedInIcon className={classes.textLinkedIn} />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Social link on hover
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.socialhovercard}>
                                        <CardContent>
                                            <Grid>
                                                <Grid item align="center">
                                                    <Avatar alt="User 1" src={Imgavatar3} className={classes.useravtar4} />
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item align="center" className={classes.sociallink2}>
                                                    <FacebookIcon className={classes.textFacebook} />
                                                    <TwitterIcon className={classes.textTwitter} />
                                                    <PinterestIcon className={classes.textPinterest} />
                                                    <YouTubeIcon className={classes.textYouTube} />
                                                    <LinkedInIcon className={classes.textLinkedIn} />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        37
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Mails
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h6">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        User card 4
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider7} title="Slider7 image" />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Userblurimg} className={classes.useravtar5} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body2">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem
                                                        accusantium recusandae beatae.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h4">
                                                        400
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Designs
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h4">
                                                        90
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Projects
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h4">
                                                        70
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Devlopment
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        User profile
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardMedia component="img" image={Slider5} title="Slider5 image" />
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Userimground} className={classes.useravtar6} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        Web Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body2">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem
                                                        accusantium recusandae beatae.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        User profile 2
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <div className={classes.usercardoverlay}>
                                            <Avatar alt="User 1" src={Userimground} className={classes.useravtar6} />
                                        </div>
                                        <CardContent>
                                            <Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        Web Designer
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body2">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem
                                                        accusantium recusandae beatae.
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h4">
                                                        400
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Designs
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h4">
                                                        90
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Projects
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h4">
                                                        70
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Devlopment
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Backround profile image
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <div className={classes.usercardoverlay1}>
                                            <Grid>
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit" className={classes.usename4}>
                                                        John Steve
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer at CreativesCastle Studio
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Button variant="contained" color="primary">
                                                        + Follow
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <CardActions>
                                            <Grid container spacing={1}>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h4">
                                                        134
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Shots
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h4">
                                                        13,227
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Shots
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography align="center" variant="h4">
                                                        488
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Shots
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={4}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        Backround profile image
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <div className={classes.usercardoverlay2}>
                                            <Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Userblurimg} className={classes.useravtar5} />
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="h3" color="inherit">
                                                        Linda Fox
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer at CreativesCastle Studio
                                                    </Typography>
                                                </Grid>
                                                <Divider className={classes.usersaprator} />
                                                <Grid item>
                                                    <Button variant="contained" color="primary">
                                                        + Follow
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                            <CardActions>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={4}>
                                                        <Typography align="center" variant="h4">
                                                            134
                                                        </Typography>
                                                        <Typography align="center" variant="body2">
                                                            Shots
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Typography align="center" variant="h4">
                                                            13,227
                                                        </Typography>
                                                        <Typography align="center" variant="body2">
                                                            Shots
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Typography align="center" variant="h4">
                                                            488
                                                        </Typography>
                                                        <Typography align="center" variant="body2">
                                                            Shots
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </CardActions>
                                        </div>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} md={5}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={12}>
                                    <Typography variant="h5" align="center">
                                        User settings
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card className={classes.usercard}>
                                        <CardContent>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar3} className={classes.useravtar7} />
                                                </Grid>
                                                <Grid item xs zeroMinWidth>
                                                    <Typography align="left" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="left" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Button variant="contained" color="primary">
                                                        Edit
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardContent>
                                            <Grid container spacing={1}>
                                                <Grid item md={3} sm={6}>
                                                    <Typography align="center" variant="h4">
                                                        69
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Shots
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} sm={6}>
                                                    <Typography align="center" variant="h4">
                                                        2749
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Followers
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} sm={6}>
                                                    <Typography align="center" variant="h4">
                                                        678
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Following
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={3} sm={6}>
                                                    <Typography align="center" variant="h4">
                                                        78
                                                    </Typography>
                                                    <Typography align="center" variant="body2">
                                                        Like
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="text" color="primary" startIcon={<MailTwoToneIcon />}>
                                                Message
                                            </Button>
                                            <Button color="secondary" className={classes.Buttonright}>
                                                Follow
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>
            </div>
        </React.Fragment>
    );
};

export default UICards;

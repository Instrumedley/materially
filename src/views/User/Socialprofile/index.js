import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Link,
    Typography,
    Chip,
    Checkbox,
    FormControl,
    Select,
    InputLabel,
    TextField,
    Radio,
    RadioGroup,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Tabs,
    Tab,
    Box,
    IconButton,
    MenuItem,
    FormControlLabel,
    Badge,
    Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import LanguageTwoToneIcon from '@material-ui/icons/LanguageTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import PanoramaTwoToneIcon from '@material-ui/icons/PanoramaTwoTone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone';

import Avatar from './../../../component/Avatar';
import { gridSpacing } from '../../../store/constant';
import Slider5 from './../../../assets/images/widget/slider5.jpg';
import Slider6 from './../../../assets/images/widget/slider6.jpg';
import Slider7 from './../../../assets/images/widget/slider7.jpg';
import Avatar1 from './../../../assets/images/users/avatar-1.jpg';
import Avatar2 from './../../../assets/images/users/avatar-2.jpg';
import Avatar3 from './../../../assets/images/users/avatar-3.jpg';
import Avatar4 from './../../../assets/images/users/avatar-4.jpg';
import Avatar5 from './../../../assets/images/users/avatar-5.jpg';
import Cover from './../../../assets/images/users/cover.jpg';
import Imgbg1 from './../../../assets/images/users/bg-1.jpg';
import Imgbg2 from './../../../assets/images/users/bg-2.jpg';
import Imgbg3 from './../../../assets/images/users/bg-3.jpg';
import Imgbox1 from './../../../assets/images/light-box/sl1.jpg';
import Imgbox2 from './../../../assets/images/light-box/sl2.jpg';
import Imgbox3 from './../../../assets/images/light-box/sl3.jpg';
import Imgbox4 from './../../../assets/images/light-box/sl4.jpg';
import Imgbox5 from './../../../assets/images/light-box/sl5.jpg';
import Imgbox6 from './../../../assets/images/light-box/sl6.jpg';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    usercard: {
        textAlign: 'center',
    },
    useravtar3: {
        width: '100px',
        height: '100px',
        boxShadow: '0 0 0 5px #fff',
        margin: '-70px auto 0',
    },
    usertopcontent: {
        paddingBottom: '0 !important',
    },
    userprofiletabs: {
        '& button': {
            minHeight: 'auto',
            minWidth: 'calc(100% / 4)',
            padding: '12px 16px',
        },
        '& button.Mui-selected': {
            color: theme.palette.primary.main,
        },
        '& button > span': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        '& button > span > svg': {
            marginBottom: '0px !important',
            marginRight: '10px',
        },
        '& button > span > span + svg': {
            margin: '0px 0px 0px auto !important',
            width: '14px',
            height: '14px',
        },
    },
    textactive: {
        color: theme.palette.success.main,
        '& svg': {
            width: '14px',
            height: '14px',
        },
    },
    textmuted: {
        color: theme.palette.grey[400],
        '& p': {
            fontSize: '80%',
        },
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
    userdivider: {
        width: '80px',
        height: '0.25rem',
        margin: '1.5rem auto',
    },
    usersaprator: {
        margin: '1.5rem 0 0',
        background: 'transparent',
    },
    useravtar: {
        margin: '-44px auto 10px',
        width: '65px',
        height: '65px',
        boxShadow: '0 0 0 5px #fff',
    },
    usercover: {
        padding: '0.5rem 0.5rem',
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
const UICards = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [value1, setValue1] = React.useState('female');
    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [age, setAge] = React.useState('');
    const handleageChange = (event) => {
        setAge(event.target.value);
    };
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: false,
    });
    const handleChangeState = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const [uservalue, usersetValue] = React.useState(0);
    const [uservalue2, usersetValue2] = React.useState(0);
    const [uservalue3, usersetValue3] = React.useState(0);
    const userhandleChange = (event, newValue) => {
        usersetValue((prev) => !prev);
    };
    const userhandleChange2 = (event, newValue) => {
        usersetValue2((prev) => !prev);
    };
    const userhandleChange3 = (event, newValue) => {
        usersetValue3((prev) => !prev);
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={gridSpacing}>
                <Grid item sm={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card className={classes.usercard}>
                                <CardMedia component="img" image={Cover} title="Cover image" className={classes.usercover} />
                                <CardContent className={classes.usertopcontent}>
                                    <Grid>
                                        <Grid item>
                                            <Grid container wrap="nowrap" className={classes.usersocialdata} spacing={2}>
                                                <Grid item md={4}>
                                                    <Avatar alt="User 1" src={Avatar3} className={classes.useravtar3} />
                                                    <Typography align="center" variant="h6" color="inherit">
                                                        Josephin Doe
                                                    </Typography>
                                                    <Typography align="center" variant="body2" color="inherit">
                                                        UI/UX Designer
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={8}>
                                                    <Grid container wrap="nowrap" className={classes.usersocialdata} spacing={2}>
                                                        <Grid item md={6}>
                                                            <Grid container wrap="nowrap" className={classes.usersocialdata} spacing={1}>
                                                                <Grid item>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        <LanguageTwoToneIcon />
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        www.phoenixcoded.net
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid container wrap="nowrap" className={classes.usersocialdata} spacing={1}>
                                                                <Grid item>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        <MailTwoToneIcon />
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        demo@domain.com
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                            <Grid container wrap="nowrap" className={classes.usersocialdata} spacing={1}>
                                                                <Grid item>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        <CallTwoToneIcon />
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        +1 9999-999-999
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item md={6}>
                                                            <Grid container wrap="nowrap" className={classes.usersocialdata} spacing={1}>
                                                                <Grid item>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        <PinDropTwoToneIcon />
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        {' '}
                                                                        4289 Calvin Street
                                                                    </Typography>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        Baltimore, near MD Tower Maryland,
                                                                    </Typography>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        Maryland (21201)
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Tabs value={value} onChange={handleChange} className={classes.userprofiletabs}>
                                                        <Tab icon={<HomeTwoToneIcon />} label="Home" {...a11yProps(0)} />
                                                        <Tab icon={<AccountCircleTwoToneIcon />} label="Profile" {...a11yProps(1)} />
                                                        <Tab icon={<CallTwoToneIcon />} label="My Contacts" {...a11yProps(2)} />
                                                        <Tab icon={<PanoramaTwoToneIcon />} label="Gallery" {...a11yProps(4)} />
                                                    </Tabs>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <Card>
                                        <CardContent>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item xs zeroMinWidth>
                                                    <Typography align="left" variant="h5" color="inherit">
                                                        Friends
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Chip size="small" label="100+" color="primary" />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar1} className={classes.useravtar7} />
                                                </Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar2} className={classes.useravtar7} />
                                                </Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar3} className={classes.useravtar7} />
                                                </Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar4} className={classes.useravtar7} />
                                                </Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar5} className={classes.useravtar7} />
                                                </Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar1} className={classes.useravtar7} />
                                                </Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar2} className={classes.useravtar7} />
                                                </Grid>
                                                <Grid item>
                                                    <Avatar alt="User 1" src={Avatar3} className={classes.useravtar7} />
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Card>
                                        <CardContent>
                                            <Typography align="left" variant="h5" color="inherit">
                                                Message
                                            </Typography>
                                        </CardContent>
                                        <Divider />
                                        <CardContent>
                                            <Grid container spacing={gridSpacing}>
                                                <Grid item xs={12}>
                                                    <Grid container wrap="nowrap" spacing={1}>
                                                        <Grid item>
                                                            <Avatar alt="User 1" src={Avatar1} className={classes.useravtar7} />
                                                        </Grid>
                                                        <Grid item xs zeroMinWidth>
                                                            <Typography align="left" variant="h6" color="inherit">
                                                                Alex Thompson
                                                            </Typography>
                                                            <Grid container wrap="nowrap" spacing={1}>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        Cheers!
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item className={classes.textactive}>
                                                                    <FiberManualRecordIcon />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container wrap="nowrap" spacing={1}>
                                                        <Grid item>
                                                            <Avatar alt="User 1" src={Avatar2} className={classes.useravtar7} />
                                                        </Grid>
                                                        <Grid item xs zeroMinWidth>
                                                            <Typography align="left" variant="h6" color="inherit">
                                                                John Doue
                                                            </Typography>
                                                            <Grid container wrap="nowrap" spacing={1}>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        stay hungry!
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item className={classes.textactive}>
                                                                    <FiberManualRecordIcon />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container wrap="nowrap" spacing={1}>
                                                        <Grid item>
                                                            <Avatar alt="User 1" src={Avatar3} className={classes.useravtar7} />
                                                        </Grid>
                                                        <Grid item xs zeroMinWidth>
                                                            <Typography align="left" variant="h6" color="inherit">
                                                                Alex Thompson
                                                            </Typography>
                                                            <Grid container wrap="nowrap" spacing={1}>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        Cheers!
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item className={classes.textmuted}>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        30 min ago
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container wrap="nowrap" spacing={1}>
                                                        <Grid item>
                                                            <Avatar alt="User 1" src={Avatar4} className={classes.useravtar7} />
                                                        </Grid>
                                                        <Grid item xs zeroMinWidth>
                                                            <Typography align="left" variant="h6" color="inherit">
                                                                John Doue
                                                            </Typography>
                                                            <Grid container wrap="nowrap" spacing={1}>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        Cheers!
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item className={classes.textmuted}>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        10 min ago
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container wrap="nowrap" spacing={1}>
                                                        <Grid item>
                                                            <Avatar alt="User 1" src={Avatar1} className={classes.useravtar7} />
                                                        </Grid>
                                                        <Grid item xs zeroMinWidth>
                                                            <Typography align="left" variant="h6" color="inherit">
                                                                Alex Thompson
                                                            </Typography>
                                                            <Grid container wrap="nowrap" spacing={1}>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        Cheers!
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item className={classes.textactive}>
                                                                    <FiberManualRecordIcon />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container wrap="nowrap" spacing={1}>
                                                        <Grid item>
                                                            <Avatar alt="User 1" src={Avatar2} className={classes.useravtar7} />
                                                        </Grid>
                                                        <Grid item xs zeroMinWidth>
                                                            <Typography align="left" variant="h6" color="inherit">
                                                                John Doue
                                                            </Typography>
                                                            <Grid container wrap="nowrap" spacing={1}>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="body2" color="inherit">
                                                                        stay hungry!
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item className={classes.textactive}>
                                                                    <FiberManualRecordIcon />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={8}>
                            <TabPanel value={value} index={0}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <Grid container wrap="nowrap" spacing={1}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" variant="h5" color="inherit">
                                                            Josephin Doe posted on your timeline
                                                        </Typography>
                                                        <Typography align="left" variant="body2" color="inherit">
                                                            50 minutes ago
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item className={classes.textactive}>
                                                        <IconButton aria-label="delete">
                                                            <MoreHorizIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardMedia component="img" image={Imgbg1} title="Slider5 image" className={classes.usercover} />
                                            <CardContent>
                                                <Typography align="left" variant="h5" color="inherit">
                                                    The new Lorem Ipsum is simply
                                                </Typography>
                                                <Typography align="left" variant="body2" color="inherit">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a type specimen book.
                                                </Typography>
                                            </CardContent>
                                            <Divider />
                                            <CardContent>
                                                <Grid container spacing={2}>
                                                    <Grid item>
                                                        <Button variant="text" color="primary" startIcon={<FavoriteTwoToneIcon />}>
                                                            Like
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary" startIcon={<ChatTwoToneIcon />}>
                                                            Comment
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary" startIcon={<ShareTwoToneIcon />}>
                                                            Share
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <Divider />
                                            <CardContent>
                                                <Grid container wrap="nowrap" spacing={1}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Button variant="text" color="secondary">
                                                            Comment (50)
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary">
                                                            See All
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={gridSpacing}>
                                                        <Grid item xs={12}>
                                                            <Grid container wrap="nowrap" spacing={1}>
                                                                <Grid item>
                                                                    <Avatar alt="User 1" src={Avatar3} className={classes.useravtar7} />
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="h6" color="inherit">
                                                                        Alex Thompson
                                                                    </Typography>
                                                                    <Grid container wrap="nowrap" spacing={1}>
                                                                        <Grid item>
                                                                            <Typography align="left" variant="body2" color="inherit">
                                                                                Looking Very nice type and scrambled
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Link color="secondary">Like</Link>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Link color="secondary">Comment</Link>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Divider />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container wrap="nowrap" spacing={1}>
                                                                <Grid item>
                                                                    <Avatar alt="User 1" src={Avatar2} className={classes.useravtar7} />
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="h6" color="inherit">
                                                                        Alex Thompson
                                                                    </Typography>
                                                                    <Grid container wrap="nowrap" spacing={1}>
                                                                        <Grid item>
                                                                            <Typography align="left" variant="body2" color="inherit">
                                                                                Looking Very nice type and scrambled
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Link color="secondary">Like</Link>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Link color="secondary">Comment</Link>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Divider />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                                                                <Grid item>
                                                                    <Avatar alt="User 1" src={Avatar1} />
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <TextField fullWidth label="Write comment hear !. . ." />
                                                                </Grid>
                                                                <Grid item>
                                                                    <Button variant="contained" size="small" color="primary">
                                                                        Send
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <Grid container wrap="nowrap" spacing={1}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" variant="h5" color="inherit">
                                                            Josephin Doe posted on your timeline
                                                        </Typography>
                                                        <Typography align="left" variant="body2" color="inherit">
                                                            50 minutes ago
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item className={classes.textactive}>
                                                        <IconButton aria-label="delete">
                                                            <MoreHorizIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardMedia component="img" image={Imgbg2} title="Slider5 image" className={classes.usercover} />
                                            <CardContent>
                                                <Typography align="left" variant="h5" color="inherit">
                                                    The new Lorem Ipsum is simply
                                                </Typography>
                                                <Typography align="left" variant="body2" color="inherit">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a type specimen book.
                                                </Typography>
                                            </CardContent>
                                            <Divider />
                                            <CardContent>
                                                <Grid container spacing={2}>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary" startIcon={<FavoriteTwoToneIcon />}>
                                                            Like
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary" startIcon={<ChatTwoToneIcon />}>
                                                            Comment
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary" startIcon={<ShareTwoToneIcon />}>
                                                            Share
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <Divider />
                                            <CardContent>
                                                <Grid container wrap="nowrap" spacing={1}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Button variant="text" color="secondary">
                                                            Comment (50)
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary">
                                                            See All
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={gridSpacing}>
                                                        <Grid item xs={12}>
                                                            <Grid container wrap="nowrap" spacing={1}>
                                                                <Grid item>
                                                                    <Avatar alt="User 1" src={Avatar2} className={classes.useravtar7} />
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <Typography align="left" variant="h6" color="inherit">
                                                                        Alex Thompson
                                                                    </Typography>
                                                                    <Grid container wrap="nowrap" spacing={1}>
                                                                        <Grid item>
                                                                            <Typography align="left" variant="body2" color="inherit">
                                                                                Looking Very nice type and scrambled
                                                                            </Typography>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Link color="secondary">Like</Link>
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <Link color="secondary">Comment</Link>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Divider />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                                                                <Grid item>
                                                                    <Avatar alt="User 1" src={Avatar1} />
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <TextField fullWidth label="Write comment hear !. . ." />
                                                                </Grid>
                                                                <Grid item>
                                                                    <Button variant="contained" size="small" color="primary">
                                                                        Send
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <Grid container wrap="nowrap" spacing={1}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" variant="h5" color="inherit">
                                                            Josephin Doe posted on your timeline
                                                        </Typography>
                                                        <Typography align="left" variant="body2" color="inherit">
                                                            50 minutes ago
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item className={classes.textactive}>
                                                        <IconButton aria-label="delete">
                                                            <MoreHorizIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardMedia component="img" image={Imgbg3} title="Slider5 image" className={classes.usercover} />
                                            <CardContent>
                                                <Typography align="left" variant="h5" color="inherit">
                                                    The new Lorem Ipsum is simply
                                                </Typography>
                                                <Typography align="left" variant="body2" color="inherit">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a type specimen book.
                                                </Typography>
                                            </CardContent>
                                            <Divider />
                                            <CardContent>
                                                <Grid container spacing={2}>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary" startIcon={<FavoriteTwoToneIcon />}>
                                                            Like
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary" startIcon={<ChatTwoToneIcon />}>
                                                            Comment
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary" startIcon={<ShareTwoToneIcon />}>
                                                            Share
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <Divider />
                                            <CardContent>
                                                <Grid container wrap="nowrap" spacing={1}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Button variant="text" color="secondary">
                                                            Comment (0)
                                                        </Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="text" color="secondary">
                                                            See All
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container spacing={gridSpacing}>
                                                        <Grid item xs={12}>
                                                            <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                                                                <Grid item>
                                                                    <Avatar alt="User 1" src={Avatar1} />
                                                                </Grid>
                                                                <Grid item xs zeroMinWidth>
                                                                    <TextField fullWidth label="Write comment hear !. . ." />
                                                                </Grid>
                                                                <Grid item>
                                                                    <Button variant="contained" size="small" color="primary">
                                                                        Send
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" variant="h5" color="inherit">
                                                            Personal details
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton aria-label="delete" onClick={userhandleChange}>
                                                            <EditTwoToneIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <Divider />
                                            <CardContent>
                                                {uservalue ? (
                                                    <div>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Full Name
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <TextField
                                                                    id="outlined-basic1"
                                                                    fullWidth
                                                                    label="Full Name"
                                                                    variant="outlined"
                                                                    defaultValue="Lary Doe"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Gender
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <RadioGroup
                                                                    aria-label="gender"
                                                                    name="gender1"
                                                                    value={value1}
                                                                    onChange={handleChange1}
                                                                >
                                                                    <Grid container spacing={1}>
                                                                        <Grid item>
                                                                            <FormControlLabel
                                                                                color="primary"
                                                                                value="female"
                                                                                control={<Radio />}
                                                                                label="Female"
                                                                            />
                                                                        </Grid>
                                                                        <Grid item>
                                                                            <FormControlLabel
                                                                                color="primary"
                                                                                value="male"
                                                                                control={<Radio />}
                                                                                label="Male"
                                                                            />
                                                                        </Grid>
                                                                    </Grid>
                                                                </RadioGroup>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Birth Date
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                                    <KeyboardDatePicker
                                                                        disableToolbar
                                                                        variant="inline"
                                                                        format="MM/dd/yyyy"
                                                                        margin="normal"
                                                                        id="date-picker-inline"
                                                                        label="Date picker inline"
                                                                        fullWidth
                                                                        value={selectedDate}
                                                                        onChange={handleDateChange}
                                                                        KeyboardButtonProps={{
                                                                            'aria-label': 'change date',
                                                                        }}
                                                                    />
                                                                </MuiPickersUtilsProvider>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Martail Status
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <FormControl variant="outlined" className={classes.formControl}>
                                                                    <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={age}
                                                                        fullWidth
                                                                        onChange={handleageChange}
                                                                        label="Age"
                                                                    >
                                                                        <MenuItem value="">
                                                                            <em>Select Marital Status</em>
                                                                        </MenuItem>
                                                                        <MenuItem value={10}>Married</MenuItem>
                                                                        <MenuItem value={20}>Unmarried</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="flex-start" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Location
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <TextField
                                                                    id="outlined-multiline-static"
                                                                    label="Bio"
                                                                    multiline
                                                                    fullWidth
                                                                    rows={2}
                                                                    defaultValue="4289 Calvin Street, Baltimore, near MD Tower Maryland, Maryland (21201)"
                                                                    variant="outlined"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="flex-start" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}></Grid>
                                                            <Grid item sm={9}>
                                                                <Button variant="contained" color="primary">
                                                                    Save
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Full Name
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    Lary Doe
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Gender
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    Male
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Birth Date
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    16-12-1994
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Martail Status
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    Unmarried
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="flex-start" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Location
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    4289 Calvin Street
                                                                </Typography>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    Baltimore, near MD Tower Maryland,
                                                                </Typography>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    Maryland (21201)
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" variant="h5" color="inherit">
                                                            Contact Information
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton aria-label="delete" onClick={userhandleChange2}>
                                                            <EditTwoToneIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <Divider />
                                            <CardContent>
                                                {uservalue2 ? (
                                                    <div>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Mobile Number
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <TextField
                                                                    id="outlined-basic2"
                                                                    fullWidth
                                                                    label="Mobile Number"
                                                                    variant="outlined"
                                                                    defaultValue="+1 9999-999-999"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Email Address
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <TextField
                                                                    id="outlined-basic3"
                                                                    fullWidth
                                                                    label="Email Address"
                                                                    variant="outlined"
                                                                    defaultValue="Demo@domain.com"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Twitter
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <TextField
                                                                    id="outlined-basic4"
                                                                    fullWidth
                                                                    label="Twitter"
                                                                    variant="outlined"
                                                                    defaultValue="@phonixcoded"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Skype
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <TextField
                                                                    id="outlined-basic5"
                                                                    fullWidth
                                                                    label="Skype"
                                                                    variant="outlined"
                                                                    defaultValue="@phonixcoded demo"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}></Grid>
                                                            <Grid item sm={9}>
                                                                <Button variant="contained" color="primary">
                                                                    Save
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Mobile Number
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    +1 9999-999-999
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Email Address
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    Demo@domain.com
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Twitter
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    @phonixcoded
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Skype
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    @phonixcoded demo
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <Grid container alignItems="center" wrap="nowrap" spacing={1}>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" variant="h5" color="inherit">
                                                            Other Information
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton aria-label="delete" onClick={userhandleChange3}>
                                                            <EditTwoToneIcon />
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                            <Divider />
                                            <CardContent>
                                                {uservalue3 ? (
                                                    <div>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Occupation
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <TextField
                                                                    id="outlined-basic6"
                                                                    fullWidth
                                                                    label="Occupation"
                                                                    variant="outlined"
                                                                    defaultValue="Designer"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="flex-start" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Skills
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={3}>
                                                                <Grid>
                                                                    <Grid item>
                                                                        <FormControlLabel
                                                                            control={
                                                                                <Checkbox
                                                                                    checked={state.checkedA}
                                                                                    onChange={handleChangeState}
                                                                                    name="checkedA"
                                                                                    color="primary"
                                                                                />
                                                                            }
                                                                            label="C#"
                                                                        />
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <FormControlLabel
                                                                            control={
                                                                                <Checkbox
                                                                                    checked={state.checkedB}
                                                                                    onChange={handleChangeState}
                                                                                    name="checkedB"
                                                                                    color="primary"
                                                                                />
                                                                            }
                                                                            label="Javascript"
                                                                        />
                                                                    </Grid>
                                                                    <Grid item>
                                                                        <FormControlLabel
                                                                            control={
                                                                                <Checkbox
                                                                                    checked={state.checkedC}
                                                                                    onChange={handleChangeState}
                                                                                    name="checkedC"
                                                                                    color="primary"
                                                                                />
                                                                            }
                                                                            label="Scss"
                                                                        />
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Jobs
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <TextField
                                                                    id="outlined-basic7"
                                                                    fullWidth
                                                                    label="Jobs"
                                                                    variant="outlined"
                                                                    defaultValue="Phoenixcoded"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}></Grid>
                                                            <Grid item sm={9}>
                                                                <Button variant="contained" color="primary">
                                                                    Save
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Occupation
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    Designer
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Skills
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    C#, Javascript, Scss
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                                                            <Grid item sm={3}>
                                                                <Typography align="left" variant="h6" color="inherit">
                                                                    Jobs
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item sm={9}>
                                                                <Typography align="left" variant="body2" color="inherit">
                                                                    Phoenixcoded
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={6}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Slider5}
                                                title="Slider5 image"
                                                className={classes.usercover}
                                            />
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
                                    <Grid item xs={6}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Slider7}
                                                title="Slider5 image"
                                                className={classes.usercover}
                                            />
                                            <CardContent>
                                                <Grid>
                                                    <Grid item>
                                                        <Badge
                                                            badgeContent={<StarsTwoToneIcon />}
                                                            className={classes.userbadge}
                                                            color="primary"
                                                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                                        >
                                                            <Avatar alt="User 1" src={Avatar3} className={classes.useravtar} />
                                                        </Badge>
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
                                    <Grid item xs={6}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Slider5}
                                                title="Slider5 image"
                                                className={classes.usercover}
                                            />
                                            <CardContent>
                                                <Grid>
                                                    <Grid item>
                                                        <Badge
                                                            badgeContent={<StarsTwoToneIcon />}
                                                            className={classes.userbadge}
                                                            color="primary"
                                                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                                        >
                                                            <Avatar alt="User 1" src={Avatar2} className={classes.useravtar} />
                                                        </Badge>
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
                                    <Grid item xs={6}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Slider6}
                                                title="Slider5 image"
                                                className={classes.usercover}
                                            />
                                            <CardContent>
                                                <Grid>
                                                    <Grid item>
                                                        <Avatar alt="User 1" src={Avatar3} className={classes.useravtar} />
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
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item lg={3} md={4} sm={3}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Imgbox1}
                                                title="Imgbox1 image"
                                                className={classes.usercover}
                                            />
                                        </Card>
                                    </Grid>
                                    <Grid item lg={3} md={4} sm={3}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Imgbox2}
                                                title="Imgbox1 image"
                                                className={classes.usercover}
                                            />
                                        </Card>
                                    </Grid>
                                    <Grid item lg={3} md={4} sm={3}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Imgbox3}
                                                title="Imgbox1 image"
                                                className={classes.usercover}
                                            />
                                        </Card>
                                    </Grid>
                                    <Grid item lg={3} md={4} sm={3}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Imgbox4}
                                                title="Imgbox1 image"
                                                className={classes.usercover}
                                            />
                                        </Card>
                                    </Grid>
                                    <Grid item lg={3} md={4} sm={3}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Imgbox5}
                                                title="Imgbox1 image"
                                                className={classes.usercover}
                                            />
                                        </Card>
                                    </Grid>
                                    <Grid item lg={3} md={4} sm={3}>
                                        <Card className={classes.usercard}>
                                            <CardMedia
                                                component="img"
                                                image={Imgbox6}
                                                title="Imgbox1 image"
                                                className={classes.usercover}
                                            />
                                        </Card>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default UICards;

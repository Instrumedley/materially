import React from 'react';
import PropTypes from 'prop-types';

import {
    Grid,
    Link,
    Typography,
    TextField,
    InputLabel,
    Button,
    Dialog,
    DialogActions,
    MenuItem,
    DialogContent,
    IconButton,
    Chip,
    Card,
    CardMedia,
    CardContent,
    Tabs,
    Tab,
    Box,
    Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import PhoneAndroidTwoToneIcon from '@material-ui/icons/PhoneAndroidTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import PaymentTwoToneIcon from '@material-ui/icons/PaymentTwoTone';
import CameraAltTwoToneIcon from '@material-ui/icons/CameraAltTwoTone';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';

import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

import Cover from './../../../../assets/images/widget/img-round1.jpg';
import Creditcard from './../../../../assets/images/page/img-credit-card.svg';

const useStyles = makeStyles((theme) => ({
    accountcard: {
        textAlign: 'center',
        position: 'relative',
    },
    accountavtar: {
        borderRadius: '15px',
        boxShadow: '0px 16px 32px rgba(169, 194, 209, 0.15), 0px 8px 16px rgba(169, 194, 209, 0.1)',
    },
    accountchangeavtar: {
        borderRadius: '40px',
        overflow: 'hidden',
        margin: '10px 10px 30px',
        position: 'relative',
        boxShadow: '0px 16px 32px rgba(169, 194, 209, 0.15), 0px 8px 16px rgba(169, 194, 209, 0.1)',
        '& > div': {
            opacity: '0',
            transition: 'all .2s ease-in-out',
        },
        '& img': {
            transition: 'all .2s ease-in-out',
        },
        '&:hover': {
            '& img': {
                filter: 'blur(3px)',
            },
            '& > div': {
                opacity: '1',
            },
        },
    },
    accounthoverdata: {
        background: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        padding: '0 30px',
        textAlign: 'center',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#fff',
        cursor: 'pointer',
        '& > svg': {
            width: '35px',
            height: '35px',
            marginBottom: '8px',
        },
    },
    fileinput: {
        display: 'none',
    },
    accountsvg: {
        width: '15px',
        height: '15px',
        verticalAlign: 'text-top',
        marginRight: '5px',
    },
    topnone: {
        paaddingTop: '0px',
    },
    accountdialog: {
        '& > div:nth-child(3) > div': {
            width: '700px',
            maxWidth: '100%',
            margin: '10px',
        },
    },
    accounttab: {
        marginLeft: '-24px',
        '& button': {
            minHeight: '40px',
            minWidth: '100%',
            padding: '0px 20px',
        },
        '& button.Mui-selected': {
            color: theme.palette.primary.main,
        },
        '& button > span': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        '& button > span > svg': {
            marginBottom: '0px !important',
            marginRight: '10px',
        },
        '& div > span': {
            right: 'auto',
        },
    },
    accountcontainer: {
        margin: '-8px -12px',
    },
    accountaction: {
        padding: '26px 26px',
    },
    textleft: {
        textAlign: 'left',
    },
    amountchip: {
        '& svg': {
            width: '16px',
            height: '16px',
            verticalAlign: 'sub',
        },
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
const dates = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
    { value: '30', label: '30' },
    { value: '31', label: '31' },
];
const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
];
const years = [
    { value: '1', label: '2021' },
    { value: '2', label: '2022' },
    { value: '3', label: '2023' },
    { value: '4', label: '2024' },
    { value: '5', label: '2025' },
    { value: '6', label: '2026' },
    { value: '7', label: '2027' },
    { value: '8', label: '2028' },
    { value: '9', label: '2029' },
];
const genders = [
    { value: '0', label: 'Select Gender' },
    { value: '1', label: 'Male' },
    { value: '2', label: 'Female' },
];

const AddProduct = () => {
    const classes = useStyles();
    const [open1, setOpen1] = React.useState(false);
    const handleClickOpendialog = () => {
        setOpen1(true);
    };
    const handleClosedialog = () => {
        setOpen1(false);
    };
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [date, setDate] = React.useState('16');
    const handleChangeselect = (event) => {
        setDate(event.target.value);
    };
    const [month, setMonth] = React.useState('12');
    const handleChangeselect1 = (event) => {
        setMonth(event.target.value);
    };
    const [year, setYear] = React.useState('1');
    const handleChangeselect2 = (event) => {
        setYear(event.target.value);
    };
    const [gender, setGender] = React.useState('0');
    const handleChangeselect3 = (event) => {
        setGender(event.target.value);
    };

    return (
        <React.Fragment>
            <Breadcrumb title="Account">
                <Typography component={RouterLink} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    E-commerce
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Account
                </Typography>
            </Breadcrumb>
            <div className={classes.root}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={0}>
                            <Grid item sm zeroMinWidth></Grid>
                            <Grid item>
                                <IconButton color="secondary" onClick={handleClickOpendialog}>
                                    <EditTwoToneIcon />
                                </IconButton>
                                <Dialog open={open1} onClose={handleClosedialog} className={classes.accountdialog}>
                                    <DialogContent>
                                        <Grid container spacing={gridSpacing} className={classes.accountcontainer}>
                                            <Grid item xs={12} sm={4}>
                                                <TextField
                                                    type="file"
                                                    id="fileupload"
                                                    fullWidth
                                                    label="Enter SKU"
                                                    variant="outlined"
                                                    className={classes.fileinput}
                                                />
                                                <InputLabel htmlFor="fileupload" className={classes.accountchangeavtar}>
                                                    <CardMedia component="img" image={Cover} title="Cover image" />
                                                    <div className={classes.accounthoverdata}>
                                                        <CameraAltTwoToneIcon />
                                                        <Typography component="div" variant="body2">
                                                            Click to change photo
                                                        </Typography>
                                                    </div>
                                                </InputLabel>
                                                <Tabs
                                                    value={value}
                                                    indicatorColor="primary"
                                                    textColor="primary"
                                                    onChange={handleChange}
                                                    orientation="vertical"
                                                    variant="fullWidth"
                                                    className={classes.accounttab}
                                                >
                                                    <Tab icon={<DescriptionTwoToneIcon />} label="Account Details" {...a11yProps(0)} />
                                                    <Tab icon={<LocalShippingTwoToneIcon />} label="Shipping Address" {...a11yProps(1)} />
                                                    <Tab icon={<PaymentTwoToneIcon />} label="Payment Methods" {...a11yProps(2)} />
                                                </Tabs>
                                            </Grid>
                                            <Grid item xs={12} sm={8}>
                                                <TabPanel value={value} index={0}>
                                                    <Grid container spacing={gridSpacing}>
                                                        <Grid item xs={12}>
                                                            <Grid container alignItems="center" spacing={0}>
                                                                <Grid item sm zeroMinWidth>
                                                                    <Typography component="div" align="left" variant="h4">
                                                                        Account Details
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <IconButton color="secondary" onClick={handleClosedialog}>
                                                                        <HighlightOffTwoToneIcon />
                                                                    </IconButton>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="First Name: *"
                                                                variant="outlined"
                                                                defaultValue="Felecia"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="Last Name: *"
                                                                variant="outlined"
                                                                defaultValue="Burke"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="E-Mail: *"
                                                                variant="outlined"
                                                                defaultValue="example@mail.com"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography component="div" align="left" variant="body2">
                                                                Date of Birth (optional):
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={6} sm={4}>
                                                            <TextField
                                                                select
                                                                label="Date"
                                                                value={date}
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={handleChangeselect}
                                                            >
                                                                {dates.map((option) => (
                                                                    <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </MenuItem>
                                                                ))}
                                                            </TextField>
                                                        </Grid>
                                                        <Grid item xs={6} sm={4}>
                                                            <TextField
                                                                select
                                                                label="Month"
                                                                value={month}
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={handleChangeselect1}
                                                            >
                                                                {months.map((option) => (
                                                                    <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </MenuItem>
                                                                ))}
                                                            </TextField>
                                                        </Grid>
                                                        <Grid item xs={12} sm={4}>
                                                            <TextField
                                                                select
                                                                label="Year"
                                                                value={year}
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={handleChangeselect2}
                                                            >
                                                                {years.map((option) => (
                                                                    <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </MenuItem>
                                                                ))}
                                                            </TextField>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography component="div" align="left" variant="body2">
                                                                Gender (optional):
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                select
                                                                label="Gender"
                                                                value={gender}
                                                                fullWidth
                                                                variant="outlined"
                                                                onChange={handleChangeselect3}
                                                            >
                                                                {genders.map((option) => (
                                                                    <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </MenuItem>
                                                                ))}
                                                            </TextField>
                                                        </Grid>
                                                    </Grid>
                                                </TabPanel>
                                                <TabPanel value={value} index={1}>
                                                    <Grid container spacing={gridSpacing}>
                                                        <Grid item xs={12}>
                                                            <Grid container alignItems="center" spacing={0}>
                                                                <Grid item sm zeroMinWidth>
                                                                    <Typography component="div" align="left" variant="h4">
                                                                        Shipping Address
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item></Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="Country: *"
                                                                variant="outlined"
                                                                defaultValue="Chine"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="City: *"
                                                                variant="outlined"
                                                                defaultValue="Hong Kong"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="House Number and Street: *"
                                                                variant="outlined"
                                                                defaultValue="898 Joanne Lane street"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="ZIP Code: *"
                                                                variant="outlined"
                                                                defaultValue="02110"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="Phone Number: *"
                                                                variant="outlined"
                                                                defaultValue="+1 (070) 123-4567"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </TabPanel>
                                                <TabPanel value={value} index={2}>
                                                    <Grid container spacing={gridSpacing}>
                                                        <Grid item xs={12}>
                                                            <Grid container alignItems="center" spacing={0}>
                                                                <Grid item sm zeroMinWidth>
                                                                    <Typography component="div" align="left" variant="h4">
                                                                        Shipping Address
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <IconButton color="secondary" onClick={handleClosedialog}>
                                                                        <HighlightOffTwoToneIcon />
                                                                    </IconButton>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="Name on Card: *"
                                                                variant="outlined"
                                                                defaultValue="Chine"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="Card Number: *"
                                                                variant="outlined"
                                                                defaultValue="**** **** **** 1234"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                fullWidth
                                                                label="Expire Date"
                                                                variant="outlined"
                                                                defaultValue="12/2020"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                type="password"
                                                                fullWidth
                                                                label="CVV Code"
                                                                variant="outlined"
                                                                defaultValue="123"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </TabPanel>
                                            </Grid>
                                        </Grid>
                                    </DialogContent>
                                    <DialogActions className={classes.accountaction}>
                                        <Button variant="contained" color="primary" startIcon={<CachedRoundedIcon />}>
                                            Update
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <Card className={classes.accountcard}>
                            <CardContent>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <CardMedia component="img" image={Cover} title="Cover image" className={classes.accountavtar} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component="div" align="center" variant="h3">
                                            Felecia Burke
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Chip
                                            color="primary"
                                            className={classes.amountchip}
                                            label={
                                                <React.Fragment>
                                                    <AccountBalanceWalletTwoToneIcon /> Balance: $5,000
                                                </React.Fragment>
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <CardContent>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography component="div" align="left" variant="subtitle1">
                                            <PinDropTwoToneIcon className={classes.accountsvg} /> Hong Kong, China
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component="div" align="left" variant="subtitle1">
                                            <MailTwoToneIcon className={classes.accountsvg} /> example@mail.com
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component="div" align="left" variant="subtitle1">
                                            <PhoneAndroidTwoToneIcon className={classes.accountsvg} /> +1 (070) 123-4567
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8} md={9}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Card>
                                            <CardContent>
                                                <Grid container alignItems="center" spacing={0}>
                                                    <Grid item sm zeroMinWidth>
                                                        <Typography component="div" align="left" variant="h5">
                                                            Shipping Address
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item></Grid>
                                                </Grid>
                                            </CardContent>
                                            <CardContent className={classes.topnone}>
                                                <Grid container spacing={1}>
                                                    <Grid item xs={12}>
                                                        <Grid container alignItems="center" spacing={0}>
                                                            <Grid item sm zeroMinWidth>
                                                                <Typography component="div" align="left" variant="subtitle1">
                                                                    Address
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography component="div" variant="subtitle2">
                                                                    898 Joanne Lane street
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container alignItems="center" spacing={0}>
                                                            <Grid item sm zeroMinWidth>
                                                                <Typography component="div" align="left" variant="subtitle1">
                                                                    City
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography component="div" variant="subtitle2">
                                                                    Hong Kong
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container alignItems="center" spacing={0}>
                                                            <Grid item sm zeroMinWidth>
                                                                <Typography component="div" align="left" variant="subtitle1">
                                                                    Expire
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography component="div" variant="subtitle2">
                                                                    12/31
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container alignItems="center" spacing={0}>
                                                            <Grid item sm zeroMinWidth>
                                                                <Typography component="div" align="left" variant="subtitle1">
                                                                    Country
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography component="div" variant="subtitle2">
                                                                    China
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container alignItems="center" spacing={0}>
                                                            <Grid item sm zeroMinWidth>
                                                                <Typography component="div" align="left" variant="subtitle1">
                                                                    Zip code
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography component="div" variant="subtitle2">
                                                                    02110
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Card className={classes.accountcard}>
                                            <CardContent>
                                                <Grid container spacing={gridSpacing}>
                                                    <Grid item xs={12}>
                                                        <Grid container alignItems="center" spacing={0}>
                                                            <Grid item sm zeroMinWidth>
                                                                <Typography component="div" align="left" variant="h5">
                                                                    Wish List
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Grid container spacing={1}>
                                                                    <Grid item></Grid>
                                                                    <Grid item>
                                                                        <Link href="#" color="primary">
                                                                            View All
                                                                        </Link>
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container alignItems="center" spacing={gridSpacing}>
                                                            <Grid item xs={12} sm={6}>
                                                                <CardMedia
                                                                    component="img"
                                                                    image={Cover}
                                                                    title="Cover image"
                                                                    className={classes.accountavtar}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                <Grid container spacing={1} className={classes.textleft}>
                                                                    <Grid item xs={12}>
                                                                        <Typography align="left" component="div" variant="h6">
                                                                            Apple Watch Series 4
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <Typography align="left" component="div" variant="body2">
                                                                            Product ID: 790841
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <Typography align="left" component="div" variant="body2">
                                                                            Color: Gold
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <Typography align="left" component="div" variant="body2">
                                                                            Size: 44mm
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <Typography align="left" component="div" variant="body2">
                                                                            Price: $399
                                                                        </Typography>
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
                            <Grid item xs={12} md={6}>
                                <Card className={classes.accountcard}>
                                    <CardContent>
                                        <Grid container spacing={gridSpacing}>
                                            <Grid item xs={12}>
                                                <Grid container alignItems="center" spacing={0}>
                                                    <Grid item sm zeroMinWidth>
                                                        <Typography component="div" align="left" variant="h5">
                                                            Payment methods
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item></Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <CardMedia component="img" image={Creditcard} title="Cover image" />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <Divider />
                                    <CardContent>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12}>
                                                <Grid container alignItems="center" spacing={0}>
                                                    <Grid item sm zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            Card Type
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography component="div" variant="subtitle2">
                                                            VISA
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container alignItems="center" spacing={0}>
                                                    <Grid item sm zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            Card Holder
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography component="div" variant="subtitle2">
                                                            Mark Anderson
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container alignItems="center" spacing={0}>
                                                    <Grid item sm zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            Expire
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography component="div" variant="subtitle2">
                                                            12/31
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container alignItems="center" spacing={0}>
                                                    <Grid item sm zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            Card Number
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography component="div" variant="subtitle2">
                                                            0123 4567 8910 1112
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container alignItems="center" spacing={0}>
                                                    <Grid item sm zeroMinWidth>
                                                        <Typography component="div" align="left" variant="subtitle1">
                                                            Balance
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography component="div" variant="subtitle2">
                                                            $1,000,000
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
            </div>
        </React.Fragment>
    );
};

export default AddProduct;

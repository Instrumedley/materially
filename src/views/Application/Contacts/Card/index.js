import React from 'react';
import {
    Grid,
    Typography,
    IconButton,
    MenuItem,
    Fab,
    Button,
    TextField,
    Slide,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../../component/Breadcrumb';
import AddIcon from '@material-ui/icons/Add';
import GridOnTwoToneIcon from '@material-ui/icons/GridOnTwoTone';
import FormatListBulletedTwoToneIcon from '@material-ui/icons/FormatListBulletedTwoTone';

import Cover1 from './../../../../assets/images/users/img-avatar-1.jpg';
import Cover2 from './../../../../assets/images/users/img-avatar-2.jpg';
import Cover3 from './../../../../assets/images/users/img-avatar-3.jpg';
import { gridSpacing } from '../../../../store/constant';

import ConactCard from './ConactCard';

const useStyles = makeStyles((theme) => ({
    useradddialog: {
        '&>div:nth-child(3)': {
            justifyContent: 'flex-end',
            '&>div': {
                margin: '0px',
                borderRadius: '0px',
                maxWidth: '450px',
                maxHeight: '100%',
            },
        },
    },
    userlisttable: {
        marginTop: '24px',
    },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

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
const Product = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClickOpendialog = () => {
        setOpen(true);
    };
    const handleClosedialog = () => {
        setOpen(false);
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

    return (
        <React.Fragment>
            <Breadcrumb title="Contact Card">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Contacts
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Card
                </Typography>
            </Breadcrumb>
            <Grid container wrap="nowrap" justify="flex-end" spacing={gridSpacing}>
                <Grid item>
                    <Grid container wrap="nowrap" justify="flex-end" spacing={1}>
                        <Grid item>
                            <IconButton color="secondary" component={Link} to="./Card">
                                <GridOnTwoToneIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color="secondary" component={Link} to="./List">
                                <FormatListBulletedTwoToneIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Fab color="primary" size="small" onClick={handleClickOpendialog}>
                        <AddIcon />
                    </Fab>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClosedialog}
                        className={classes.useradddialog}
                    >
                        <DialogTitle>{'New Contact'}</DialogTitle>
                        <DialogContent>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="First Name" variant="outlined" defaultValue="Joseph" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Last Name" variant="outlined" defaultValue="William" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="E-mail" variant="outlined" defaultValue="Joseph@mail.com" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Phone Number" variant="outlined" defaultValue="+1 (070) 123-4567" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Job Title" variant="outlined" defaultValue="Founder & CEO" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth label="Address" variant="outlined" defaultValue="Hong Kong, China" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">Date of Birth</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField select label="Date" value={date} fullWidth variant="outlined" onChange={handleChangeselect}>
                                        {dates.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
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
                                <Grid item xs={4}>
                                    <TextField select label="Year" value={year} fullWidth variant="outlined" onChange={handleChangeselect2}>
                                        {years.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rowsMax={4}
                                        label="Notes"
                                        variant="outlined"
                                        defaultValue="Fundamentally redesigned and reengineered The Apple Watch display yet."
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
                                Add Contact
                            </Button>
                            <Button variant="text" onClick={handleClosedialog} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={4}>
                    <ConactCard
                        prodimg={Cover1}
                        primary="Felecia Burke"
                        position="Founder & CEO"
                        location="Hong Kong, China"
                        email="example@mail.com"
                        phone="+1 (070) 123-4567"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ConactCard
                        prodimg={Cover2}
                        primary="Addison James"
                        position="Director"
                        location="Sydney, Australia"
                        email="example@mail.com"
                        phone="+1 (070) 123-4567"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ConactCard
                        prodimg={Cover3}
                        primary="Lynn George"
                        position="Founder"
                        location="Shanghai, China"
                        email="example@mail.com"
                        phone="+1 (070) 123-4567"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ConactCard
                        prodimg={Cover2}
                        primary="Jamie Rhodes"
                        position="Lead Developer"
                        location="Los Angeles, USA"
                        email="example@mail.com"
                        phone="+1 (070) 123-4567"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ConactCard
                        prodimg={Cover3}
                        primary="Jim Murphy"
                        position="Manager"
                        location="Los Angeles, USA"
                        email="example@mail.com"
                        phone="+1 (070) 123-4567"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ConactCard
                        prodimg={Cover1}
                        primary="Addison Jones"
                        position="Product Manager"
                        location="Miami, USA"
                        email="example@mail.com"
                        phone="+1 (070) 123-4567"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Product;

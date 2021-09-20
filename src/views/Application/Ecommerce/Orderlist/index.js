import React, { useState } from 'react';

import MUIDataTable from 'mui-datatables';

import { Typography, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Breadcrumb from './../../../../component/Breadcrumb';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    textsuccess: {
        color: theme.palette.success.main,
    },
    textprimary: {
        color: theme.palette.primary.main,
    },
    textwarning: {
        color: theme.palette.warning.main,
    },
    texterror: {
        color: theme.palette.error.main,
    },
    badgetext: {
        '& > svg': {
            width: '15px',
            height: '15px',
            verticalAlign: 'text-top',
            marginRight: '5px',
        },
    },
    ordertable: {
        '& tr td:last-child': {
            paddingTop: '0px',
            paddingBottom: '0px',
        },
    },
}));

const Product = () => {
    const classes = useStyles();

    const initialData = [
        ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', classes.textsuccess],
        ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', classes.textprimary],
        ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', classes.texterror],
        ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', classes.textwarning],
        ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', classes.textsuccess],
        ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', classes.textprimary],
        ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', classes.texterror],
        ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', classes.textwarning],
        ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', classes.textsuccess],
        ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', classes.textprimary],
        ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', classes.texterror],
        ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', classes.textwarning],
        ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', classes.textsuccess],
        ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', classes.textprimary],
        ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', classes.texterror],
        ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', classes.textwarning],
        ['#790841', 'Joseph William', 'Toronto', 'Credit Card', '$2500', '12.07.2018', 'Complete', classes.textsuccess],
        ['#130435', 'Akshay Handge', 'Toronto', 'Paytm', '$2500', '12.07.2018', 'Processing', classes.textprimary],
        ['#377657', 'Lary Doe', 'Toronto', 'Net Banking', '$2500', '12.07.2018', 'Complete', classes.texterror],
        ['#256752', 'Sara Soudein', 'Toronto', 'Upi', '$2500', '12.07.2018', 'Pending', classes.textwarning],
    ];
    const [data] = useState(initialData);

    const columns = [
        {
            name: 'Order ID',
            options: {
                filter: true,
            },
        },
        {
            name: 'Customer Name',
            options: {
                filter: true,
            },
        },
        {
            name: 'Payment TyPE',
            options: {
                filter: true,
            },
        },
        {
            name: 'Total',
            options: {
                filter: true,
            },
        },
        {
            name: 'Date',
            options: {
                filter: true,
            },
        },
        {
            name: 'QTY',
            options: {
                filter: true,
            },
        },
        {
            name: 'Status',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <Typography align="left" component="div" variant="body2" className={classes.badgetext}>
                            <FiberManualRecordIcon className={data[rowIndex][7]} /> {data[rowIndex][6]}
                        </Typography>
                    );
                },
            },
        },
        {
            name: '',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <React.Fragment>
                            <IconButton color="primary">
                                <VisibilityTwoToneIcon />
                            </IconButton>
                            <IconButton color="secondary">
                                <EditTwoToneIcon />
                            </IconButton>
                        </React.Fragment>
                    );
                },
            },
        },
    ];

    return (
        <React.Fragment>
            <Breadcrumb title="Order List">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    E-commerce
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Order List
                </Typography>
            </Breadcrumb>
            <MUIDataTable
                title="Order List"
                data={data}
                columns={columns}
                className={classes.ordertable}
                options={{ download: false, print: false, search: false, filter: false, viewColumns: false }}
            />
        </React.Fragment>
    );
};

export default Product;

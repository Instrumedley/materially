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
        ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', classes.textsuccess],
        ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', classes.texterror],
        ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', classes.textwarning],
        ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', classes.textprimary],
        ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', classes.textsuccess],
        ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', classes.texterror],
        ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', classes.textwarning],
        ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', classes.textprimary],
        ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', classes.textsuccess],
        ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', classes.texterror],
        ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', classes.textwarning],
        ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', classes.textprimary],
        ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', classes.textsuccess],
        ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', classes.texterror],
        ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', classes.textwarning],
        ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', classes.textprimary],
        ['Joseph William', 'Joseph@mail.com', 'Hong Kong, China', '1000', '12.07.2018', 'Active', classes.textsuccess],
        ['Akshay Handge', 'Akshay@mail.com', 'New York, USA', '1000', '12.07.2018', 'deactive', classes.texterror],
        ['Lary Doe', 'Lary@mail.com', 'New York, USA', '1000', '12.07.2018', 'pending', classes.textwarning],
        ['Sara Soudein', 'Sara@mail.com', 'New York, USA', '1000', '12.07.2018', 'confirm', classes.textprimary],
    ];
    const [data] = useState(initialData);

    const columns = [
        {
            name: 'Order ID',
            options: {
                filter: false,
                sort: false,
                empty: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <React.Fragment>
                            <Typography align="left" component="div" variant="h6">
                                {' '}
                                {data[rowIndex][0]}
                            </Typography>
                            <Typography align="left" component="div" variant="body2">
                                {' '}
                                {data[rowIndex][1]}
                            </Typography>
                        </React.Fragment>
                    );
                },
            },
        },
        {
            name: 'Location',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return data[rowIndex][2];
                },
            },
        },
        {
            name: 'Orders',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return data[rowIndex][3];
                },
            },
        },
        {
            name: 'Registered',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return data[rowIndex][4];
                },
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
                            <FiberManualRecordIcon className={data[rowIndex][6]} /> {data[rowIndex][5]}
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
            <Breadcrumb title="Customer List">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    E-commerce
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Customer List
                </Typography>
            </Breadcrumb>
            <MUIDataTable
                title="Customer List"
                data={data}
                columns={columns}
                className={classes.ordertable}
                options={{ download: false, print: false, search: false, filter: false, viewColumns: false }}
            />
        </React.Fragment>
    );
};

export default Product;

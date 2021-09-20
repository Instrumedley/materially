import React, { useState } from 'react';

import MUIDataTable from 'mui-datatables';

import Breadcrumb from './../../../component/Breadcrumb';
import Avatar from './../../../component/Avatar';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { makeStyles, Typography, Grid, Chip, Box, Fab } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Avatar1 from './../../../assets/images/users/avatar-1.jpg';
import Avatar2 from './../../../assets/images/users/avatar-2.jpg';
import Avatar3 from './../../../assets/images/users/avatar-3.jpg';
import Avatar4 from './../../../assets/images/users/avatar-4.jpg';
import Avatar5 from './../../../assets/images/users/avatar-5.jpg';

const initialData = [
    [Avatar3, 'Support Lead', 'Edinburgh', 61, '2011/04/25', 'Active', 'Gabby George', 'GG@domain.com'],
    [Avatar2, 'Accountant', 'Tokyo', 63, '2011/07/25', 'Disabled', 'Garrett Winters', 'GW@domain.com'],
    [Avatar1, 'Technical Author', 'San Francisco', 66, '2009/01/12', 'Disabled', 'Ashton Cox', 'AC@domain.com'],
    [Avatar4, 'Javascript Developer', 'Edinburgh', 22, '2012/03/29', 'Active', 'Cedric Kelly', 'CK@domain.com'],
    [Avatar5, 'Accountant', 'Tokyo', 33, '2008/11/28', 'Active', 'Airi Satou', 'AS@domain.com'],
    [Avatar1, 'Integration Specialist', 'New York', 61, '2012/12/02', 'Disabled', 'Brielle Williamson', 'BW@domain.com'],
];

const useStyles = makeStyles((theme) => ({
    overlaymain: {
        position: 'relative',
        display: 'block',
        margin: '0px',
        '&:hover > span': {
            display: 'flex',
        },
    },
    btnlast: {
        marginLeft: '5px',
    },
    userlisttable: {
        background: 'transparent',
        boxShadow: 'none',
        '& table': {
            borderSpacing: '0 10px',
            borderCollapse: 'separate',
        },
        '& tbody tr': {
            background: '#fff',
            boxShadow: '0 2px 6px -1px rgba(0, 0, 0, 0.1)',
        },
        '& tbody tr:hover': {
            background: theme.palette.primary.main + '!important',
            '& td': {
                color: '#fff',
            },
        },
    },
}));

const UIList = () => {
    const classes = useStyles();
    const [data] = useState(initialData);

    const columns = [
        {
            name: 'Name',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <Grid key={rowIndex} container spacing={2} alignItems="center">
                            <Grid item>
                                <Avatar alt="User 1" src={data[rowIndex][0]} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="h6" color="inherit">
                                    {data[rowIndex][6]}
                                </Typography>
                                <Typography align="left" variant="body2" color="inherit">
                                    {data[rowIndex][7]}
                                </Typography>
                            </Grid>
                        </Grid>
                    );
                },
            },
        },
        {
            name: 'Position',
            options: {
                filter: true,
            },
        },
        {
            name: 'Office',
            options: {
                filter: true,
            },
        },
        {
            name: 'Age',
            options: {
                filter: true,
            },
        },
        {
            name: 'Start date',
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
                        <Box component="span" m={1} className={classes.overlaymain}>
                            {data[rowIndex][5] === 'Active' ? <Chip label="Primary" color="primary" /> : ''}
                            {data[rowIndex][5] === 'Disabled' ? <Chip label="Disabled" color="secondary" /> : ''}
                        </Box>
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
                        <Box component="span" m={1} className={classes.overlaymain}>
                            <Box component="span" className={classes.overlayedit}>
                                <Fab variant="extended" size="small" color="primary" aria-label="add">
                                    <DoneAllIcon />
                                </Fab>
                                <Fab variant="extended" size="small" color="secondary" className={classes.btnlast}>
                                    <DeleteOutlineIcon />
                                </Fab>
                            </Box>
                        </Box>
                    );
                },
            },
        },
    ];

    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'vertical',
        onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
        onChangeRowsPerPage: (numberOfRows) => console.log('numberOfRows: ', numberOfRows),
        onChangePage: (currentPage) => console.log('currentPage: ', currentPage),
    };

    return (
        <React.Fragment>
            <Breadcrumb title="User List">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    User
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    List
                </Typography>
            </Breadcrumb>
            <MUIDataTable title={'Action Button'} data={data} columns={columns} options={options} className={classes.userlisttable} />
        </React.Fragment>
    );
};

export default UIList;

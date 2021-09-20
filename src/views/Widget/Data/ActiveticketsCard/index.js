import React, { useState } from 'react';

import { makeStyles, Avatar, Button, Card, Divider, CardHeader, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';

import Avatar1 from './../../../../assets/images/users/avatar-1.jpg';
import Avatar2 from './../../../../assets/images/users/avatar-2.jpg';
import Avatar3 from './../../../../assets/images/users/avatar-3.jpg';
import Avatar4 from './../../../../assets/images/users/avatar-4.jpg';

const useStyles = makeStyles((theme) => ({
    projecttablecard: {
        padding: '0px',
    },
    tickettable: {
        boxShadow: 'none',
    },
    MuiToolbarRegular: {
        display: 'none',
    },
}));

const initialData = [
    [
        '12',
        'hours',
        Avatar1,
        'John Deo',
        '[#1183] Workaround for OS X selects printing bug',
        'Chrome fixed the bug several versions ago, thus rendering this...',
    ],
    [
        '16',
        'hours',
        Avatar2,
        'Jems Win',
        '[#1249] Vertically center carousel controls',
        'Try any carousel control and reduce the screen width below...',
    ],
    [
        '40',
        'hours',
        Avatar3,
        'Jeny Wiliiam',
        '[#1254] Inaccurate small pagination height',
        'The height of pagination elements is not consistent with...',
    ],
    [
        '16',
        'hours',
        Avatar4,
        'Jems Win',
        '[#1249] Vertically center carousel controls',
        'Try any carousel control and reduce the screen width below...',
    ],
];

const ActiveticketsCard = (props) => {
    const { title } = props;
    const classes = useStyles();

    const [data] = useState(initialData);
    const columns = [
        {
            name: 'Due',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <React.Fragment>
                            <Typography align="left" component="div" variant="subtitle1">
                                {data[rowIndex][0]}
                            </Typography>
                            <Typography align="left" component="div" variant="subtitle2">
                                {data[rowIndex][1]}
                            </Typography>
                        </React.Fragment>
                    );
                },
            },
        },
        {
            name: 'Name',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <Grid key={rowIndex} container spacing={2} alignItems="center">
                            <Grid item>
                                <Avatar alt="User 1" src={data[rowIndex][2]} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle2">
                                    {data[rowIndex][3]}
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
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <React.Fragment>
                            <Typography align="left" component="div" variant="subtitle1">
                                {data[rowIndex][4]}
                            </Typography>
                            <Typography align="left" component="div" variant="subtitle2">
                                {data[rowIndex][5]}
                            </Typography>
                        </React.Fragment>
                    );
                },
            },
        },
    ];

    return (
        <Card className={classes.projecttablecard}>
            <CardHeader
                title={
                    <Typography component="div" className="card-header">
                        {title}
                    </Typography>
                }
            />
            <Divider />
            <CardContent className="p-0 responsive-table-card">
                <MUIDataTable
                    data={data}
                    columns={columns}
                    className={classes.tickettable}
                    options={{ download: false, print: false, search: false, filter: false, viewColumns: false, pagination: false }}
                />
            </CardContent>
            <Divider />
            <CardActions className="f-right">
                <Button variant="text" size="small" color="primary">
                    View all Projects
                </Button>
            </CardActions>
        </Card>
    );
};

export default ActiveticketsCard;

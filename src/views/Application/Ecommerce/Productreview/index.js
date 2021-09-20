import React, { useState } from 'react';

import MUIDataTable from 'mui-datatables';

import {
    Grid,
    Link,
    Typography,
    IconButton,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    TextField,
    MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Rating from '@material-ui/lab/Rating';

import { gridSpacing } from '../../../../store/constant';

import Breadcrumb from './../../../../component/Breadcrumb';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

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
    reviewdialog: {
        '&>div:nth-child(3)': {
            '&>div': {
                maxWidth: '400px',
            },
        },
    },
    reviewcontainer: {
        marginTop: '0px',
        marginBottom: '0px',
    },
}));
const reviewstate = [
    {
        value: '1',
        label: 'Published',
    },
    {
        value: '2',
        label: 'Pending',
    },
    {
        value: '3',
        label: 'confirm',
    },
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
    const initialData = [
        [
            'Apple Watch Series 4',
            'Joseph William',
            'The Series 4 is a significant step...',
            '4',
            '12.07.2018',
            'Published',
            classes.textsuccess,
        ],
        ['Apple Watch Series 4', 'Akshay Handge', 'The Series 4 is a significant step...', '5', '12.07.2018', 'Pending', classes.texterror],
        ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '3', '12.07.2018', 'confirm', classes.textprimary],
        [
            'Apple Watch Series 4',
            'Joseph William',
            'The Series 4 is a significant step...',
            '2',
            '12.07.2018',
            'Published',
            classes.textsuccess,
        ],
        ['Apple Watch Series 4', 'Akshay Handge', 'The Series 4 is a significant step...', '5', '12.07.2018', 'Pending', classes.texterror],
        ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '1', '12.07.2018', 'confirm', classes.textprimary],
        [
            'Apple Watch Series 4',
            'Joseph William',
            'The Series 4 is a significant step...',
            '4',
            '12.07.2018',
            'Published',
            classes.textsuccess,
        ],
        ['Apple Watch Series 4', 'Akshay Handge', 'The Series 4 is a significant step...', '5', '12.07.2018', 'Pending', classes.texterror],
        ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '3', '12.07.2018', 'confirm', classes.textprimary],
        [
            'Apple Watch Series 4',
            'Joseph William',
            'The Series 4 is a significant step...',
            '2',
            '12.07.2018',
            'Published',
            classes.textsuccess,
        ],
        ['Apple Watch Series 4', 'Akshay Handge', 'The Series 4 is a significant step...', '5', '12.07.2018', 'Pending', classes.texterror],
        ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '1', '12.07.2018', 'confirm', classes.textprimary],
        [
            'Apple Watch Series 4',
            'Joseph William',
            'The Series 4 is a significant step...',
            '4',
            '12.07.2018',
            'Published',
            classes.textsuccess,
        ],
        ['Apple Watch Series 4', 'Akshay Handge', 'The Series 4 is a significant step...', '5', '12.07.2018', 'Pending', classes.texterror],
        ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '3', '12.07.2018', 'confirm', classes.textprimary],
        [
            'Apple Watch Series 4',
            'Joseph William',
            'The Series 4 is a significant step...',
            '2',
            '12.07.2018',
            'Published',
            classes.textsuccess,
        ],
        ['Apple Watch Series 4', 'Akshay Handge', 'The Series 4 is a significant step...', '5', '12.07.2018', 'Pending', classes.texterror],
        ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '1', '12.07.2018', 'confirm', classes.textprimary],
        [
            'Apple Watch Series 4',
            'Joseph William',
            'The Series 4 is a significant step...',
            '4',
            '12.07.2018',
            'Published',
            classes.textsuccess,
        ],
        ['Apple Watch Series 4', 'Akshay Handge', 'The Series 4 is a significant step...', '5', '12.07.2018', 'Pending', classes.texterror],
        ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '3', '12.07.2018', 'confirm', classes.textprimary],
        [
            'Apple Watch Series 4',
            'Joseph William',
            'The Series 4 is a significant step...',
            '2',
            '12.07.2018',
            'Published',
            classes.textsuccess,
        ],
        ['Apple Watch Series 4', 'Akshay Handge', 'The Series 4 is a significant step...', '5', '12.07.2018', 'Pending', classes.texterror],
        ['Apple Watch Series 4', 'Lary Doe', 'The Series 4 is a significant step...', '1', '12.07.2018', 'confirm', classes.textprimary],
    ];
    const [data] = useState(initialData);

    const columns = [
        {
            name: 'Product',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return data[rowIndex][0];
                },
            },
        },
        {
            name: 'Author',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return data[rowIndex][1];
                },
            },
        },
        {
            name: 'Review',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return data[rowIndex][2];
                },
            },
        },
        {
            name: 'Rating',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <React.Fragment>
                            {data[rowIndex][3] >= 1 ? (
                                <StarOutlinedIcon className={classes.textwarning} />
                            ) : (
                                <StarBorderOutlinedIcon className={classes.textwarning} />
                            )}
                            {data[rowIndex][3] >= 2 ? (
                                <StarOutlinedIcon className={classes.textwarning} />
                            ) : (
                                <StarBorderOutlinedIcon className={classes.textwarning} />
                            )}
                            {data[rowIndex][3] >= 3 ? (
                                <StarOutlinedIcon className={classes.textwarning} />
                            ) : (
                                <StarBorderOutlinedIcon className={classes.textwarning} />
                            )}
                            {data[rowIndex][3] >= 4 ? (
                                <StarOutlinedIcon className={classes.textwarning} />
                            ) : (
                                <StarBorderOutlinedIcon className={classes.textwarning} />
                            )}
                            {data[rowIndex][3] >= 5 ? (
                                <StarOutlinedIcon className={classes.textwarning} />
                            ) : (
                                <StarBorderOutlinedIcon className={classes.textwarning} />
                            )}
                        </React.Fragment>
                    );
                },
            },
        },
        {
            name: 'Date',
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
                            <IconButton color="secondary" onClick={handleClickOpendialog}>
                                <EditTwoToneIcon />
                            </IconButton>
                        </React.Fragment>
                    );
                },
            },
        },
    ];

    const [currency, setCurrency] = React.useState('1');
    const handleChangeselect = (event) => {
        setCurrency(event.target.value);
    };

    const [value, setValue] = React.useState(2);

    return (
        <React.Fragment>
            <Breadcrumb title="Product Reviews">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    E-commerce
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Product Reviews
                </Typography>
            </Breadcrumb>
            <Dialog open={open} onClose={handleClosedialog} className={classes.reviewdialog}>
                <DialogTitle>{'Edit Review'}</DialogTitle>
                <DialogContent>
                    <Grid container spacing={gridSpacing} className={classes.reviewcontainer}>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic1"
                                fullWidth
                                label="Product "
                                variant="outlined"
                                defaultValue="Apple Watch Series 4"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic2" fullWidth label="Author " variant="outlined" defaultValue="Joseph William" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic3"
                                fullWidth
                                multiline
                                rows={4}
                                label="Text of review"
                                variant="outlined"
                                defaultValue="If you're coming from a Series 3, the choice is more difficult. The Series 4 is undoubtedly the better device. And if you care about fall detection, the ECG app, or a larger screen then upgrading makes sense. But I think most people will remain satisfied with their Series 3s."
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="left" component="div" variant="body2">
                                Rating
                            </Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Status"
                                value={currency}
                                fullWidth
                                variant="outlined"
                                onChange={handleChangeselect}
                            >
                                {reviewstate.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary">
                        Create
                    </Button>
                    <Button variant="text" onClick={handleClosedialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <MUIDataTable
                title="Product Reviews"
                data={data}
                columns={columns}
                className={classes.ordertable}
                options={{ download: true, print: true, search: true, filter: true, viewColumns: true }}
            />
        </React.Fragment>
    );
};

export default Product;

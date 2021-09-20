import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../component/Breadcrumb';
import { gridSpacing } from '../../../store/constant';
import TransferList from './TransferList';
import TransferListEnhanced from './TransferListEnhanced';

const useStyles = makeStyles((theme) => ({
    cardTitle: {
        color: theme.palette.text.dark,
    },
}));

const FrmListbox = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Breadcrumb title="Listbox">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Forms
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Listbox
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Simple Transfer List
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TransferList />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Enhanced Transfer List
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TransferListEnhanced />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default FrmListbox;

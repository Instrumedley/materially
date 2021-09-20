import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../component/Breadcrumb';
import { gridSpacing } from '../../../store/constant';
import SimpleModal from './SimpleModal';
import ServerModal from './ServerModal';

const Modal = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb title="Modal">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Modal
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <ServerModal />
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Simple Modal
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <SimpleModal />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Modal;

import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../component/Breadcrumb';
import { gridSpacing } from '../../../store/constant';
import RadioButtonsGroup from './RadioButtonsGroup';
import RadioButtons from './RadioButtons';
import FormControlLabelPlacement from './FormControlLabelPlacement';
import ErrorRadios from './ErrorRadios';

const FrmRadio = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb title="Radio Button">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Forms
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Radio Button
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Radio Group
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <RadioButtonsGroup />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Standalone Radio
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <RadioButtons />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Label Placement
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <FormControlLabelPlacement />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Show Error
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <ErrorRadios />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default FrmRadio;

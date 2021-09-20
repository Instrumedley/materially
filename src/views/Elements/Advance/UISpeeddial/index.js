import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

import SimpleSpeedDials from './SimpleSpeedDials';
import OpenIconSpeedDial from './OpenIconSpeedDial';
import SpeedDialTooltipOpen from './SpeedDialTooltipOpen';

const UISpeeddial = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb title="Speed Dial">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Advance Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Speed Dial
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Simple Speed Dial
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <SimpleSpeedDials />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Custom Close Icon
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <OpenIconSpeedDial />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Persistent Icon
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <SpeedDialTooltipOpen />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UISpeeddial;

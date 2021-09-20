import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

import BasicTimeline from './BasicTimeline';
import RightAlignedTimeline from './RightAlignedTimeline';
import AlternateTimeline from './AlternateTimeline';
import ColorsTimeline from './ColorsTimeline';
import OutlinedTimeline from './OutlinedTimeline';
import OppositeContentTimeline from './OppositeContentTimeline';
import CustomizedTimeline from './CustomizedTimeline';

const UITimeline = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb title="Timeline">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Advance Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Timeline
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="span" className="card-header">
                                    Simple Timeline
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <BasicTimeline />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="span" className="card-header">
                                    Right Aligned Timeline
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <RightAlignedTimeline />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="span" className="card-header">
                                    Alternating Timeline
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <AlternateTimeline />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="span" className="card-header">
                                    Color Timeline
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <ColorsTimeline />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="span" className="card-header">
                                    Outlined Timeline
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <OutlinedTimeline />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="span" className="card-header">
                                    Opposite Content Timeline
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <OppositeContentTimeline />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="span" className="card-header">
                                    Customized Timeline
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <CustomizedTimeline />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UITimeline;

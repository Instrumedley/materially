import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, Link, Typography } from '@material-ui/core';

import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

import SimpleRating from './SimpleRating';
import CustomizedRatings from './CustomizedRatings';
import SizeRating from './SizeRating';
import HalfRating from './HalfRating';
import HoverRating from './HoverRating';

const UIRating = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb title="Rating">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Advance Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Rating
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Simple Rating
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <SimpleRating />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Customized Icon Rating
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <CustomizedRatings />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Rating Size
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <SizeRating />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Half Rating
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <HalfRating />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Hover Rating
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <HoverRating />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UIRating;

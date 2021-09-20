import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AlertTitle from '@material-ui/lab/AlertTitle';

import Breadcrumb from './../../../../component/Breadcrumb';
import Alert from './../../../../component/Alert';
import { gridSpacing } from '../../../../store/constant';
import WarningTwoToneIcon from '@material-ui/icons/WarningTwoTone';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';

const UIAlert = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb title="Alert">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Advance Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Alert
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Basic Alert
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Alert severity="error">This is an error alert — check it out!</Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert severity="warning">This is a warning alert — check it out!</Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert severity="info">This is an info alert — check it out!</Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert severity="success">This is a success alert — check it out!</Alert>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Outline Alert
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <Alert variant="outlined" severity="error">
                                        This is an error alert — check it out!
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert variant="outlined" severity="warning">
                                        This is a warning alert — check it out!
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert variant="outlined" severity="info">
                                        This is an info alert — check it out!
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert variant="outlined" severity="success">
                                        This is a success alert — check it out!
                                    </Alert>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Custom Icon Alert
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <Alert icon={false} severity="error">
                                        This is an error alert — check it out!
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert icon={<WarningTwoToneIcon fontSize="inherit" />} severity="warning">
                                        This is a warning alert — check it out!
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert icon={<HelpTwoToneIcon fontSize="inherit" />} severity="info">
                                        This is an info alert — check it out!
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert icon={<CheckBoxTwoToneIcon fontSize="inherit" />} severity="success">
                                        This is a success alert — check it out!
                                    </Alert>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Filled Alert
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <Alert variant="filled" severity="error">
                                        This is an error alert — check it out!
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert variant="filled" severity="warning">
                                        This is a warning alert — check it out!
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert variant="filled" severity="info">
                                        This is an info alert — check it out!
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert variant="filled" severity="success">
                                        This is a success alert — check it out!
                                    </Alert>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Description Alert
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <Alert severity="error">
                                        <AlertTitle>Error</AlertTitle>
                                        This is an error alert — <strong>check it out!</strong>
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert severity="warning">
                                        <AlertTitle>Warning</AlertTitle>
                                        This is a warning alert — <strong>check it out!</strong>
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert severity="info">
                                        <AlertTitle>Info</AlertTitle>
                                        This is an info alert — <strong>check it out!</strong>
                                    </Alert>
                                </Grid>
                                <Grid item xs={12}>
                                    <Alert severity="success">
                                        <AlertTitle>Success</AlertTitle>
                                        This is a success alert — <strong>check it out!</strong>
                                    </Alert>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UIAlert;

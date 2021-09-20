import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

import FileSystemNavigator from './FileSystemNavigator';
import MultiSelectTreeView from './MultiSelectTreeView';
import ControlledTreeView from './ControlledTreeView';
import RecursiveTreeView from './RecursiveTreeView';
import CustomizedTreeView from './CustomizedTreeView';
import GmailTreeView from './GmailTreeView';

const UITreeview = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb title="Treeview">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Advance Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Treeview
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Basic Treeview
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <FileSystemNavigator />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Multi Selection
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <MultiSelectTreeView />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Controlled Treeview
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <ControlledTreeView />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Recursive Treeview
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <RecursiveTreeView />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Customized Treeview
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <CustomizedTreeView />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Gmail Clone
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <GmailTreeView />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UITreeview;

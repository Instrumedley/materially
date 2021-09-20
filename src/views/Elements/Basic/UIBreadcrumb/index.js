import React from 'react';

import Breadcrumb from './../../../../component/Breadcrumb';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DeviceHubTwoToneIcon from '@material-ui/icons/DeviceHubTwoTone';
import CalendarViewDayTwoToneIcon from '@material-ui/icons/CalendarViewDayTwoTone';

import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { gridSpacing } from '../../../../store/constant';

const UIBreadcrumb = () => {
    return (
        <React.Fragment>
            <Breadcrumb title="Breadcrumb" divider={false}>
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Breadcrumb
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={6}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Breadcrumb title="Basic Breadcrumb">
                                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Home
                                </Typography>
                                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Basic Element
                                </Typography>
                                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                                    Breadcrumb
                                </Typography>
                            </Breadcrumb>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Breadcrumb title="Custom Separator" separator={<NavigateNextIcon fontSize="small" />}>
                                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Home
                                </Typography>
                                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Basic Element
                                </Typography>
                                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                                    Breadcrumb
                                </Typography>
                            </Breadcrumb>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Breadcrumb title="Icon Breadcrumbs" separator={<NavigateNextIcon fontSize="small" />}>
                                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    <HomeTwoToneIcon className="icon-breadcrumb" />
                                    Home
                                </Typography>
                                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    <DeviceHubTwoToneIcon className="icon-breadcrumb" /> Basic Element
                                </Typography>
                                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                                    <CalendarViewDayTwoToneIcon className="icon-breadcrumb" /> Breadcrumb
                                </Typography>
                            </Breadcrumb>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Breadcrumb title="Collapsed Breadcrumbs" maxItems={2} separator={<NavigateNextIcon fontSize="small" />}>
                                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Home
                                </Typography>
                                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Basic Element
                                </Typography>
                                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                                    Breadcrumb
                                </Typography>
                            </Breadcrumb>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Breadcrumb title="No Divider" divider={false}>
                                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Home
                                </Typography>
                                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Basic Element
                                </Typography>
                                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                                    Breadcrumb
                                </Typography>
                            </Breadcrumb>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Breadcrumb title="Card Style" divider={false} isCard="true">
                                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Home
                                </Typography>
                                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                                    Basic Element
                                </Typography>
                                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                                    Breadcrumb
                                </Typography>
                            </Breadcrumb>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UIBreadcrumb;

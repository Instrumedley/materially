import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';
import SimpleTabs from './SimpleTabs';
import TabsWrappedLabel from './TabsWrappedLabel';
import DisabledTabs from './DisabledTabs';
import FullWidthTabs from './FullWidthTabs';
import CenteredTabs from './CenteredTabs';
import IconTabs from './IconTabs';

const useStyles = makeStyles((theme) => ({
    cardTitle: {
        color: theme.palette.text.dark,
    },
}));

const UITabs = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Breadcrumb title="UI Tabs">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    UI Tabs
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} lg={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Simple Tab
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <SimpleTabs />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Wrapped Labels
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TabsWrappedLabel />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Disabled Tab
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <DisabledTabs />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Full width Fixed Tab
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FullWidthTabs />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Centered Fixed Tab
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <CenteredTabs />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Icon Tabs
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <IconTabs />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UITabs;

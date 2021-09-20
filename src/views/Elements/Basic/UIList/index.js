import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';
import SimpleList from './SimpleList';
import NestedList from './NestedList';
import FolderList from './FolderList';
import SelectedListItem from './SelectedListItem';
import PinnedSubheaderList from './PinnedSubheaderList';
import VirtualizedList from './VirtualizedList';
import CheckboxList from './CheckboxList';
import CheckboxListSecondary from './CheckboxListSecondary';

const useStyles = makeStyles((theme) => ({
    cardTitle: {
        color: theme.palette.text.dark,
    },
}));

const UIList = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Breadcrumb title="UI List">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    UI List
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Simple List
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <SimpleList />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Folder List
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FolderList />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Selected List Item
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <SelectedListItem />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Nested List
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <NestedList />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Pinned Subheader List
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <PinnedSubheaderList />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Virtualized List
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <VirtualizedList />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Checkbox List
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <CheckboxList />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Grid container diraction="column" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.cardTitle}>
                                Checkbox List Secondary
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <CheckboxListSecondary />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UIList;

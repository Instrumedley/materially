import React from 'react';

import { makeStyles, Button, Card, Divider, CardHeader, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import { gridSpacing } from '../../../../store/constant';
import Avatar from './../../../../component/Avatar';

import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsTwoTone';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartTwoTone';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionTwoTone';

const useStyles = makeStyles((theme) => ({
    usercovermain: {
        position: 'relative',
    },
}));

const ProjecttableCard = (props) => {
    const { title } = props;
    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                title={
                    <Typography component="div" className="card-header">
                        {title}
                    </Typography>
                }
            />
            <Divider />
            <CardContent>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container spacing={2} alignItems="center" justify="center">
                            <Grid item>
                                <div className={classes.usercovermain}>
                                    <Avatar color="primary">
                                        <NotificationsNoneOutlinedIcon />
                                    </Avatar>
                                </div>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="subtitle2" component="div">
                                            You have 3 pending tasks.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            Just Now
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} alignItems="center" justify="center">
                            <Grid item>
                                <div className={classes.usercovermain}>
                                    <Avatar color="error">
                                        <ShoppingCartOutlinedIcon />
                                    </Avatar>
                                </div>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="subtitle2" component="div">
                                            New order received
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            Just Now
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} alignItems="center" justify="center">
                            <Grid item>
                                <div className={classes.usercovermain}>
                                    <Avatar color="success">
                                        <DescriptionOutlinedIcon />
                                    </Avatar>
                                </div>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="subtitle2" component="div">
                                            You have 3 pending tasks.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            Just Now
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} alignItems="center" justify="center">
                            <Grid item>
                                <div className={classes.usercovermain}>
                                    <Avatar color="primary">
                                        <NotificationsNoneOutlinedIcon />
                                    </Avatar>
                                </div>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="subtitle2" component="div">
                                            New order received
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            Just Now
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} alignItems="center" justify="center">
                            <Grid item>
                                <div className={classes.usercovermain}>
                                    <Avatar color="warning">
                                        <ShoppingCartOutlinedIcon />
                                    </Avatar>
                                </div>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="subtitle2" component="div">
                                            Order cancelled
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="caption">
                                            Just Now
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <CardActions className="f-right">
                <Button variant="text" size="small" color="primary">
                    View all Feeds
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjecttableCard;

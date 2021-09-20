import React from 'react';

import { makeStyles, Button, Link, Divider, Card, CardHeader, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import { gridSpacing } from '../../../../store/constant';
import Avatar from './../../../../component/Avatar';

import TwitterIcon from '@material-ui/icons/Twitter';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import DoneAllTwoToneIcon from '@material-ui/icons/DoneAllTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

const useStyles = makeStyles((theme) => ({
    projecttablemain: {
        position: 'relative',
        '&>*': {
            position: 'relative',
            zIndex: '5',
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '97px',
            width: '2px',
            height: '100%',
            background: '#ebebeb',
            zIndex: '1',
        },
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
                <Grid container spacing={gridSpacing} alignItems="center" className={classes.projecttablemain}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="caption">
                                            2 hrs ago
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar color="info">
                                            <TwitterIcon />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography component="div" align="left" variant="subtitle1">
                                            + 1652 Followers
                                        </Typography>
                                        <Typography component="div" align="left" variant="subtitle2">
                                            You’re getting more and more followers, keep it up!
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="caption">
                                            4 hrs ago
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar color="error">
                                            <BusinessCenterTwoToneIcon />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography component="div" align="left" variant="subtitle1">
                                            + 5 New Products were added!
                                        </Typography>
                                        <Typography component="div" align="left" variant="subtitle2">
                                            Congratulations!
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="caption">
                                            1 day ago
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar color="success">
                                            <DoneAllTwoToneIcon />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography component="div" align="left" variant="subtitle1">
                                            Database backup completed!
                                        </Typography>
                                        <Typography component="div" align="left" variant="subtitle2">
                                            Download the <Link href="#">latest backup</Link>.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs zeroMinWidth>
                                        <Typography align="left" variant="caption">
                                            2 day ago
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar color="primary">
                                            <AccountCircleTwoToneIcon />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography component="div" align="left" variant="subtitle1">
                                            +2 Friend Requests
                                        </Typography>
                                        <Typography component="div" align="left" variant="subtitle2">
                                            This is great, keep it up!
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
                    View all Projects
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjecttableCard;

import React from 'react';

import { makeStyles, Avatar, Button, Card, CardHeader, CardContent, CardActions, Grid, Typography, Divider } from '@material-ui/core';
import { gridSpacing } from '../../../../store/constant';

import Avatar1 from './../../../../assets/images/users/avatar-1.jpg';
import Imgcover from './../../../../assets/images/widget/slider5.jpg';

import WatchLaterTwoToneIcon from '@material-ui/icons/WatchLaterTwoTone';

const useStyles = makeStyles((theme) => ({
    projecttablefooter: {
        justifyContent: 'center',
    },
    usercovermain: {
        position: 'relative',
    },
    usermain: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        bottom: '0px',
        right: '-5px',
    },
    timeicon: {
        fontSize: '0.875rem',
        marginRight: '2px',
        verticalAlign: 'sub',
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
                <Grid container spacing={gridSpacing} alignItems="center">
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <div className={classes.usercovermain}>
                                    <Avatar alt="coverimage" src={Imgcover} />
                                    <Avatar alt="User 1" src={Avatar1} className={classes.usermain} />
                                </div>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    John Deo
                                </Typography>
                                <Typography align="left" component="div" variant="subtitle2">
                                    Lorem Ipsum is simply dummy text.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="left" variant="caption">
                                    <WatchLaterTwoToneIcon className={classes.timeicon} /> 2 min ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <div className={classes.usercovermain}>
                                    <Avatar alt="coverimage" src={Imgcover} />
                                    <Avatar alt="User 1" src={Avatar1} className={classes.usermain} />
                                </div>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    John Deo
                                </Typography>
                                <Typography align="left" component="div" variant="subtitle2">
                                    Lorem Ipsum is simply dummy text.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="left" variant="caption">
                                    <WatchLaterTwoToneIcon className={classes.timeicon} /> 2 min ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <div className={classes.usercovermain}>
                                    <Avatar alt="coverimage" src={Imgcover} />
                                    <Avatar alt="User 1" src={Avatar1} className={classes.usermain} />
                                </div>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    John Deo
                                </Typography>
                                <Typography align="left" component="div" variant="subtitle2">
                                    Lorem Ipsum is simply dummy text.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="left" variant="caption">
                                    <WatchLaterTwoToneIcon className={classes.timeicon} /> 2 min ago
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <div className={classes.usercovermain}>
                                    <Avatar alt="coverimage" src={Imgcover} />
                                    <Avatar alt="User 1" src={Avatar1} className={classes.usermain} />
                                </div>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" component="div" variant="subtitle1">
                                    John Deo
                                </Typography>
                                <Typography align="left" component="div" variant="subtitle2">
                                    Lorem Ipsum is simply dummy text.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="left" variant="caption">
                                    <WatchLaterTwoToneIcon className={classes.timeicon} /> 2 min ago
                                </Typography>
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

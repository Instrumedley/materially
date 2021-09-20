import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, Avatar, Card, CardHeader, Divider, CardContent, Grid, Typography } from '@material-ui/core';
import { gridSpacing } from '../../../../store/constant';

import Avatar1 from './../../../../assets/images/users/avatar-1.jpg';
import Avatar2 from './../../../../assets/images/users/avatar-2.jpg';
import Avatar3 from './../../../../assets/images/users/avatar-3.jpg';
import Avatar4 from './../../../../assets/images/users/avatar-4.jpg';
import Avatar5 from './../../../../assets/images/users/avatar-5.jpg';

import WatchLaterTwoToneIcon from '@material-ui/icons/WatchLaterTwoTone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    projecttablefooter: {
        justifyContent: 'center',
    },
    textactive: {
        width: '16px',
        height: '16px',
        verticalAlign: 'sub',
        color: theme.palette.success.main,
    },
    timeicon: {
        fontSize: '0.875rem',
        marginRight: '2px',
        verticalAlign: 'sub',
    },
    ScrollHeight: {
        height: '370px',
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
            <PerfectScrollbar className={classes.ScrollHeight}>
                <CardContent>
                    <Grid container spacing={gridSpacing} alignItems="center">
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar1} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                Cheers!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" component="div" variant="caption">
                                                <FiberManualRecordIcon className={classes.textactive} />
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar2} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        John Doue
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                stay hungry stay foolish!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <FiberManualRecordIcon className={classes.textactive} />
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar3} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                Cheers!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeicon} />
                                                30 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar4} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        John Doue
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                stay hungry stay foolish!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeicon} />
                                                10 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar5} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Shirley Hoe
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                Cheers!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeicon} />
                                                30 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar1} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                Cheers!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <FiberManualRecordIcon className={classes.textactive} />
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar2} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        John Doue
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                stay hungry stay foolish!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <FiberManualRecordIcon className={classes.textactive} />
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar3} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Alex Thompson
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                Cheers!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeicon} />
                                                30 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar4} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        John Doue
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                stay hungry stay foolish!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeicon} />
                                                10 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Avatar alt="coverimage" src={Avatar5} />
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography align="left" component="div" variant="subtitle1">
                                        Shirley Hoe
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                Cheers!
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography align="left" variant="caption">
                                                <WatchLaterTwoToneIcon className={classes.timeicon} />
                                                30 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </PerfectScrollbar>
        </Card>
    );
};

export default ProjecttableCard;

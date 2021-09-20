import React from 'react';

import { makeStyles, Button, Link, Divider, Card, CardHeader, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import { gridSpacing } from '../../../../store/constant';
import Avatar from './../../../../component/Avatar';

import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
    projecttablefooter: {
        justifyContent: 'center',
    },
    textprimary: {
        color: theme.palette.primary.main,
    },
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
            left: '23px',
            width: '2px',
            height: '100%',
            background: '#ebebeb',
            zIndex: '1',
        },
    },
    dnone: {
        display: 'none',
    },
    avatarIcon: {
        top: '10px',
    },
}));

const TasksCard = (props) => {
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
                                <Avatar color="success" size="small" className={classes.avatarIcon}>
                                    <CheckIcon />
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="caption">
                                            8:50
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="body2">
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
                                <Avatar color="primary" size="small" className={classes.avatarIcon}>
                                    <CheckIcon className={classes.dnone} />
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="caption">
                                            Sat, 5 Mar
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="body2">
                                            Design mobile Application
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar color="error" size="small" className={classes.avatarIcon}>
                                    <CheckIcon className={classes.dnone} />
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="caption">
                                            Sun, 17 Feb
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="body2">
                                            <Link href="#" className={classes.textprimary}>
                                                Jeny
                                            </Link>{' '}
                                            assign you a task{' '}
                                            <Link href="#" className={classes.textprimary}>
                                                Mockup Design
                                            </Link>
                                            .
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar color="warning" size="small" className={classes.avatarIcon}>
                                    <CheckIcon className={classes.dnone} />
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="caption">
                                            Sat, 18 Mar
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="body2">
                                            Design logo
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Avatar color="success" size="small" className={classes.avatarIcon}>
                                    <CheckIcon className={classes.dnone} />
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="caption">
                                            Sat, 22 Mar
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" variant="body2">
                                            Design mobile Application
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

export default TasksCard;

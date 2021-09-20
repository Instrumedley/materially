import React from 'react';

import { makeStyles, LinearProgress, Card, CardContent, Grid, Typography } from '@material-ui/core';

import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';

const useStyles = makeStyles((theme) => ({
    texterror: {
        color: theme.palette.error.main,
        verticalAlign: 'sub',
    },
    textsuccess: {
        color: theme.palette.success.main,
        verticalAlign: 'sub',
    },
}));

const ProjecttableCard = (props) => {
    const { topvalue, toptext, bottomvalue, bottomtext, progressvalue, title, color, progresscolor } = props;
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="subtitle1">
                                    <ArrowUpwardTwoToneIcon className={classes.textsuccess} />
                                    {topvalue}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="left" variant="subtitle1">
                                    <ArrowDownwardTwoToneIcon className={classes.texterror} />
                                    {bottomvalue}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={progressvalue} color={progresscolor} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="subtitle2">
                                    {toptext}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="left" variant="subtitle2">
                                    {bottomtext}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="left" variant="subtitle1" style={{ color: color }}>
                            {title}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProjecttableCard;

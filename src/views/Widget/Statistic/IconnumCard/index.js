import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    numicon: {
        '& > svg': {
            width: '20px',
            height: '20px',
        },
    },
}));

const IconnumCard = (props) => {
    const { title, numtext, numtextcolor, iconPrimary, progresscolor, progressvalue } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card>
            <CardContent>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="subtitle2" className={classes.numicon}>
                                    {primaryIcon}
                                </Typography>
                                <Typography variant="subtitle1">{title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h3">
                                    <span style={{ color: numtextcolor }}>{numtext}</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={progressvalue} color={progresscolor} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default IconnumCard;

import React from 'react';

import { Card, CardContent, Divider, Grid, Typography, CardHeader, LinearProgress } from '@material-ui/core';

const SocialprogressCard = (props) => {
    const { cardtitle, text1, progressvalue1, text2, progressvalue2, text3, progressvalue3, progresscolor } = props;

    return (
        <Card>
            <CardHeader
                title={
                    <Typography component="div" className="card-header">
                        {cardtitle}
                    </Typography>
                }
            />
            <Divider />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">{text1}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={progressvalue1} color={progresscolor} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">{text2}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={progressvalue2} color={progresscolor} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">{text3}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={progressvalue3} color={progresscolor} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SocialprogressCard;

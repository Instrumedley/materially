import React from 'react';

import { Card, CardContent, Grid, Typography, CardHeader, Button, LinearProgress, Divider } from '@material-ui/core';

const EcommerceCard = (props) => {
    const { cardtitle, numtext, btntext, subtext, numsubtext, btncolor, progressvalue } = props;

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
                <Grid container spacing={2} direction="column">
                    <Grid item sm={12}>
                        <Typography variant="h3">{numtext}</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Button variant="contained" color={btncolor}>
                            {btntext}
                        </Button>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="subtitle2">{subtext}</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="h6">{numsubtext}</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <LinearProgress variant="determinate" value={progressvalue} color={btncolor} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default EcommerceCard;

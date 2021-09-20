import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const SatifactionChartCard = (props) => {
    const { chartData } = props;

    return (
        <Card>
            <CardContent>
                <Grid container direction="column" spacing={1}>
                    <Grid item>
                        <Typography variant="subtitle1">Customer Satisfaction</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">
                            It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures
                            are often tied together.,as the opinion...
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Chart {...chartData} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SatifactionChartCard;

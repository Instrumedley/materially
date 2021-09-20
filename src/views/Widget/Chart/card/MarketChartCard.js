import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@material-ui/styles';
import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

const MarketChartCard = (props) => {
    const theme = useTheme();
    const { chartData } = props;

    return (
        <Card>
            <CardHeader
                title={
                    <Typography t="div" className="card-header">
                        Market Sales
                    </Typography>
                }
            />
            <Divider />
            <CardContent>
                <Grid container direction="column">
                    <Grid item container spacing={1} alignItems="center">
                        <Grid item>
                            <TrendingDownIcon fontSize="large" color="error" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h3">27, 695.65</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justify="space-around" alignItems="center">
                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="h6">Youtube</Typography>
                                <Typography variant="subtitle1" style={{ color: theme.palette.primary[100] }}>
                                    + 16.85%
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="h6">Facebook</Typography>
                                <Box color={theme.palette.primary.dark}>
                                    <Typography variant="subtitle1" color="inherit">
                                        +45.36%%
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction="column">
                                <Typography variant="h6">Twitter</Typography>
                                <Typography variant="subtitle1" style={{ color: theme.palette.error.main }}>
                                    - 50.69%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Chart {...chartData} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default MarketChartCard;

import React from 'react';
import { Box, Card, CardContent, Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import Chart from 'react-apexcharts';

const SeoChartCard = (props) => {
    const { chartData, value, title, icon, type } = props;
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Card>
            <CardContent>
                <Grid
                    container
                    direction={type === 1 ? 'column' : 'row'}
                    justify="space-between"
                    spacing={type === 1 ? 2 : 0}
                    alignItems={type === 1 ? 'flex-start' : 'center'}
                >
                    <Grid item xs={12} sm={type === 1 ? 12 : 6}>
                        <Grid container direction={type === 1 ? 'column-reverse' : 'column'} spacing={type === 1 ? 0 : 1}>
                            {value && (
                                <Grid item>
                                    <Typography variant={matchDownMd ? 'h4' : 'h3'}>{value}</Typography>
                                </Grid>
                            )}
                            {(title || icon) && (
                                <Grid item container justify="flex-start" alignContent="center">
                                    {title && (
                                        <Typography variant="subtitle1" color="secondary">
                                            {title}
                                        </Typography>
                                    )}
                                    {icon && <Box ml={1}>{icon}</Box>}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    {chartData && (
                        <Grid item xs={12} sm={type === 1 ? 12 : 6}>
                            <Chart {...chartData} />
                        </Grid>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SeoChartCard;

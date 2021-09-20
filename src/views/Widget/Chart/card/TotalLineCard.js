import React from 'react';
import { useTheme } from '@material-ui/styles';
import Chart from 'react-apexcharts';

import { Box, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: 0,
        paddingBottom: '0 !important',
    },
}));

const TotalLineCard = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const { bgColor, chartData, title, percentage, value } = props;

    return (
        <Card>
            <CardContent className={classes.content}>
                <Box color="#fff" bgcolor={bgColor ? bgColor : theme.palette.primary.main}>
                    <Box p={2.5}>
                        <Grid container direction="column">
                            <Grid item container justify="space-between" alignItems="center">
                                {value && (
                                    <Grid item>
                                        <Typography variant="h4" color="inherit" style={{ fontWeight: 400 }}>
                                            {value}
                                        </Typography>
                                    </Grid>
                                )}
                                {percentage && (
                                    <Grid item>
                                        <Typography variant="body2" color="inherit">
                                            {percentage}
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                            {title && (
                                <Grid item>
                                    <Typography variant="body2" color="inherit">
                                        {' '}
                                        {title}{' '}
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                    {chartData && <Chart {...chartData} />}
                </Box>
            </CardContent>
        </Card>
    );
};

export default TotalLineCard;

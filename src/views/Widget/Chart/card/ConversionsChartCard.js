import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@material-ui/styles';
import { Box, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
    content: {
        padding: 0,
        paddingBottom: '0 !important',
    },
}));

const ConversionsChartCard = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { chartData } = props;

    return (
        <Card>
            <CardContent className={classes.content}>
                <Box p={3}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Typography variant="subtitle1">New Stock</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">(Purchased)</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography variant="h4">0.85%</Typography>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={1} alignItems="center" style={{ color: theme.palette.info.main }}>
                                <ArrowUpwardIcon color="inherit" />
                                <Typography variant="h4" color="inherit">
                                    0.50%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Chart {...chartData} />
            </CardContent>
        </Card>
    );
};

export default ConversionsChartCard;

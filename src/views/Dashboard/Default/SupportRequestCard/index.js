import React from 'react';
import Chart from 'react-apexcharts';
import grey from '@material-ui/core/colors/grey';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    caption: {
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    footer: {
        textAlign: 'center',
        padding: theme.spacing(2),
        color: theme.palette.common.white,
    },
    pb0: {
        paddingBottom: 0,
    },
    hintColor: {
        color: grey[400],
    },
}));

const SupportRequestCard = (props) => {
    const { primary, secondary, color, chartData, footerData } = props;
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={classes.pb0}>
                <Typography variant="h2" style={{ color: color }}>
                    {primary}
                </Typography>
                <Typography component="span" variant="subtitle1">
                    {secondary}
                </Typography>
            </CardContent>
            <Chart options={chartData.options} series={chartData.series} type={chartData.type} height={chartData.height} />
            <div style={{ background: color }}>
                <Grid container justify="space-around" className={classes.footer}>
                    {footerData &&
                        footerData.map((item, index) => (
                            <Grid item key={item.value + index}>
                                <Typography variant="h3" color="inherit">
                                    {item.value}
                                </Typography>
                                <Typography variant="body2" className={classes.hintColor}>
                                    {item.title}
                                </Typography>
                            </Grid>
                        ))}
                </Grid>
            </div>
        </Card>
    );
};

export default SupportRequestCard;

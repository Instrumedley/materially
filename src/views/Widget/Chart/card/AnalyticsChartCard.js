import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Menu, MenuItem, Typography } from '@material-ui/core';
import Chart from 'react-apexcharts';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const AnalyticsChartCard = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { title, chartData, dropData, listData } = props;

    let dropHtml;
    if (dropData) {
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        dropHtml = (
            <React.Fragment>
                <Button
                    variant="text"
                    disableElevation
                    color="primary"
                    size="small"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    {dropData.title}
                </Button>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    {dropData.options.map((option, index) => {
                        return (
                            <MenuItem key={index} onClick={handleClose}>
                                {option.label}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </React.Fragment>
        );
    }

    let listItem;
    if (listData) {
        listItem = listData.map((item, index) => {
            return (
                <Grid item key={index} sm={12}>
                    <Box color={item.color}>
                        <Grid container spacing={1} justify="center">
                            <Grid item>{item.icon}</Grid>
                            <Grid item>
                                <Typography variant="subtitle1">{item.value}%</Typography>
                            </Grid>
                            <Grid item>
                                {item.state === 1 && <ArrowUpwardIcon fontSize="inherit" color="inherit" />}
                                {item.state === 0 && <ArrowDownwardIcon fontSize="inherit" color="inherit" />}
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" color="inherit">
                                    {item.percentage}%
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            );
        });
    }

    return (
        <Card>
            <CardContent>
                <Grid container justify="space-between" alignItems="center">
                    {title && (
                        <Grid item>
                            <Typography variant="subtitle1">{title}</Typography>
                        </Grid>
                    )}
                    <Grid item>{dropHtml}</Grid>
                </Grid>
                <Grid container justify="center" alignItems="center">
                    <Grid item container direction="column" spacing={1} xs={12} sm={6}>
                        <Box mt={3} display="block">
                            {listItem}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Chart {...chartData} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AnalyticsChartCard;

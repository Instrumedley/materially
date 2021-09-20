import React from 'react';
import { Card, CardHeader, CardContent, Divider, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';

import Breadcrumb from './../../../component/Breadcrumb';
import { gridSpacing } from '../../../store/constant';

const FrmDatetime = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <React.Fragment>
            <Breadcrumb title="Form Datetime">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Forms
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Datetime
                </Typography>
            </Breadcrumb>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        Basic Date Picker
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date picker inline"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        keyboardIcon={<EventTwoToneIcon />}
                                    />
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        Date Picker Dialog
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date picker dialog"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        keyboardIcon={<EventTwoToneIcon />}
                                    />
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        Time Picker Dialog
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Grid container justify="space-around">
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Time picker"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                        keyboardIcon={<EventTwoToneIcon />}
                                    />
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        Native Picker
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Grid container justify="space-around">
                                    <form noValidate>
                                        <TextField
                                            id="date"
                                            label="Birthday"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        Date & Time Picker
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Grid container justify="space-around">
                                    <form noValidate>
                                        <TextField
                                            id="datetime-local"
                                            label="Next appointment"
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        Time Picker
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Grid container justify="space-around">
                                    <form noValidate>
                                        <TextField
                                            id="time"
                                            label="Alarm clock"
                                            type="time"
                                            defaultValue="07:30"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300,
                                            }}
                                        />
                                    </form>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
};

export default FrmDatetime;

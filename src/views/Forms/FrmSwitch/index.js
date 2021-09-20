import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    FormGroup,
    FormControl,
    FormControlLabel,
    Grid,
    Link,
    Typography,
} from '@material-ui/core';

import Breadcrumb from './../../../component/Breadcrumb';
import Switch from './../../../component/Switch';
import { gridSpacing } from '../../../store/constant';

const FrmSwitch = (props) => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <React.Fragment>
            <Breadcrumb title="Switches">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Forms
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Switche
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Basic Switches
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Switch
                                        checked={state.checkedA}
                                        onChange={handleChange}
                                        name="checkedA"
                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Switch
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                                </Grid>
                                <Grid item>
                                    <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
                                </Grid>
                                <Grid item>
                                    <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
                                </Grid>
                                <Grid item>
                                    <Switch defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Switch With Label
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <FormGroup>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <FormControlLabel
                                                    control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                                    label="Secondary"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FormControlLabel
                                                    control={
                                                        <Switch
                                                            checked={state.checkedB}
                                                            onChange={handleChange}
                                                            name="checkedB"
                                                            color="primary"
                                                        />
                                                    }
                                                    label="Primary"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FormControlLabel control={<Switch />} label="Uncontrolled" />
                                            </Grid>
                                            <Grid item>
                                                <FormControlLabel disabled control={<Switch />} label="Disabled" />
                                            </Grid>
                                            <Grid item>
                                                <FormControlLabel disabled control={<Switch checked />} label="Disabled" />
                                            </Grid>
                                        </Grid>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Switch Size
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <FormGroup>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <FormControlLabel
                                                    control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                                                    label="Small"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <FormControlLabel
                                                    control={<Switch checked={checked} onChange={toggleChecked} />}
                                                    label="Normal"
                                                />
                                            </Grid>
                                        </Grid>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Label Placement
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <FormControl component="fieldset">
                                        <FormGroup aria-label="position">
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <FormControlLabel
                                                        value="top"
                                                        control={<Switch color="primary" />}
                                                        label="Top"
                                                        labelPlacement="top"
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <FormControlLabel
                                                        value="start"
                                                        control={<Switch color="primary" />}
                                                        label="Start"
                                                        labelPlacement="start"
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <FormControlLabel
                                                        value="bottom"
                                                        control={<Switch color="primary" />}
                                                        label="Bottom"
                                                        labelPlacement="bottom"
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <FormControlLabel
                                                        value="end"
                                                        control={<Switch color="primary" />}
                                                        label="End"
                                                        labelPlacement="end"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </FormGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default FrmSwitch;

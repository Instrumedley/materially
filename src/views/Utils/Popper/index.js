import React from 'react';
import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../component/Breadcrumb';
import { gridSpacing } from '../../../store/constant';
import SimplePopper from './SimplePopper';
import PositionedPopper from './PositionedPopper';

const Popper = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb title="Popper">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Popper
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <PositionedPopper />
                        </CardContent>
                    </Card>
                    <Card>
                        <Divider />
                        <CardContent>
                            <SimplePopper />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Popper;

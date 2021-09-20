import React from 'react';
import { Box, Card, CardHeader, CardContent, CircularProgress, Divider, Grid, LinearProgress, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

const UIProgress = (props) => {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => {});
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <React.Fragment>
            <Breadcrumb title="Progress">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Advance Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Progress
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item sx={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Circular Indeterminate
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <CircularProgress />
                                </Grid>
                                <Grid item>
                                    <CircularProgress color="secondary" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Circular Determinate
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <CircularProgress variant="determinate" value={25} />
                                </Grid>
                                <Grid item>
                                    <CircularProgress variant="determinate" value={50} />
                                </Grid>
                                <Grid item>
                                    <CircularProgress variant="determinate" value={75} />
                                </Grid>
                                <Grid item>
                                    <CircularProgress variant="determinate" value={100} />
                                </Grid>
                                <Grid item>
                                    <CircularProgress variant="determinate" value={50} />
                                </Grid>
                                <Grid item>
                                    <CircularProgress variant="determinate" value={progress} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Circular Label
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <CircularProgressWithLabel value={progress} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={12} sm={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Linear Indeterminate
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <LinearProgress />
                                </Grid>
                                <Grid item xs={12}>
                                    <LinearProgress color="secondary" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={12} sm={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Linear Label
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <LinearProgressWithLabel value={progress} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={12} sm={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Linear Determinate
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <LinearProgress variant="determinate" value={progress} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={12} sm={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Linear Buffer
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UIProgress;

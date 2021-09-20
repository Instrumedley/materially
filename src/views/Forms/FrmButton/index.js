import React from 'react';
import { ButtonGroup, Card, CardHeader, CardContent, Divider, Fab, Grid, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Breadcrumb from './../../../component/Breadcrumb';
import Button from './../../../component/Button';
import { gridSpacing } from '../../../store/constant';

import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';
import CloudUploadIcon from '@material-ui/icons/CloudUploadTwoTone';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/SendTwoTone';
import AlarmIcon from '@material-ui/icons/Alarm';
import SaveIcon from '@material-ui/icons/SaveTwoTone';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const FrmButton = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb title="Form Button">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Forms
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Buttons
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Basic Button
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Button variant="contained">Default</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Primary
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary">
                                        Secondary
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" disabled>
                                        Disabled
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Link
                                    </Button>
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
                                    Text Button
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Button>Default</Button>
                                </Grid>
                                <Grid item>
                                    <Button color="primary">Primary</Button>
                                </Grid>
                                <Grid item>
                                    <Button color="secondary">Secondary</Button>
                                </Grid>
                                <Grid item>
                                    <Button disabled>Disabled</Button>
                                </Grid>
                                <Grid item>
                                    <Button href="#" color="primary">
                                        Link
                                    </Button>
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
                                    Buttons with Icons & Label
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                                        Delete
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                                        Send
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" startIcon={<CloudUploadIcon />}>
                                        Upload
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" disabled color="secondary" startIcon={<KeyboardVoiceIcon />}>
                                        Talk
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" size="small" startIcon={<SaveIcon />}>
                                        Save
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>
                                        Save
                                    </Button>
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
                                    Icon Buttons
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton aria-label="delete" disabled color="primary">
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton color="secondary" aria-label="add an alarm">
                                        <AlarmIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton color="primary" aria-label="add to shopping cart">
                                        <AddShoppingCartIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Button Group
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <ButtonGroup color="primary" aria-label="outlined primary button group">
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Button Group
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Button Group
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Vertical Group
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonGroup orientation="vertical" color="primary" aria-label="vertical outlined primary button group">
                                        <Button>One</Button>
                                        <Button>Two</Button>
                                        <Button>Three</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item>
                                    <ButtonGroup
                                        orientation="vertical"
                                        color="primary"
                                        aria-label="vertical contained primary button group"
                                        variant="contained"
                                    >
                                        <Button>One</Button>
                                        <Button>Two</Button>
                                        <Button>Three</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item>
                                    <ButtonGroup
                                        orientation="vertical"
                                        color="primary"
                                        aria-label="vertical contained primary button group"
                                        variant="text"
                                    >
                                        <Button>One</Button>
                                        <Button>Two</Button>
                                        <Button>Three</Button>
                                    </ButtonGroup>
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
                                    Button Group Size
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <ButtonGroup size="small" aria-label="small outlined button group">
                                        <Button>One</Button>
                                        <Button>Two</Button>
                                        <Button>Three</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                                        <Button>One</Button>
                                        <Button>Two</Button>
                                        <Button>Three</Button>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                                        <Button>One</Button>
                                        <Button>Two</Button>
                                        <Button>Three</Button>
                                    </ButtonGroup>
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
                                    Floating Action Button
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Fab color="primary" aria-label="add">
                                        <AddIcon />
                                    </Fab>
                                </Grid>
                                <Grid item>
                                    <Fab color="secondary" aria-label="edit">
                                        <EditIcon />
                                    </Fab>
                                </Grid>
                                <Grid item>
                                    <Fab variant="extended" color="secondary">
                                        <NavigationIcon />
                                        Navigate
                                    </Fab>
                                </Grid>
                                <Grid item>
                                    <Fab disabled aria-label="like">
                                        <FavoriteIcon />
                                    </Fab>
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
                                    Fab Size
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Fab size="small" color="secondary" aria-label="add">
                                                <AddIcon />
                                            </Fab>
                                        </Grid>
                                        <Grid item>
                                            <Fab size="medium" color="secondary" aria-label="add">
                                                <AddIcon />
                                            </Fab>
                                        </Grid>
                                        <Grid item>
                                            <Fab color="secondary" aria-label="add">
                                                <AddIcon />
                                            </Fab>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Fab variant="extended" size="small" color="primary" aria-label="add">
                                                <NavigationIcon />
                                                Extended
                                            </Fab>
                                        </Grid>
                                        <Grid item>
                                            <Fab variant="extended" size="medium" color="primary" aria-label="add">
                                                <NavigationIcon />
                                                Extended
                                            </Fab>
                                        </Grid>
                                        <Grid item>
                                            <Fab variant="extended" color="primary" aria-label="add">
                                                <NavigationIcon />
                                                Extended
                                            </Fab>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default FrmButton;

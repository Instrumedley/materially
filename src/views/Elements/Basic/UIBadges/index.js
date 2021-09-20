import React from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardContent,
    Divider,
    FormControlLabel,
    Grid,
    IconButton,
    Switch,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import MailIcon from '@material-ui/icons/EmailTwoTone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import Badge from './../../../../component/Badge';
import Breadcrumb from './../../../../component/Breadcrumb';
import { gridSpacing } from '../../../../store/constant';

const CustomizedBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const UIBadges = () => {
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };

    return (
        <React.Fragment>
            <Breadcrumb title="Badges">
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Basic Element
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Badges
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Basic Badges
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Badge badgeContent={4} color="default">
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge badgeContent={4} color="primary">
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge badgeContent={4} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Maximum Value Badges
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={4}>
                                <Grid item>
                                    <Badge badgeContent={99} color="primary">
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge badgeContent={100} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge badgeContent={1000} max={999} color="error">
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Dot Badges
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Badge variant="dot" color="primary">
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge variant="dot" color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge variant="dot" color="error">
                                        <Typography>Typography</Typography>
                                    </Badge>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Badge Alignment
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Badge badgeContent={4} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge variant="dot" color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge badgeContent={4} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                                <Grid item>
                                    <Badge variant="dot" color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                                        <MailIcon />
                                    </Badge>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Customized Badges
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <IconButton aria-label="cart">
                                        <CustomizedBadge badgeContent={4} color="error">
                                            <ShoppingCartIcon />
                                        </CustomizedBadge>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardHeader
                            title={
                                <Typography component="div" className="card-header">
                                    Badge Visibility
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={2} direction="column">
                                <Grid item>
                                    <Grid container spacing={3}>
                                        <Grid item>
                                            <Badge color="secondary" badgeContent={count}>
                                                <MailIcon />
                                            </Badge>
                                        </Grid>
                                        <Grid item>
                                            <ButtonGroup>
                                                <Button
                                                    aria-label="reduce"
                                                    onClick={() => {
                                                        setCount(Math.max(count - 1, 0));
                                                    }}
                                                >
                                                    <RemoveIcon fontSize="small" />
                                                </Button>
                                                <Button
                                                    aria-label="increase"
                                                    onClick={() => {
                                                        setCount(count + 1);
                                                    }}
                                                >
                                                    <AddIcon fontSize="small" />
                                                </Button>
                                            </ButtonGroup>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={3}>
                                        <Grid item>
                                            <Badge color="secondary" variant="dot" invisible={invisible}>
                                                <MailIcon />
                                            </Badge>
                                        </Grid>
                                        <Grid item>
                                            <FormControlLabel
                                                control={<Switch color="primary" checked={!invisible} onChange={handleBadgeVisibility} />}
                                                label="Show Badge"
                                            />
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

export default UIBadges;

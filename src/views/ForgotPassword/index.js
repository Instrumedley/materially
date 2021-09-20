import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Divider, Typography, makeStyles, Grid } from '@material-ui/core';
import FirebaseForgotPassword from './FirebaseForgotPassword';
import { Link } from 'react-router-dom';

import Logo from './../../assets/images/logo-dark.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.black,
        height: '100%',
        minHeight: '100vh',
    },
    backButton: {
        marginLeft: theme.spacing(2),
    },
    card: {
        overflow: 'visible',
        display: 'flex',
        position: 'relative',
        margin: '24px auto',
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%',
            width: '50%',
        },
        maxWidth: '475px',
    },
    content: {
        padding: theme.spacing(5, 4, 3, 4),
    },
    forgot: {
        textDecoration: 'none',
        paddingLeft: '16px',
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
}));

const ForgotPassword = () => {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center" className={classes.root}>
            <Grid item xs={11} md={6} lg={4}>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <Grid container direction="column" spacing={4} justify="center">
                            <Grid item xs={12}>
                                <Grid container justify="space-between">
                                    <Grid item>
                                        <Typography color="textPrimary" gutterBottom variant="h2">
                                            Forgot
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            To keep connected with us check mail.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <RouterLink to="/" className={classes.icon}>
                                            <img alt="Auth method" src={Logo} />
                                        </RouterLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <FirebaseForgotPassword />
                            </Grid>
                            <Divider />
                            <Grid container justify="flex-start" className={classes.margin}>
                                <Grid item>
                                    <Typography
                                        variant="subtitle2"
                                        color="secondary"
                                        component={Link}
                                        to="/login"
                                        className={classes.forgot}
                                    >
                                        Having an account
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ForgotPassword;

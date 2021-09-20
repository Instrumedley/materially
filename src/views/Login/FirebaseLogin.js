import React from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Divider,
    FormHelperText,
    Grid,
    TextField,
    Typography,
    makeStyles,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from '@material-ui/core';
import useAuth from '../../hooks/useAuth';
import useScriptRef from '../../hooks/useScriptRef';

import Google from '../../assets/images/social-google.svg';

import { Link } from 'react-router-dom';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    root: {},
    redButton: {
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: theme.palette.grey[50],
        color: theme.palette.grey[600],
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: theme.palette.grey[100],
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.875rem',
        },
    },
    providerIcon: {
        marginRight: theme.spacing(2),
    },
    signDivider: {
        flexGrow: 1,
    },
    signText: {
        margin: theme.spacing(2),
    },
    forgot: {
        textDecoration: 'none',
    },
    margin: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(1),
    },
    redIcon: {
        marginRight: '8px',
    },
    loginIcon: {
        marginRight: '16px',
        [theme.breakpoints.down('sm')]: {
            marginRight: '8px',
        },
    },
}));

const FirebaseLogin = ({ className, ...rest }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();
    const [showPassword, setShowPassword] = React.useState(false);

    const { firebaseEmailPasswordSignIn, firebaseGoogleSignIn } = useAuth();

    const googleHandler = async () => {
        try {
            await firebaseGoogleSignIn();
        } catch (err) {
            console.error(err);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <React.Fragment>
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Button fullWidth={true} className={classes.redButton} onClick={googleHandler} size="large" variant="contained">
                        <img src={Google} alt="google" width="20px" className={classes.loginIcon} /> Sign in with Google
                    </Button>
                </Grid>
            </Grid>

            <Box alignItems="center" display="flex" mt={2}>
                <Divider className={classes.signDivider} orientation="horizontal" />
                <Typography color="textSecondary" variant="h5" className={classes.signText}>
                    OR
                </Typography>
                <Divider className={classes.signDivider} orientation="horizontal" />
            </Box>

            <Formik
                initialValues={{
                    email: 'admin@phoenixcoded.net',
                    password: 'aA123456',
                    submit: null,
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        await firebaseEmailPasswordSignIn(values.email, values.password);

                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} className={clsx(classes.root, className)} {...rest}>
                        <TextField
                            error={Boolean(touched.email && errors.email)}
                            fullWidth
                            helperText={touched.email && errors.email}
                            label="Email Address / Username"
                            margin="normal"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="email"
                            value={values.email}
                            variant="outlined"
                        />

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            className={classes.margin}
                            variant="outlined"
                        >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text">
                                    {' '}
                                    {errors.password}{' '}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Typography variant="subtitle2" color="primary" component={Link} to="/forgot-password" className={classes.forgot}>
                                    Forgot Password?
                                </Typography>
                            </Grid>
                        </Grid>

                        {errors.submit && (
                            <Box mt={3}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box mt={2}>
                            <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                                Log In
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default FirebaseLogin;

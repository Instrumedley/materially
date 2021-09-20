import React from 'react';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    FormHelperText,
    TextField,
    makeStyles,
} from '@material-ui/core';
// import useAuth from '../../hooks/useAuth';
import useScriptRef from '../../hooks/useScriptRef';

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

const FirebaseForgotPassword = ({ className, ...rest }) => {
    const classes = useStyles();
    const scriptedRef = useScriptRef();

    // const {firebaseEmailPasswordSignIn, firebaseGoogleSignIn} = useAuth();

    // const googleHandler = async () => {
    //     try {
    //         await firebaseGoogleSignIn();
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <React.Fragment>

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
                        // await firebaseEmailPasswordSignIn(values.email, values.password);

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

                        
                        {errors.submit && (
                            <Box mt={3}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}
                        
                        <Box mt={2}>
                            <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                                Send me Link
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </React.Fragment>
    );
};

export default FirebaseForgotPassword;

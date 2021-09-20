import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, Button, FormHelperText, Grid } from '@material-ui/core';
import useAuth from '../../hooks/useAuth';
import useScriptRef from '../../hooks/useScriptRef';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles(() => ({
    root: {},
}));

const Auth0Login = ({ className, ...rest }) => {
    const classes = useStyles();
    const { popupLogin } = useAuth();
    const [error, setError] = useState(null);
    const scriptedRef = useScriptRef();

    const loginHandler = async () => {
        try {
            await popupLogin();
        } catch (err) {
            if (scriptedRef.current) {
                setError(err.message);
            }
        }
    };

    return (
        <div className={clsx(classes.root, className)} {...rest}>
            <Grid container justify="center" alignItems="center" spacing={2}>
                {error && (
                    <Grid item xs={12}>
                        <FormHelperText error>{error}</FormHelperText>
                    </Grid>
                )}

                <Grid item>
                    <Button onClick={loginHandler} variant="contained" color="primary">
                        <LockIcon fontSize="small" /> Log in with Auth0
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Auth0Login;

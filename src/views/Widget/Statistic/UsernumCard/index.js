import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    revenuecard: {
        position: 'relative',
        color: '#fff',
    },
    revenueicon: {
        position: 'absolute',
        left: '-17px',
        bottom: '-27px',
        transform: 'rotate(25deg)',
        '&> svg': {
            width: '100px',
            height: '100px',
            opacity: '0.5',
        },
    },
}));

const UsernumCard = (props) => {
    const { primary, secondary, iconPrimary, color } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card style={{ background: color }} className={classes.revenuecard}>
            <CardContent>
                <Typography variant="subtitle2" className={classes.revenueicon}>
                    {primaryIcon}
                </Typography>
                <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                    <Grid item sm={12}>
                        <Typography variant="h2" align="center" color="inherit">
                            {secondary}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="subtitle1" align="center" color="inherit">
                            {primary}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default UsernumCard;

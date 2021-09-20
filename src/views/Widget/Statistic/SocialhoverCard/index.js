import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    socialhovercard: {
        position: 'relative',
        color: '#fff',
        '&:hover svg': {
            opacity: '1',
            transform: 'scale(1.1)',
        },
    },
    socialhovericon: {
        position: 'absolute',
        right: '5px',
        top: '30px',
        '&> svg': {
            width: '70px',
            height: '70px',
            opacity: '0.4',
            transition: 'all .3s ease-in-out',
        },
    },
}));

const SocialhoverCard = (props) => {
    const { primary, secondary, iconPrimary, color } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card style={{ background: color }} className={classes.socialhovercard}>
            <CardContent>
                <Typography variant="body2" className={classes.socialhovericon}>
                    {primaryIcon}
                </Typography>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Typography variant="h3" color="inherit">
                            {secondary}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2" color="inherit">
                            {primary}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SocialhoverCard;

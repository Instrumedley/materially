import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    hoverdatacard: {
        textAlign: 'center'
    },
    premium: {
        margin: '14px 0',
        fontSize: '1.25rem',
        fontWeight: '400',
    },
    primeicon: {
        '& > svg': {
            width: '20px',
            height: '20px',
        },
    },
}));

const HoverdataCard = (props) => {
    const { title, iconPrimary, primary, secondary, color } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card className={classes.hoverdatacard}>
            <CardContent>
                <Grid container justify="space-between" direction="column" alignItems="center">
                    <Grid item sm={12}>
                        <Typography variant="subtitle1">{title}</Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="h4" className={classes.premium}>
                            {' '}
                            <span className={classes.primeicon} style={{ color: color }}>
                                {' '}
                                {primaryIcon}
                            </span>{' '}
                            {primary}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="subtitle2">{secondary}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default HoverdataCard;

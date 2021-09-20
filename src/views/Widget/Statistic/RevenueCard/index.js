import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    revenuecard: {
        position: 'relative',
        color: '#fff',
    },
    revenueicon: {
        position: 'absolute',
        right: '-17px',
        top: '20px',
        '&> svg': {
            width: '100px',
            height: '100px',
            opacity: '0.5',
        },
        [theme.breakpoints.down('xs')]: {
            top: '32px',
            '&> svg': {
                width: '80px',
                height: '80px',
            },
        },
    },
}));

const RevenueCard = (props) => {
    const { primary, secondary, content, iconPrimary, color } = props;
    const classes = useStyles();

    const theme = useTheme();
    const matchDownXs = useMediaQuery(theme.breakpoints.down('xs'));

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card style={{ background: color }} className={classes.revenuecard}>
            <CardContent>
                <Typography variant="body2" className={classes.revenueicon}>
                    {primaryIcon}
                </Typography>
                <Grid container direction={matchDownXs ? 'column' : 'row'} spacing={1}>
                    <Grid item sm={12}>
                        <Typography variant="subtitle1" color="inherit">
                            {primary}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant={matchDownXs ? 'h3' : 'h2'} color="inherit">
                            {secondary}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="subtitle2" color="inherit">
                            {content}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default RevenueCard;

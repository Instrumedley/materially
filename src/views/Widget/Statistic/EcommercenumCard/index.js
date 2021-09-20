import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    roundiconcard: {
        position: 'relative',
        color: '#fff',
    },
    roundicon: {
        '& svg': {
            width: '30px',
            height: '30px',
            color: '#fff',
        },
    },
}));

const RoundiconCard = (props) => {
    const { primary, secondary, content, iconPrimary, color } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card className={classes.roundiconcard} style={{ background: color }}>
            <CardContent>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item sm zeroMinWidth>
                        <Grid container spacing={1}>
                            <Grid item sm={12}>
                                <Typography variant="h6" color="inherit">
                                    {primary}
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="h3">{secondary}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <div className={classes.roundicon}>
                            <span>{primaryIcon}</span>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" color="inherit">
                            {content}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default RoundiconCard;

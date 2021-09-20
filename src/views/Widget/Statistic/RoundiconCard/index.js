import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    roundiconcard: {
        position: 'relative',
    },
    roundicon: {
        width: '50px',
        height: '50px',
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '50%',
        overflow: 'hidden',
        justifyContent: 'center',
        '& span:first-child': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            opacity: '0.2',
            zIndex: '1',
        },
        '& span': {
            width: '20px',
            height: '20px',
        },
        '& svg': {
            width: '20px',
            height: '20px',
            position: 'relative',
            zIndex: '5',
        },
    },
}));

const RoundiconCard = (props) => {
    const { primary, secondary, content, iconPrimary, color } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card className={classes.roundiconcard}>
            <CardContent>
                <Grid container alignItems="center" spacing={0} justify="space-between">
                    <Grid item>
                        <Grid container spacing={1} direction="column">
                            <Grid item>
                                <Typography variant="h6" color="inherit">
                                    {primary}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h3" style={{ color: color }}>
                                    {secondary}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2" color="inherit">
                                    {content}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <div className={classes.roundicon}>
                            <span style={{ background: color }}></span>
                            <span style={{ color: color }}>{primaryIcon}</span>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default RoundiconCard;

import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    roundiconcard: {
        position: 'relative',
        color: '#fff',
    },
    roundicon: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        position: 'relative',
        borderRadius: '50%',
        overflow: 'hidden',
        '& span:first-child': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            zIndex: '1',
            background: '#fff',
        },
        '& svg': {
            position: 'relative',
            width: '30px',
            height: '30px',
            verticalAlign: 'top',
            zIndex: '5',
        },
    },
    arrowicon: {
        '& svg': {
            width: '20px',
            height: '20px',
            verticalAlign: 'top',
        },
    },
}));

const RoundiconCard = (props) => {
    const { primary, secondary, content, iconPrimary, content2, iconFooter, color } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    const IconFooter = iconFooter;
    const footerIcon = iconFooter ? <IconFooter /> : null;

    return (
        <Card className={classes.roundiconcard} style={{ background: color }}>
            <CardContent>
                <Grid container alignItems="center" spacing={2} justify="space-between">
                    <Grid item>
                        <div className={classes.roundicon}>
                            <span></span>
                            <span style={{ color: color }}>{primaryIcon}</span>
                        </div>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Typography align="right" variant="h3" color="inherit">
                                    {secondary}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography align="right" variant="subtitle1" color="inherit">
                                    {primary}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Typography variant="subtitle2" color="inherit">
                            {content}
                        </Typography>
                    </Grid>
                    <Grid item sm zeroMinWidth>
                        <Typography variant="subtitle2" align="right" color="inherit">
                            <span className={classes.arrowicon}>{footerIcon}</span> {content2}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default RoundiconCard;

import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    ticketcard: {
        position: 'relative',
    },
    roundicon: {
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '50px',
        overflow: 'hidden',
        padding: '6px 12px',
        '& span:first-child': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            opacity: '0.2',
            zIndex: '1',
        },
        '& svg': {
            width: '18px',
            height: '18px',
            verticalAlign: 'top',
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

const TicketCard = (props) => {
    const { primary, secondary, secondary1, content, iconPrimary, iconFooter, color } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    const IconFooter = iconFooter;
    const footerIcon = iconFooter ? <IconFooter /> : null;

    return (
        <Card className={classes.ticketcard}>
            <CardContent>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                        <div className={classes.roundicon}>
                            <span style={{ background: color }}></span>
                            <span style={{ color: color }}>
                                {primaryIcon} {content}
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={6}>
                                <Typography variant="h3" align="right" style={{ color: color }}>
                                    {primary}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1" align="left">
                                    {secondary}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="subtitle2" color="inherit">
                            <span style={{ color: color }} className={classes.arrowicon}>
                                {footerIcon}
                            </span>{' '}
                            {secondary1}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default TicketCard;

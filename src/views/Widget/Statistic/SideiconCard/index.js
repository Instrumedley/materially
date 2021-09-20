import React from 'react';
import { useTheme } from '@material-ui/styles';
import { makeStyles, Card, CardContent, Grid, Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sideiconcard: {
        position: 'reltive',
    },
    sidecardcontent: {
        padding: '0',
        paddingBottom: '0 !important',
    },
    sideicon: {
        padding: '15px 0',
        textAlign: 'center',
        color: '#fff',
        '& > svg': {
            width: '46px',
            height: '46px',
        },
    },
    premium: {
        fontWeight: '400',
        marginLeft: '15px',
    },
    primetext: {
        marginLeft: '15px',
    },
}));

const FooterprogressCard = (props) => {
    const { iconPrimary, numtext, primary, primarysub, color } = props;
    const classes = useStyles();

    const theme = useTheme();
    const matchDownXs = useMediaQuery(theme.breakpoints.down('xs'));

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card className={classes.sideiconcard}>
            <CardContent className={classes.sidecardcontent}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs={4} style={{ background: color }} className={classes.sideicon}>
                        <Typography variant="h5" className={classes.sideicon} align="center">
                            {primaryIcon}
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                            spacing={1}
                            alignItems={matchDownXs ? 'center' : 'flex-start'}
                        >
                            <Grid item sm={12}>
                                <Typography variant="h2" className={classes.premium}>
                                    {numtext}
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="body2" align="left" className={classes.primetext}>
                                    {primary} <span style={{ color: color }}>{primarysub}</span>{' '}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default FooterprogressCard;

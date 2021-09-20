import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';
import SyncAltRoundedIcon from '@material-ui/icons/SyncAltRounded';

const useStyles = makeStyles((theme) => ({
    rrojectnumCard: {
        position: 'relative',
        overflow: 'hidden',
    },
    roundicon: {
        width: '100px',
        height: '100px',
        display: 'inline-flex',
        alignItems: 'center',
        position: 'absolute',
        top: '-45px',
        right: '-35px',
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
            position: 'relative',
            top: '19px',
            right: '15px',
        },
        '& svg': {
            width: '20px',
            height: '20px',
            position: 'relative',
            zIndex: '5',
        },
    },
}));

const ProjectnumCard = (props) => {
    const { primary, secondary, secondary1, secondary2, content, iconPrimary, color } = props;
    const classes = useStyles();

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card className={classes.rrojectnumCard}>
            <CardContent>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12}>
                        <div className={classes.roundicon}>
                            <span style={{ background: color }}></span>
                            <span style={{ color: color }}>{content}</span>
                        </div>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <Typography variant="subtitle2" style={{ color: color }}>
                                    {primaryIcon}
                                </Typography>
                            </Grid>
                            <Grid item sm zeroMinWidth>
                                <Typography variant="subtitle1" color="inherit">
                                    {primary}
                                </Typography>
                                <Typography variant="subtitle1" style={{ color: color }}>
                                    {secondary}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={0}>
                            <Grid item xs={4}>
                                <Typography align="center" variant="subtitle1" color="inherit">
                                    {secondary1}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography align="center" variant="h3" style={{ color: color }}>
                                    <SyncAltRoundedIcon />
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography align="center" variant="subtitle2" color="inherit">
                                    {secondary2}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProjectnumCard;

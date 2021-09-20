import React from 'react';
import { useTheme } from '@material-ui/styles';
import { makeStyles, Card, CardContent, Grid, Typography, Button, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    revenuecard: {
        textAlign: 'center',
    },
    socialicon: {
        '& > svg': {
            width: '45px',
            height: '45px',
        },
    },
}));

const SocialactionCard = (props) => {
    const { primaryone, primarytwo, secondary, content, iconPrimary, color, btncolor } = props;
    const classes = useStyles();

    const theme = useTheme();
    const matchDownXs = useMediaQuery(theme.breakpoints.down('xs'));

    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <Card className={classes.revenuecard}>
            <CardContent>
                <Grid container direction={matchDownXs ? 'column' : 'row'} spacing={2}>
                    <Grid item sm={12}>
                        <Typography variant="subtitle2" style={{ color: color }} className={classes.socialicon}>
                            {primaryIcon}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant={matchDownXs ? 'h5' : 'h3'} color="inherit">
                            <span style={{ color: color }}>{primaryone}</span> {primarytwo}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="subtitle2" color="inherit">
                            {secondary}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Button variant="contained" color={btncolor}>
                            {content}
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SocialactionCard;

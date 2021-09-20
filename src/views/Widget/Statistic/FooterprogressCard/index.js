import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footerprogresscard: {
        textAlign: 'center',
    },
    premium: {
        marginTop: '10px',
        fontSize: '36px',
        fontWeight: '400',
    },
    footer: {
        textAlign: 'center',
        padding: theme.spacing(1.2),
        paddingLeft: '20px',
        paddingRight: '20px',
        color: theme.palette.common.white,
    },
}));

const FooterprogressCard = (props) => {
    const { title, primary, secondary, color, footerData } = props;
    const classes = useStyles();

    return (
        <Card className={classes.footerprogresscard}>
            <CardContent>
                <Grid container direction="row-reverse" justify="space-between" alignItems="center">
                    <Grid item sm={12}>
                        <Typography variant="h4" align="left">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="subtitle1" className={classes.premium} style={{ color: color }}>
                            {primary}
                        </Typography>
                        <Typography variant="subtitle1" color="secondary">
                            {secondary}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <div style={{ background: color }}>
                <Grid container justify="space-between" className={classes.footer}>
                    <Grid item>
                        <Typography variant="body2">{footerData}</Typography>
                    </Grid>
                </Grid>
            </div>
        </Card>
    );
};

export default FooterprogressCard;

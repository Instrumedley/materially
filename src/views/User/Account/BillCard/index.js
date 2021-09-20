import React from 'react';
import { Card, CardContent, Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

const useStyles = makeStyles((theme) => ({
    billcard: {
        borderLeft: '10px solid',
    },
    billtitle: {
        color: theme.palette.text.secondary,
        fontSize: '28px',
        fontWeight: '500',
        marginBottom: '10px',
    },
    arrowicon: {
        width: '28px',
        height: '28px',
        verticalAlign: 'sub',
        marginBottom: '-6px',
    },
}));
const BillCard = (props) => {
    const classes = useStyles();

    const { primarytext, secondrytext, linktext, color } = props;

    return (
        <Card className={classes.billcard} style={{ borderLeftColor: color }}>
            <CardContent>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">{primarytext}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="div" className={classes.billtitle}>
                            {secondrytext}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href="#" style={{ color: color }}>
                            {linktext} <ArrowRightAltRoundedIcon className={classes.arrowicon} />
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default BillCard;

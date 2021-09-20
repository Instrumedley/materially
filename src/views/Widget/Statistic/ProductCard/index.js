import React from 'react';

import { makeStyles, Card, CardContent, Grid, Typography, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    productmedia: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        margin: '0 auto',
    },
    prodcard: {
        textAlign: 'center',
        color: '#fff',
    },
}));

const ReportCard = (props) => {
    const { primary, secondary, color, prodimg } = props;
    const classes = useStyles();

    return (
        <Card style={{ background: color }} className={classes.prodcard}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item sm={12}>
                        <CardMedia className={classes.productmedia} image={prodimg} title="images" />
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="h5" color="inherit">
                            {primary}
                        </Typography>
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="h6" color="inherit">
                            {secondary}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ReportCard;

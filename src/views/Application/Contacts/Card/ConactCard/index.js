import React from 'react';

import { makeStyles, Card, Chip, Divider, CardContent, Grid, Typography, CardMedia } from '@material-ui/core';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import PhoneAndroidTwoToneIcon from '@material-ui/icons/PhoneAndroidTwoTone';
import { gridSpacing } from '../../../../../store/constant';

const useStyles = makeStyles((theme) => ({
    accountcard: {
        marginTop: '80px',
        overflow: 'visible',
        textAlign: 'center',
    },
    accountavtar: {
        borderRadius: '15px',
        boxShadow: '0px 16px 32px rgba(169, 194, 209, 0.15), 0px 8px 16px rgba(169, 194, 209, 0.1)',
        margin: '-100px auto 0',
        width: '150px',
    },
    accountsvg: {
        width: '15px',
        height: '15px',
        verticalAlign: 'text-top',
        marginRight: '5px',
    },
}));

const ReportCard = (props) => {
    const { primary, prodimg, position, location, email, phone } = props;
    const classes = useStyles();

    return (
        <Card className={classes.accountcard}>
            <CardContent>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <CardMedia component="img" image={prodimg} title="Cover image" className={classes.accountavtar} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="div" align="center" variant="h3">
                            {primary}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Chip color="primary" label={position} />
                    </Grid>
                </Grid>
            </CardContent>
            <Divider />
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={0}>
                            <Grid item xs zeroMinWidth>
                                <Typography component="div" align="left" variant="body2">
                                    <PinDropTwoToneIcon className={classes.accountsvg} /> Location:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" align="right" variant="body2">
                                    {location}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={0}>
                            <Grid item xs zeroMinWidth>
                                <Typography component="div" align="left" variant="body2">
                                    <MailTwoToneIcon className={classes.accountsvg} /> Email:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" align="right" variant="body2">
                                    {email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" spacing={0}>
                            <Grid item xs zeroMinWidth>
                                <Typography component="div" align="left" variant="body2">
                                    <PhoneAndroidTwoToneIcon className={classes.accountsvg} /> Phone:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div" align="right" variant="body2">
                                    {phone}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ReportCard;

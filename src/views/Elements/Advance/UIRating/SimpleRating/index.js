import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function SimpleRating() {
    const [value, setValue] = React.useState(2);

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography component="legend">Controlled</Typography>
                </Grid>
                <Grid item>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography component="legend">Read only</Typography>
                </Grid>
                <Grid item>
                    <Rating name="read-only" value={value} readOnly />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography component="legend">Disabled</Typography>
                </Grid>
                <Grid item>
                    <Rating name="disabled" value={value} disabled />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography component="legend">Pristine</Typography>
                </Grid>
                <Grid item>
                    <Rating name="pristine" value={null} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

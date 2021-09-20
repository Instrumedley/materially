import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeftTwoTone';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenterTwoTone';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRightTwoTone';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustifyTwoTone';
import LaptopIcon from '@material-ui/icons/LaptopTwoTone';
import TvIcon from '@material-ui/icons/TvTwoTone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroidTwoTone';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
    toggleContainer: {
        margin: theme.spacing(2, 0),
    },
}));

export default function ToggleButtonNotEmpty() {
    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['phone']);

    const handleFormat = (event, newFormats) => {
        if (newFormats.length) {
            setFormats(newFormats);
        }
    };

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div className={classes.toggleContainer}>
                    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
                        <ToggleButton value="left" aria-label="left aligned">
                            <FormatAlignLeftIcon />
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            <FormatAlignCenterIcon />
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            <FormatAlignRightIcon />
                        </ToggleButton>
                        <ToggleButton value="justify" aria-label="justified" disabled>
                            <FormatAlignJustifyIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.toggleContainer}>
                    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="device">
                        <ToggleButton value="laptop" aria-label="laptop">
                            <LaptopIcon />
                        </ToggleButton>
                        <ToggleButton value="tv" aria-label="tv">
                            <TvIcon />
                        </ToggleButton>
                        <ToggleButton value="phone" aria-label="phone">
                            <PhoneAndroidIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </Grid>
        </Grid>
    );
}

import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeftTwoTone';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenterTwoTone';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRightTwoTone';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustifyTwoTone';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtonSizes() {
    const [alignment, setAlignment] = React.useState('left');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
                <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>
                    <ToggleButton value="left">
                        <FormatAlignLeftIcon fontSize="small" />
                    </ToggleButton>
                    <ToggleButton value="center">
                        <FormatAlignCenterIcon fontSize="small" />
                    </ToggleButton>
                    <ToggleButton value="right">
                        <FormatAlignRightIcon fontSize="small" />
                    </ToggleButton>
                    <ToggleButton value="justify">
                        <FormatAlignJustifyIcon fontSize="small" />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            <Grid item>
                <ToggleButtonGroup size="medium" value={alignment} exclusive onChange={handleChange}>
                    <ToggleButton value="left">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify">
                        <FormatAlignJustifyIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            <Grid item>
                <ToggleButtonGroup size="large" value={alignment} exclusive onChange={handleChange}>
                    <ToggleButton value="left">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify">
                        <FormatAlignJustifyIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
        </Grid>
    );
}
import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeftTwoTone';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenterTwoTone';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRightTwoTone';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustifyTwoTone';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ExclusiveToggleButtons() {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
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
    );
}

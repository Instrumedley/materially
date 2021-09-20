import React from 'react';
import FormatBoldIcon from '@material-ui/icons/FormatBoldTwoTone';
import FormatItalicIcon from '@material-ui/icons/FormatItalicTwoTone';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlinedTwoTone';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFillTwoTone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function ToggleButtonsMultiple() {
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="text formatting">
            <ToggleButton value="bold" aria-label="bold">
                <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
                <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
                <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value="color" aria-label="color" disabled>
                <FormatColorFillIcon />
                <ArrowDropDownIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

import React from 'react';
import ViewListIcon from '@material-ui/icons/ViewListTwoTone';
import ViewModuleIcon from '@material-ui/icons/ViewModuleTwoTone';
import ViewQuiltIcon from '@material-ui/icons/ViewQuiltTwoTone';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function VerticalToggleButtons() {
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return (
        <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
            <ToggleButton value="list" aria-label="list">
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>
            <ToggleButton value="quilt" aria-label="quilt">
                <ViewQuiltIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

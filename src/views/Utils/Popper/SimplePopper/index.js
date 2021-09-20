import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimplePopper() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <Button variant="contained" color="primary" aria-describedby={id} type="button" onClick={handleClick}>
                Toggle Popper
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div className={classes.paper}>The content of the Popper.</div>
            </Popper>
        </div>
    );
}

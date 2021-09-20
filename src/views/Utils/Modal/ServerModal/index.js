import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE 11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    divider: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function ServerModal() {
    const classes = useStyles();
    const rootRef = React.useRef(null);

    return (
        <div className={classes.root} ref={rootRef}>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}
            >
                <div className={classes.paper}>
                    <Typography variant="subtitle1">Server Side Modal</Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="subtitle2">If you disable JavaScript, you will still see me.</Typography>
                </div>
            </Modal>
        </div>
    );
}

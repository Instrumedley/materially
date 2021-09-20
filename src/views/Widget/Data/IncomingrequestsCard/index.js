import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    ListItemText,
} from '@material-ui/core';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    incomingrequestscard: {
        padding: '0px',
        paddingBottom: '0px !important',
    },
    textsuccess: {
        color: theme.palette.success.main,
    },
    textprimary: {
        color: theme.palette.primary.main,
    },
    textwarning: {
        color: theme.palette.warning.main,
    },
    texterror: {
        color: theme.palette.error.main,
    },
    ScrollHeight: {
        height: '300px',
    },
    projecttablefooter: {
        justifyContent: 'center',
    },
}));

const IncomingrequestsCard = (props) => {
    const { title } = props;
    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                title={
                    <Typography component="div" className="card-header">
                        {title}
                    </Typography>
                }
            />
            <Divider />
            <CardContent className={classes.incomingrequestscard}>
                <PerfectScrollbar className={classes.ScrollHeight}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.textsuccess} />
                            </ListItemIcon>
                            <ListItemText secondary="Incoming requests" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.texterror} />
                            </ListItemIcon>
                            <ListItemText secondary="You have 2 pending requests.." />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.textwarning} />
                            </ListItemIcon>
                            <ListItemText secondary="You have 3 pending tasks" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.textprimary} />
                            </ListItemIcon>
                            <ListItemText secondary="New order received" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.textsuccess} />
                            </ListItemIcon>
                            <ListItemText secondary="Incoming requests" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.texterror} />
                            </ListItemIcon>
                            <ListItemText secondary="You have 2 pending requests.." />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.textwarning} />
                            </ListItemIcon>
                            <ListItemText secondary="You have 3 pending tasks" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <FiberManualRecordIcon className={classes.textprimary} />
                            </ListItemIcon>
                            <ListItemText secondary="New order received" />
                        </ListItem>
                    </List>
                </PerfectScrollbar>
            </CardContent>
            <Divider />
            <CardActions className="f-right">
                <Button variant="text" size="small" color="primary">
                    Show more
                </Button>
            </CardActions>
        </Card>
    );
};

export default IncomingrequestsCard;

import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    makeStyles,
    Card,
    CardHeader,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    ListItemText,
} from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles((theme) => ({
    incomingrequestscard: {
        padding: '0px',
        paddingBottom: '0px !important',
    },
    textsuccess: {
        color: theme.palette.success.main,
    },
    texterror: {
        color: theme.palette.error.main,
    },
    ScrollHeight: {
        height: '370px',
        '& svg': {
            width: '40px',
            height: '40px',
            margin: '-6px 6px -6px -6px',
        },
    },
    cointext: {
        display: 'flex',
        justifyContent: 'space-between',
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
                                <ArrowDropUpIcon className={classes.textsuccess} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Bitcoin</span>
                                        <span className={classes.textsuccess}>+ $145.85</span>
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowDropDownIcon className={classes.texterror} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Ethereum</span>
                                        <span className={classes.texterror}>- $6.368</span>
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowDropUpIcon className={classes.textsuccess} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Ripple</span>
                                        <span className={classes.textsuccess}>+ $458.63</span>
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowDropDownIcon className={classes.texterror} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Neo</span>
                                        <span className={classes.texterror}>- $5.631</span>
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowDropDownIcon className={classes.texterror} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Ethereum</span>
                                        <span className={classes.texterror}>- $6.368</span>
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowDropUpIcon className={classes.textsuccess} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Ripple</span>
                                        <span className={classes.textsuccess}>+ $458.63</span>
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowDropDownIcon className={classes.texterror} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Neo</span>
                                        <span className={classes.texterror}>- $5.631</span>
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowDropDownIcon className={classes.texterror} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Ethereum</span>
                                        <span className={classes.texterror}>- $6.368</span>
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowDropUpIcon className={classes.textsuccess} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Ripple</span>
                                        <span className={classes.textsuccess}>+ $458.63</span>
                                    </div>
                                }
                            />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ArrowDropDownIcon className={classes.texterror} />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <div className={classes.cointext}>
                                        <span>Neo</span>
                                        <span className={classes.texterror}>- $5.631</span>
                                    </div>
                                }
                            />
                        </ListItem>
                    </List>
                </PerfectScrollbar>
            </CardContent>
        </Card>
    );
};

export default IncomingrequestsCard;

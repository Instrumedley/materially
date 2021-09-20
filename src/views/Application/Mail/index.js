import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Grid,
    Chip,
    Collapse,
    Menu,
    Hidden,
    MenuItem,
    Dialog,
    FormControlLabel,
    LinearProgress,
    Switch,
    DialogContent,
    TextField,
    Drawer,
    InputBase,
    List,
    ListItemAvatar,
    CardMedia,
    Divider,
    ListItemIcon,
    ListItemText,
    ListItem,
    Link,
    Button,
    Typography,
    IconButton,
    useTheme,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from './../../../component/Avatar';

import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import InboxTwoToneIcon from '@material-ui/icons/InboxTwoTone';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AttachmentTwoToneIcon from '@material-ui/icons/AttachmentTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ReplyAllRoundedIcon from '@material-ui/icons/ReplyAllRounded';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import EmojiFlagsTwoToneIcon from '@material-ui/icons/EmojiFlagsTwoTone';
import PrintTwoToneIcon from '@material-ui/icons/PrintTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';
import InsertEmoticonTwoToneIcon from '@material-ui/icons/InsertEmoticonTwoTone';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

import { gridSpacing } from '../../../store/constant';
import Pdffile from './../../../assets/images/page/file-pdf.svg';
import Zipfile from './../../../assets/images/page/file-zip.svg';

const useStyles = makeStyles((theme) => ({
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
    mailroot: {
        background: theme.palette.background.paper,
        padding: '0px',
        display: 'flex',
        margin: '-40px -40px',
        [theme.breakpoints.down('sm')]: {
            margin: '-24px -24px',
        },
    },
    mailsidebar: {
        background: theme.palette.background.paper,
        flex: '260px',
        textAlign: 'center',
        boxShadow: '1px 0 1px 0 rgba(0, 0, 0, 0.12)',
        zIndex: '5',
        padding: '0px',
        // [theme.breakpoints.down('xs')]: {
        //     display:'none'
        // }
    },
    drawermailsidebar: {
        width: '260px',
        flexShrink: 0,
        position: 'relative',
    },
    mailinboxes: {
        background: theme.palette.background.paper,
        flex: '360px',
        boxShadow: '1px 0 1px 0 rgba(0, 0, 0, 0.12)',
        zIndex: '4',
        padding: '0px',
        // [theme.breakpoints.down('sm')]: {
        //     display:'none'
        // }
    },
    mailwrapper: {
        display: 'flex',
        flex: '100vw',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        //marginLeft: '-260px',
    },
    mailwrapperfull: {
        display: 'flex',
        flex: 'calc(100vw - 260px)',
        transition: theme.transitions.create(['flex'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    mailwrapperfullShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: '-260px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    mailcontent: {
        padding: '0',
        zIndex: '3',
        flex: 'calc(100vw - 620px)',
    },
    listitemchip: {
        float: 'right',
        '& svg': {
            width: '16px',
            height: '16px',
            marginRight: '2px',
            verticalAlign: 'text-bottom',
        },
    },
    mailsidebarlist: {
        '& > div': {
            paddingTop: '8px',
            paddingBottom: '8px',
        },
    },
    mailinboxelist: {
        '& > div': {
            paddingTop: '12px',
            paddingBottom: '12px',
            alignItems: 'flex-start',
            '& > div': {
                marginTop: '0px',
                marginBottom: '0px',
            },
        },
    },
    nested: {
        '& svg': {
            width: '12px',
            height: '12px',
            margin: '0 auto',
        },
    },
    listitemtitle: {
        display: 'inline-block',
        '& svg': {
            width: '12px',
            height: '12px',
            marginLeft: '5px',
        },
    },
    search: {
        position: 'relative',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(2),
        width: 'auto',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '65px',
    },
    replayInput: {
        padding: '20px 15px',
        background: theme.palette.background.default,
        borderRadius: '4px',
    },
    mailinboxesheader: {
        padding: '5px 10px',
        boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.12)',
    },
    mailinboxread: {
        padding: '25px 25px',
    },
    ScrollHeightmail: {
        padding: '25px 0px',
        height: 'calc(100vh - 65px)',
    },
    ScrollHeightinbox: {
        height: 'calc(100vh - 120px)',
    },
    composecontainer: {
        margin: '-8px -12px 5px -12px ',
    },
}));
const AddProduct = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [openmailsidebar, setOpenmailsidebar] = React.useState(true);

    React.useEffect(() => {
        setOpenmailsidebar(!matchDownSM);
    }, [matchDownSM]);

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClicksort = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClosesort = () => {
        setAnchorEl(null);
    };
    const [open1, setOpen1] = React.useState(false);
    const handleClickOpendialog = () => {
        setOpen1(true);
    };
    const handleClosedialog = () => {
        setOpen1(false);
    };

    const [ccbccvalue, ccbccsetValue] = React.useState(0);
    const ccbcchandleChange = (event, newValue) => {
        ccbccsetValue((prev) => !prev);
    };

    const handleDrawerOpen = () => {
        setOpenmailsidebar((prevState) => !prevState);
    };

    const [mailinboxlistvalue, setmailinboxlist] = React.useState(true);
    const handleviewmailinboxlist = () => {
        setmailinboxlist((prevState1) => !prevState1);
    };

    return (
        <div className={classes.mailroot}>
            <Drawer
                className={classes.drawermailsidebar}
                variant={matchDownSM ? 'temporary' : 'persistent'}
                anchor="left"
                open={openmailsidebar}
                classes={{
                    paper: classes.drawermailsidebar,
                }}
                ModalProps={{ keepMounted: true }}
                onClose={handleDrawerOpen}
            >
                <div className={classes.mailsidebar}>
                    <PerfectScrollbar className={classes.ScrollHeightmail}>
                        <Button variant="contained" color="primary" onClick={handleClickOpendialog}>
                            Compose
                        </Button>
                        <Dialog open={open1} onClose={handleClosedialog} className={classes.accountdialog}>
                            <DialogContent>
                                <Grid container spacing={gridSpacing} className={classes.composecontainer}>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={0}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography component="div" align="left" variant="h3">
                                                    New Message
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <IconButton color="secondary" onClick={handleClosedialog}>
                                                    <HighlightOffTwoToneIcon />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container justify="flex-end" spacing={0}>
                                            <Grid item>
                                                <FormControlLabel
                                                    value="start"
                                                    control={<Switch color="primary" onClick={ccbcchandleChange} />}
                                                    label="Show CC & BCC"
                                                    labelPlacement="start"
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="To" variant="outlined" defaultValue="Joan Bates" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Subject" variant="outlined" defaultValue="review" />
                                    </Grid>
                                    {ccbccvalue ? (
                                        <Grid item xs={12}>
                                            <TextField fullWidth label="CC" variant="outlined" />
                                        </Grid>
                                    ) : (
                                        ''
                                    )}
                                    {ccbccvalue ? (
                                        <Grid item xs={12}>
                                            <TextField fullWidth label="BCC" variant="outlined" />
                                        </Grid>
                                    ) : (
                                        ''
                                    )}
                                    <Grid item xs={12}>
                                        <TextField fullWidth label="Message" variant="outlined" multiline rows="4" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={gridSpacing}>
                                            <Grid item>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item>
                                                        <CardMedia component="img" image={Pdffile} title="image" />
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" component="div" variant="subtitle1">
                                                            resume.pdf
                                                        </Typography>
                                                        <Typography align="left" component="div" variant="subtitle2">
                                                            570 KB
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Link href="#" color="secondary">
                                                            <DeleteTwoToneIcon />
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item>
                                                        <CardMedia component="img" image={Zipfile} title="image" />
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" component="div" variant="subtitle1">
                                                            portfolio.zip
                                                        </Typography>
                                                        <LinearProgress variant="determinate" value={60} color="primary" />
                                                    </Grid>
                                                    <Grid item>
                                                        <Link href="#" color="secondary">
                                                            <HighlightOffTwoToneIcon />
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={gridSpacing}>
                                            <Grid item xs zeroMinWidth>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item>
                                                        <Link href="#" color="secondary">
                                                            <AttachmentTwoToneIcon />
                                                        </Link>
                                                    </Grid>
                                                    <Grid item>
                                                        <Link href="#" color="secondary">
                                                            <InsertEmoticonTwoToneIcon />
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    startIcon={<ReplyRoundedIcon />}
                                                    onClick={handleClosedialog}
                                                >
                                                    Reply
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </DialogContent>
                        </Dialog>
                        <List component="div" className={classes.mailsidebarlist}>
                            <ListItem button>
                                <ListItemIcon>
                                    <EmailTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            Inbox
                                            <Chip label="22" color="primary" size="small" className={classes.listitemchip} />
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <SendTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary="Sent" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <InboxTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            Drafts
                                            <Chip label="5" color="primary" size="small" className={classes.listitemchip} />
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <ErrorTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary="Important" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <StarsTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <DeleteSweepTwoToneIcon />
                                </ListItemIcon>
                                <ListItemText primary="Deleted" />
                            </ListItem>
                            <ListItem button onClick={handleClick}>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Labels" />
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" className={classes.mailsidebarlist} disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon className={classes.texterror} />
                                        </ListItemIcon>
                                        <ListItemText primary="Personal" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon className={classes.textprimary} />
                                        </ListItemIcon>
                                        <ListItemText primary="Clients" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon className={classes.textsuccess} />
                                        </ListItemIcon>
                                        <ListItemText primary="Events" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon className={classes.textwarning} />
                                        </ListItemIcon>
                                        <ListItemText primary="Social" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon className={classes.textprimary} />
                                        </ListItemIcon>
                                        <ListItemText primary="Work" />
                                    </ListItem>
                                    <ListItem button className={classes.nested}>
                                        <ListItemIcon>
                                            <FiberManualRecordIcon className={classes.textsuccess} />
                                        </ListItemIcon>
                                        <ListItemText primary="Update" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </PerfectScrollbar>
                </div>
            </Drawer>
            <div
                className={clsx(classes.mailwrapper, {
                    [classes.mailwrapperfull]: openmailsidebar,
                    [classes.mailwrapperfullShift]: !openmailsidebar,
                })}
            >
                <Hidden mdDown={mailinboxlistvalue}>
                    <div className={classes.mailinboxes}>
                        <div className={classes.mailinboxesheader}>
                            <Grid container alignItems="center" spacing={0}>
                                <Grid item>
                                    <IconButton color="secondary" onClick={handleDrawerOpen}>
                                        <MenuRoundedIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchTwoToneIcon />
                                        </div>
                                        <InputBase
                                            placeholder="Search…"
                                            classes={{
                                                root: classes.inputRoot,
                                                input: classes.inputInput,
                                            }}
                                            inputProps={{ 'aria-label': 'search' }}
                                        />
                                    </div>
                                </Grid>
                                <Grid item sm zeroMinWidth></Grid>
                                <Grid item>
                                    <Typography component="div" variant="body2">
                                        Sort by:
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={handleClicksort} endIcon={<ExpandMoreRoundedIcon />} variant="text" size="small">
                                        Date
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClosesort}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <MenuItem onClick={handleClosesort}>Name</MenuItem>
                                        <MenuItem onClick={handleClosesort}>Date</MenuItem>
                                        <MenuItem onClick={handleClosesort}>Ratting</MenuItem>
                                        <MenuItem onClick={handleClosesort}>Unread</MenuItem>
                                    </Menu>
                                </Grid>
                            </Grid>
                        </div>
                        <PerfectScrollbar className={classes.ScrollHeightinbox}>
                            <List component="div" className={classes.mailinboxelist}>
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="primary">JD</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    John Doe
                                                    <FiberManualRecordIcon className={classes.texterror} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    <AttachmentTwoToneIcon /> 20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="success">S</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    Sara Soudein
                                                    <FiberManualRecordIcon className={classes.textsuccess} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    <AttachmentTwoToneIcon /> 2 hours
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="warning">JW</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    Joseph William
                                                    <FiberManualRecordIcon className={classes.textprimary} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    {' '}
                                                    6 hours
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="info">JD</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    John Doe
                                                    <FiberManualRecordIcon className={classes.texterror} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    <AttachmentTwoToneIcon /> 20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="error">S</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    Sara Soudein
                                                    <FiberManualRecordIcon className={classes.textsuccess} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    <AttachmentTwoToneIcon /> 2 hours
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="primary">JW</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    Joseph William
                                                    <FiberManualRecordIcon className={classes.textprimary} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    {' '}
                                                    6 hours
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="success">S</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    Sara Soudein
                                                    <FiberManualRecordIcon className={classes.textsuccess} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    <AttachmentTwoToneIcon /> 2 hours
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="warning">JW</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    Joseph William
                                                    <FiberManualRecordIcon className={classes.textprimary} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    {' '}
                                                    6 hours
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="info">JD</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    John Doe
                                                    <FiberManualRecordIcon className={classes.texterror} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    <AttachmentTwoToneIcon /> 20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="error">S</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    Sara Soudein
                                                    <FiberManualRecordIcon className={classes.textsuccess} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    <AttachmentTwoToneIcon /> 2 hours
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="primary">JW</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="div" variant="subtitle1" className={classes.listitemtitle}>
                                                    Joseph William
                                                    <FiberManualRecordIcon className={classes.textprimary} />
                                                </Typography>{' '}
                                                <Typography component="div" variant="caption" className={classes.listitemchip}>
                                                    {' '}
                                                    6 hours
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2">The Arts play a large role in beauty of my life..."</Typography>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </PerfectScrollbar>
                    </div>
                </Hidden>
                <Hidden mdDown={!mailinboxlistvalue}>
                    <div className={classes.mailcontent}>
                        <div className={classes.mailinboxesheader}>
                            <Grid container alignItems="center" spacing={0}>
                                <Hidden lgUp>
                                    <Grid item>
                                        <IconButton color="secondary" onClick={handleviewmailinboxlist}>
                                            <ArrowBackRoundedIcon />
                                        </IconButton>
                                    </Grid>
                                </Hidden>
                                <Grid item>
                                    <IconButton color="secondary">
                                        <ReplyAllRoundedIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton color="secondary">
                                        <ReplyRoundedIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item sm zeroMinWidth>
                                    <Grid container justify="center" alignItems="center" spacing={0}>
                                        <Grid item>
                                            <IconButton color="secondary">
                                                <NavigateBeforeRoundedIcon />
                                            </IconButton>
                                        </Grid>
                                        <Grid item>
                                            <Typography component="div" variant="body2">
                                                1 of 200
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <IconButton color="secondary">
                                                <NavigateNextRoundedIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <IconButton color="secondary">
                                        <EmojiFlagsTwoToneIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton color="secondary">
                                        <PrintTwoToneIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton color="secondary">
                                        <DeleteTwoToneIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </div>
                        <PerfectScrollbar className={classes.ScrollHeightinbox}>
                            <div className={classes.mailinboxread}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={gridSpacing}>
                                            <Grid item xs zeroMinWidth>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item>
                                                        <Avatar color="primary">JD</Avatar>
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" component="div" variant="subtitle1">
                                                            David Jones
                                                        </Typography>
                                                        <Typography align="left" component="div" variant="subtitle2" color="primary">
                                                            david_jones@mail.com
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Typography align="left" component="div" variant="subtitle1">
                                                    30 Nov 2019
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" component="div" variant="subtitle1">
                                            Hello, Mark!
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" component="div" variant="body1">
                                            I am writing to introduce you to David Boyd. I know you've been looking hard for a candidate for
                                            that Creative Director position and I believe David Boyd ﬁts the position.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" component="div" variant="body1">
                                            David Boyd and I worked together at Apple company, Where they were the senior Creative Director.
                                            They did a terriﬁc job there. David Boyd was responsible for completely restructuring both the
                                            public-facing and internal websites. They’d be a great ﬁt at Google company.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" component="div" variant="body1">
                                            I've attached David Boyd resume and portfolio for your review. You can contact David Boyd at{' '}
                                            <Link href="#">david_boyd@mail.com</Link>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" component="div" variant="subtitle2">
                                            Thanks for any help you can give.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography align="left" component="div" variant="body2">
                                            Best regards,
                                        </Typography>
                                        <Typography align="left" component="div" variant="body1">
                                            Joan Bates
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={gridSpacing}>
                                            <Grid item>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item>
                                                        <CardMedia component="img" image={Pdffile} title="image" />
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" component="div" variant="subtitle1">
                                                            resume.pdf
                                                        </Typography>
                                                        <Typography align="left" component="div" variant="subtitle2">
                                                            570 KB
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Link href="#" color="secondary">
                                                            <GetAppTwoToneIcon />
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item>
                                                        <CardMedia component="img" image={Zipfile} title="image" />
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <Typography align="left" component="div" variant="subtitle1">
                                                            portfolio.zip
                                                        </Typography>
                                                        <Typography align="left" component="div" variant="subtitle2">
                                                            250 MB
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Link href="#" color="secondary">
                                                            <GetAppTwoToneIcon />
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputBase
                                            placeholder="Reply..."
                                            fullWidth
                                            multiline
                                            rows="3"
                                            classes={{
                                                input: classes.replayInput,
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={gridSpacing}>
                                            <Grid item xs zeroMinWidth>
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item>
                                                        <Link href="#" color="secondary">
                                                            <AttachmentTwoToneIcon />
                                                        </Link>
                                                    </Grid>
                                                    <Grid item>
                                                        <Link href="#" color="secondary">
                                                            <InsertEmoticonTwoToneIcon />
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <Button variant="contained" color="primary" startIcon={<ReplyRoundedIcon />}>
                                                    Reply
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </Hidden>
            </div>
        </div>
    );
};

export default AddProduct;

import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Grid,
    Chip,
    Hidden,
    InputBase,
    List,
    ListItemAvatar,
    CardMedia,
    Divider,
    ListItemText,
    ListItem,
    Link,
    Fab,
    Typography,
    IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from './../../../component/Avatar';

import AttachmentTwoToneIcon from '@material-ui/icons/AttachmentTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone';
import InsertEmoticonTwoToneIcon from '@material-ui/icons/InsertEmoticonTwoTone';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ControlPointTwoToneIcon from '@material-ui/icons/ControlPointTwoTone';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

import { gridSpacing } from '../../../store/constant';
import Pdffile from './../../../assets/images/page/file-pdf.svg';
import Imgprod1 from './../../../assets/images/widget/prod1.jpg';
import Imgprod2 from './../../../assets/images/widget/prod2.jpg';
import Imgprod3 from './../../../assets/images/widget/prod3.jpg';
import Imgprod4 from './../../../assets/images/widget/prod4.jpg';

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
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
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
    listitemmsg: {
        width: '18px',
        height: '18px',
        background: theme.palette.error.main,
        '& span': {
            padding: '0',
            fontSize: '0.7125rem',
            color: '#fff',
        },
    },
    onlinebadge: {
        width: '8px',
        height: '8px',
        background: theme.palette.success.main,
        borderRadius: '50%',
        position: 'absolute',
        left: '44px',
        top: '44px',
        boxShadow: '0 0 0 3px #fff',
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
        padding: '10px 10px',
        boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.12)',
    },
    mailinboxesfooter: {
        padding: '10px 10px',
        boxShadow: '0 -1px 0 0 rgba(0, 0, 0, 0.12)',
    },
    mailinboxread: {
        padding: '25px 25px',
    },
    ScrollHeightmessage: {
        height: 'calc(100vh - 130px)',
    },
    ScrollHeightinbox: {
        height: 'calc(100vh - 206px)',
    },
    composecontainer: {
        margin: '-8px -12px 5px -12px ',
    },
    recevemail: {
        background: theme.palette.primary.main,
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '20px 20px 20px 0px',
    },
    sentemail: {
        background: theme.palette.background.default,
        padding: '10px 20px',
        borderRadius: '20px 20px 0px 20px',
    },
    uploadedmedia: {
        width: '56px',
        height: '56px',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px rgba(169, 194, 209, 0.05), 0px 8px 16px rgba(169, 194, 209, 0.1)',
    },
    sapratorcontent: {
        position: 'relative',
        textAlign: 'center',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '1px',
            top: '50%',
            left: '0',
            background: theme.palette.background.default,
        },
        '& > div': {
            position: 'relative',
            background: theme.palette.background.paper,
            display: 'inline-block',
            zIndex: '1',
            padding: '0 10px',
        },
    },
}));
const AddProduct = () => {
    const classes = useStyles();

    const [mailinboxlistvalue, setmailinboxlist] = React.useState(false);
    const handleviewmailinboxlist = () => {
        setmailinboxlist((prevState1) => !prevState1);
    };

    return (
        <div className={classes.mailroot}>
            <div className={classes.mailwrapper}>
                <Hidden mdDown={mailinboxlistvalue}>
                    <div className={classes.mailinboxes}>
                        <div className={classes.mailinboxesheader}>
                            <Grid container alignItems="center" spacing={0}>
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
                                <Grid item xs zeroMinWidth></Grid>
                                <Grid item>
                                    <IconButton color="secondary">
                                        <ControlPointTwoToneIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </div>
                        <PerfectScrollbar className={classes.ScrollHeightmessage}>
                            <List component="div" className={classes.mailinboxelist}>
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <React.Fragment>
                                            <Avatar color="primary">JD</Avatar>
                                            <span className={classes.onlinebadge}></span>
                                        </React.Fragment>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    John Doe
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        The Arts play a large role in...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span">
                                                    <Chip className={classes.listitemmsg} component="span" label="2" size="small"></Chip>
                                                </Grid>
                                            </Grid>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <React.Fragment>
                                            <Avatar color="success">S</Avatar>
                                            <span className={classes.onlinebadge}></span>
                                        </React.Fragment>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    Sara Soudein
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        I am writing to introduce you to...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span">
                                                    <Chip className={classes.listitemmsg} component="span" label="2" size="small"></Chip>
                                                </Grid>
                                            </Grid>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="info">JW</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    Joseph William
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        We use the Arts as a means of...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span"></Grid>
                                            </Grid>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <React.Fragment>
                                            <Avatar color="warning">JD</Avatar>
                                            <span className={classes.onlinebadge}></span>
                                        </React.Fragment>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    John Doe
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        The arts allow us to be as specific or...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span">
                                                    <Chip className={classes.listitemmsg} component="span" label="2" size="small"></Chip>
                                                </Grid>
                                            </Grid>
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
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    Sara Soudein
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        From dance and music to abstract...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span"></Grid>
                                            </Grid>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <React.Fragment>
                                            <Avatar color="primary">JD</Avatar>
                                            <span className={classes.onlinebadge}></span>
                                        </React.Fragment>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    John Doe
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        The Arts play a large role in...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span"></Grid>
                                            </Grid>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <React.Fragment>
                                            <Avatar color="success">S</Avatar>
                                            <span className={classes.onlinebadge}></span>
                                        </React.Fragment>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    Sara Soudein
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        I am writing to introduce you to...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span"></Grid>
                                            </Grid>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <Avatar color="info">JW</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    Joseph William
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        We use the Arts as a means of...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span"></Grid>
                                            </Grid>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                                <ListItem button onClick={handleviewmailinboxlist}>
                                    <ListItemAvatar>
                                        <React.Fragment>
                                            <Avatar color="warning">JD</Avatar>
                                            <span className={classes.onlinebadge}></span>
                                        </React.Fragment>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    John Doe
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        The arts allow us to be as specific or...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span"></Grid>
                                            </Grid>
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
                                                <Typography component="span" variant="h6" className={classes.listitemtitle}>
                                                    Sara Soudein
                                                </Typography>{' '}
                                                <Typography component="div" variant="body1" className={classes.listitemchip}>
                                                    20 min
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <Grid container spacing={1} component="span">
                                                <Grid item xs zeroMinWidth component="span">
                                                    <Typography component="span" variant="body2" className={classes.listitemtitle}>
                                                        From dance and music to abstract...
                                                    </Typography>
                                                </Grid>
                                                <Grid item component="span"></Grid>
                                            </Grid>
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
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Avatar color="primary">JD</Avatar>
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" component="div" variant="subtitle1">
                                                David Jones
                                            </Typography>
                                            <Typography align="left" component="div" variant="subtitle2">
                                                Active 1 min ago
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs zeroMinWidth></Grid>
                                <Grid item>
                                    <IconButton color="secondary">
                                        <MoreHorizTwoToneIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </div>
                        <PerfectScrollbar className={classes.ScrollHeightinbox}>
                            <div className={classes.mailinboxread}>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={12} sm={8}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <Avatar color="error">D</Avatar>
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <div className={classes.recevemail}>
                                                            <Typography align="left" component="div" variant="body2">
                                                                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                                                                saepe eveniet.
                                                            </Typography>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <Typography align="right" component="div" variant="body1">
                                                    1 min ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={0} justify="flex-end">
                                            <Grid item xs={12} sm={8}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <IconButton color="secondary">
                                                            <MoreHorizTwoToneIcon />
                                                        </IconButton>
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <div className={classes.sentemail}>
                                                            <Typography align="left" component="div" variant="body2">
                                                                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                                                                saepe eveniet.
                                                            </Typography>
                                                        </div>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar color="warning">AW</Avatar>
                                                    </Grid>
                                                </Grid>
                                                <Typography align="left" component="div" variant="body1">
                                                    2 min ago
                                                </Typography>
                                                <Grid container spacing={1} alignItems="center">
                                                    <Grid item>
                                                        <CardMedia
                                                            component="img"
                                                            image={Imgprod1}
                                                            title="image"
                                                            className={classes.uploadedmedia}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <CardMedia
                                                            component="img"
                                                            image={Imgprod2}
                                                            title="image"
                                                            className={classes.uploadedmedia}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <CardMedia
                                                            component="img"
                                                            image={Imgprod3}
                                                            title="image"
                                                            className={classes.uploadedmedia}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <CardMedia
                                                            component="img"
                                                            image={Imgprod4}
                                                            title="image"
                                                            className={classes.uploadedmedia}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Link href="#">
                                                            <Avatar color="primary">+3</Avatar>
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={12} sm={8}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <Avatar color="error">D</Avatar>
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <div className={classes.recevemail}>
                                                            <Typography align="left" component="div" variant="body2">
                                                                voluptatem sequi nesciunt neque porro obcaecati cupiditate. non provident
                                                                similique sunt.
                                                            </Typography>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <Typography align="right" component="div" variant="body1">
                                                    3 min ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.sapratorcontent}>
                                            <Typography align="left" component="div" variant="body2">
                                                Today
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={0} justify="flex-end">
                                            <Grid item xs={12} sm={8}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <IconButton color="secondary">
                                                            <MoreHorizTwoToneIcon />
                                                        </IconButton>
                                                    </Grid>
                                                    <Grid item>
                                                        <IconButton color="secondary">
                                                            <DeleteTwoToneIcon />
                                                        </IconButton>
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <div className={classes.sentemail}>
                                                            <Typography align="left" component="div" variant="body2">
                                                                Excepteur sint occaecat cupidatat non proident, quia voluptas sit,
                                                                aspernatur aut odit aut fugit.
                                                            </Typography>
                                                        </div>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar color="warning">AW</Avatar>
                                                    </Grid>
                                                </Grid>
                                                <Typography align="left" component="div" variant="body1">
                                                    4 min ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={12} sm={8}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <Avatar color="error">D</Avatar>
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <div className={classes.recevemail}>
                                                            <Typography align="left" component="div" variant="body2">
                                                                Itaque earum rerum hic tenetur a sapiente delectus quia voluptas sit,
                                                                aspernatur aut odit aut fugit sed.
                                                            </Typography>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                                <Typography align="right" component="div" variant="body1">
                                                    5 min ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={0} justify="flex-end">
                                            <Grid item xs={12} sm={6}>
                                                <Grid container spacing={1} alignItems="flex-end">
                                                    <Grid item>
                                                        <IconButton color="secondary">
                                                            <MoreHorizTwoToneIcon />
                                                        </IconButton>
                                                    </Grid>
                                                    <Grid item xs zeroMinWidth>
                                                        <div className={classes.sentemail}>
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
                                                        </div>
                                                    </Grid>
                                                    <Grid item>
                                                        <Avatar color="warning">AW</Avatar>
                                                    </Grid>
                                                </Grid>
                                                <Typography align="left" component="div" variant="body1">
                                                    4 min ago
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </PerfectScrollbar>
                        <div className={classes.mailinboxesfooter}>
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <IconButton color="secondary">
                                        <AttachmentTwoToneIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton color="secondary">
                                        <InsertEmoticonTwoToneIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <InputBase
                                        placeholder="Write a Message..."
                                        fullWidth
                                        classes={{
                                            input: classes.replayInput,
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Fab color="primary" size="medium">
                                        <ReplyRoundedIcon />
                                    </Fab>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Hidden>
            </div>
        </div>
    );
};

export default AddProduct;

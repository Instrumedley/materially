import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function CustomizedRatings() {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography component="legend">Empty Icon</Typography>
                </Grid>
                <Grid item>
                    <Rating name="customized-empty" defaultValue={2} precision={0.5} emptyIcon={<StarBorderIcon fontSize="inherit" />} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography component="legend">Icon & Color</Typography>
                </Grid>
                <Grid item>
                    <StyledRating
                        name="customized-color"
                        defaultValue={2}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography component="legend">6 Stars</Typography>
                </Grid>
                <Grid item>
                    <Rating name="customized-10" defaultValue={2} max={8} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography component="legend">Icon Set</Typography>
                </Grid>
                <Grid item>
                    <Rating
                        name="customized-icons"
                        defaultValue={2}
                        getLabelText={(value) => customIcons[value].label}
                        IconContainerComponent={IconContainer}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';

import PlusCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  }
}));

const Header = ({
  className,
  onAddClick,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      justify="space-between"
      spacing={3}
      {...rest}
    >
      <Grid item>
        <Typography
          variant="h3"
          color="textPrimary"
        >
          Your Event
        </Typography>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          variant="contained"
          onClick={onAddClick}
          className={classes.action}
          startIcon={
            <SvgIcon fontSize="small">
              <PlusCircleIcon />
            </SvgIcon>
          }
        >
          New Event
        </Button>
      </Grid>
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  onAddClick: PropTypes.func
};

Header.defaultProps = {
  onAddClick: () => {}
};

export default Header;

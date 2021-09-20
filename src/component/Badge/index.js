import React from 'react';
import MuiBadge from '@material-ui/core/Badge';

const Badge = (props) => {
    const { color, ...rest } = props;

    return <MuiBadge {...rest} color={color} />;
};

export default Badge;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Accordion = (props) => {
    const { expandIcon, square, data, toggle, defaultExpandedId } = props;
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(null);

    const handleChange = (panel) => (event, newExpanded) => {
        toggle && setExpanded(newExpanded ? panel : false);
    };

    React.useEffect(() => {
        setExpanded(defaultExpandedId);
    }, [defaultExpandedId]);

    return (
        <div className={classes.root}>
            {data &&
                data.map((item) => (
                    <MuiAccordion
                        key={item.id}
                        defaultExpanded={!item.disabled && item.defaultExpand}
                        expanded={(!toggle && !item.disabled && item.expanded) || (toggle && expanded === item.id)}
                        disabled={item.disabled}
                        square={square}
                        onChange={handleChange(item.id)}
                    >
                        <MuiAccordionSummary expandIcon={expandIcon || expandIcon === false ? expandIcon : <ExpandMoreIcon />}>
                            {item.title}
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>{item.content}</MuiAccordionDetails>
                    </MuiAccordion>
                ))}
        </div>
    );
};

export default Accordion;

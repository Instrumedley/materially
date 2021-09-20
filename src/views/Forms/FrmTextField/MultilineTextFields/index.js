import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function MultilineTextFields() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-multiline-flexible" label="Multiline" multiline rowsMax={4} value={value} onChange={handleChange} />
            <TextField id="standard-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline />

            <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={4}
                value={value}
                onChange={handleChange}
                variant="filled"
            />
            <TextField id="filled-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="filled" />

            <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax={4}
                value={value}
                onChange={handleChange}
                variant="outlined"
            />
            <TextField id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="outlined" />
            <TextField id="standard-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" />
            <TextField id="filled-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" variant="filled" />
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
            />
        </form>
    );
}

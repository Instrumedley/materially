import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButtonsGroup() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <Grid container spacing={1}>
                    <Grid item>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                    </Grid>
                    <Grid item>
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </Grid>
                    <Grid item>
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </Grid>
                    <Grid item>
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                    </Grid>
                </Grid>
            </RadioGroup>
        </FormControl>
    );
}

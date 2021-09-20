import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import * as Yup from 'yup';
import { Formik } from 'formik';

import value from './../../../assets/scss/_themes-vars.scss';

import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  FormControlLabel,
  FormHelperText,
  Switch,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import TrashIcon from '@material-ui/icons/Delete';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {},
  confirmButton: {
    marginLeft: theme.spacing(2)
  }
}));

const getInitialValues = (event, range) => {
  if (event) {
    return _.merge({}, {
      allDay: false,
      color: value.primary,
      description: '',
      end: moment().add(30, 'minutes').toDate(),
      start: moment().toDate(),
      title: '',
      submit: null
    }, event);
  }

  if (range) {
    return _.merge({}, {
      allDay: false,
      color: value.primary,
      description: '',
      end: new Date(range.end),
      start: new Date(range.start),
      title: '',
      submit: null
    }, event);
  }

  return {
    allDay: false,
    color: value.primary,
    description: '',
    end: moment().add(30, 'minutes').toDate(),
    start: moment().toDate(),
    title: '',
    submit: null
  };
};

const ModalEventFrom = props => {
  const classes = useStyles();

  const { event, handleCreate, onCancel, handleUpdate, range, handleDelete } = props;

  const isCreating = !event;

  return (
    <React.Fragment>
        <Formik
          initialValues={getInitialValues(event, range)}
          validationSchema={Yup.object().shape({
            allDay: Yup.bool(),
            description: Yup.string().max(5000),
            end: Yup.date()
              .when(
                'start',
                (start, schema) => (start && schema.min(start, 'End date must be later than start date'))
              ),
            start: Yup.date(),
            title: Yup.string().max(255).required('Title is required')
          })}
          onSubmit={async (values, {
            resetForm,
            setErrors,
            setStatus,
            setSubmitting
          }) => {
            try {
              const data = {
                allDay: values.allDay,
                color: value.primary,
                description: values.description,
                end: values.end,
                start: values.start,
                title: values.title
              };

              if (event) {
                handleUpdate(event.id, data);
              } else {
                handleCreate(data);
              }

              resetForm();
              setStatus({ success: true });
              setSubmitting(false);

            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            setFieldTouched,
            setFieldValue,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
               <Box p={3}>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h3"
                  color="textPrimary"
                >
                  {isCreating ? 'Add Event' : 'Edit Event'}
                </Typography>
              </Box>
              <Box p={3}>
                <TextField
                  error={Boolean(touched.title && errors.title)}
                  fullWidth
                  helperText={touched.title && errors.title}
                  label="Title"
                  name="title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  variant="outlined"
                />
                <Box mt={2}>
                  <TextField
                    error={Boolean(touched.description && errors.description)}
                    fullWidth
                    helperText={touched.description && errors.description}
                    label="Description"
                    name="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    variant="outlined"
                  />
                </Box>
                <Box mt={2}>
                  <FormControlLabel
                    control={(
                      <Switch
                        checked={values.allDay}
                        name="allDay"
                        onChange={handleChange}
                      />
                    )}
                    label="All day"
                  />
                </Box>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Box mt={2}>
                    <DateTimePicker
                      fullWidth
                      inputVariant="outlined"
                      label="Start date"
                      name="start"
                      onClick={() => setFieldTouched('end')}
                      onChange={(date) => setFieldValue('start', date)}
                      value={values.start}
                    />
                  </Box>
                  <Box mt={2}>
                    <DateTimePicker
                      fullWidth
                      inputVariant="outlined"
                      label="End date"
                      name="end"
                      onClick={() => setFieldTouched('end')}
                      onChange={(date) => setFieldValue('end', date)}
                      value={values.end}
                    />
                  </Box>
                </MuiPickersUtilsProvider>
                {Boolean(touched.end && errors.end) && (
                  <Box mt={2}>
                    <FormHelperText error>
                      {errors.end}
                    </FormHelperText>
                  </Box>
                )}
              </Box>
              <Divider />
              <Box
                p={2}
                display="flex"
                alignItems="center"
              >
                {!isCreating && (
                  <IconButton onClick={() => handleDelete(event.id)}>
                    <SvgIcon>
                      <TrashIcon />
                    </SvgIcon>
                  </IconButton>
                )}
                <Box flexGrow={1} />
                <Button onClick={onCancel}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  color="secondary"
                  className={classes.confirmButton}
                >
                  Confirm
                </Button>
              </Box>
            </form>
          )
        }
      </Formik>
    </React.Fragment>
  );
}

export default ModalEventFrom;
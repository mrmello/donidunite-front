import React from 'react'
import { TextField } from '@material-ui/core';
import './fields.css'

const FormDatePicker = ({
    input,
    label,
    className,
    meta: { touched, error },
  }) => {
    return (
        <TextField
        label={label}
        className={className}
        type="date"
        error={touched && error != null}
        InputLabelProps={{
          shrink: true,
        }}
        {...input}
      />
    )
}

export default FormDatePicker;
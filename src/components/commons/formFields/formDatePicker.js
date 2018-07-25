import React from 'react'
import { TextField } from '@material-ui/core';
import './fields.css'
import { formatDateToPicker } from '../../../utils';

const FormDatePicker = ({
    input,
    label,
    className,
    meta: { touched, error },
  }) => {
    input.value = input.value ? input.value : formatDateToPicker(new Date())
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
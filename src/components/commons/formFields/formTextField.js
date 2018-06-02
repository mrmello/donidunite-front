import React from 'react'
import { TextField } from '@material-ui/core';
import './fields.css'

const FormTextField = ({
    input,
    autofocus,
    label,
    className,
    name,
    fullWidth,
    meta: { touched, error },
    ...custom
}) => {
    return (
        <TextField
            label={label}
            name={name}
            autoFocus={autofocus}
            className={className}
            fullWidth={fullWidth}
            error={touched && error != null}
            {...input}
            {...custom}
        />
    )
}

export default FormTextField;
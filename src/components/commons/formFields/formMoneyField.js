import React from 'react'
import { TextField } from '@material-ui/core';
import './fields.css'

const FormMoneyField = ({
    input,
    label,
    className,
    name,
    meta: { touched, error },
    ...custom
}) => {
    return (
        <TextField
            margin="dense"
            label={label}
            name={name}
            className={className}
            error={touched && error != null}
            {...input}
            {...custom}
        />
    )
}

export default FormMoneyField;
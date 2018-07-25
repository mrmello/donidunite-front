import React from 'react'
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FormCheckbox = ({ input, label }) => (
  <FormControlLabel
    control={
      <Checkbox
        label={label}
        checked={input.value ? true : false}
        onChange={input.onChange}
      />
    }
    label={label}
  />

)

export default FormCheckbox;
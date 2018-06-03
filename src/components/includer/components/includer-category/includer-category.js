import React from 'react'
import { Button, Dialog } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import {
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { Save } from '@material-ui/icons';
import FormTextField from '../../../commons/formFields/formTextField'
import FormSelectField from '../../../commons/formFields/formSelectField'
import validate from './validator'

const FormCategory = ({ isOpen, handleSubmit, closeIncluderCategory, categories, reset }) => {

  const handleClose = () => {
    reset()
    closeIncluderCategory()
  }

  const styles = {
    button: {
      marginLeft: "10px",
      marginTop: "15px",
    }
  }

  return (
    <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title" >Nova Categoria</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Field
            component={FormTextField}
            autofocus
            className="form-field field-description"
            label="Nome"
            name="name"/>
          <Field
            component={FormSelectField}
            categories={categories}
            name="type"
            label="Tipo"
            displayBy="type"
            saveBy="type"
            className="field-selector"
          />
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <Button variant="raised" style={styles.button} onClick={handleClose} size="medium">
              Cancelar
            </Button>
            <Button color="primary" type="submit" variant="raised" style={styles.button} size="medium">
              <Save style={{fontSize: "20px"}}/>
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

let InitializeFormCategory = reduxForm({
  form: 'formCategory',
  validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(FormCategory);

export default InitializeFormCategory;
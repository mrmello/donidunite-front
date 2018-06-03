import React from 'react'
import { Button, Dialog } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form'
import {
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { createNumberMask } from 'redux-form-input-masks';
import { Save } from '@material-ui/icons';
import FormTextField from '../../../commons/formFields/formTextField'
import FormSelectField from '../../../commons/formFields/formSelectField'
import FormMoneyField from '../../../commons/formFields/formMoneyField'
import validate from './validate'

const FormProduct = ({ isOpen, handleSubmit, closeIncluderProduct, categories, reset }) => {

  const currencyMask = createNumberMask({
    prefix: 'R$ ',
    decimalPlaces: 2,
    locale: 'pt-BR',
  });

  const handleClose = () => {
    reset()
    closeIncluderProduct()
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
      <DialogTitle id="form-dialog-title" >Novo Produto</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Field
            component={FormTextField}
            autofocus
            className="form-field field-description"
            label="Nome"
            name="name"/>
          <Field
            component={FormMoneyField}
            label="Preço R$"
            name="price"
            className="form-field field-value"
            {...currencyMask}
          />
          <Field
            component={FormSelectField}
            categories={categories}
            name="category"
            label="Categoria"
            displayBy="name"
            saveBy="_id"
            className="field-selector"
            categoryType="product"
          />
          <br />
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

let InitializeFormProduct = reduxForm({
  form: 'formProduct',
  validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(FormProduct);

export default InitializeFormProduct;
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
import FormDatePicker from '../../../commons/formFields/formDatePicker'
import FormSelectField from '../../../commons/formFields/formSelectField'
import FormMoneyField from '../../../commons/formFields/formMoneyField'
import validate from './validate'

const FormExpense = ({ isOpen, handleSubmit, closeIncluderExpense, categories, reset }) => {

  const currencyMask = createNumberMask({
    prefix: 'R$ ',
    decimalPlaces: 2,
    locale: 'pt-BR',
  });

  const handleClose = () => {
    reset()
    closeIncluderExpense()
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
      <DialogTitle id="form-dialog-title" >Nova Despesa</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Field
            component={FormTextField}
            autofocus
            className="form-field field-description"
            label="Descrição"
            name="description"/>
          <Field
            component={FormMoneyField}
            label="Valor R$"
            name="value"
            className="form-field field-value"
            {...currencyMask}
          />
          <Field
            component={FormSelectField}
            categories={categories}
            name="payment"
            displayBy="name"
            label="Pagamento"
            className="field-selector"
            categoryType="payment"
          />
          <Field
            component={FormSelectField}
            categories={categories}
            name="category"
            label="Categoria"
            displayBy="name"
            className="field-selector"
            categoryType="income"
          />
          <Field
            component={FormTextField}
            label="Responsável"
            className="form-field field-responsible"
            name="payee"/>
          <Field
            component={FormDatePicker}
            label="Data"
            className="form-field field-date"
            name="date"/>
          <br />
          <Field
            component={FormTextField}
            className="form-field field-description"
            label="Para Quem?"
            name="toWho"/>
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

let InitializeFormExpense = reduxForm({
  form: 'formExpense',
  validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(FormExpense);

export default InitializeFormExpense;
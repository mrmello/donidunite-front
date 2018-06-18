import React, { Component } from 'react'
import { Button, Dialog } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
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

const styles = {
  button: {
    marginLeft: "10px",
    marginTop: "15px",
  }
}

const currencyMask = createNumberMask({
  prefix: 'R$ ',
  decimalPlaces: 2,
  locale: 'pt-BR',
});

class FormExpense extends Component {

  render() {
    const { isOpen, handleSubmit, categories, reset, closeIncluderExpense } = this.props
    const handleClose = () => {
      reset()
      closeIncluderExpense()
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
              saveBy="_id"
              value="aaa"
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
              saveBy="_id"
              className="field-selector"
              categoryType="expense"
            />
            <Field
              component={FormTextField}
              label="Responsável"
              value="aaaaa"
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
}

FormExpense = reduxForm({
  form: 'formExpense',
  validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(FormExpense);

FormExpense = connect(
  state => ({
    initialValues: state.expenses.selectedExpense // pull initial values from account reducer
  })
)(FormExpense)

export default FormExpense;
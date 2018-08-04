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
import FormImageUploader from '../../../commons/formFields/formImageUploader'
import FormSelectField from '../../../commons/formFields/formSelectField'
import FormMoneyField from '../../../commons/formFields/formMoneyField'
import FormCheckBox from '../../../commons/formFields/formCheckBox'
import validate from './validate'
import Store from '../../../../store';
import { clearProductForm } from '../../../../containers/products/productsActions';
import RoundedImagesList from '../../../commons/roudedImages/roundedImagesList';

const styles = {
  button: {
    marginLeft: "10px",
    marginTop: "15px",
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  }
}

const currencyMask = createNumberMask({
  prefix: 'R$ ',
  decimalPlaces: 2,
  locale: 'pt-BR',
});

class FormProduct extends Component {

  render() {
    const { isOpen, handleSubmit, closeIncluderProduct, categories, reset } = this.props
    const handleClose = () => {
      reset()
      closeIncluderProduct()
      Store.dispatch(clearProductForm())
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
            <Field
              component={FormImageUploader}
              name="images"
              type="file"
              label="Imagens"
            />
            <div style={{display: "flex"}}>
              <RoundedImagesList
                images={this.props.initialValues.images}
                alt={this.props.initialValues.name}
              />
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <Field
                component={FormCheckBox}
                name="active"
                label="Ativo?"
              />
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

FormProduct = reduxForm({
  form: 'formProduct',
  validate,
  enableReinitialize: true,
  destroyOnUnmount: false
})(FormProduct);

FormProduct = connect(
  state => ({
    initialValues: state.products.selectedProduct,
    onSubmit: state.products.onSubmit
  })
)(FormProduct)

export default FormProduct;
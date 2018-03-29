import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Modal, Form, Input, Select } from 'semantic-ui-react'
import { fetchCategories } from '../../actions/index';
import './includer-product.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class IncluderProduct extends Component {
  componentWillMount() {
    console.log(`aaaa`)
    this.props.fetchCategories('product');
    this.props.categories.map((category) => {
     return category
    })
  } 

  close = () => {
    this.props.closeIncluderProduct();
  }
  render() {
    
    return (
      <div>
        <Modal open={this.props.isOpen} onClose={this.close} closeIcon>
          <Modal.Header>Novo Produto</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group>
                <Form.Field control={Input} label='Nome' placeholder='Nome' width={6}/>
                <Form.Field control={Input} label='Preço' placeholder='Preço' width={4}/>
                <Form.Field control={Select} label='Categoria' options={options} placeholder='Categoria' width={5}/>
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>Cancelar</Button>
            <Button positive icon='checkmark' labelPosition='right' content="Salvar Produto" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories: fetchCategories}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IncluderProduct);
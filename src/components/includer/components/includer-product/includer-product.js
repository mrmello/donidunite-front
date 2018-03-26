import React, { Component } from 'react';
import { Button, Modal, Form, Input, Select, Checkbox } from 'semantic-ui-react'
import './includer-product.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class IncluderProduct extends Component {
  state = {}
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

import React, { Component } from 'react';
import { Button, Modal, Form, Input, Checkbox } from 'semantic-ui-react'
import './includer-product.css';
import CategorySelector from '../../../../containers/category-selector/category-selector'

export default class IncluderProduct extends Component {

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
                <CategorySelector type="product"/>
              </Form.Group>
              <Form.Group>
                <Checkbox label='Ativo' defaultChecked toggle />
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
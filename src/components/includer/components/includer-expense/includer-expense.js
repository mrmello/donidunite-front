import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form, Input, Radio, Select, TextArea, Checkbox } from 'semantic-ui-react'
import './includer-expense.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class IncluderExpense extends Component {
  state = {}
  close = () => {
    this.props.closeIncluderExpense();
  }
  render() {
    const { value } = this.state
    return (
      <div>
        <Modal dimmer='blurring' open={this.props.isOpen} onClose={this.close} closeIcon>
          <Modal.Header>Nova Despesa</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group>
                <Form.Field control={Input} label='Nome' placeholder='Nome' width={6}/>
                <Form.Field control={Input} label='Preço' placeholder='Preço' width={4}/>
                <Form.Field control={Select} label='Tamanho' options={options} placeholder='Tamanho' width={5}/>
              </Form.Group>
              <Form.Group>
                <Form.Field control={Select} label='Categoria' options={options} placeholder='Categoria' width={5}/>
                <Form.Field control={Select} label='Recheio' options={options} placeholder='Recheio' width={5}/>
              </Form.Group>
              <Form.Group inline>
                <Form.Field control={Checkbox} label='Ativo' />
              </Form.Group>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

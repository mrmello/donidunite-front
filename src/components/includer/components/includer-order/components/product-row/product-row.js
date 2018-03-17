import React, { Component } from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react'
import './product-row.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class ProductRow extends Component {
  
  renderButtonAddRemove(){
    if(this.props.remove){
      console.log(this.props.id)
      return (
        <Button basic color='red' className='button-add-remove' icon='trash outline' onClick={() => this.props.function(this.props.index)}/>
      )
    }
    else {
      return (
        <Button basic color='green' className='button-add-remove' icon='add' onClick={this.props.function}/>
      )
    }
  }

  render() {
    return (
      <Form.Group>
        <Form.Field control={Select} label='Nome do Produto' options={options} placeholder='Nome do Produto' width={6}/>
        <Form.Field control={Select} label='Tamanho' options={options} placeholder='Tamanho' width={5}/>
        <Form.Field control={Select} label='Recheio' options={options} placeholder='Recheio' width={6}/>
        <Form.Field control={Select} label='Adicional' options={options} placeholder='Adicional' width={6}/>
        <Form.Field control={Input} label='Quantidade' placeholder='Quantidade' width={5}/>
        {this.renderButtonAddRemove()}
      </Form.Group>
    )
  }
}

import React, { Component } from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react'
import './product-row.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class ProductRow extends Component {
  
  insertButtonAddRemove(){
    console.log(this.props)
    if(this.props.remove){
      return (
        <Button basic color='red' className='product-row' icon='trash outline' onClick={() => this.props.function(this.props.index)}/>
      )
    }
    else {
      return (
        <Button basic color='green' className='product-row' icon='add' onClick={this.props.function}/>
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
        {this.insertButtonAddRemove()}
      </Form.Group>
    )
  }
}

import React, { Component } from 'react';
import { Button, Form, Input, Select } from 'semantic-ui-react'
import './product-row.css';
import CategorySelector from '../../../../../../containers/categorySelector/categorySelector'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class ProductRow extends Component {
  
  renderButtonAddRemove(){
    if(this.props.remove){
      return (
        <Button basic color='red' className='icon-button' icon='trash outline' onClick={() => this.props.function(this.props.index)}/>
      )
    }
    else {
      return (
        <Button basic color='green' className='icon-button' icon='add' onClick={this.props.function}/>
      )
    }
  }

  render() {
    return (
      <Form.Group>
        <Form.Field control={Select} label='Nome do Produto' options={options} placeholder='Nome do Produto' width={6}/>
        <CategorySelector type="size" label='Tamanho' placeholder='Tamanho'/>
        <CategorySelector type="dressing" label='Recheio' placeholder='Recheio'/>
        <CategorySelector type="additional" label='Adicional' placeholder='Adicional'/>
        <Form.Field control={Input} label='Quantidade' placeholder='Quantidade' width={5}/>
        {this.renderButtonAddRemove()}
      </Form.Group>
    )
  }
}

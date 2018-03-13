import React, { Component } from 'react';
import { Button, Modal, Form, Input, Select, Checkbox } from 'semantic-ui-react'
import ProductRow from './components/product-row/product-row'
import './includer-order.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class IncluderOrder extends Component {
  constructor(){
    super();
    this.state = {}
    this.addRow = this.addRow.bind(this)
    this.removeRow = this.removeRow.bind(this)
  }
  componentWillMount(){
    this.setState({
      productRows: [{
        remove: false,
        function: this.addRow
      }]
    })
  }
  close = () => {
    this.props.closeIncluderOrder();
  }
  
  addRow(){
    this.setState(prevState => ({
      productRows: [...prevState.productRows, {
        remove: true,
        function: this.removeRow
      }]
    }))
  }

  removeRow(index){
    let element = this.state.productRows[index]
    this.setState(prevState => ({ 
      productRows: prevState.productRows.filter(row => row !== element) 
    }));
  }

  render() {
    return (
      <div>
        <Modal dimmer='blurring' size='large' open={this.props.isOpen} onClose={this.close} closeIcon>
          <Modal.Header>Novo Pedido</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group>
                <Form.Field control={Select} label='Cliente' options={options} placeholder='Cliente' width={5}/>
                <Form.Field control={Input} label='Contato' placeholder='Contato' width={6}/>
              </Form.Group>
              <hr></hr>
                {
                  this.state.productRows.map((row, i) => {
                    return (
                      <Form.Group key={i}>
                        <ProductRow index={i} remove={row.remove} function={row.function}/>
                      </Form.Group>
                    )
                  })
                }
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

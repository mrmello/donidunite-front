import React, { Component } from 'react';
import { Button, Modal, Form, Input, Select } from 'semantic-ui-react'
import ProductRow from './components/product-row/product-row'
import './includer-order.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
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
        function: this.addRow,
        index: 0,
        visibility: 'visbile'
      }]
    })
  }
  close = () => {
    this.props.closeIncluderOrder();
  }
  
  addRow(){
    let lastIndex = this.state.productRows[this.state.productRows.length-1].index;
    this.setState(prevState => ({
      productRows: [...prevState.productRows, {
        remove: true,
        function: this.removeRow,
        index: lastIndex + 1,
        visibility: 'visbile'
      }]
    }))
  }

  removeRow(index){
    console.log(this.refs);
    let objIndex = this.state.productRows.findIndex((row => row.index === index));
    let newProductRows = this.state.productRows;
    newProductRows[objIndex].visibility = 'hidden';
    this.setState({
      productRows: newProductRows
    });
  }

  render() {
    return (
      <div>
        <Modal size='large' open={this.props.isOpen} onClose={this.close} closeIcon>
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
                      <Form.Group key={i} className={row.visibility} >
                        <ProductRow index={row.index} ref={`productRow${row.index}`} remove={row.remove} function={row.function}/>
                      </Form.Group>
                    )
                  })
                }
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>Cancelar</Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yes, Salvar Pedido" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Button, Modal, Form, Input, Select, Popup } from 'semantic-ui-react'
import Calendar from 'react-calendar'
import moment from 'moment';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

export default class IncluderIncome extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentWillMount(){
    this.setState({
      date: new Date()
    })
  }

  onChange = date => this.setState({ date })

  state = {}
  close = () => {
    this.props.closeIncluderIncome();
  }
  render() {
    var readableDate = moment(new Date(this.state.date)).format('DD/MM/YYYY');
    return (
      <div>
        <Modal open={this.props.isOpen} onClose={this.close} closeIcon>
          <Modal.Header>Nova Entrada</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group>
                <Form.Field control={Input} label='Descrição' placeholder='Descrição' width={6}/>
                <Form.Field control={Input} label='Valor' placeholder='Valor' width={4}/>
                <Form.Field control={Select} label='Categoria' options={options} placeholder='Categoria' width={5}/>
              </Form.Group>
              <Form.Group>
                <Form.Field control={Select} label='Tipo de Pagamento' options={options} placeholder='Tipo de Pagamento' width={5}/>
                <Form.Field control={Input} label='Responsável' placeholder='Responsável' width={6}/>
                <Form.Field control={Input} label='Data' value={readableDate} width={6}/>
                <Popup className='popup-calendar' trigger={<Button className='icon-button' basic color='blue' icon='calendar' />} position='right center' flowing hoverable >
                  <Calendar onChange={this.onChange} value={this.state.date}/>
                </Popup>
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

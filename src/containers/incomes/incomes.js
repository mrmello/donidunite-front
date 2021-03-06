import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIncomes, deleteIncome, editIncome } from './incomesActions';
import { bindActionCreators } from 'redux';
import ButtonEdit from '../../components/commons/actionButtons/buttonEdit'
import ButtonDelete from '../../components/commons/actionButtons/buttonDelete'
import './incomes.css';
import { formatDateToDsiplay, formatDateToPicker } from '../../utils';

class Incomes extends Component {

  componentWillMount() {
    this.props.fetchIncomes();
  }

  beforeEdit(income) {
    income.payment = income.payment._id
    income.category = income.category._id
    income.date = formatDateToPicker(income.date)
    return income
  }

  renderList() {
    if(!this.props.incomes.map) {
      return (
        <tr>
          <td>Não foi possível recupurar as vendas, tente novamente mais tarde</td>
        </tr>
      );
    }
    return this.props.incomes.map((income) => {
      return (
        <tr key={income._id}>
          <td>{income.description}</td>
          <td>R$ {income.value.toFixed(2)}</td>
          <td>{income.category.name}</td>
          <td>{income.payment.name}</td>
          <td>{income.payee}</td>
          <td>{formatDateToDsiplay(income.date)}</td>
          <td>
            <ButtonEdit payload={this.beforeEdit(income)} action={editIncome} />
            <ButtonDelete payload={income._id} action={deleteIncome} />
          </td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div className="expenses">
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Entradas</h2>
          <table className="ui green striped table">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Pagamento</th>
                <th>Responsável</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    incomes: state.incomes.incomes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchIncomes: fetchIncomes}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Incomes);

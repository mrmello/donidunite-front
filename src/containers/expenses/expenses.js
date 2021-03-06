import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses, deleteExpense, editExpense } from './expensesActions';
import { bindActionCreators } from 'redux';
import ButtonEdit from '../../components/commons/actionButtons/buttonEdit'
import ButtonDelete from '../../components/commons/actionButtons/buttonDelete'
import './expenses.css';
import { formatDateToPicker, formatDateToDsiplay } from '../../utils';

class Expenses extends Component {

  componentWillMount() {
    this.props.fetchExpenses();
  }

  beforeEdit(expense) {
    expense.payment = expense.payment._id
    expense.category = expense.category._id
    expense.date = formatDateToPicker(expense.date)
    return expense
  }

  renderList() {
    if(!this.props.expenses.map) {
      return (
        <tr>
          <td>Não foi possível recupurar as vendas, tente novamente mais tarde</td>
        </tr>
      );
    }
    return this.props.expenses.map((expense) => {
      return (
        <tr key={expense._id}>
          <td>{expense.description}</td>
          <td>R$ {expense.value.toFixed(2)}</td>
          <td>{expense.category.name}</td>
          <td>{expense.payment.name}</td>
          <td>{expense.payee}</td>
          <td>{formatDateToDsiplay(expense.date)}</td>
          <td>
            <ButtonEdit payload={this.beforeEdit(expense)} action={editExpense} />
            <ButtonDelete payload={expense._id} action={deleteExpense} />
          </td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div className="expenses">
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Despesas</h2>
          <table className="ui orange striped table">
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
    expenses: state.expenses.expenses
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchExpenses: fetchExpenses}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);

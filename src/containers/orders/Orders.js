import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSales } from '../../actions/index';
import { bindActionCreators } from 'redux';
import './Orders.css';

class Orders extends Component {

  componentWillMount() {
    this.props.fetchSales();
  }


  renderList() {
    if(!this.props.sales.map) {
      return (
        <div>
          Não foi possível recupurar as vendas, tente novamente mais tarde
        </div>
      );
    }
    return this.props.sales.map((sale) => {
      return (
        <tr key={sale.code}>
          <td>{sale.code}</td>
          <td>{sale.name}</td>
          <td>{sale.value}</td>
          <td>{sale.active}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div className="orders">
        <div className="ui raised very padded text container segment">
          <table className="ui pink striped table">
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Nome do produto</th>
                <th>Valor R$</th>
                <th>Ativo?</th>
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
    sales: state.sales
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSales: fetchSales}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

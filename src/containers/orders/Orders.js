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
          <h2 className="ui header">Últimos pedidos</h2>
          <table className="ui pink striped table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Telefone</th>
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
    sales: state.sales
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSales: fetchSales}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

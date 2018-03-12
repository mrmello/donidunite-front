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
        <tr>
          <td>Não foi possível recupurar as vendas, tente novamente mais tarde</td>
        </tr>
      );
    }
    return this.props.sales.map((sale) => {
      return (
        <tr key={sale._id}>
          <td>{sale.customer.name} {sale.customer.surname}</td>
          <td>{this.renderProducts(sale)}</td>
          <td>R$ {sale.totalValue.toFixed(2)}</td>
          <td>(54) 99641 2801</td>
          <td></td>
        </tr>
      )
    });
  }

  renderProducts(sale) {
    return sale.shoppingCart.map((item) => {
      return (
        <li key={item.product._id} className="cart-details">{item.product.name}
          <ol>- Preço: R$ {item.product.price.toFixed(2)}</ol>
          <ol>- Quantidade: {item.quantity} un.</ol>
        </li>
      )
    })

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
                <th>Valor</th>
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

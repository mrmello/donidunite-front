import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { Loader } from 'semantic-ui-react'
import './products.css';

class Products extends Component {

  constructor(){
    super();
    this.state = {
      loading: true
    };

  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  componentDidMount(){
    console.log("mouted")
    this.setState = {
      loading: false
    };
  }

  renderList() {
    if(!this.props.products.map) {
      return (
        <tr>
          <td>Não foi possível recupurar as vendas, tente novamente mais tarde</td>
        </tr>
      );
    }
    return this.props.products.map((product) => {
      return (
        <tr key={product._id}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.category.name}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <div className="products">
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Produtos</h2>
          <table className="ui pink striped table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Categoria</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
              <tr><td colSpan="3"><Loader active={this.state.loading} inline='centered' />{this.state.loading}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts: fetchProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

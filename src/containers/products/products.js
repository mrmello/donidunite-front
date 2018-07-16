import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, deleteProduct } from './productsActions';
import { bindActionCreators } from 'redux';
import { Card } from 'semantic-ui-react'
import './products.css';
import ButtonEdit from '../../components/commons/actionButtons/buttonEdit'
import ButtonDelete from '../../components/commons/actionButtons/buttonDelete'
import ButtonAddToCart from '../../components/commons/actionButtons/buttonAddToCart';

class Products extends Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  beforeEdit(product) {
    product.payment = product.payment._id
    product.category = product.category._id
    return product
  }

  renderList() {
    const extra = (product) => (
      <Fragment>
        <ButtonAddToCart />
        <ButtonEdit />
        <ButtonDelete payload={product._id} action={deleteProduct}/>
      </Fragment>
    )
    if(!this.props.products.map) {
      return (
        "Não foi possível recupurar as vendas, tente novamente mais tarde"
      )
    }
    return this.props.products.map((product) => {
      return (
        <Card
          image={require('../../assets/donidunite1.png')}
          key={product._id}
          header={product.name}
          meta={product.category.name}
          description={`R$ ${product.price.toFixed(2)}`}
          extra={extra(product)} raised
        />
      )
    });
  }

  render() {
    return (
      <div className="products">
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Produtos</h2>
          <hr />
          <Card.Group itemsPerRow={6}>
            {this.renderList()}
          </Card.Group>
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

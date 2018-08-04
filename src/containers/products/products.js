import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, deleteProduct, editProduct } from './productsActions';
import { bindActionCreators } from 'redux';
import { Card } from 'semantic-ui-react'
import './products.css';
import ButtonEdit from '../../components/commons/actionButtons/buttonEdit'
import ButtonDelete from '../../components/commons/actionButtons/buttonDelete'
import ButtonAddToCart from '../../components/commons/actionButtons/buttonAddToCart';
import CustomCarousel from '../../components/commons/carousel/customCarousel';

const renderCarousel = (images) => {
  return (
    <CustomCarousel
      images={images}
      emulateTouch
      showStatus={true}
      showThumbs={false}
      showIndicators={false}/>
  )
}

class Products extends Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  beforeEdit(product) {
    product.category = product.category._id
    return product
  }

  renderList() {
    if(!this.props.products.map) {
      return (
        "Carregando..."
      )
    }
    return this.props.products.map((product) => {
      const extra = (product) => (
        <Fragment>
          <ButtonAddToCart />
          <ButtonEdit payload={this.beforeEdit(product)} action={editProduct}/>
          <ButtonDelete payload={product._id} action={deleteProduct}/>
        </Fragment>
      )
      return (
        <Card
          image={renderCarousel(product.images)}
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
    products: state.products.products
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts: fetchProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);

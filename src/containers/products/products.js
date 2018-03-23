import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { Loader, Card, Icon } from 'semantic-ui-react'
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

  handleHover() {
    console.log('hover');
  }
  renderList() {
    const extra = (
      <a>
        <Icon name='plus' />
        Detalhes
      </a>
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
          header={product.name}
          meta={product.category.name}
          description={`R$ ${product.price.toFixed(2)}`}
          extra={extra} raised
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

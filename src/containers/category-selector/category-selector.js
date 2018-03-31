import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Select } from 'semantic-ui-react'
import { fetchCategories } from '../../actions/index';
import './category-selector.css';

class CategorySelector extends Component {
  
  componentWillMount() {
    this.props.fetchCategories(this.props.type);
  }

  renderOptions(){
    const options = []
    for(let category of this.props.categories) {
      let cat = {
        key: category._id, 
        text: category.name, 
        value: category.name
      }
      options.push(cat);
    }
    return options;
  }

  render() {    
    return (
      <Form.Field control={Select} label='Categoria' options={this.renderOptions()} placeholder='Categoria' width={5}/>
    )
  }
}


function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories: fetchCategories}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector);
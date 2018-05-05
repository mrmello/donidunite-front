import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Select } from 'semantic-ui-react'
import { fetchCategories } from './categorySelectorActions';
import './categorySelector.css';

class CategorySelector extends Component {
  
  componentWillMount() {
    console.log(this.props.type)
    this.props.fetchCategories();
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
      <Form.Field control={Select} label={this.props.label} options={this.renderOptions()} placeholder={this.props.placeholder} width={5}/>
    )
  }
}


function mapStateToProps(state) {
  console.log(state)
  return {
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories: fetchCategories}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector);
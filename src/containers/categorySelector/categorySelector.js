import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Select } from 'semantic-ui-react'
import './categorySelector.css';

class CategorySelector extends Component {

  constructor(){
    super();
    this.filterCategory = this.filterCategory.bind(this)
  }

  filterCategory(item) {
    return item.type === this.props.type;
  }

  renderOptions(){
    const options = []
    for(let category of this.props.categories.filter(this.filterCategory)) {
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
  return {
    categories: state.categories
  };
}
export default connect(mapStateToProps, null)(CategorySelector);
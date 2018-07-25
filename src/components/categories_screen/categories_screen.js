import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Includer from '../includer/includer';
import GericTable from '../commons/table/genericTable'
import { fetchCategories } from '../../containers/categorySelector/categorySelectorActions'

class CategoriesScreen extends Component {
  componentWillMount() {
    this.props.fetchCategories()
  }
  render() {
    console.log(this.props.categories)
    return (
      <div>
        <GericTable data={this.props.categories}/>
        <Includer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    categories: state.categories.categories
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategories: fetchCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);
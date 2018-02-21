import React from 'react';

import FruitBasket from './FruitBasket';
import FilteredFruitList from './FilteredFruitList';
import Filter from './Filter'

export default class App extends React.Component {
  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  }

  handleFruitTypes = event => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }))
  }

  handleFruits = event => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ fruit }))
  }


  render() {
    return(
      <Filter filters={this.state.filters} handleChange={this.state.handleFruitTypes}/>,
      <FilteredFruitList fruit={this.state.fruit} filter="" />,
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter="" updateFilterCallback=""/>
    )
  }
}

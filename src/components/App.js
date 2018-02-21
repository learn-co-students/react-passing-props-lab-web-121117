import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  }

  handleFruit = event => {
    fetch('/api/fruit')
    .then(res => res.json())
    .then(data => this.setState({
      fruit: data
    }))
  }

  handleFilters = event => {
    fetch('/api/fruit_types')
    .then(res => res.json())
    .then(data => this.setState({
      filters: data
    }))
  }

  handleFilterChange = event => {
    console.log('new filter:', event.target.value);
    this.setState({
      currentFilter: event.target.value
    })
  }

  componentDidMount() {
    this.handleFruit()
    this.handleFilters()
  }

  render() {
    return(
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters}
      currentFilter={this.state.currentfilter} updateFilterCallback={this.handleFilterChange} />
    )
  }
}

export default App

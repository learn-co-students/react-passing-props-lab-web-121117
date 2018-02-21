import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  }
  
  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }
  
  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({filters: filters }));
  }
  
  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({fruit: fruit }));
  }
  
  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }
  
  render(){
    return <FruitBasket 
    filters={this.state.filters}
    updateFilterCallback={this.handleFilterChange}
    currentFilter={this.state.currentFilter}
    fruit={this.state.fruit}/>
  }
}

export default App;

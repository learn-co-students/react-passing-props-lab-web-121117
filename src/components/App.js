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
  }
  
  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }
  
  render(){
    return <FruitBasket filters={this.state.filters}/>
  }
}

export default App;

import React from "react";

import FruitBasket from "./FruitBasket";

class App extends React.Component {
  state = {
    filters: [],
    currentFilter: null,
    fruit: []
  };

  handleFilterChange = event => {
    console.log("new filter: ", event.target.value);
    this.setState({ currentFilter: event.target.value });
  };

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch("/api/fruit_types")
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  };

  componentDidMount() {
    fetch("/api/fruit")
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  render() {
    return (
      <div>
        <FruitBasket
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}
          fruit={this.state.fruit}
          handleChange={this.handleFilterChange}
        />
      </div>
    );
  }
}

export default App;

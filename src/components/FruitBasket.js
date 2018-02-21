import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class FruitBasket extends Component {

  render() {
    return (
      <div className="fruit-basket">
        <Filter
        filters={this.props.filters} handleChange={this.props.updateFilterCallback} />
        <FilteredFruitList
          filter={this.props.currentFilter}
          fruit={this.props.fruit} />
      </div>
    );
  }
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;

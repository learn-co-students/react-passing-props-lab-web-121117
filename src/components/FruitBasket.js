import React, { Component }  from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';
import PropTypes from 'prop-types'

const FruitBasket = (props) => {

  FruitBasket.defaultProps = {
    fruit:[],
    filters:[] ,
    currentFilter: null,
    updateFilterCallback: PropTypes.function
  }


  return (
    <div className="fruit-basket">
      <Filter filters={props.filters} handleChange={props.updateFilterCallback} />
      <FilteredFruitList fruit={props.fruit} filter={props.currentFilter} />
    </div>
  )
}

export default FruitBasket;

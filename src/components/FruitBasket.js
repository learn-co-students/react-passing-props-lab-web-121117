import React, { Component } from "react";

import Filter from "./Filter";
import FilteredFruitList from "./FilteredFruitList.js";
import PropTypes from "prop-types";

const FruitBasket = props => {
  FruitBasket.defaultProps = {
    fruit: [],
    filters: "",
    currentFilter: "",
    updateFilterCallback: PropTypes.function
  };

  return (
    <div className="fruit-basket">
      {console.log(props.currentFilter)}
      <Filter filters={props.filters} handleChange={props.handleChange} />
      <FilteredFruitList filter={props.currentFilter} fruit={props.fruit} />
    </div>
  );
};

export default FruitBasket;

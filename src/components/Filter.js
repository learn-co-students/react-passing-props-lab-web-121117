import React from "react";
import PropTypes from "prop-types";

const Filter = props => {
  Filter.defaultProps = {
    filters: "",
    handleChange: PropTypes.function
  };

  return (
    <select onChange={props.handleChange} defaultValue="all">
      <option value="all">All</option>
      {props.filters.map((filter, index) => (
        <option key={index} value={filter}>
          {filter}
        </option>
      ))}
    </select>
  );
};

export default Filter;

import React, { Component } from 'react';

const FilteredFruitList = (props) => {

  FilteredFruitList.defaultProps = {
    fruit: [],
    filter: ""
  }

  const list = !props.filter || props.filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);

  return (
    <ul className="fruit-list">
      {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  )
}


export default FilteredFruitList;

import React, { Component } from 'react';

class Filter extends Component {

  // componentWillMount() {
  //   this.fetchFilters();
  // }

  // fetchFilters = () => {
  //   fetch('/api/fruit_types')
  //     .then(response => response.json())
  //     .then(filters => this.setState({ filters }));
  // }

  render() {
    return (
      <select onChange={this.props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {this.props.filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
  }
}

Filter.defaultProps = {
  filters: "",
  handleChange: ""
}

export default Filter;

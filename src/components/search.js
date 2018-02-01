import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div>
        <input id="search" type="text" placeholder="Type something..." onChange={(e) => this.props.searchText(e)} />
        <span className="searchButton" onClick={this.props.search.bind(this)}>Search</span>
      </div>
    )
  }
}
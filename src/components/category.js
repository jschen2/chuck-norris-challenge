import React, { Component } from 'react';

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(categories => {
        this.setState({
          categories: categories
        })
      });
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((category, i) => {
          return <span className="category" key={i} onClick={this.props.onClick.bind(this, category)}>{category}</span>
        })}
      </div>
    )
  }
}
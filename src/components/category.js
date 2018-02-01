import React, { Component } from 'react';

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      active: ''
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

  setCategory(category) {
    this.setState({
      active: category
    });
    this.props.onClick(category);
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((category, i) => {
          return <span className={'category' + (category === this.state.active ? ' active' : '')} key={i} onClick={this.setCategory.bind(this, category)}>{category}</span>
        })}
      </div>
    )
  }
}
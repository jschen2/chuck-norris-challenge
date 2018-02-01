import React, { Component } from 'react';

export class Joke extends Component {
  render() {
    return (
      <ul>
        {this.props.jokes.map((joke, i) => {
          return <li className="joke" key={i}>{joke}<span className="jeff" onClick={this.props.jeffiSize.bind(this, joke, i)}>Jeff-isize</span></li>
        })}
      </ul>
    )
  }
}
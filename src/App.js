import React, { Component } from 'react';
import './App.css';
import {Category} from './components/category'
import {Joke} from "./components/joke";
import {Search} from "./components/search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      search: ''
    };
  }

  componentDidMount() {
    this.loadJokes();
  }

  loadJokes(category) {
    this.setState({
      jokes: []
    });
    let url = 'https://api.chucknorris.io/jokes/random';
    if (category) {
      url += '?category=' + category;
    }
    for(let i = 0; i <= 5; i++) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            jokes: [...this.state.jokes, data.value]
          });
        });
    }
  }

  jeffiSize(text, index) {
    const jokes = this.state.jokes;
    jokes[index] = text.replace('Chuck Norris', 'Jeff Gladnick');
    this.setState({
      jokes: jokes
    })
  }

  searchText(event) {
    this.setState({
      search: event.target.value
    });
  }

  search() {
    this.setState({
      jokes: ['Loading...']
    });
    let url = 'https://api.chucknorris.io/jokes/search?query=' + this.state.search;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          jokes: data.result.map(joke => joke.value)
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Chuck Norris Challenge</h1>
        </div>
        <div className="container">
          <Category onClick={this.loadJokes.bind(this)}/>
          <Search searchText={this.searchText.bind(this)} search={this.search.bind(this)} />
          <Joke jokes={this.state.jokes} jeffiSize={this.jeffiSize.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;

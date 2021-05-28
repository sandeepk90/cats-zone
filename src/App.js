import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';

import {SearchBox} from './components/search-box/search-box.component';

import './App.css'

class App extends Component {
  constructor(){
    super();

    this.state={
      cats: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ cats : users}));
  }

  render() {
    const {cats,searchField} = this.state;

    const filteredCats = cats.filter(cat => (
      cat.username.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
      <div className="App">
        <h1>Cat Zone</h1>
        <SearchBox 
        placeholder={'search-cats'}
          handleChange={e => this.setState({ searchField: e.target.value })}
        />      
        <CardList cats={filteredCats} />
      </div>
    )
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import CreateIdea from './containerCreateIdea.js';
import Cards from './containerCards.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Link to='/create-idea'> Create Idea! </Link>
          <Link to='/ideas'> Cards </Link>
        </div>
        <Route exact path='/ideas' component={Cards} />
        <Route exact path='/create-idea' component={CreateIdea}/>
      </div>
    );
  }
}

export default App;

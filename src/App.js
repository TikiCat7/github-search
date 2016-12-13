import React, { Component } from 'react';
import './App.css';
import SearchContainer from './containers/SearchContainer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchContainer  />
      </div>
    );
  }
}

export default App;

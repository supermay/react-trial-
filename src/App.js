import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title text="Thijs talks a lot ! He doesn't want to shut up !" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Title text="Thijs is very good at doing massage !" />
        </p>
      </div>
    );
  }
}

export default App;

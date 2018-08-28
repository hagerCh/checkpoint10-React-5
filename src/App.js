import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Equipe from './components/equipe';
import "./components/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Equipe/>
      </div>
    );
  }
}

export default App;

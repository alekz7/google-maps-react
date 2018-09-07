import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import MapContainer from "./MapContainer";

class App extends Component { 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MapContainer></MapContainer>
      </div>
    );
  }
}

export default App;

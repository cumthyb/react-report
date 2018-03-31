import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Report from "./components/report/index"
import Data from "./data"
import "../node_modules/antd/dist/antd.css"

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Report Data={ Data }></Report>
      </div>
      );
  }
}

export default App;

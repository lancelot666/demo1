import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {get,post} from './config/fetchAPI';

class App extends Component {
  constructor(){
    super();  
    console.log('初始化')
    this.getData();
    
  }
  async getData(){
    //await get();
    await post('',{id:1});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

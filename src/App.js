import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default App;

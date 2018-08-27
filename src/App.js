import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as act from './redux/actions/homeAction';
class App extends Component {
  constructor(props){
    super(props);  
    console.log('初始化')
    //this.getData();
    console.log(this.props)
  }
  async getData(){
    await window.get();
    await window.post('',{id:1});
  }
  changeName2(b){
    this.props.mapCHANGENAME(b)
  }
  render() {
    return (
      <div className="App">
        <div onClick={this.props.mapCHANGENAME.bind(this,'444')}>{this.props.mapName}</div>
        <div onClick={this.changeName2.bind(this,'555')}>{this.props.mapName}</div>
      </div>
    );
  }
}
const mapState = (state)=>{
  var info = state.homeData;
  //console.log('state:',state)
  return {
    mapName:info.name//对应本组件props需要的属性products
  }
}
const mapDispatch = (dispatch)=>{
  return {
    mapCHANGENAME: (v) => dispatch(act.CHANGENAME(v))
  }
}
export default connect(mapState,mapDispatch)(App);

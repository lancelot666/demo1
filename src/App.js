import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Switch, Route,Link } from 'react-router-dom'
import * as act from './redux/actions/homeAction';
import Home from './view/home'
class App extends Component {
  constructor(props){
    super(props);  
    console.log('初始化')
    this.changeName2 = this.changeName2.bind(this);
    console.log(this.props)
    //this.getData();
  }
  async getData(){
    await window.get();
    await window.post('',{id:1});
  }
  changeName2(){
    this.props.mapCHANGENAME('555')
  }
  changeName3=()=>{
    this.props.mapCHANGENAME('666')
  }
  changeName4(v){
    this.props.mapCHANGENAME(v)
  }
  to404(item){
    console.log('js to 404 is running')
    this.props.history.push('/'+item)
    //this.props.history.push('/404')
  }
  render() {
    return (
      <div className="App">
        {/* 第一种直接在render中bind(this)，导致每次渲染都会消耗性能，不推荐使用 */}
        <div onClick={this.props.mapCHANGENAME.bind(this,'444')}>{this.props.mapName}</div>
        {/* 第二种只在构造器中绑定this，之后渲染更新不会再绑定，官方推荐使用 */}
        <div onClick={this.changeName2}>{this.props.mapName}</div>
        {/* 第三种直接声明方法时就绑定，更简洁，个人推荐 */}
        <div onClick={this.changeName3}>{this.props.mapName}</div>
        {/* 第四种在onClick中绑定this,方便即时传参 */}
        <div onClick={()=>this.changeName4('777')}>{this.props.mapName}</div>
        <div><Link to='/404'>link to 404</Link></div>
        <button onClick={()=>this.to404(404)}>js to 404</button>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
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

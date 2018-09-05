import React, { Component } from 'react';
import style from './home.less';
import { Switch, Route } from 'react-router-dom'
import User from '../user/user'
class Home extends Component{
    constructor(props){
        super(props); 
        console.log('home初始化')
        this.state = ({num:1})
    }
    componentDidMount(){
        console.log('home DidMount')
    }
    toUser(){
        console.log(this)
        this.props.history.push('/user')
    }
    add(state){
        this.setState({num:state.num+1},()=>{console.log(this.state.num)})
    }
    render() {
        return (
        	<div>
            	<div className={style.bg}>this is home</div>
            	<div className="title">
                    <p>作用域css</p>
                    <p>计数器：{this.state.num}</p>
                    <button onClick={()=>this.add(this.state)}>计数器++</button>
                    <button onClick={()=>this.toUser()}>to user</button>
                </div>
                <Switch>
                    <Route exact path='/user' component={UserRoute} />
                </Switch>
            </div>
        )
    }
}
const UserRoute =({match})=>{
    <Route path={`${match.url}/user`} component={User} />
}
export default Home;
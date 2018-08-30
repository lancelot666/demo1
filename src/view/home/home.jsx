import React, { Component } from 'react';
import style from './home.less';
class Home extends Component{
    constructor(props){
        super(props); 
        console.log('home初始化')
    }
    render() {
        return (
        	<div>
            	<div className={style.bg}>this is home</div>
            	<div className="title">作用域css</div>
            </div>
        )
    }
}

export default Home;
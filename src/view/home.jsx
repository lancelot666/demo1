import React, { Component } from 'react';

class Home extends Component{
    constructor(props){
        super(props); 
        console.log('home初始化')
    }
    render() {
        return (
            <div>this is home</div>
        )
    }
}

export default Home;
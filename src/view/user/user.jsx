import React, { Component } from 'react';

class User extends Component{
    constructor(props){
        super(props); 
        console.log('user初始化',this.props.match)
        
    }
    componentDidMount(){
        console.log('user Mount');
    }
    render() {
        return (
            <div>this is user</div>
        )
    }
}

export default User;
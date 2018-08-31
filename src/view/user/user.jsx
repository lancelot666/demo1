import React, { Component } from 'react';

class User extends Component{
    constructor(props){
        super(props); 
        console.log('user初始化')
    }
    render() {
        return (
            <div>this is user</div>
        )
    }
}

export default User;
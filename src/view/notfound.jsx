import React, { Component } from 'react';

class Notfound extends Component{
    constructor(props){
        super(props); 
        console.log('404初始化')
    }
    render() {
        return (
            <div>this is 404</div>
        )
    }
}

export default Notfound;
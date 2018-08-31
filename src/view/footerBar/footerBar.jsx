import React, { Component } from 'react';

//css in js
const bt={
    'position':'absolute',
    'bottom':0,
    'background':'red'
}
class FooterBar extends Component{
    constructor(props){
        super(props); 
        console.log('footerBar初始化')
    }
    render() {
        return (
            <div style={bt}>
11
            </div>
        )
    }
}

export default FooterBar;
import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/header.css'
// console.log(headerCss.console)

export default class HeaderReact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(header)
        let Back = null;
        if (this.props.back) {
            Back = <span>&#xe903;</span>
        } else {
            Back = <span></span>
        }
        return (
            <header className='header'>
                <div className='font left' >{Back}</div>
                <div className='top-content'><span>{this.props.name}</span></div>
                <div className='right'></div>
            </header>
        )
    }
} 

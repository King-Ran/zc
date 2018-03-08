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
            <header className='header flaotBox'>
                <div className='font left f_l' >{Back}</div>
                <div className='top-content f_l'><span>{this.props.name}</span></div>
                <div className='right f_l'></div>
            </header>
        )
    }
} 

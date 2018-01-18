import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/header.css'
// console.log(headerCss.console)

export default class HeaderReact extends Component {

    render() {
        // console.log(header)
        return (
            <header className='header'>
                <div className='left'>返回</div>
                <div className='content'><span>紫晨商城</span></div>
                <div className='right'></div>
            </header>
        )
    }
} 
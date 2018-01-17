import React, { Component } from 'react';
import { render } from 'react-dom';

import headerCss from '../css/header.css';
// console.log(headerCss.console)

export default class HeaderReact extends Component {

    render() {
        return (
            <header className={headerCss.header}>
                <div className={headerCss.left}>返回</div>
                <div className={headerCss.right}>紫晨商城</div>
                <div className={headerCss.content}>">"</div>
            </header>
        )
    }
} 
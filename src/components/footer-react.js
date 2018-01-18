import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/footer.css';

export default class FooterReact extends Component {
    render() {
        return (
            <footer>
                <div className='nav' >Nav</div>
                <div className='nav' >nav</div>
            </footer>
        )
    }
}
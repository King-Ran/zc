import React, { Component } from "react";
import { render } from 'react-dom';

import HeaderReact from '../components/header-react';

export default class ShoppingCat extends Component {
  render() {
    return (
      <div style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
        {/* <HeaderReact /> */}
        <HeaderReact back={true} name='购物车' />
        <div style={{ height: '50px', width: '100%' }}></div>
        <div className='catContent'>
          <div className='contentTop' style={{ height: '1.5rem', width: '100%',lineHeight:'100%' }}>
            <div className='contentTopIcon'>
              <span className='font'>&#xe90d;</span>
            </div>
            <div className='contentTopText'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
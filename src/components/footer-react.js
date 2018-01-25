import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/footer.css';

export default class FooterReact extends Component {
  render() {
    return (
      <footer>
        <div className='item' >
        <div className='nav-icon'>
        <span></span></div>
      <div className='nav-item'>商城首页</div>
        </div>
        <div className='item' >
          <div className='nav-icon'>
            <span></span></div>
          <div className='nav-item'>全部商品</div>
        </div>
        <div className='item' >
          <div className='nav-icon'>
            <span></span></div>
          <div className='nav-item'>健康中国</div>
        </div>
        <div className='item' >
          <div className='nav-icon'>
            <span></span></div>
          <div className='nav-item'>购物车</div>
        </div>
        <div className='item' >
          <div className='nav-icon'>
            <span></span></div>
          <div className='nav-item'>个人中心</div>
        </div>
      </footer>
    )
  }
}
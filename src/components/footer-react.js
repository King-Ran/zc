import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/footer.css';
import cs from 'classnames'  // css 插件 see https://github.com/JedWatson/classnames

export default class FooterReact extends Component {
  constructor(props) {
    super(props);
    // this.state = { status: 'index' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(status) {
    this.props.onClick(status);
  }


  render() {
    return (
      <footer>
        <div className='item' onClick={() => { this.handleClick('index') }} >
          <div className='nav-icon'>
            <span></span></div>
          <div className={cs('nav-item', { 'color-red': this.props.status === 'index' })}  >商城首页</div>
        </div>
        <div className='item' onClick={() => { this.handleClick('allProduct') }} >
          <div className='nav-icon'>
            <span></span></div>
          <div className={cs('nav-item', { 'color-red': this.props.status === 'allProduct' })}  >全部商品</div>
        </div>
        <div className='item' onClick={() => { this.handleClick('china') }} >
          <div className='nav-icon'>
            <span></span></div>
          <div className={cs('nav-item', { 'color-red': this.props.status === 'china' })}  >健康中国</div>
        </div>
        <div className='item' onClick={() => { this.handleClick('shppingCat') }} >
          <div className='nav-icon'>
            <span></span></div>
          <div className={cs('nav-item', { 'color-red': this.props.status === 'shppingCat' })}  >购物车</div>
        </div>
        <div className='item' onClick={() => { this.handleClick('person') }} >
          <div className='nav-icon'>
            <span></span></div>
          <div className={cs('nav-item', { 'color-red': this.props.status === 'person' })}  >个人中心</div>
        </div>
      </footer>
    )
  }
}
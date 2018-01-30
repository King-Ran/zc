import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        <div className={cs('item', { 'color-red': this.props.status === 'index' })} onClick={() => { this.handleClick('index') }} >
          <Link to='/' activeStyle={{ color: 'red', fontWeight: 700 }}>
            <div className={cs({ 'color-red': this.props.status === 'index' })} >
              <div className={'nav-icon'}>
                <span className="font">&#xe926;</span>
              </div>
              <div className='nav-item'  >商城首页</div>
            </div>
          </Link>
        </div>
        <div className={cs('item', { 'color-red': this.props.status === 'allProduct' })} onClick={() => { this.handleClick('allProduct') }} >
          <Link to='/all'>
            <div className={cs({ 'color-red': this.props.status === 'allProduct' })} >
              <div className='nav-icon'>
                <span className="font">&#xe922;</span>
              </div>
              <div className='nav-item'  >全部商品</div>
            </div>
          </Link>
        </div>
        <div className={cs('item', { 'color-red': this.props.status === 'china' })} onClick={() => { this.handleClick('china') }} >
          <div className='nav-icon'>
            <span className="font">&#xe919;</span>
          </div>
          <div className='nav-item' >健康中国</div>
        </div>
        <div className={cs('item', { 'color-red': this.props.status === 'shppingCat' })} onClick={() => { this.handleClick('shppingCat') }} >
          <div className='nav-icon'>
            <span className="font">&#xe932;</span>
          </div>
          <div className='nav-item'  >购物车</div>
        </div>
        <div className={cs('item', { 'color-red': this.props.status === 'person' })} onClick={() => { this.handleClick('person') }} >
          <div className='nav-icon'>
            <span className="font">&#xe913;</span>
          </div>
          <div className='nav-item'  >个人中心</div>
        </div>
      </footer>
    )
  }
}
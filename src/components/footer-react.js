import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../css/footer.css';
import cs from 'classnames'  // css 插件 see https://github.com/JedWatson/classnames

export default class FooterReact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className={cs('item', { 'color-red': this.props.status === '/' })}  >
          <Link to='/' >
            <div className={cs({ 'color-red': this.props.status === '/' })} >
              <div className={'nav-icon'}>
                <span className="font">&#xe926;</span>
              </div>
              <div className='nav-item'  >商城首页</div>
            </div>
          </Link>
        </div>
        <div className={cs('item', { 'color-red': this.props.status === '/all' })}  >
          <Link to='/all'>
            <div className={cs({ 'color-red': this.props.status === '/all' })} >
              <div className='nav-icon'>
                <span className="font">&#xe922;</span>
              </div>
              <div className='nav-item'  >全部商品</div>
            </div>
          </Link>
        </div>
        <div className={cs('item', { 'color-red': this.props.status === '/china' })}>
          <Link to='/china'>
            <div className={cs({ 'color-red': this.props.status === '/china' })} >
              <div className='nav-icon'>
                <span className="font">&#xe919;</span>
              </div>
              <div className='nav-item' >健康中国</div>
            </div>
          </Link>
        </div>
        <div className={cs('item', { 'color-red': this.props.status === '/shoppingcats' })}  >
          <Link to='/shoppingcats'>
            <div className={cs('nav-icon', { 'color-red': this.props.status === '/shoppingcats' })}>
              <span className="font">&#xe932;</span>
            </div>
            <div className='nav-item'  >购物车</div>
          </Link>
        </div>
        <div className={cs('item', { 'color-red': this.props.status === '/prison' })}  >
          <div className='nav-icon'>
            <span className="font">&#xe913;</span>
          </div>
          <div className='nav-item'  >个人中心</div>
        </div>
      </footer >
    )
  }
}
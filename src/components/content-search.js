import React, { Component } from 'react';
import { render } from 'react-dom'
import '../css/search.css';

export default class ContentSearch extends Component {
  render() {
    return (
      <div className='search'>
        <div className='searchInput'>
          <div className='_searchInput'>
            <span className='font searchIncon'>&#xe90f;</span>
            <input />
          </div>
          <div className='productList'>
            <span className='font'>&#xe90f;</span></div>
        </div>
        <div className='sortList'>
          <div className='sortItem'>综合</div>
          <div className='sortItem'>销量</div>
          <div className='sortItem'>价格</div>
          <div className='sortItem'>筛选</div>
        </div>
      </div>
    )
  }
} 
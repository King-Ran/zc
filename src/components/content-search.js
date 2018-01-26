import React, { Component } from 'react';
import { render } from 'react-dom'

export default class ContentSearch extends Component {
  render() {
    return (
      <div className='search'>
        <div className='searchInput'>
          <div className='_searchInput'>
            <span className='font'></span>
            <input />
          </div>
          <div className='productList'></div>
        </div>
        <div className='sortList'>
          <div className='sortItem'></div>
          <div className='sortItem'></div>
          <div className='sortItem'></div>
          <div className='sortItem'></div>
        </div>
      </div>
    )
  }
} 
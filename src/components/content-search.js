import React, { Component } from 'react';
import { render } from 'react-dom'
import '../css/search.css';

export default class ContentSearch extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.changeListStyle();
  }


  render() {
    return (
      <div className='search'>
        <div className='searchInput'>
          <div className='_searchInput'>
            <span className='font searchIncon'>&#xe927;</span>
            <input />
          </div>
          <div className='productListIcon' onClick={this.handleClick} >
            {this.props.listStyle ?
              <span className='font' key='list' style={{ fontSize: "1.1rem" }} >&#xe90f;</span> :
              <span className='font' ket='block' style={{ fontSize: "1.1rem" }} >&#xe915;</span>
            }

          </div>
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
import React, { Component } from 'react';
import render from 'react-dom';
import '../css/product-item.css';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className='productItem' >
        <div className='itemImg '></div>
        <div className='itemName item-font'>王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱</div>
        <div className='itemUnit item-font'>310ml*12瓶/箱</div>
        <div className='itemPrice item-font'>
          <span>¥60</span>
          <div class='' ><span class="zcIcon"></span></div>
        </div>
        <div></div>
      </div>
    )
  }
}
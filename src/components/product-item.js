import React, { Component } from 'react';
import render from 'react-dom';
import '../css/product-item.css';

export default class ProductItem extends Component {
  // static defaultProps = {
  //   details: {
  //     imgUrl: '',
  //     name: '-',
  //     unit: '-',
  //     price: '-',
  //   }
  // }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='productItem' >
        {/* <div className='itemImg' style={{ backgroundImage: 'url(' + this.props.details.imgUrl + ')' }}></div> */}
        <div className='itemImg'></div>

        <div className='itemName item-font'>{this.props.details.name}</div>
        <div className='itemUnit item-font'>{this.props.details.unit}</div>
        <div className='itemPrice item-font'>
          <span>{this.props.details.price}</span>
          <div className='catBackground' >
          <span className="font fontCat" style={{'font-size':'.7rem'}}>&#xe932;</span>
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}
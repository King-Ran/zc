import React, { Component } from 'react';
import render from 'react-dom';
import '../css/product-item.css';

export default class ProductItem extends Component {
  static defaultProps = {
    details: {
      imgUrl: '',
      name: '-',
      unit: '-',
      price: '-',
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.details);
    return (
      <div className='productItem' >
        {/* <div className='itemImg' style={{ backgroundImage: 'url(' + this.props.details.imgUrl + ')' }}></div> */}
        <div className='itemImg'></div>

        <div className='itemName item-font'>{this.props.details.name}</div>
        <div className='itemUnit item-font'>{this.props.details.unit}</div>
        <div className='itemPrice item-font'>
          <span>{this.props.details.price}</span>
          <div className='' ><span className="zcIcon"></span></div>
        </div>
        <div></div>
      </div>
    )
  }
}
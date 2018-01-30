import React, { Component } from "react";
import { render } from 'react-dom';
import style from '../css/productList.css'

export default class ProductList extends Component {
  render() {
    console.log(style);
    return (
      <div className='productListItem'>
        <div className='productListItemImg'>
          <img style={{ height: '100%', width: '100%' }} src="https://shop.zcdjk.com/images/good/8225cc52-4f9e-43c8-a57d-bce23296a5eb_thumb.jpg"/>
        </div>
        <div className='productListItemText'>
          <div>
            <p style={{ height: '4rem',fontWeight:400, fontSize: '.75rem' }}>{this.props.details.name}{this.props.details.unit}</p>
          </div>
          <div style={{ height: '1rem', lineHeight: '1rem', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#e21d2d', fontSize: '.8rem', fontWeight: 700 }}>{this.props.details.price}</span>
            <div className='catBackground' >
              <span className="font " style={{ 'font-size': '.7rem', margin: 'auto' }}>&#xe932;</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
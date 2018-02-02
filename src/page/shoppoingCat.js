import React, { Component } from "react";
import { render } from 'react-dom';

import HeaderReact from '../components/header-react';
import ShoppingCatItems from '../components/shpping-cat-item';

export default class ShoppingCat extends Component {
  render() {
    const catData = [
      { statu: true, id: '1', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: '1', price: '60' },
      { statu: true, id: '2', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: '1', price: '60' },
      { statu: true, id: '3', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: '1', price: '60' },]
    return (
      <div style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
        {/* <HeaderReact /> */}
        <HeaderReact back={true} name='购物车' />
        <div style={{ height: '50px', width: '100%' }}></div>
        <div className='catContent ' style={{ height: '100%', width: '100%', paddingTop: '10px', backgroundColor: '#f3f3f3' }}  >
          <div className='catContentTop defaultBackgroud' style={{ height: '1.5rem', width: '100%', lineHeight: '1.5rem', fontSize: '.8rem', display: 'flex' }}>
            <div className='contentTopIcon' style={{ height: '1.5rem', width: '2rem', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }} >
              <span className='font' style={{ fontSize: '.8rem' }} >&#xe90d;</span>
            </div>
            <div className='contentTopText'>

              <span className='font' style={{ fontSize: '.8rem', color: 'red', paddingRight: '5px' }} >&#xe90c;</span>
              紫层商城
            </div>

          </div>
          <div className='catContentItem' style={{ height: '100%', width: '100%' }}>
              {catData.map(item => (
                  <ShoppingCatItems key={item.id} data={item} />
              ))}
            </div>
        </div>
      </div>
    )
  }
}
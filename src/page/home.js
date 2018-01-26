import React, { Component } from 'react';
import { render } from 'react-dom';

import HeaderReact from '../components/header-react';
// import ContentReact from '../components/content-react';
import ContentSearch from '../components/search';
import ProductItem from '../components/product-item';

export default class Home extends Component {
  render() {
    const products = [
      { id: 1, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 2, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 3, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 4, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 5, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
    ]

    return (
      <div>
        <HeaderReact back={false} name='紫层商城' />
        <div style={{ "height": '135px', 'width': '100%' }}></div>
        <div className='content_sreach'>
          <ContentSearch />
        </div>
        <div className='all_content'>
          {products.map(item => (
            <ProductItem details={item} />
          ))
          }
        </div>
      </div >
    )
  }
}
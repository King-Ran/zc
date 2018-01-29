import React, { Component } from 'react';
import { render } from 'react-dom';

import HeaderReact from '../components/header-react';
import ContentSearch from '../components/content-search';
import ProductItem from '../components/product-item';
import '../css/all.css';

export default class All extends Component {
  render() {
    const products = [
      { id: 1, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 2, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 3, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 4, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 5, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
    ]

    return (
      <div className='all'>
        <div className='allHeader'>
          <HeaderReact back={false} name='全部商品' />
          <div style={{ "height": '50px', 'width': '100%' }}></div>
          {/* <div className='content_sreach'> */}
          <ContentSearch />
          {/* </div> */}
        </div>

        <div className='all_content'>
          <div className='_all_content'>
            {
              products.map(item =>
                <div className='itemBox' key={item.id}  >
                  <ProductItem details={item} />
                </div>
              )
            }
          </div>
        </div>


      </div >
    )
  }
}

import React, { Component } from 'react';
import { render } from 'react-dom';

import Slider from '../components/slider'
import ProductItem from './product-item';

import img1 from '../images/icon01.jpg';
import img2 from '../images/icon02.jpg';
import img3 from '../images/icon03.jpg';
import img4 from '../images/icon04.png';
import solider01 from '../images/solider01.jpg';
import solider02 from '../images/solider02.jpg';



import '../css/content.css'

export default class ContentReact extends Component {



  render() {
    const goodsData = [
      { id: 1, imgUrl: img1, name: '紫晨大健康' },
      { id: 2, imgUrl: img2, name: '地方名特优' },
      { id: 3, imgUrl: img3, name: '中华大健康' },
      { id: 4, imgUrl: img4, name: '全部' },
    ];
    const backgroundImage = [solider01, solider02]
    const products = [
      { id: 1, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 2, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 3, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 4, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
      { id: 5, imgUrl: '', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', unit: '310ml*12瓶/箱', price: '￥60' },
    ]

    return (
      <div className=''>
        <div className='carousel slide'>
          <Slider images={backgroundImage} auto='true' autoTime={2000} />
        </div>
        <div className='goodsTag'>
          {goodsData.map(item =>
            <div className='goodsItem' key={item.id}  >
              <div className='icon' style={{ backgroundImage: 'url(' + item.imgUrl + ')' }}></div>
              <div>{item.name}
              </div>
            </div>)}
        </div>
        <div className='notice'></div>
        <div className='productsItem' >
          {products.map(item =>
            <div className='itemBox' key={item.id}  >
              <ProductItem details={item} />
            </div>
          )}
        </div>
        <span className="font">&#xe905;</span>
      </div >
    );
  }
}
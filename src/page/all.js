import React, { Component } from 'react';
import { render } from 'react-dom';

import HeaderReact from '../components/header-react';
import ContentSearch from '../components/content-search';
import ProductItem from '../components/product-item';
import ProductList from '../components/products-list'
import '../css/all.css';
//import styles
import 'weui';
import 'react-weui/build/packages/react-weui.css';

export default class All extends Component {
  constructor() {
    super();
    this.getChangeList = this.getChangeList.bind(this);
    this.state = {
      listStyle: true,
    }
  }

  getChangeList() {
    this.setState({
      listStyle: !this.state.listStyle,
    })
  }

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
          <div className='contentSearch'>
            <ContentSearch changeListStyle={this.getChangeList} listStyle={this.state.listStyle} />
          </div>
        </div>
        <div className='all_content'>
          {ProductShow(products, this.state.listStyle)}
        </div>
      </div >
    )
  }
}

function ProductShow(data, style = false) {
  if (!style) {
    return (
      <div className='productBlock'>
        {
          data.map(item =>
            <div className='itemBox' key={item.id}  >
              <ProductItem details={item} />
            </div>
          )
        }
      </div>
    )
  }
  return (
    <div className='productList'>
      {
        data.map(item =>
          <div className='listBox' key={item.id}  >
            <ProductList details={item} />
          </div>
        )
      }
    </div>
  )

}

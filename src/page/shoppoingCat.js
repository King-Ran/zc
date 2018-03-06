import React, { Component } from "react";
import { render } from 'react-dom';

import HeaderReact from '../components/header-react';
import ShoppingCatItems from '../components/shpping-cat-item';

export default class ShoppingCat extends Component {
  constructor(props) {
    super(props);
    this.numChange = this.numChange.bind(this);
    this.SwitchAllStatus = this.SwitchAllStatus.bind(this);
    this.switchStatus = this.switchStatus.bind(this);
    this.isRed = this.isRed.bind(this);
    this.state = { isAll: false }
    this.data = [
      { status: true, id: '1', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: 1, price: '60' },
      { status: true, id: '2', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: 1, price: '60' },
      { status: true, id: '3', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: 1, price: '60' },
      { status: true, id: '4', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: 1, price: '60' },
      { status: true, id: '5', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: 1, price: '60' },
      { status: true, id: '6', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: 1, price: '60' },
      { status: true, id: '7', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: 1, price: '60' },
      { status: true, id: '8', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: 1, price: '60' },
      { status: true, id: '9', name: '王老吉荣誉产品顶级阿胶红枣饮料310ml*12瓶/箱', imgUrl: '', number: 1, price: '60' },]
  }
  componentDidMount() {

    this.setState({ isAll: this.isRed() });
    console.log(this.state.isAll);
  }
  numChange(id, isAdd, number) {

    if (number !== undefined) {
      number = number === '' ? 1 : number;
      for (let i = 0, length = this.data.length; i < length; i++) {
        if (this.data[i].id === id) {

          return this.data[i].number = number;
        }
      }
    }
    else {
      for (let i = 0, length = this.data.length; i < length; i++) {
        if (this.data[i].id === id) {
          return isAdd ? ++this.data[i].number : --this.data[i].number;
        }
      }
    }
  }
  SwitchAllStatus(status) {
    this.setState({ isAll: !status })
    this.data = this.data.map(v => {
      v.status = !status;
      return v
    })

    console.log(this.data);
    console.log(status);
  }
  switchStatus(id) {
    console.log(id);
    for (let i = 0, length = this.data.length; i < length; i++) {
      if (this.data[i].id === id) {
        this.data[i].status = !this.data[i].status;
        // this.isRed();
        this.setState({ isAll: this.isRed() })
        console.log(this.data[i]);
      }
    }
  }
  isRed() {
    for (let i of this.data) {
      if (!i.status) return false;
    }
    return true;
  }
  render() {
    const catData = this.data;
    return (
      <div style={{ height: '100%', width: '100%', backgroundColor: '#fff' }}>
        {/* <HeaderReact /> */}
        <HeaderReact back={true} name='购物车' />
        <div style={{ height: '50px', width: '100%' }}></div>
        <div className='catContent ' style={{ height: '100%', width: '100%', paddingTop: '10px', backgroundColor: '#f3f3f3' }}  >
          <div className='catContentTop defaultBackgroud' style={{ height: '1.5rem', width: '100%', lineHeight: '1.5rem', fontSize: '.8rem', display: 'flex' }}>
            <div onClick={() => { this.SwitchAllStatus(this.state.isAll) }} className='contentTopIcon' style={{ height: '1.5rem', width: '2rem', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }} >
              <span className='font' style={this.state.isAll ? { fontSize: '.8rem', color: "red" } : { fontSize: '.8rem' }} >&#xe90d;</span>
            </div>
            <div className='contentTopText' >
              <span className='font' style={{ fontSize: '.8rem', color: 'red', paddingRight: '5px' }} >&#xe90c;</span>
              紫层商城
            </div>

          </div>
          <div className='catContentItem' style={{ height: '100%', width: '100%',paddingBottom:'60px' }}>
            {catData.map(item => (
              <ShoppingCatItems numberChang={this.numChange} chckedStatus={this.switchStatus} key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
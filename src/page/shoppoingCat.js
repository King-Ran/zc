import React, { Component } from "react";
import { render } from 'react-dom';
import { Dialog } from 'react-weui';
import HeaderReact from '../components/header-react';
import ShoppingCatItems from '../components/shpping-cat-item';

export default class ShoppingCat extends Component {
  constructor(props) {
    super(props);
    this.numChange = this.numChange.bind(this);
    this.SwitchAllStatus = this.SwitchAllStatus.bind(this);
    this.switchStatus = this.switchStatus.bind(this);
    this.isRed = this.isRed.bind(this);
    this.state = { 
      isAll: false ,
      allPrice:0,
      showDiaLog:false,
      deleteItemId:-1,
      selectLength:0,
      dialogStyle:{
      title: '提示',
      buttons: [
          {
              type: 'default',
              label: 'Cancel',
              onClick: this.hideDialog.bind(this)
          },
          {
              type: 'primary',
              label: 'Ok',
              onClick: this.deleteItem.bind(this)
          }
      ]
    }}
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
    this.getAllPrice();
  }
  numChange(id, isAdd, number) {

    if (number !== undefined) {
      number = number === '' ? 1 : number;
      for (let i = 0, length = this.data.length; i < length; i++) {
        if (this.data[i].id === id) {
           this.data[i].number = number;
           this.getAllPrice();
           return ;
        }
      }
    }
    else {
      for (let i = 0, length = this.data.length; i < length; i++) {
        if (this.data[i].id === id) {
           isAdd ? ++this.data[i].number : --this.data[i].number;
           this.getAllPrice();
           return ;
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
    this.getAllPrice();
    return;
  }
  switchStatus(id) {
    console.log(id);
    for (let i = 0, length = this.data.length; i < length; i++) {
      if (this.data[i].id === id) {
        this.data[i].status = !this.data[i].status;
        this.setState({ isAll: this.isRed() })
      }
    }
    this.getAllPrice();
  }
  deleteItem(){
  const id = this.state.deleteItemId
  for (let i = 0, length = this.data.length; i < length; i++) {
  if (this.data[i].id === id) {
    this.data.splice(i,1)
    console.log('delete '+id);
    this.setState({ isAll: this.isRed(),showDialog:false ,deleteItemId:-1 });
    this.getAllPrice();
    return;
  }
}
  this.setState({  deleteItemId:-1 })
  return ;
  }
  hideDialog(){
    this.setState({showDialog:false,deleteItemId:-1})
  }
  showDialog(id){
    this.setState({
      showDialog:true,
      deleteItemId:id
    })
  }
  getAllPrice(){
    let price =0;
    let length = 0;
    this.data.map(v=> {
      if(v.status){
        price +=(v.price*v.number);
        length +=v.number
      }
      return v});
      this.setState({allPrice:price,selectLength:length});
      return price;
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
          <div className='catContentItem' style={{ height: '100%', width: '100%', marginBottom: '10px' }}>
            {catData.map(item => (
              <ShoppingCatItems numberChang={this.numChange} delItem={this.showDialog.bind(this)}  chckedStatus={this.switchStatus} key={item.id} data={item} />
            ))}
          </div>
          <div className='catPrice' style={{height:'2rem',width:'100%',lineHeight:"2rem",fontSize: '.8rem', display:'flex', marginBottom:'60px',backgroundColor:'#fff',position:'relative'}}>
          <div  style={{ height: '2rem', width: '2rem', textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
          <span className='font' style={{ fontSize: '.8rem', color: 'red', paddingRight: '5px' }} >&#xe90d;</span>
          </div>
          <div style={{width:'2.5rem', textAlign:'center',borderRight:'solid #a8a8a8 1px'}}>全选</div>
          <div style={{paddingLeft:'8px'}}>总价：<span style={{color:'red'}}>{this.state.allPrice} </span> 元
          </div>
          <div style={{flexShrink:1}}></div>
          <div style={{width:'5.5rem',position:'absolute',top:0,right:0,backgroundColor:'red',textAlign:'center',color:'white'}}>
          结算({this.state.selectLength})
          </div>
          </div>
        </div>
        <Dialog type="ios" title={this.state.dialogStyle.title} buttons={this.state.dialogStyle.buttons} show={this.state.showDialog}>
          确认删除？
        </Dialog>
      </div>
    )
  }
}
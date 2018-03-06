import React, { Component } from "react";
import { render } from 'react-dom';

export default class ShoppingCatItems extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };

    this.handlepProductNumChange = this.handlepProductNumChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChcked = this.handleChcked.bind(this);
  }
  handlepProductNumChange(id, status) {
    if (!status && this.state.data.number === 1) return
    this.props.numberChang(id, status);
    this.setState({ data: this.props.data });
  }
  handleChange(event, id) {
    console.log(11111111);
    console.log(event.target.value);
    const value = event.target.value;
    this.props.numberChang(id, false, value);
    this.setState({ data: this.props.data });
  }
  handleChcked(id) {
    this.props.chckedStatus(id);
  }
  render() {
    return (
      <div className='' style={{ height: '4rem', width: '100%', display: 'flex', padding: '.2rem 0 .2rem 0', backgroundColor: '#fff' }}>
        <div onClick={() => { this.handleChcked(this.props.data.id) }} style={{ width: '2rem', height: '4rem', textAlign: 'center', lineHeight: '4rem' }}>
          {this.props.data.status ?
            (<span className='font' style={{ color: "red", fontSize: '.8rem' }}>&#xe90d;</span>) :
            (<span className='font' style={{ fontSize: '.8rem' }}>&#xe90d;</span>)
          }
        </div>
        <div style={{ display: 'flex' }}>
          <img style={{ height: '4rem', width: '4rem', display: 'block' }} />
          <div style={{ height: '4rem', width: '13rem', padding: '0 .5rem' }}>
            <div style={{ height: '2.5rem', width: '100%', display: 'flex' }}>
              <div style={{ fontSize: '.75rem', width: '11rem', fontWeight: '400' }}>{this.props.data.name}</div>
              <div style={{ fontSize: '.8rem', width: '2rem', height: '100%', textAlign: 'center', }} className='font' >
                {this.props.data.status === true ?
                  <span style={{ color: "red" }}> &#xe91a;</span> :
                  <span>&#xe91a;</span>
                }
              </div>
            </div>
            <div style={{ height: '1.5rem', width: '13rem', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '.7rem', height: '1.5rem', lineHeight: '1.5erm', color: 'red' }}>现金:{this.props.data.price}</div>
              <div style={{ height: '1rem', width: '3.5rem', display: 'flex', border: '1px solid #ebebeb', margin: 'auto 0' }}>
                <div style={{ heighe: '1rem', width: '1rem', border: '1px solid #ebebeb', lineHeight: '1rem', textAlign: 'center' }}>
                  {this.state.data.number === 1 ?
                    (<span style={{ display: 'block', marginTop: "-0.1rem" }} className='fontColorGray'>-</span>)
                    : (<span onClick={() => { this.handlepProductNumChange(this.props.data.id, false) }} style={{ display: 'block', marginTop: "-0.1rem" }}>-</span>)}
                  {/* <span onClick={() => { this.handlepProductNumChange(this.props.data.id, false) }} style={{ display: 'block', marginTop: "-0.1rem" }}>-</span> */}
                </div>
                {/* <div  style={{ heighe: '1rem', width: '1.5rem',border: '1px solid #ebebeb', lineHeight: '1rem',fontSize:'.75rem', textAlign: 'center'  }}> */}

                <input type='number' value={this.state.data.number} onChange={e => this.handleChange(e, this.props.data.id)} style={{ heighe: '1rem', width: '1.5rem', border: '1px solid #ebebeb', display: 'block', textAlign: 'center' }} />
                {/* </div> */}
                <div style={{ heighe: '1rem', width: '1rem', border: '1px solid #ebebeb', lineHeight: '1rem', textAlign: 'center' }}>
                  <span onClick={() => { this.handlepProductNumChange(this.props.data.id, true) }} style={{ display: 'block', marginTop: "-0.1rem" }}>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
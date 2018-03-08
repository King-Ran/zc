import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import '../node_modules/normalize.css/normalize.css';

import HeaderReact from './components/header-react';
import FooterReact from './components/footer-react';
import ContentReact from './components/content-react';
import All from './page/all';
import ShoppingCat from './page/shoppoingCat';


export default class App extends Component {
  constructor() {
    super();
    this.state = { footerStatu: 'index' }
  }


  render() {
    return (
      <Router >
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/all' component={_All} />
          <Route path='/shoppingcats' component={_ShoppingCat} />
        </div>
      </Router>
    );
  }
}

const Home = ({ match }) => {
  console.log(match, 111111111);
  return (
    <div>
      <HeaderReact back={false} name='紫层商城' />
      <ContentReact />
      <FooterReact status={match.url} />
    </div>
  )
}



const _All = ({ match }) => {
  console.log(match);
  return (
    <div>
      {/* <HeaderReact back={false} name='紫层商城' /> */}
      <All />
      <FooterReact status={match.url} />
    </div>
  )
}
const _ShoppingCat = ({ match }) => (
  <div>
    {/* <HeaderReact back={false} name='购物车' /> */}
    <ShoppingCat />
    <FooterReact status={match.url} />
  </div>
)
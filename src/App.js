import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/normalize.css/normalize.css';

import HeaderReact from './components/header-react';
import NavReact from './components/footer-react';
import ContentReact from './components/content-react';
import All from './page/all';


export default class App extends Component {
  constructor() {
    super();
    this.state = { footerStatu: 'index' }
    this.changeFooter = this.changeFooter.bind(this);
  }
  changeFooter(statu) {
    this.setState({ footerStatu: statu })
  }

  render() {
    return (
      <Router >
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route path='/all' component={All} />
          <NavReact onClick={this.changeFooter} status={this.state.footerStatu} />
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <HeaderReact back={false} name='紫层商城' />
    <ContentReact />
  </div>
)

// const All = () => (
//   <div>
//     <HeaderReact back={false} name='紫层商城' />  
//   </div>
// )
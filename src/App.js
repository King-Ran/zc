import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/normalize.css/normalize.css'

import HeaderReact from './components/header-react';
import NavReact from './components/footer-react';
import ContentReact from './components/content-react';
class App extends Component {
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
      <div className="App">
        <HeaderReact />
        <ContentReact />
        <NavReact onClick={this.changeFooter} status={this.state.footerStatu} />
      </div>
    );
  }
}

export default App;


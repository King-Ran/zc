import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/normalize.css/normalize.css'

import HeaderReact from './components/header-react';
import NavReact from './components/footer-react';
import ContentReact from './components/content-react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderReact />
        <ContentReact />
        <NavReact />
      </div>
    );
  }
}

export default App;

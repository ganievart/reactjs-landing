import React, { Component } from 'react';

import './Assets/css/default.min.css'

import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import HomePage from './components/pages/homePage.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

          <HomePage />

        <Footer />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './Assets/css/default.min.css'

import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import HomePage from './components/pages/homePage'
import Products from './components/pages/products'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

          <Route exact path ='/' component={HomePage} />
          <Route exact path ='/Products' component={Products} />

        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;

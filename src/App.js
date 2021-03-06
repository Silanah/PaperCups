import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Materials from './components/Materials';
import Includes from './components/Includes';
import Requirements from './components/Requirements';
import Features from './components/Features';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return(
      <>
        <Header />
        <Materials />
        <Includes />
        <Requirements />
        <Features />
        <Offer />
        <Contact />
        <Footer />
      </>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Materials from './components/Materials';
import Includes from './components/Includes';
import Requirements from './components/Requirements';

class App extends Component {
  render() {
    return(
      <>
        <Header />
        <Materials />
        <Includes />
        <Requirements />
      </>
    )
  }
}

export default App;

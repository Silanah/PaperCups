import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Materials from './components/Materials';
import Includes from './components/Includes';

class App extends Component {
  render() {
    return(
      <>
        <Header />
        <Materials />
        <Includes />
      </>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Materials from './components/Materials';

class App extends Component {
  render() {
    return(
      <>
        <Header />
        <Materials />
      </>
    )
  }
}

export default App;

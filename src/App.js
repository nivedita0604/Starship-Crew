import React, { Component } from 'react';
import AppProvider from './components/provider';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';
import './App.css'
class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="app">
          <Header />
          <Game />
          <Footer />
        </div>
      </AppProvider>
    );
  }
}

export default App;
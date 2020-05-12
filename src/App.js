import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LoginForm />
      </div>
    )
  }
}

export default App;

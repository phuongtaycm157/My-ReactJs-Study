import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabMenu from './Components/TabMenu.js';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';

const instanceElements = [
  {
    id: 1,
    title: 'HOME',
    icon: <i class="fas fa-home"></i>,
    status: 'active',
    url: '#'
  },
  {
    id: 2,
    title: 'DEALS',
    icon: <i class="fas fa-gift"></i>,
    status: 'none',
    url: '#'
  },
  {
    id: 3,
    title: 'UPLOAD',
    icon: <i class="fas fa-cloud-upload-alt"></i>,
    status: 'none',
    url: '#'
  },
  {
    id: 4,
    title: 'WORK',
    icon: <i class="fas fa-mug-hot"></i>,
    status: 'none',
    url: '#'
  },
  {
    id: 5,
    title: 'SETTINGS',
    icon: <i class="fas fa-cog"></i>,
    status: 'none',
    url: '#'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabMenu instance={instanceElements}/>
        <Header />
        <LoginForm email="abc@example.com" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideModal: true
    };
    this.showModal = this.showModal.bind(this);
    this.hiddenModal = this.hiddenModal.bind(this); 
  }

  showModal() {
    this.setState({hideModal: false});
  }

  hiddenModal() {
    this.setState({hideModal: true});
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <button onClick={this.showModal}> Open modal</button>
            </p>
            <a
              className="App-link"
              href="https://coders-x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yêu anh Thịnh
            </a>
          </header>
          <Modal hide={this.state.hideModal} hiddenModal={this.hiddenModal} /> 
      </div>
    );
  }
}

export default App;

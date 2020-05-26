import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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
    {!this.state.hideModal && <Modal content={content} hiddenModal={this.hiddenModal} /> }
      </div>
    );
  }
}

export default App;

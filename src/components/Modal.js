import React from 'react';
import classnames from 'classnames';
import Close from 'https://cdn.glitch.com/3eb965c4-4c16-473b-a079-f99e4a7ca71b%2Fclose.svg?v=1590146610618';
import './Modal.css';

class Modal extends React.Component {
  render() {
    return (
      <div className={classnames('modal-background', {'hide': this.props.hide})}>
        <div className="modal">
          <div className="title">This is a modal 1</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="control-buttom">
            <button onClick={this.props.hiddenModal} className="btn btn-sucess">Accept</button>
            <button onClick={this.props.hiddenModal} className="btn btn-danger">Decline</button>
          </div>
          <img onClick={this.props.hiddenModal} alt="close" src={Close} />
        </div>
      </div>
    )
  }
}

export default Modal;
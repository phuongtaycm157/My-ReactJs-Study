// 1. Code ra như design https://www.figma.com/file/M2Lh7XaEKWnds9SeEuJ1l0/B%C3%A0i-t%E1%BA%ADp-CSS-cho-entry-test?node-id=87%3A102
// 2. Thêm prop `content` thay vì hard-code text content trong Modal
import React from 'react';
import classnames from 'classnames';
// import Close from './close.svg';
import './Modal.css';

class Modal extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={classnames('modal-background', {'hide': this.props.hide})}>
        <div className="modal">
          <div className="title">This is a modal 1</div>
            <p>{children}</p>
          <div className="control-buttom">
            <button onClick={this.props.hiddenModal} className="btn btn-sucess">Accept</button>
            <button onClick={this.props.hiddenModal} className="btn btn-danger">Decline</button>
          </div>
          <img onClick={this.props.hiddenModal} alt="close" src='https://cdn.glitch.com/c6431814-047b-4458-9547-3b29b0cbdf43%2Fclose.svg?v=1590482449506' />
        </div>
      </div>
    )
  }
}

export default Modal;
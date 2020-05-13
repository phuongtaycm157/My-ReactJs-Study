import React from 'react';
import '../Styles/Header.css';

function GoBack () {
  return (
    <a href="#" className="go-back">
      <i className="fas fa-long-arrow-alt-left"></i>
      <span>Go back</span>
    </a>
  );
}

function Logo (props) {
  return <div className="logo"></div>
}

function Signup () {
  return (
    <a href="#" className="sign-up">
      Sign up
    </a>
  );
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <GoBack />
        <Logo />
        <Signup />
      </div>
    )
  }
}

export default Header;
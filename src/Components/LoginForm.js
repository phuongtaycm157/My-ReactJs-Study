import React from 'react';
import '../Styles/LoginForm.css';

function Title () {
  return <span className="login-form-title">Sign in</span>;
}
function Form () {
  return (
    <form action="#" className="login-form-form">
      <div className="form-group">
        <label for="userName">Username</label>
        <input 
          id="userName" 
          className="input" 
          type="text" 
          placeholder="Luong Quy tan"
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input 
          id="password" 
          className="input" 
          type="password" 
          placeholder="**************"
        />
      </div>
      <button type="submit" className="form-submit">
        Signin to Coders-X
      </button>
      <div className="checkbox-group">
        <input type="checkbox" id="option" className="option"/>
        <label for="option">Keep me signed in</label>
      </div>
    </form>
  );
}
function ForgotSelector () {
  return (
    <div className="forgot-selector">
      <a href="#" className="forgot-selector-item">
        Forgot username?
      </a>
      <a href="#" className="forgot-selector-item">
        Forgot password?
      </a>
    </div>  
  );
}
class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-form">
        <Title />
        <Form />
        <ForgotSelector />
      </div>
    )
  }
}

export default LoginForm;
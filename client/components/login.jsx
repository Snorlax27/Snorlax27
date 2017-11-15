import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username: "",
      password: ""
    }
    
    this.login = this.login.bind(this);
  }
  
  inputChange(e) {
        
  }
  
  login() {
    // todo: API call here
  }
  
  render() {
    <div className="login__wrapper">
      <form onSubmit={this.login}>
        <input type="text" name="username" value={this.state.username}/> 
        <input type="password" name="username" value={this.state.password}/> 
      </form>
    </div>
  }
}
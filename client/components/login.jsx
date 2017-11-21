class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    var scope = this;
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/login',
      data: {
        username: this.state.username,
        password: this.state.password
      },
      success: function(data) {
        console.log('data login.jsx line 24', data)
        if (data === 'true') {
          scope.props.handleLogin(scope.state.username);
        }
      }
    });
  }

  handleUsername(e) {
    this.setState({username: e.target.value})
  }

  handlePassword(e) {
    this.setState({password: e.target.value})
  }

  render() {
    return (
    <div className="login__wrapper">
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='Enter username' onChange={this.handleUsername}/>
        <input type="text" placeholder='Enter password' onChange={this.handlePassword}/>
        <button type="submit" onClick={this.handleSubmit}>Login</button>
      </form>
    </div>
    )
  }
}


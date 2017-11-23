class NewAccount extends React.Component {
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
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/newAccount',
      data: {
        username: this.state.username,
        password: this.state.password
      },
      success: function() {
        console.log('line 23 input.jsx post success')
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
    <div className="loginwrapper">
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder='Enter username' onChange={this.handleUsername}/>
        <input type="text" placeholder='Enter password' onChange={this.handlePassword}/>
        <button type="submit" onClick={this.handleSubmit}>Make</button>
      </form>
    </div>
    )
  }
}
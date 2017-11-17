var _MuiThemeProvider



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newestPost: {},
      userLoggedIn: false,
      username: '',
      backgroundUrl: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.render = this.render.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(user) {
    this.setState({
      userLoggedIn: true,
    })
    var scope = this;
    $.ajax({
      type: 'GET',
      url: '/entries',
      success: function(data) {
        scope.setState({ entries: data })
      }
    });
  }


  handleLogout() {
    var scope = this;
    $.ajax({
      type: 'POST',
      url: '/logout',
      success: function(data) {
        scope.setState({userLoggedIn: false});
      }
    })
  }

//   componentDidMount() {
// // https://source.unsplash.com/random
//     $.ajax({
//       type: 'GET',
//       url: 'https://pixabay.com/api/docs/',
//       key: '7076402-4116e9d08cde36d3ab5e67074',
//       category: 'nature',
//       editors_choice: true,
//       success: function(data) {
//         console.log('DATTAAAAA app.jsx', data);
//         scope.setState({backgroundUrl: ''});
//       }
//     });
//     // document.body.style.setBackground(url());
//   }


  filterComponents() {
    if (this.state.userLoggedIn) {
      return (
          <div>
            <Input />
            <button class="btn btn-info" onClick={this.handleLogout}>Logout</button>
            <DiaryList list={this.state.entries} />
          </div>
        )
    } else {
      return (
        <div>
          <Login handleLogin={this.handleLogin}/>
          <NewAccount />
        </div>
      )
    }
  }

  render() {
    return(
      this.filterComponents()
    )
  }
}

//----------------------------------------
//<Router>
//<Route path='/' component={App}/>
//<Route  path='/login' component={Login}/>
//<Route path='/signup' component={Signup}/>
//</Router>
//----------------------------------------

ReactDOM.render(<App/>, document.getElementById('app'));


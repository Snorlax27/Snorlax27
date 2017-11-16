// var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newestPost: {},
      userLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.postDiary = this.postDiary.bind(this);
    this.render = this.render.bind(this);
  }

  handleLogin() {
    this.setState({userLoggedIn: true})
  }

  componentDidMount() {
    var scope = this;
    $.ajax({
      type: 'GET',
      url: '/entries',
      success: function(data) {
        scope.setState({ entries: data })
      }
    })
  }

  playAudio() {
    var audio = document.getElementById('benji');
    audio.play();
  }

  postDiary() {
    $.ajax({
      type: 'POST',
      url: '/entries',
      headers: { //might not be needed?
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: this.state.newestPost
      }),
      success: function() {
        console.log('line 37 app.jsx did the post really work?! :0')
      }
    })
  }

  filterComponents() {
    if (this.state.userLoggedIn) {
      return <div><Input /></div>
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


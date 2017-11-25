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
    this.handleLogout = this.handleLogout.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.filterComponents = this.filterComponents.bind(this);
    this.rerender = this.rerender.bind(this);
  }

  componentDidMount() {
    var scope = this;
    $.ajax({
      type: 'GET',
      url: '/entries',
      success: function(data) {
        scope.setState({ entries: data })
      }
    });



    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 700);
    });
  }

  handleLogin(user) {
    var scope = this;
    $.ajax({
      type: 'GET',
      url: '/entries',
      success: function(data) {
        scope.setState({ entries: data, userLoggedIn: true })
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

  icons() {
    return (
      <section>
        <div>
          <h2>Write your diary and let an AI analyze it for you.</h2>
        </div>
          <div className="ionicon">
            <i className="ion-ios-glasses-outline icon-big"></i>
            <h3>Natural Language API</h3><br></br><br></br>
            <p>
               Aylien TextAPI  will analyze the sentiment of your text (from negative to positive) - so you get a better understanding of your daily feelings!
            </p>
          </div>
      </section>
    )
  }

  headerRender() {
    var scope = this;
    if (!this.state.userLoggedIn) {
      return(
        <header id="top">
          <nav>
            <div className="row">
              <img src="https://lh3.googleusercontent.com/0xBvdPgDd3s5gaDcq-CNkgoQPtcT5lPxO_SMxyUcz0rAf61OLprSnA2hLMsU5YFTx4LoyaxEcWKJUmcRuJvQ5uDm3q3hiw8QQaMjesuWk-Q4Ow7UP2WAPt8NaIUFbAqvO24V7eux7XzFwiEU8C8NhALt-0Uy-bcKhUEHpJTjj3Wk13OH-cb-zQh0kCVv0Dwcjqyop5EAvu5Yk-TQJxBQ7ZG_BVM8n2wOVyL-Jf7gI6MqXOvhHwyzOwVveqpquNPitCWS3MfGl373LKwaxZHWPTllUYReyTeDvmtUJ1wX1fX3X64DocaNwn4YPfRZg2GiJSom6sD4fxXvAjinm4pWNktHckZjZo_oLj2a451ZnxEBsPfpKm2gmJIoGL7qgCNSuxxQNDDuNo3pE9Bvl-xQoEEHfyaeqDGV1BkzNcXqloCpYJnlnRNxgRQmZ8AEIkgJlpissyxy7LJshyHpvAD5oYK3q1hShq4SaXvUTAp09L6P6Yikj9ylNwNxH6pVtqDBiDfdygIa7gMh4pznA2qLuzz333WeByBGL0OAAnM_4twzyN_9OkpBLsG8GAtc1g=s200-no"></img>
              <ul className="main-nav">
                <li><a href="#signin">Sign In</a></li>
                <li><a href="#signin">Create Account</a></li>
              </ul>
            </div>
            <div className="hero-text-box">
              <h1>Goodbye solitary.<br></br>Hello together.</h1>
              <a className="btn btn-info" href="#">I'm bored</a><div className="space"></div>
              <a className="btn btn-warning" href="#">Show me more</a>
            </div>
          </nav>
        </header>
      )
    } else {
      return (
        <header>
          <nav>
            <div className="row">
              <img src="https://lh3.googleusercontent.com/0xBvdPgDd3s5gaDcq-CNkgoQPtcT5lPxO_SMxyUcz0rAf61OLprSnA2hLMsU5YFTx4LoyaxEcWKJUmcRuJvQ5uDm3q3hiw8QQaMjesuWk-Q4Ow7UP2WAPt8NaIUFbAqvO24V7eux7XzFwiEU8C8NhALt-0Uy-bcKhUEHpJTjj3Wk13OH-cb-zQh0kCVv0Dwcjqyop5EAvu5Yk-TQJxBQ7ZG_BVM8n2wOVyL-Jf7gI6MqXOvhHwyzOwVveqpquNPitCWS3MfGl373LKwaxZHWPTllUYReyTeDvmtUJ1wX1fX3X64DocaNwn4YPfRZg2GiJSom6sD4fxXvAjinm4pWNktHckZjZo_oLj2a451ZnxEBsPfpKm2gmJIoGL7qgCNSuxxQNDDuNo3pE9Bvl-xQoEEHfyaeqDGV1BkzNcXqloCpYJnlnRNxgRQmZ8AEIkgJlpissyxy7LJshyHpvAD5oYK3q1hShq4SaXvUTAp09L6P6Yikj9ylNwNxH6pVtqDBiDfdygIa7gMh4pznA2qLuzz333WeByBGL0OAAnM_4twzyN_9OkpBLsG8GAtc1g=s200-no"></img>
              <ul className="main-nav">
              </ul>
            </div>
            <div className="hero-text-box">
              <h1>Goodbye solitary.<br></br>Hello together.</h1>
              <a className="btn btn-info" href="#">I'm bored</a><div className="space"></div>
              <a className="btn btn-warning" href="#">Show me more</a>
            </div>
          </nav>
        </header>
      )
    }
  }

  seemlessBackground() {
    if (this.state.userLoggedIn) {
      return (
        <div className="seemless2"><h2 id="success">Every great dream begins with a dreamer. Always remember, you have within you the strength, patience, and the passion to reach for the stars to change the world.</h2><h3 id="author">Harriet Tubman</h3></div>
      )
    } else {
      return (
        <div className="seemless">
          <Login handleLogin={this.handleLogin}/>
        </div>
      )
    }
  }

  filterNavbar() {
    var scope = this;
    if (this.state.userLoggedIn) {
      return (
        <nav className= "navbar navbar-default navbar-fixed-bottom">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#top">Emotisphere</a>
            </div>
            <ul className="nav navbar-nav">

              <li><a href="#top">Made with<i className="ion-android-favorite icon-medium"></i>by Awesome Mike, Sweet Yazhi, Lord Benji, and Crazy Dan.</a></li>
            </ul>
            <div id="space"></div>
            <button onClick={this.handleLogout} className="btn btn-danger navbar-btn">Logout</button>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className = "navbar navbar-default navbar-fixed-bottom">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#top">Emotisphere</a>
            </div>
            <ul className="nav navbar-nav">

              <li><a href="#top">Made with<i className="ion-android-favorite icon-medium"></i>by Awesome Mike, Sweet Yazhi, Lord Benji, and Crazy Dan.</a></li>
            </ul>
          </div>
        </nav>
      )
    }
  }

  rerender() {
    var scope = this;
    $.ajax({
      type: 'GET',
      url: '/entries',
      success: function(data) {
        scope.setState({ entries: data })
      },
      error: function(err) {
        console.log('rerender error', err);
      }
    })
  }

  filterComponents() {
    if (this.state.userLoggedIn) {
      return (
        <div>
          <Input rerender={this.rerender} />
          <DiaryList list={this.state.entries} />
        </div>
      )
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  render() {
    return(
      <div>
        {this.headerRender()}
        {this.filterNavbar()}
        {this.icons()}
        {this.seemlessBackground()}
        {this.filterComponents()}
      </div>
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
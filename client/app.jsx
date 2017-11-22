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
  }

  handleLogin(user) {
    this.setState({
      userLoggedIn: true,
    })
  }

  componentDidMount() {
    var scope = this;
    $.ajax({
      type: 'GET',
      url: '/entries',
      success: function(data) {
        scope.setState({ entries: data })
        console.log('hello world')
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
            <button className="btn btn-info" onClick={this.handleLogout}>Logout</button>
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
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(user) {
    this.setState({
      userLoggedIn: true,
    })
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
//     var scope = this;
// // https://source.unsplash.com/random
//     $.ajax({
//       type: 'GET',
//       url: 'https://pixabay.com/api/docs/',
//       key: '7076402-4116e9d08cde36d3ab5e67074',
//       category: 'nature',
//       editors_choice: true,
//       success: function(data) {
//         scope.setState({backgroundUrl: ''});
//       }
//     });
//     // document.body.style.setBackground(url());
//   }

  icons() {
    return (
      <section>
            <div>
                <h2>Write your diary &mdash; and let an AI read it for you.</h2>
            </div>

            <div className="js--wp-1">
                <div className="col span-1-of-4 box">
                    <i className="ion-social-google icon-big"></i>
                    <h3>Google's Natural Language API</h3>
                    <p>
                       Google's algorithm will analyze the sentiment of your text - so you get a better understanding of your daily feelings!
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <i className="ion-android-sunny icon-big"></i>
                    <h3>Interactive Background</h3>
                    <p>
                        Background image will change according to your sentiment! Be happy.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <i className="ion-android-options icon-big"></i>
                    <h3>Sentiment Bars</h3>
                    <p>
                        Sentiments can be seen in an organized manner using progress bars! Take a glance at how you feel throughout the week.
                    </p>
                </div>
                <div className="col span-1-of-4 box">
                    <i className="ion-android-settings icon-big"></i>
                    <h3>Configure Your Life</h3>
                    <p>
                        Customize your life according to what makes you feel good, and what doesn't!
                    </p>
                </div>
            </div>
        </section>
    )
  }

  headerRender() {
    if (!this.state.userLoggedIn) {
      return(
        <header>
          <nav>
            <div className="row">
              <img src="https://lh3.googleusercontent.com/AYDbUNsXtVmIKdwTDEgZpLh4gXGbLRs3tSXL_lw33y6KnOMWzKVY2NkyN0oTnut9oXBbI0ZlcTti_cmqssYlB_FM26SbUNSkFwsDJ6QvAZAOcThDZu5MPkxSsjBwJ-sTdREkB-kU0ts7sCsteBa57oqeaS9FahPf0o3--jafJHDR7RMnS3oJ7f-Eea1-eWwB4sP3To0NCsEi9YWBteA_CT84jt_5CupiYzuGDRtlzDp3xQFY34k_N0J-UPDzpRC25r5MV7133oV3e-Ui1e11ahqsx0_CRrFzxzxiC-9goAHywdZxWSrL2YFBKUtk5kOgWLfJBIjcdQsqMzg08AEPsrCvsFz2U-K_3tO0KF4k1flXrKQdpZPKv8JMXSQ-L06SjuMd1cac_s14BCiPCQYQRoGoN13sJsvrGf_rbOk_rieIzksnldzfW5uYb6G0pVy44JD1MkexZIN9_8slOOTG5H3FWgtP_q9pLKk8gwwA2uo6stv1D45HkYuqv8EJgw2r9ovQhWo6etHMlhTl9v_1pztqeMQFNv4CJJnQ0h4HvApxcEuIK85i3G_IFHyXXU32BVaGN3gH6bg7MtF5fTrIv05d6dpSybPJsVneaEHKmA=s200-no"></img>
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
              <img src="https://lh3.googleusercontent.com/AYDbUNsXtVmIKdwTDEgZpLh4gXGbLRs3tSXL_lw33y6KnOMWzKVY2NkyN0oTnut9oXBbI0ZlcTti_cmqssYlB_FM26SbUNSkFwsDJ6QvAZAOcThDZu5MPkxSsjBwJ-sTdREkB-kU0ts7sCsteBa57oqeaS9FahPf0o3--jafJHDR7RMnS3oJ7f-Eea1-eWwB4sP3To0NCsEi9YWBteA_CT84jt_5CupiYzuGDRtlzDp3xQFY34k_N0J-UPDzpRC25r5MV7133oV3e-Ui1e11ahqsx0_CRrFzxzxiC-9goAHywdZxWSrL2YFBKUtk5kOgWLfJBIjcdQsqMzg08AEPsrCvsFz2U-K_3tO0KF4k1flXrKQdpZPKv8JMXSQ-L06SjuMd1cac_s14BCiPCQYQRoGoN13sJsvrGf_rbOk_rieIzksnldzfW5uYb6G0pVy44JD1MkexZIN9_8slOOTG5H3FWgtP_q9pLKk8gwwA2uo6stv1D45HkYuqv8EJgw2r9ovQhWo6etHMlhTl9v_1pztqeMQFNv4CJJnQ0h4HvApxcEuIK85i3G_IFHyXXU32BVaGN3gH6bg7MtF5fTrIv05d6dpSybPJsVneaEHKmA=s200-no"></img>
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

  filterNavbar() {
    var scope = this;
    if (this.state.userLoggedIn) {
      return (
        <nav className= "navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Emotisphere</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a>Motivation</a></li>
              <li><a>About Us</a></li>
            </ul>
            <button onClick={this.handleLogout} className="btn btn-danger navbar-btn">Logout</button>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className = "navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Emotisphere</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a>Motivation</a></li>
              <li><a>About Us</a></li>
            </ul>
          </div>
        </nav>
      )
    }
  }

  filterComponents() {
    if (this.state.userLoggedIn) {
      return (
          <div>
            <Input />
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
      <div>
        {this.headerRender()}
        {this.filterNavbar()}
        {this.icons()}
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
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
    if (!this.state.userLoggedIn) {
      return(
        <header>
          <nav>
            <div className="row">
              <img src="https://lh3.googleusercontent.com/50zzav1vDtxxBM2qf2SB1VhVRcTrIJ2VTPRMrkWACX_fIbMG2LgjQa1VlPT8ARE02aM6ui_v1Pht1krItrtBLTT4G3mk01y51cBwk46lwfwoq8wvDJYo080wFRzP4qaGSR207eM2Yf9_isV03cVb4Rfeq2MMAq2mol1yMJXQjTTDPXxruSmZBDGmKdkA3k-b1afUY4923MKt7t0tnt7-WT8aA0fUH0_0Eq8Sebh1BONk3LJE74_0zSqkhT5mFSctgNWOlvgve6VaeqUXAR5YgeOa2nKhEa3sFPJ9ix5hXYHFg8AmtnzG7laNPgWr1-coAt37UU3fF6OcCSZcQPb77euBa3ZnSiJ5ArBOHY-9iQ-vaKiPIy3jEllaP7Aer3yMm0rLSvgbr2YdIAqUX0vhtrUcub3yOtRn-_QhbaoJXWGn8Q8I_8qvNQHiTZ51XWCPrLCF7NqdEQnEnz4O-qr1B23lq4LXHjLCalhKlYJ3rz80zXci3zCNhUHwe7e1foOslNAKSyc9D4qiuKZsNfBlF2PIyQYqODaHiEBzlG5h5JkWt0ayD2HD7R6oGX-YGjjS-K8n3Sm2CMAIjSk3pzFLdy13lEy_Ma0eLK97bEcKPw=s200-no"></img>
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
              <img src="https://lh3.googleusercontent.com/50zzav1vDtxxBM2qf2SB1VhVRcTrIJ2VTPRMrkWACX_fIbMG2LgjQa1VlPT8ARE02aM6ui_v1Pht1krItrtBLTT4G3mk01y51cBwk46lwfwoq8wvDJYo080wFRzP4qaGSR207eM2Yf9_isV03cVb4Rfeq2MMAq2mol1yMJXQjTTDPXxruSmZBDGmKdkA3k-b1afUY4923MKt7t0tnt7-WT8aA0fUH0_0Eq8Sebh1BONk3LJE74_0zSqkhT5mFSctgNWOlvgve6VaeqUXAR5YgeOa2nKhEa3sFPJ9ix5hXYHFg8AmtnzG7laNPgWr1-coAt37UU3fF6OcCSZcQPb77euBa3ZnSiJ5ArBOHY-9iQ-vaKiPIy3jEllaP7Aer3yMm0rLSvgbr2YdIAqUX0vhtrUcub3yOtRn-_QhbaoJXWGn8Q8I_8qvNQHiTZ51XWCPrLCF7NqdEQnEnz4O-qr1B23lq4LXHjLCalhKlYJ3rz80zXci3zCNhUHwe7e1foOslNAKSyc9D4qiuKZsNfBlF2PIyQYqODaHiEBzlG5h5JkWt0ayD2HD7R6oGX-YGjjS-K8n3Sm2CMAIjSk3pzFLdy13lEy_Ma0eLK97bEcKPw=s200-no"></img>
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
        <div className="seemless"></div>
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
          <button className="btn btn-info" onClick={this.handleLogout}>Logout</button>
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
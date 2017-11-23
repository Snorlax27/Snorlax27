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


    $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 700);
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
          <h2>Write your diary and let an AI analyze it for you.</h2>
        </div>
          <div class="ionicon">
            <i className="ion-ios-glasses-outline icon-big"></i>
            <h3>Natural Language API</h3><br></br><br></br>
            <p>
               Aylien TextAPI  will analyze the sentiment of your text (from negative to positive) - so you get a better understanding of your daily feelings!
            </p>
          </div>
      </section>
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

              <img src="https://lh3.googleusercontent.com/50zzav1vDtxxBM2qf2SB1VhVRcTrIJ2VTPRMrkWACX_fIbMG2LgjQa1VlPT8ARE02aM6ui_v1Pht1krItrtBLTT4G3mk01y51cBwk46lwfwoq8wvDJYo080wFRzP4qaGSR207eM2Yf9_isV03cVb4Rfeq2MMAq2mol1yMJXQjTTDPXxruSmZBDGmKdkA3k-b1afUY4923MKt7t0tnt7-WT8aA0fUH0_0Eq8Sebh1BONk3LJE74_0zSqkhT5mFSctgNWOlvgve6VaeqUXAR5YgeOa2nKhEa3sFPJ9ix5hXYHFg8AmtnzG7laNPgWr1-coAt37UU3fF6OcCSZcQPb77euBa3ZnSiJ5ArBOHY-9iQ-vaKiPIy3jEllaP7Aer3yMm0rLSvgbr2YdIAqUX0vhtrUcub3yOtRn-_QhbaoJXWGn8Q8I_8qvNQHiTZ51XWCPrLCF7NqdEQnEnz4O-qr1B23lq4LXHjLCalhKlYJ3rz80zXci3zCNhUHwe7e1foOslNAKSyc9D4qiuKZsNfBlF2PIyQYqODaHiEBzlG5h5JkWt0ayD2HD7R6oGX-YGjjS-K8n3Sm2CMAIjSk3pzFLdy13lEy_Ma0eLK97bEcKPw=s200-no"></img>

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

              <img src="https://lh3.googleusercontent.com/50zzav1vDtxxBM2qf2SB1VhVRcTrIJ2VTPRMrkWACX_fIbMG2LgjQa1VlPT8ARE02aM6ui_v1Pht1krItrtBLTT4G3mk01y51cBwk46lwfwoq8wvDJYo080wFRzP4qaGSR207eM2Yf9_isV03cVb4Rfeq2MMAq2mol1yMJXQjTTDPXxruSmZBDGmKdkA3k-b1afUY4923MKt7t0tnt7-WT8aA0fUH0_0Eq8Sebh1BONk3LJE74_0zSqkhT5mFSctgNWOlvgve6VaeqUXAR5YgeOa2nKhEa3sFPJ9ix5hXYHFg8AmtnzG7laNPgWr1-coAt37UU3fF6OcCSZcQPb77euBa3ZnSiJ5ArBOHY-9iQ-vaKiPIy3jEllaP7Aer3yMm0rLSvgbr2YdIAqUX0vhtrUcub3yOtRn-_QhbaoJXWGn8Q8I_8qvNQHiTZ51XWCPrLCF7NqdEQnEnz4O-qr1B23lq4LXHjLCalhKlYJ3rz80zXci3zCNhUHwe7e1foOslNAKSyc9D4qiuKZsNfBlF2PIyQYqODaHiEBzlG5h5JkWt0ayD2HD7R6oGX-YGjjS-K8n3Sm2CMAIjSk3pzFLdy13lEy_Ma0eLK97bEcKPw=s200-no"></img>

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


  seemlessBackground() {
    return (
      <div className="seemless">
        <Login handleLogin={this.handleLogin}/>
      </div>
    )
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
    }, function() {
      console.log('rerendering');
      this.filterComponents();
    }).then(function() {
      console.log('rerendering NON CALLBACK');
      this.filterComponents();

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

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }



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


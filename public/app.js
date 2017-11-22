'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      entries: [],
      newestPost: {},
      userLoggedIn: false,
      username: '',
      backgroundUrl: ''
    };
    _this.handleLogin = _this.handleLogin.bind(_this);
    _this.handleLogout = _this.handleLogout.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleLogin',
    value: function handleLogin(user) {
      this.setState({
        userLoggedIn: true
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scope = this;
      $.ajax({
        type: 'GET',
        url: '/entries',
        success: function success(data) {
          scope.setState({ entries: data });
          console.log('hello world');
        }
      });
    }
  }, {
    key: 'handleLogout',
    value: function handleLogout() {
      var scope = this;
      $.ajax({
        type: 'POST',
        url: '/logout',
        success: function success(data) {
          scope.setState({ userLoggedIn: false });
        }
      });
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


  }, {
    key: 'filterComponents',
    value: function filterComponents() {
      if (this.state.userLoggedIn) {
        return React.createElement(
          'div',
          null,
          React.createElement(Input, null),
          React.createElement(
            'button',
            { className: 'btn btn-info', onClick: this.handleLogout },
            'Logout'
          ),
          React.createElement(DiaryList, { list: this.state.entries })
        );
      } else {
        return React.createElement(
          'div',
          null,
          React.createElement(Login, { handleLogin: this.handleLogin }),
          React.createElement(NewAccount, null)
        );
      }
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
  }, {
    key: 'handleLogin',
    value: function handleLogin(user) {
      this.setState({
        userLoggedIn: true
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scope = this;
      $.ajax({
        type: 'GET',
        url: '/entries',
        success: function success(data) {
          scope.setState({ entries: data });
        }
      });
    }
  }, {
    key: 'handleLogout',
    value: function handleLogout() {
      var scope = this;
      $.ajax({
        type: 'POST',
        url: '/logout',
        success: function success(data) {
          scope.setState({ userLoggedIn: false });
        }
      });
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

  }, {
    key: 'icons',
    value: function icons() {
      return React.createElement(
        'section',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'h2',
            null,
            'Write your diary \u2014 and let an AI read it for you.'
          )
        ),
        React.createElement(
          'div',
          { className: 'js--wp-1' },
          React.createElement(
            'div',
            { className: 'col span-1-of-4 box' },
            React.createElement('i', { className: 'ion-social-google icon-big' }),
            React.createElement(
              'h3',
              null,
              'Google\'s Natural Language API'
            ),
            React.createElement(
              'p',
              null,
              'Google\'s algorithm will analyze the sentiment of your text - so you get a better understanding of your daily feelings!'
            )
          ),
          React.createElement(
            'div',
            { className: 'col span-1-of-4 box' },
            React.createElement('i', { className: 'ion-android-sunny icon-big' }),
            React.createElement(
              'h3',
              null,
              'Interactive Background'
            ),
            React.createElement(
              'p',
              null,
              'Background image will change according to your sentiment! Be happy.'
            )
          ),
          React.createElement(
            'div',
            { className: 'col span-1-of-4 box' },
            React.createElement('i', { className: 'ion-android-options icon-big' }),
            React.createElement(
              'h3',
              null,
              'Sentiment Bars'
            ),
            React.createElement(
              'p',
              null,
              'Sentiments can be seen in an organized manner using progress bars! Take a glance at how you feel throughout the week.'
            )
          ),
          React.createElement(
            'div',
            { className: 'col span-1-of-4 box' },
            React.createElement('i', { className: 'ion-android-settings icon-big' }),
            React.createElement(
              'h3',
              null,
              'Configure Your Life'
            ),
            React.createElement(
              'p',
              null,
              'Customize your life according to what makes you feel good, and what doesn\'t!'
            )
          )
        )
      );
    }
  }, {
    key: 'headerRender',
    value: function headerRender() {
      if (!this.state.userLoggedIn) {
        return React.createElement(
          'header',
          null,
          React.createElement(
            'nav',
            null,
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement('img', { src: 'https://lh3.googleusercontent.com/AYDbUNsXtVmIKdwTDEgZpLh4gXGbLRs3tSXL_lw33y6KnOMWzKVY2NkyN0oTnut9oXBbI0ZlcTti_cmqssYlB_FM26SbUNSkFwsDJ6QvAZAOcThDZu5MPkxSsjBwJ-sTdREkB-kU0ts7sCsteBa57oqeaS9FahPf0o3--jafJHDR7RMnS3oJ7f-Eea1-eWwB4sP3To0NCsEi9YWBteA_CT84jt_5CupiYzuGDRtlzDp3xQFY34k_N0J-UPDzpRC25r5MV7133oV3e-Ui1e11ahqsx0_CRrFzxzxiC-9goAHywdZxWSrL2YFBKUtk5kOgWLfJBIjcdQsqMzg08AEPsrCvsFz2U-K_3tO0KF4k1flXrKQdpZPKv8JMXSQ-L06SjuMd1cac_s14BCiPCQYQRoGoN13sJsvrGf_rbOk_rieIzksnldzfW5uYb6G0pVy44JD1MkexZIN9_8slOOTG5H3FWgtP_q9pLKk8gwwA2uo6stv1D45HkYuqv8EJgw2r9ovQhWo6etHMlhTl9v_1pztqeMQFNv4CJJnQ0h4HvApxcEuIK85i3G_IFHyXXU32BVaGN3gH6bg7MtF5fTrIv05d6dpSybPJsVneaEHKmA=s200-no' }),
              React.createElement(
                'ul',
                { className: 'main-nav' },
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    'a',
                    { href: '#signin' },
                    'Sign In'
                  )
                ),
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    'a',
                    { href: '#signin' },
                    'Create Account'
                  )
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'hero-text-box' },
              React.createElement(
                'h1',
                null,
                'Goodbye solitary.',
                React.createElement('br', null),
                'Hello together.'
              ),
              React.createElement(
                'a',
                { className: 'btn btn-info', href: '#' },
                'I\'m bored'
              ),
              React.createElement('div', { className: 'space' }),
              React.createElement(
                'a',
                { className: 'btn btn-warning', href: '#' },
                'Show me more'
              )
            )
          )
        );
      } else {
        return React.createElement(
          'header',
          null,
          React.createElement(
            'nav',
            null,
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement('img', { src: 'https://lh3.googleusercontent.com/AYDbUNsXtVmIKdwTDEgZpLh4gXGbLRs3tSXL_lw33y6KnOMWzKVY2NkyN0oTnut9oXBbI0ZlcTti_cmqssYlB_FM26SbUNSkFwsDJ6QvAZAOcThDZu5MPkxSsjBwJ-sTdREkB-kU0ts7sCsteBa57oqeaS9FahPf0o3--jafJHDR7RMnS3oJ7f-Eea1-eWwB4sP3To0NCsEi9YWBteA_CT84jt_5CupiYzuGDRtlzDp3xQFY34k_N0J-UPDzpRC25r5MV7133oV3e-Ui1e11ahqsx0_CRrFzxzxiC-9goAHywdZxWSrL2YFBKUtk5kOgWLfJBIjcdQsqMzg08AEPsrCvsFz2U-K_3tO0KF4k1flXrKQdpZPKv8JMXSQ-L06SjuMd1cac_s14BCiPCQYQRoGoN13sJsvrGf_rbOk_rieIzksnldzfW5uYb6G0pVy44JD1MkexZIN9_8slOOTG5H3FWgtP_q9pLKk8gwwA2uo6stv1D45HkYuqv8EJgw2r9ovQhWo6etHMlhTl9v_1pztqeMQFNv4CJJnQ0h4HvApxcEuIK85i3G_IFHyXXU32BVaGN3gH6bg7MtF5fTrIv05d6dpSybPJsVneaEHKmA=s200-no' }),
              React.createElement('ul', { className: 'main-nav' })
            ),
            React.createElement(
              'div',
              { className: 'hero-text-box' },
              React.createElement(
                'h1',
                null,
                'Goodbye solitary.',
                React.createElement('br', null),
                'Hello together.'
              ),
              React.createElement(
                'a',
                { className: 'btn btn-info', href: '#' },
                'I\'m bored'
              ),
              React.createElement('div', { className: 'space' }),
              React.createElement(
                'a',
                { className: 'btn btn-warning', href: '#' },
                'Show me more'
              )
            )
          )
        );
      }
    }
  }, {
    key: 'filterNavbar',
    value: function filterNavbar() {
      var scope = this;
      if (this.state.userLoggedIn) {
        return React.createElement(
          'nav',
          { className: 'navbar navbar-default' },
          React.createElement(
            'div',
            { className: 'container-fluid' },
            React.createElement(
              'div',
              { className: 'navbar-header' },
              React.createElement(
                'a',
                { className: 'navbar-brand', href: '#' },
                'Emotisphere'
              )
            ),
            React.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  null,
                  'Motivation'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  null,
                  'About Us'
                )
              )
            ),
            React.createElement(
              'button',
              { onClick: this.handleLogout, className: 'btn btn-danger navbar-btn' },
              'Logout'
            )
          )
        );
      } else {
        return React.createElement(
          'nav',
          { className: 'navbar navbar-default' },
          React.createElement(
            'div',
            { className: 'container-fluid' },
            React.createElement(
              'div',
              { className: 'navbar-header' },
              React.createElement(
                'a',
                { className: 'navbar-brand', href: '#' },
                'Emotisphere'
              )
            ),
            React.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  null,
                  'Motivation'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  null,
                  'About Us'
                )
              )
            )
          )
        );
      }
    }
  }, {
    key: 'filterComponents',
    value: function filterComponents() {
      if (this.state.userLoggedIn) {
        return React.createElement(
          'div',
          null,
          React.createElement(Input, null),
          React.createElement(DiaryList, { list: this.state.entries })
        );
      } else {
        return React.createElement(
          'div',
          null,
          React.createElement(Login, { handleLogin: this.handleLogin }),
          React.createElement(NewAccount, null)
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.headerRender(),
        this.filterNavbar(),
        this.icons(),
        this.filterComponents()
      );
    }
  }]);

  return App;
}(React.Component);

//----------------------------------------
//<Router>
//<Route path='/' component={App}/>
//<Route  path='/login' component={Login}/>
//<Route path='/signup' component={Signup}/>
//</Router>
//----------------------------------------


ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
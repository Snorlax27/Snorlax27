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
    _this.componentDidMount = _this.componentDidMount.bind(_this);
    _this.filterComponents = _this.filterComponents.bind(_this);
    _this.rerender = _this.rerender.bind(_this);
    return _this;
  }

  _createClass(App, [{
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

      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
      });
    }
  }, {
    key: 'handleLogin',
    value: function handleLogin(user) {
      var scope = this;
      $.ajax({
        type: 'GET',
        url: '/entries',
        success: function success(data) {
          scope.setState({ entries: data, userLoggedIn: true });
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
            'Write your diary and let an AI analyze it for you.'
          )
        ),
        React.createElement(
          'div',
          { className: 'ionicon' },
          React.createElement('i', { className: 'ion-ios-glasses-outline icon-big' }),
          React.createElement(
            'h3',
            null,
            'Natural Language API'
          ),
          React.createElement('br', null),
          React.createElement('br', null),
          React.createElement(
            'p',
            null,
            'Aylien TextAPI  will analyze the sentiment of your text (from negative to positive) - so you get a better understanding of your daily feelings!'
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
              React.createElement('img', { src: 'https://lh3.googleusercontent.com/50zzav1vDtxxBM2qf2SB1VhVRcTrIJ2VTPRMrkWACX_fIbMG2LgjQa1VlPT8ARE02aM6ui_v1Pht1krItrtBLTT4G3mk01y51cBwk46lwfwoq8wvDJYo080wFRzP4qaGSR207eM2Yf9_isV03cVb4Rfeq2MMAq2mol1yMJXQjTTDPXxruSmZBDGmKdkA3k-b1afUY4923MKt7t0tnt7-WT8aA0fUH0_0Eq8Sebh1BONk3LJE74_0zSqkhT5mFSctgNWOlvgve6VaeqUXAR5YgeOa2nKhEa3sFPJ9ix5hXYHFg8AmtnzG7laNPgWr1-coAt37UU3fF6OcCSZcQPb77euBa3ZnSiJ5ArBOHY-9iQ-vaKiPIy3jEllaP7Aer3yMm0rLSvgbr2YdIAqUX0vhtrUcub3yOtRn-_QhbaoJXWGn8Q8I_8qvNQHiTZ51XWCPrLCF7NqdEQnEnz4O-qr1B23lq4LXHjLCalhKlYJ3rz80zXci3zCNhUHwe7e1foOslNAKSyc9D4qiuKZsNfBlF2PIyQYqODaHiEBzlG5h5JkWt0ayD2HD7R6oGX-YGjjS-K8n3Sm2CMAIjSk3pzFLdy13lEy_Ma0eLK97bEcKPw=s200-no' }),
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
              React.createElement('img', { src: 'https://lh3.googleusercontent.com/50zzav1vDtxxBM2qf2SB1VhVRcTrIJ2VTPRMrkWACX_fIbMG2LgjQa1VlPT8ARE02aM6ui_v1Pht1krItrtBLTT4G3mk01y51cBwk46lwfwoq8wvDJYo080wFRzP4qaGSR207eM2Yf9_isV03cVb4Rfeq2MMAq2mol1yMJXQjTTDPXxruSmZBDGmKdkA3k-b1afUY4923MKt7t0tnt7-WT8aA0fUH0_0Eq8Sebh1BONk3LJE74_0zSqkhT5mFSctgNWOlvgve6VaeqUXAR5YgeOa2nKhEa3sFPJ9ix5hXYHFg8AmtnzG7laNPgWr1-coAt37UU3fF6OcCSZcQPb77euBa3ZnSiJ5ArBOHY-9iQ-vaKiPIy3jEllaP7Aer3yMm0rLSvgbr2YdIAqUX0vhtrUcub3yOtRn-_QhbaoJXWGn8Q8I_8qvNQHiTZ51XWCPrLCF7NqdEQnEnz4O-qr1B23lq4LXHjLCalhKlYJ3rz80zXci3zCNhUHwe7e1foOslNAKSyc9D4qiuKZsNfBlF2PIyQYqODaHiEBzlG5h5JkWt0ayD2HD7R6oGX-YGjjS-K8n3Sm2CMAIjSk3pzFLdy13lEy_Ma0eLK97bEcKPw=s200-no' }),
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
    key: 'seemlessBackground',
    value: function seemlessBackground() {
      if (this.state.userLoggedIn) {
        return React.createElement('div', { className: 'seemless' });
      } else {
        return React.createElement(
          'div',
          { className: 'seemless' },
          React.createElement(Login, { handleLogin: this.handleLogin })
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
          { className: 'navbar navbar-default navbar-fixed-bottom' },
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
                  { href: '#' },
                  'Motivation'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: '#' },
                  'About Us'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement('i', { className: 'ion-android-favorite icon-medium' })
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
          { className: 'navbar navbar-default navbar-fixed-bottom' },
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
                  { href: '#' },
                  'Motivation'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: '#' },
                  'About Us'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement('i', { className: 'ion-android-favorite icon-medium' })
              )
            )
          )
        );
      }
    }
  }, {
    key: 'rerender',
    value: function rerender() {
      var scope = this;
      $.ajax({
        type: 'GET',
        url: '/entries',
        success: function success(data) {
          scope.setState({ entries: data });
        },
        error: function error(err) {
          console.log('rerender error', err);
        }
      });
    }
  }, {
    key: 'filterComponents',
    value: function filterComponents() {
      if (this.state.userLoggedIn) {
        return React.createElement(
          'div',
          null,
          React.createElement(Input, { rerender: this.rerender }),
          React.createElement(DiaryList, { list: this.state.entries })
        );
      }
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
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
        this.seemlessBackground(),
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
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
      userLoggedIn: false,
      username: '',
      music1: false,
      music2: false
    };
    _this.handleLogin = _this.handleLogin.bind(_this);
    _this.handleLogout = _this.handleLogout.bind(_this);
    _this.componentDidMount = _this.componentDidMount.bind(_this);
    _this.filterComponents = _this.filterComponents.bind(_this);
    _this.rerender = _this.rerender.bind(_this);
    _this.playJazz = _this.playJazz.bind(_this);
    _this.playKPOP = _this.playKPOP.bind(_this);
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
    key: 'playJazz',
    value: function playJazz() {
      if (this.state.music1) {
        $('#jazz')[0].src = "//www.youtube.com/embed/wKzMlkKNodA?showinfo=0&controls=0";
        this.state.music1 = false;
      } else {
        $('#jazz')[0].src += "&autoplay=1";
        this.state.music1 = true;
      }
    }
  }, {
    key: 'playKPOP',
    value: function playKPOP() {
      if (this.state.music2) {
        $('#video')[0].src = "//www.youtube.com/embed/dh_EvwzKVoY?showinfo=0&controls=0";
        this.state.music2 = false;
      } else {
        $('#video')[0].src += "&autoplay=1";
        this.state.music2 = true;
      }
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
    key: 'randomNameOrder',
    value: function randomNameOrder() {
      var result = [];
      var names = ['Dan', 'Benji', 'Mike', 'Yahzi'];
      for (var i = 3; i >= 0; i--) {
        var random = Math.floor(Math.random() * i);
        if (i === 0) {
          result.push('& ' + names[random]);
        } else {
          result.push(names[random]);
        }
        names.splice(random, 1);
      }
      return result.join(', ');
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
            'Aylien TextAPI will analyze the sentiment of your text (from negative to positive) - so you get a better understanding of your daily feelings!'
          )
        )
      );
    }
  }, {
    key: 'headerRender',
    value: function headerRender() {
      var scope = this;
      if (!this.state.userLoggedIn) {
        return React.createElement(
          'header',
          { id: 'top' },
          React.createElement(
            'nav',
            null,
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement('img', { src: 'https://lh3.googleusercontent.com/0xBvdPgDd3s5gaDcq-CNkgoQPtcT5lPxO_SMxyUcz0rAf61OLprSnA2hLMsU5YFTx4LoyaxEcWKJUmcRuJvQ5uDm3q3hiw8QQaMjesuWk-Q4Ow7UP2WAPt8NaIUFbAqvO24V7eux7XzFwiEU8C8NhALt-0Uy-bcKhUEHpJTjj3Wk13OH-cb-zQh0kCVv0Dwcjqyop5EAvu5Yk-TQJxBQ7ZG_BVM8n2wOVyL-Jf7gI6MqXOvhHwyzOwVveqpquNPitCWS3MfGl373LKwaxZHWPTllUYReyTeDvmtUJ1wX1fX3X64DocaNwn4YPfRZg2GiJSom6sD4fxXvAjinm4pWNktHckZjZo_oLj2a451ZnxEBsPfpKm2gmJIoGL7qgCNSuxxQNDDuNo3pE9Bvl-xQoEEHfyaeqDGV1BkzNcXqloCpYJnlnRNxgRQmZ8AEIkgJlpissyxy7LJshyHpvAD5oYK3q1hShq4SaXvUTAp09L6P6Yikj9ylNwNxH6pVtqDBiDfdygIa7gMh4pznA2qLuzz333WeByBGL0OAAnM_4twzyN_9OkpBLsG8GAtc1g=s200-no' }),
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
                { id: 'h1-header' },
                'Goodbye solitary.',
                React.createElement('br', null),
                'Hello together.'
              ),
              React.createElement(
                'button',
                { id: 'audio', onClick: this.playJazz, className: 'btn btn-warning' },
                'Jazz'
              ),
              React.createElement('div', { className: 'space' }),
              React.createElement(
                'button',
                { id: 'audio', onClick: this.playKPOP, className: 'btn btn-info', href: '#' },
                'FAV'
              )
            )
          )
        );
      } else {
        return React.createElement(
          'header',
          { id: 'top' },
          React.createElement(
            'nav',
            null,
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement('img', { src: 'https://lh3.googleusercontent.com/0xBvdPgDd3s5gaDcq-CNkgoQPtcT5lPxO_SMxyUcz0rAf61OLprSnA2hLMsU5YFTx4LoyaxEcWKJUmcRuJvQ5uDm3q3hiw8QQaMjesuWk-Q4Ow7UP2WAPt8NaIUFbAqvO24V7eux7XzFwiEU8C8NhALt-0Uy-bcKhUEHpJTjj3Wk13OH-cb-zQh0kCVv0Dwcjqyop5EAvu5Yk-TQJxBQ7ZG_BVM8n2wOVyL-Jf7gI6MqXOvhHwyzOwVveqpquNPitCWS3MfGl373LKwaxZHWPTllUYReyTeDvmtUJ1wX1fX3X64DocaNwn4YPfRZg2GiJSom6sD4fxXvAjinm4pWNktHckZjZo_oLj2a451ZnxEBsPfpKm2gmJIoGL7qgCNSuxxQNDDuNo3pE9Bvl-xQoEEHfyaeqDGV1BkzNcXqloCpYJnlnRNxgRQmZ8AEIkgJlpissyxy7LJshyHpvAD5oYK3q1hShq4SaXvUTAp09L6P6Yikj9ylNwNxH6pVtqDBiDfdygIa7gMh4pznA2qLuzz333WeByBGL0OAAnM_4twzyN_9OkpBLsG8GAtc1g=s200-no' }),
              React.createElement('ul', { className: 'main-nav' })
            ),
            React.createElement(
              'div',
              { className: 'hero-text-box' },
              React.createElement(
                'h1',
                { id: 'h1-header' },
                'Goodbye solitary.',
                React.createElement('br', null),
                'Hello together.'
              ),
              React.createElement(
                'button',
                { id: 'audio', onClick: this.playJazz, className: 'btn btn-warning' },
                'Jazz'
              ),
              React.createElement('div', { className: 'space' }),
              React.createElement(
                'button',
                { id: 'audio', onClick: this.playKPOP, className: 'btn btn-info', href: '#' },
                'FAV'
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
        return React.createElement(
          'div',
          { className: 'seemless2' },
          React.createElement(
            'h2',
            { id: 'success' },
            'Every great dream begins with a dreamer. Always remember, you have within you the strength, patience, and the passion to reach for the stars to change the world.'
          ),
          React.createElement(
            'h3',
            { id: 'author' },
            'Harriet Tubman'
          )
        );
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
      var message = scope.randomNameOrder();
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
                { className: 'navbar-brand', href: '#top' },
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
                  { href: '#top' },
                  'Made with',
                  React.createElement('i', { className: 'ion-android-favorite icon-medium' }),
                  'by Snorlax27 @ California, Maryland, and Toronto // ',
                  message
                )
              )
            ),
            React.createElement('div', { id: 'space' }),
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
                { className: 'navbar-brand', href: '#top' },
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
                  { href: '#top' },
                  'Made with',
                  React.createElement('i', { className: 'ion-android-favorite icon-medium' }),
                  'by Snorlax27 @ California, Maryland, and Toronto // ',
                  message
                )
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
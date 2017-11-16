'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      entries: [],
      newestPost: {},
      userLoggedIn: false
    };
    _this.handleLogin = _this.handleLogin.bind(_this);
    _this.postDiary = _this.postDiary.bind(_this);
    _this.render = _this.render.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleLogin',
    value: function handleLogin() {
      this.setState({ userLoggedIn: true });
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
    key: 'playAudio',
    value: function playAudio() {
      var audio = document.getElementById('benji');
      audio.play();
    }
  }, {
    key: 'postDiary',
    value: function postDiary() {
      $.ajax({
        type: 'POST',
        url: '/entries',
        headers: { //might not be needed?
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: this.state.newestPost
        }),
        success: function success() {
          console.log('line 37 app.jsx did the post really work?! :0');
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
          React.createElement(Input, null)
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
      return this.filterComponents();
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
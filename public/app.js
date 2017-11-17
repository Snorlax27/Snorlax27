'use strict';
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _MuiThemeProvider;

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
    _this.render = _this.render.bind(_this);
<<<<<<< HEAD
    _this.handleLogout = _this.handleLogout.bind(_this);
=======
    _this.state = {};
>>>>>>> 9ce3ba4655ca8a87914e8cb116554ecf01f3d1ed
    return _this;
  }

  _createClass(App, [{
    key: 'handleLogin',
    value: function handleLogin(user) {
      this.setState({
        userLoggedIn: true
      });
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
            { 'class': 'btn btn-info', onClick: this.handleLogout },
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
    }
  }, {
    key: 'render',
    value: function render() {
      return this.filterComponents();
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("img", { src: "https://static.comicvine.com/uploads/scale_small/11/114183/5198871-143snorlax.png" })
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
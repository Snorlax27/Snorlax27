"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      username: "",
      password: ""
    };
    _this.handleUsername = _this.handleUsername.bind(_this);
    _this.handlePassword = _this.handlePassword.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var scope = this;
      event.preventDefault();
      $.ajax({
        type: 'POST',
        url: '/login',
        data: {
          username: this.state.username,
          password: this.state.password
        },
        success: function success(data) {
          console.log('data login.jsx line 24', data);
          if (data === 'true') {
            scope.props.handleLogin();
          }
        }
      });
    }
  }, {
    key: "handleUsername",
    value: function handleUsername(e) {
      this.setState({ username: e.target.value });
    }
  }, {
    key: "handlePassword",
    value: function handlePassword(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "login__wrapper" },
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement("input", { type: "text", placeholder: "Enter username", onChange: this.handleUsername }),
          React.createElement("input", { type: "text", placeholder: "Enter password", onChange: this.handlePassword }),
          React.createElement(
            "button",
            { type: "submit", onClick: this.handleSubmit },
            "Login"
          )
        )
      );
    }
  }]);

  return Login;
}(React.Component);
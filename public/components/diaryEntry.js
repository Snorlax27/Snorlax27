"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DiaryEntry = function (_React$Component) {
  _inherits(DiaryEntry, _React$Component);

  function DiaryEntry(props) {
    _classCallCheck(this, DiaryEntry);

    var _this = _possibleConstructorReturn(this, (DiaryEntry.__proto__ || Object.getPrototypeOf(DiaryEntry)).call(this, props));

    _this.state = {
      entries: []
    };
    _this.diaryText = _this.diaryText.bind(_this);
    return _this;
  }

  _createClass(DiaryEntry, [{
    key: "diaryText",
    value: function diaryText(event) {
      this.setState({ entries: event.target.value });
      console.log('Line 12 DiaryEntry.jsx was run');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          null,
          React.createElement(
            "label",
            null,
            "Diary:",
            React.createElement("input", { type: "text", name: "textEntry" })
          ),
          React.createElement("input", { type: "submit", value: "Enter" })
        )
      );
    }
  }]);

  return DiaryEntry;
}(React.Component);

window.DiaryEntry = DiaryEntry;
"use strict";

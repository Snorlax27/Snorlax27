'use strict';

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
      entries: [],
      clicked: false
    };
    _this.diaryText = _this.diaryText.bind(_this);
    _this.filterComponents = _this.filterComponents.bind(_this);
    _this.changeState = _this.changeState.bind(_this);
    return _this;
  }

  _createClass(DiaryEntry, [{
    key: 'diaryText',
    value: function diaryText(event) {
      this.setState({ entries: event.target.value });
      console.log('Line 12 DiaryEntry.jsx was run');
    }
  }, {
    key: 'filterComponents',
    value: function filterComponents() {
      if (this.state.clicked) {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h5',
            { onClick: this.changeState },
            'Title: ',
            this.props.item.title
          ),
          this.props.item.text
        );
      } else {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h5',
            { onClick: this.changeState },
            'Title: ',
            this.props.item.title
          )
        );
      }
    }
  }, {
    key: 'changeState',
    value: function changeState() {
      this.setState({ clicked: !this.state.clicked });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.filterComponents();
    }
  }]);

  return DiaryEntry;
<<<<<<< HEAD
}(React.Component);
=======
}(React.Component);

window.DiaryEntry = DiaryEntry;
"use strict";
>>>>>>> 9ce3ba4655ca8a87914e8cb116554ecf01f3d1ed

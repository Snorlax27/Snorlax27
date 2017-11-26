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
    key: 'renderSentimentBar',
    value: function renderSentimentBar(sentiment) {
      if (!sentiment) {
        return;
      }
      console.log('SENTIMENT BAR', sentiment);
      var polarity = sentiment.polarity;
      var barType;
      if (polarity === 'neutral') {
        barType = "progress-bar progress-bar-warning";
      } else if (polarity === 'positive') {
        barType = "progress-bar progress-bar-info";
      } else {
        barType = "progress-bar progress-bar-warning";
      }
      return React.createElement(
        'div',
        { className: 'progress' },
        React.createElement('div', { className: 'progress-bar progress-bar-info', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuenow': '50', 'aria-valuemax': '100', style: { width: 100 } })
      );
    }
  }, {
    key: 'filterComponents',
    value: function filterComponents() {
      if (this.state.clicked) {
        var postDate = new Date(this.props.item.time);
        console.log('THIS IS THE PROPS ITEM', this.props.item);
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h5',
            { onClick: this.changeState },
            'Title: ',
            this.props.item.title
          ),
          this.renderSentimentBar(this.props.item.sentiment),
          'Entry: ',
          this.props.item.text,
          ' ',
          React.createElement('br', null),
          'Date: ',
          postDate.toDateString(),
          ' ',
          React.createElement('br', null),
          'General Sentiment: ',
          this.props.item.sentiment.polarity,
          React.createElement('br', null),
          React.createElement('br', null),
          'post at: ',
          postDate.toDateString()
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
          ),
          this.renderSentimentBar(this.props.item.sentiment)
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
}(React.Component);
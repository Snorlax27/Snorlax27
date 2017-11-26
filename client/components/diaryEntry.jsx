class DiaryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      clicked: false
    }
    this.diaryText = this.diaryText.bind(this);
    this.filterComponents = this.filterComponents.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  diaryText(event) {
    this.setState({entries: event.target.value});
    console.log('Line 12 DiaryEntry.jsx was run');
  }

  renderSentimentBar(sentiment) {
    if (!sentiment) {
      return;
    }
    console.log('SENTIMENT BAR', sentiment)
    var polarity = sentiment.polarity;
    var barType;
    if (polarity === 'neutral') {
      barType = "progress-bar progress-bar-warning progress-bar-striped active";
    } else if (polarity === 'positive') {
      barType = "progress-bar progress-bar-info progress-bar-striped active";
    } else {
      barType = "progress-bar progress-bar-danger progress-bar-striped active";
    }
    return (
      <div className="progress">
        <div className={barType} role="progressbar" aria-valuemin="0" aria-valuenow={String(sentiment.polarity_confidence * 100)} aria-valuemax="100" style={{width:String(sentiment.polarity_confidence * 100) + '%'}}>
        </div>
      </div>
    )
  }

  filterComponents() {
    if (this.state.clicked) {
      var postDate = new Date(this.props.item.time);
      console.log('THIS IS THE PROPS ITEM', this.props.item);
      return (
        <div>
          <h5 onClick={this.changeState}>Title: {this.props.item.title}</h5>
          {this.renderSentimentBar(this.props.item.sentiment)}
          Entry: {this.props.item.text} <br/>
          Date: {postDate.toDateString()} <br/>
          General Sentiment: {this.props.item.sentiment.polarity}<br/>
          <br/>
          post at: {postDate.toDateString()}
        </div>
      )
    } else {
      return (
        <div>
          <h5 onClick={this.changeState}>Title: {this.props.item.title}</h5>
          {this.renderSentimentBar(this.props.item.sentiment)}
        </div>
      )
    }
  }

  changeState() {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return(
      this.filterComponents()
    )
  }
}





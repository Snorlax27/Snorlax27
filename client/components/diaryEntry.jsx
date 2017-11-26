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
      return <div></div>;
    }
    console.log('SENTIMENT BAR', sentiment)
    var polarity = sentiment.polarity;
    var barType;
    if (polarity === 'neutral') {
      barType = "progress-bar progress-bar-warning";
    } else if (polarity === 'positive') {
      barType = "progress-bar progress-bar-info";
    } else {
      barType = "progress-bar progress-bar-danger";
    }
    return (
      <div className="progress">
        <div className={barType} role="progressbar" aria-valuemin="0" aria-valuenow={String(sentiment.polarity_confidence * 100)} aria-valuemax="100" style={{width:String(sentiment.polarity_confidence * 100) + '%'}}>
        </div>
      </div>
    )
  }

  filterComponents() {
    if (!this.props.item.title) {
        this.props.item.title = "Title is not given."
    }

    if (this.state.clicked) {

      var postDate = new Date(this.props.item.time);
      console.log('THIS IS THE PROPS ITEM', this.props.item);
      return (
        <div>
          <h3 className="title"onClick={this.changeState}>{this.props.item.title}</h3>
          {this.renderSentimentBar(this.props.item.sentiment)}
          <div className="entryInfo">
          Entry: {this.props.item.text} <br/>
          Date: {postDate.toDateString()} <br/>
          General Sentiment: {this.props.item.sentiment.polarity}<br/>
          <br/>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h3 className="title" onClick={this.changeState}>{this.props.item.title}</h3>
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





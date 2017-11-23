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


  filterComponents() {
    if (this.state.clicked) {
      return (
        <div>
          <h5 onClick={this.changeState}>Title: {this.props.item.title}</h5>
          {this.props.item.text}
        </div>
      )
    } else {
      return (
        <div>
          <h5 onClick={this.changeState}>Title: {this.props.item.title}</h5>
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





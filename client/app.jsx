class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    var scope = this;
    $.ajax({
      type: 'GET',
      url: '/entries',
      success: function(data) {
        scope.setState({ entries: data })
      }
    })
  }

  render() {
    return(
      <div>
      <img src="https://static.comicvine.com/uploads/scale_small/11/114183/5198871-143snorlax.png"></img>

      <DiaryList list={this.state.entries}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
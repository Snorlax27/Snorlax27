class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newestPost: {} //ADDED
    }
    this.postDiary = this.postDiary.bind(this); //added
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

  playAudio() {
    var audio = document.getElementById('benji');
    audio.play();
  }

  postDiary() {
    $.ajax({
      type: 'POST',
      url: '/entries',
      headers: { //might not be needed?
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: this.state.newestPost
      }),
      success: function() {
        console.log('line 37 app.jsx did the post really work?! :0')
      }
    })
  }

  render() {
    return(
      <div>
      <Input />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// <DiaryList list={this.state.entries}/>
//<img src="https://avatars2.githubusercontent.com/u/27251873?s=460&v=4"></img>
//<img src="https://avatars1.githubusercontent.com/u/29010046?s=460&v=4"></img>
//<img src="https://i.pinimg.com/736x/65/50/a7/6550a7592bdba229c7f95ff37f2b708d--rock-lee-naruto-naruto-.jpg"></img>

// <img onClick={this.playAudio} src="../../Sun"></img>

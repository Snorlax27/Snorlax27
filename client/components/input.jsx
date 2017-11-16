class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newestTitle: {},
      newestPost: {}
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePost(event) {
    this.setState({newestPost: event.target.value})
  }

  handleTitle(event) {
    this.setState({newestTitle: event.target.value})
  }


  handleSubmit(event) {
    console.log('User hit submit line 16 input.jsx =', this.state.newestPost);

    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/entries',
      data: {
        title: this.state.newestTitle,
        text: this.state.newestPost
      },
      success: function() {
        console.log('line 37 input.jsx post success')
      }
    });
  }

  render() {
    return(
      <form id="input" onSubmit={this.handleSubmit}>
        <h4><span id="enter">Write</span> a diary entry:</h4>
        Title: <input name="title" onChange={this.handleTitle}></input><br></br>
        <textarea type='text' name="entry" value={this.state.value} onChange={this.handlePost} />
        <button type="submit" value="Submit" onClick={this.handleSubmit}>FIN</button>
      </form>
    )
  }
}
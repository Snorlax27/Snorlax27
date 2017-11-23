class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newestTitle: {},
      newestPost: {},
      username: ''
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
    var context = this;
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/entries',
      data: {
        title: this.state.newestTitle,
        text: this.state.newestPost,
        username: this.state.username
      },
      success: function() {
        console.log('line 37 input.jsx post success')
      }
    }).then(function() {
      context.props.rerender();
    });
  }

  render() {
    return(
      <form id="input" onSubmit={this.handleSubmit}>
        <h4><span id="enter">Write</span> a diary entry:</h4>
        Title: <input name="title" onChange={this.handleTitle}></input><br></br>
        <textarea type='text' name="entry" onChange={this.handlePost} />

        <textarea type='text' name="entry" value={this.state.value} onChange={this.handlePost} />


        <button type="submit" className="btn btn-info" value="Submit" onClick={this.handleSubmit}>FIN</button>
      </form>
    )
  }
}
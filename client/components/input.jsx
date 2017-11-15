class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      newestPost: {}
    }
    this.handlePost = this.handlePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePost(event) {
    this.setState({newestPost: event.target.value})
  }

  handleSubmit(event) {
    console.log('User hit submit line 16 input.jsx =', this.state.newestPost);
    event.preventDefault();
  }
  render() {
    return(

      <form id="input" onSubmit={this.handleSubmit}>
        <h4><span id="enter">Write</span> a diary entry:</h4>
        <textarea type='text' value={this.state.value} onChange={this.handlePost} />
        <button type="submit" value="Submit" onClick={this.handleSubmit}>FIN</button>
      </form>
    )
  }
}
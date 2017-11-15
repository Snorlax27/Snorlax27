class DiaryEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
    this.diaryText = this.diaryText.bind(this);
  }

  diaryText(event) {
    this.setState({entries: event.target.value});
    console.log('Line 12 DiaryEntry.jsx was run');
  }

  render() {
    return(<div>
      <form>
        <label>
          Diary:
          <input type="text" name="textEntry" />
        </label>
        <input type="submit" value="Enter" />
      </form>
    </div>)
  }
}


window.DiaryEntry = DiaryEntry;


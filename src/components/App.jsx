class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }
  
  searchStringHandler(searchString) {
    this.props.searchYouTube({query: searchString}, (data) => {
      this.setState({
        videoList: data,
        currentVideo: data[0]     
      });
    });
  }

  onListItemClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  componentDidMount() {
    this.props.searchYouTube({query: 'cats'}, (data) => {
      //console.log(data);
      //console.log(this);
      this.setState({
        videoList: data, 
        currentVideo: data[0]});
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchStringHandler={this.searchStringHandler.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onListItemClick={this.onListItemClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

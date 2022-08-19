import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("dirt racing");
  }

  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[4],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
        {/* i have{" "}
        {this.state.videos.length} videos */}
      </div>
    );
  }
}

export default App;

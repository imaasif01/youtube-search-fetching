import React from "react";
import "./Styles.css";
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading.....</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment vsegment">
        <h4 className="ui header vsnippet">{video.snippet.title}</h4>
        <p className="vsnippet">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

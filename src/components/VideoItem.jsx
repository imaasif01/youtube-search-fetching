import React from "react";
import "./Styles.css";

const VideoItem = ({ shots, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(shots)} className="item video-item">
      <img
        className="ui image"
        src={shots.snippet.thumbnails.medium.url}
        alt={shots.snippet.title}
      />
      <div className="content">
        <div className="header">{shots.snippet.title}</div>
        <div className="description">{shots.snippet.channelTitle}</div>
        {/* <div className="times">{shots.snippet.publishedAt}</div> */}
      </div>
    </div>
  );
};

export default VideoItem;

import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((shot) => {
    return (
      <VideoItem
        key={shot.id.videoId}
        onVideoSelect={onVideoSelect}
        shots={shot}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideosList;

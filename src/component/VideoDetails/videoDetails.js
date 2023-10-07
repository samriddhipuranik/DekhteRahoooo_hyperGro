import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetails = () => {
  const { id } = useParams(); //video ID 

  return (
    <div className="video-details">
      <h2>Video Details</h2>
      <p>Video ID: {id}</p>
    </div>
  );
};

export default VideoDetails;

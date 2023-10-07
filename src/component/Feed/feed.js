import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../VideoCard/videoCard'; 

function Feed() {
  const [videos, setVideos] = useState([]);
  const apiUrl = 'https://internship-service.onrender.com/videos?page=0';

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data.message === 'Success') {
          setVideos(response.data.data.posts);
        } else {
          console.error('Failed to fetch data');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl]);

  return (
    <div className="App">
      <h1>Watch Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.postId}>
            {/* Pass the video data to the VideoCard component */}
            <VideoCard video={video.submission} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;

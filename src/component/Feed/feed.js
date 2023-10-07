import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../VideoCard/videoCard';

function Feed() {
  const [videos, setVideos] = useState([]);
  const apiUrl = 'https://internship-service.onrender.com/videos?page=4';

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
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
      <div className="flex-grow h-full overflow-y-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!videos.length ? (
            <p>Loading...</p>
          ) : (
            videos.map((video) => (
              <div key={video.postId} className="mb-8">
                <VideoCard video={video} />
              </div>
            ))
          )}
          </div>
          </div>
  );
}

export default Feed;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../VideoCard/videoCard';

function Feed() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Start from page 0
  const totalPages = 10; // Total number of pages

  useEffect(() => {
    fetchVideos(currentPage);
  }, [currentPage]);

  const fetchVideos = (page) => {
    const apiUrl = `https://internship-service.onrender.com/videos?page=${page}`;

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
  };

  const handlePageChange = (page) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <div className="flex-grow h-full overflow-y-auto bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
        {!videos.length ? (
          <p>Loading...</p>
        ) : (
          videos.map((video) => (
            <div key={video.postId} className="mb-8 border border-white border-solid rounded p-2">
              <VideoCard video={video} currentPage={currentPage} />
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center mt-4">
        {/* Create pagination buttons for all 9 pages */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded-full border border-white ${
              currentPage === index ? 'bg-white text-black' : 'text-white'
            }`}
            onClick={() => handlePageChange(index)}
          >
            {index+1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Feed;

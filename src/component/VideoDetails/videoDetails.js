import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VideoDetails = () => {
  const { id } = useParams(); // Video ID
  const [video, setVideo] = useState(null);

  useEffect(() => {
    // Assuming you have an API endpoint to fetch video details
    // Replace 'fetchVideoDetails' with your actual data fetching logic
    fetchVideoDetails(id);
  }, [id]);

  const fetchVideoDetails = async (videoId) => {
    try {
      // Replace with your API URL and fetch method (e.g., axios)
      const response = await fetch(`https://internship-service.onrender.com/videos?page=4`);
      if (response.ok) {
        const data = await response.json();
        // Find the post with the matching ID
        const videoPost = data.data.posts.find(post => post.postId === videoId);
        console.log(data);

        if (videoPost) {
          setVideo(videoPost);
        } else {
          console.error("Video not found");
        }
      } else {
        console.error("Failed to fetch video details");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Check if video data is available
  if (!video) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center flex-row bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        {/* Add your video player component here */}
        <video controls width="100%" height="auto">
          <source src={video.submission.mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
          {video.submission.title}
        </div>

        <div className="flex justify-between flex-col md:flex-row mt-4">
          <div className="flex">
            <div className="flex items-start">
              <div className="flex h-11 w-11 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video.creator.pic}
                  alt="Author Avatar"
                />
              </div>
            </div>
            <div className="flex flex-col ml-3">
              {/* Display author information here */}
              <span className="text-[12px] font-semibold text-white">
                {video.creator.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;

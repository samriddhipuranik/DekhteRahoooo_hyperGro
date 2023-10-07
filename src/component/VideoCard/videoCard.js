import React from 'react';

const VideoCard = ({ video }) => {
  // Check if the video object exists
  if (!video) {
    return null; // Or display a loading indicator or an error message
  }

  return (
    <div className="flex flex-col mb-8">
      <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
        {video.submission?.thumbnail && (
          <img
            className="h-full w-full object-cover"
            src={video.submission.thumbnail}
            alt="Video Thumbnail"
          />
        )}
      </div>
      <div className="flex text-white mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            {video.creator?.pic && (
              <img
                className="h-full w-full object-cover"
                src={video.creator.pic}
                alt="Creator's Avatar"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm font-bold line-clamp-2">
            {video.submission?.title}
          </span>
          <span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
            {video.creator?.name}
          </span>
          <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{video.submission?.description}</span>
          </div>
          <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${video.comment?.count || 0} comments`}</span>
          </div>
          <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${video.reaction?.count || 0} reactions`}</span>
          </div>
          <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${
              video.comment?.commentingAllowed
                ? 'Comments Allowed'
                : 'Comments Not Allowed'
            }`}</span>
          </div>
          {video.submission?.hyperlink && (
            <a href={video.submission.hyperlink} className="text-blue-500 hover:underline">
              Read More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
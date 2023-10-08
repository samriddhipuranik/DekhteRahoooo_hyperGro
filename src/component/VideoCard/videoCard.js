import React from 'react';
import VideoLength from '../Shared/videoLength';
import { Link } from "react-router-dom";

const VideoCard = ({ video, currentPage }) => {
  const videoTimeInSeconds = 840; //hardcoded, dynamic approach found using flv lib for frontend
  const abbrStyle = {
    cursor: "help",
    textDecoration: "none", 
    justifyContent : "start"
  };
// console.log(currentPage)
  return (
    
    <Link to={`/video/${video?.postId}?page=${currentPage}`}>
    <div className="flex flex-col mb-8 bg-slate-300 ">
       <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden flex items-center justify-center">
        {video?.submission?.thumbnail && (
          <img
            className="h-48 w-1304 object-cover rounded-lg transition-transform transform hover:scale-105"
            src={video.submission.thumbnail}
            alt="Video Thumbnail"
          />
        )}
        <VideoLength time={videoTimeInSeconds} />
        {/* {video?.lengthSeconds && ( */}
                        {/* <VideoLength time={video?.lengthSeconds} /> */}
                     {/* )}  */}
      </div>
      <div className="flex text-white mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 rounded-full overflow-hidden">
            {video?.creator?.pic && (
              <img
                className="h-full w-full object-cover"
                src={video.creator.pic}
                alt="Creator's Avatar"
              />
            )}
          </div>
        </div>
        
        <div className="flex flex-col ml-3 overflow-hidden ">
          {video?.submission?.title && (
            <span className="text-sm font-bold line-clamp-2 flex items-center text-black ">
              {video.submission.title}
            </span>
          )}
          {video?.creator?.name && (
            <span className="text-[12px] font-semibold mt-2 text-black/[0.7] flex items-center ">
              {video.creator.name}
            </span>
          )}
<br></br>
<div className="flex text-[12px] font-semibold text-black/[0.7] truncate">
            <abbr
              title={video?.submission?.description}
              style={abbrStyle}
              
            >
              {video?.submission?.description.substring(0, 100)}
              {video?.submission?.description.length > 100 && "..."}
            </abbr>
          </div>
          {/* earlier the profile pic was placed here... */}
          <div className='flex '>
          <div className="text-[12px] font-semibold text-black/[0.7] truncate overflow-hidden p-2">
            <span>{`${video?.comment?.count || 0} comments`}</span>
          </div>
          <div className="flex text-[12px] font-semibold text-black/[0.7] truncate overflow-hidden p-2">
            <span>{`${video?.reaction?.count || 0} reactions`}</span>
          </div>
          </div>
          {/* <div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${
              video?.comment?.commentingAllowed
                ? 'Comments Allowed'
                : 'Comments Not Allowed'
            }`}</span>
          </div> */}
          {/* {video?.submission?.hyperlink && (
            <a
              href={video.submission.hyperlink}
              className="text-blue-500 hover:underline"
            >
              Read More
            </a> */}
          {/* )} */}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default VideoCard;

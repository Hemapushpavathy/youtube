import React from "react";
import ReactPlayer from 'react-player/youtube'


export const Youtube=({youtubeLink})=>{
    return(
        <div className="yt-section">

        <ReactPlayer url={youtubeLink}  />
        </div>
    )
}
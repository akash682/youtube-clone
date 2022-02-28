import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <div className='recommnededVideos_videos'>
        <VideoCard />
      </div>
    </div>
  )
}

export default RecommendedVideos
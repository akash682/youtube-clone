import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos_videos'>
        <VideoCard 
          title = "Become a Web Developer in 10 miniutes"
          views = "2.3M Views"
          timestamp="3 days ago"
          channelImage="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
          channel="Sonny Sangha"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        />
        <VideoCard 
          title = "Become a Web Developer in 10 miniutes"
          views = "2.3M Views"
          timestamp="3 days ago"
          channelImage="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
          channel="Sonny Sangha"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        />
        <VideoCard 
          title = "Become a Web Developer in 10 miniutes"
          views = "2.3M Views"
          timestamp="3 days ago"
          channelImage="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
          channel="Sonny Sangha"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        />
        <VideoCard 
          title = "Become a Web Developer in 10 miniutes"
          views = "2.3M Views"
          timestamp="3 days ago"
          channelImage="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
          channel="Sonny Sangha"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        />
      </div>
    </div>
  )
}

export default RecommendedVideos
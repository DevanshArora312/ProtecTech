import React from 'react'

export const Connect = () => {
  return (
    <div>
      <div>
        <h1>Live Video Feed</h1>
        <img
          id="video-feed"
          src="http://localhost:5000/video_feed" 
          alt="Live Video Feed"
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>
    </div>
  )
}

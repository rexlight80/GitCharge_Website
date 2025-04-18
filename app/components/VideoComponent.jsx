import React from 'react'

const VideoComponent = ({src}) => {
  return (
    <video preload="none" loop className='xl:w-1/2 w-full h-[22rem] rounded-[0.7rem]' autoPlay muted>
    <source src={src} type="video/mp4" />
 
    Your browser does not support the video tag.
  </video>
  )
}

export default VideoComponent
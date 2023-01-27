import React from 'react'
import videoBg from "../assets/video_17248673274339-jVIB0zK6.MP4";
import "./Play.css"

const Play = () => {
  return (
    <div className='main'>
      <div className='overlay'></div>
     <video src={videoBg} autoPlay loop muted />
      <div className='content'>
       <h1>Welcome!</h1>
       <p>To My Room</p>
      </div>
    </div>
  )
}

export default Play
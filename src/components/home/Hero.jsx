import React from 'react'
import videoSource from '../../../public/assets/videos/bg.mp4'
import backgoundImage from '../../../public/assets/images/hud.gif'



const Hero = () => {
  return (
    <div id='hero' className='relative h-screen w-screen'>
      <div className='content-wrap w-screen h-screen flex items-center z-10 relative'>
        <h1 className='font-cygun text-white md:text-8xl text-5xl max-w-4xl'>World’s First Reward Driven Gamification Hub</h1>
      </div>
      <video
        className="absolute top-0 left-0 h-screen w-screen object-cover z-[-1]"
        autoPlay
        loop
        muted
        src={videoSource}
        type="video/mp4"
      />
      <div className='absolute top-0 left-0 h-screen w-full object-cover z-[-1]'>
        <img className='w-screen h-screen object-auto' src={backgoundImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
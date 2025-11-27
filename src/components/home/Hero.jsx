import React, { useState, useRef } from 'react';
import videoSource from '../../../public/assets/videos/bg.mp4';
import backgoundImage from '../../../public/assets/images/hud.gif';

const Hero = () => {
  const [isMusic, setIsMusic] = useState(false);
  const videoRef = useRef(null);

  const handleMusic = () => {
    const video = videoRef.current;
    if (!video) return;

    // Toggle state
    setIsMusic(prev => !prev);

    video.muted = isMusic;
    if (!isMusic) video.play();
  };

  return (
    <div id="hero" className="relative h-screen">
      <div className="content-wrap w-screen h-screen flex items-center z-10 relative">
        <h1 className="font-cygun text-white md:text-8xl text-5xl max-w-4xl">
          World’s First Reward Driven Gamification Hub
        </h1>

        {/* Button that adds class */}
        <div
          onClick={handleMusic}
          className={`w-[67px] h-[67px] absolute right-3 bottom-16 rounded-full cursor-pointer`}
        >
          <span className="w-full h-full border border-white block rounded-full button_weve" />
          <span className={`w-5 h-4 absolute left-1/2 top-1/2 -translate-1/2 flex gap-0.5 justify-center items-end play_line ${isMusic ? 'play' : ''}`}>
            <span className="w-[3px] bg-white h-3/4 block"></span>
            <span className="w-[3px] bg-white h-1/4 block"></span>
            <span className="w-[3px] bg-white h-2/4 block"></span>
            <span className="w-[3px] bg-white h-4/5 block"></span>
          </span>
        </div>
      </div>

      <video
        ref={videoRef}
        className="absolute top-0 left-0 h-screen w-screen object-cover z-[-1]"
        autoPlay
        playsInline
        loop
        muted
        src={videoSource}
        type="video/mp4"
      />

      <div className="absolute top-0 left-0 h-screen w-full object-cover z-[-1]">
        <img
          className="w-screen h-screen object-auto opacity-40"
          src={backgoundImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;

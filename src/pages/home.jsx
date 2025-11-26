import React from 'react'
import { PARTNERS_DATA, INVESTORS_DATA } from '../lib/data/partnersData'
import backgound from '../../public/assets/images/bg-image.webp'
import Hero from '../components/home/Hero'
import Galaxy from '../components/home/Galaxy'
import Tokyo from '../components/home/Tokyo'
import Journey from '../components/home/Journey'
import VideoFrame from '../components/home/VideoFrame'
import Token from '../components/home/Token'
import Partners from '../components/home/Partners'
import News from '../components/home/News'
import TwitterGridTest from '../components/TwitterGridTest'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='' style={{ backgroundImage: `url(${backgound})`, backgroundSize: 'contain', backgroundPosition: '0' }}>
        <Galaxy />
        <Tokyo />
        {/* <Journey /> */}
        <VideoFrame />
        {/* <Token /> */}
        <Partners data={PARTNERS_DATA} />
        <Partners data={INVESTORS_DATA} />
        <News />
      </div>
    </>
  )
}

export default Home
import React from 'react'
import tokyoVideo from '../../../public/assets/videos/tokyoanimate.webm'
import Button from '../Button'

const Tokyo = () => {
    return (
        <div id='tokyo'>
            <div className='content-wrap flex lg:flex-row flex-col justify-between items-center'>
                <div className='lg:w-2/5 w-full'>
                    <h3 className='sub-title pb-5'>Welcome to Gacha Galaxy</h3>
                    <h2 className='section-title'>Immersive <br /> Neo-Tokyo <br /> Gamified City</h2>
                    <p className='font-cygun text-xl font-semibold leading-6 text-white'>Complete Quests & Earn Rewards</p>
                    <p className='font-arial text-lg font-normal leading-8 text-white py-5'>Experience addictive gameplay with Gacha Mechanics</p>
                    <div className='flex md:flex-row flex-col gap-5 items-start'>
                        <Button
                            text="PLAY"
                            link="https://gachagalaxy.me3.io/"
                            animation={true}
                            target={true}
                        />

                        <Button
                            text="Partner With Us"
                            link='https://airtable.com/appZ8JrBCaa4Rvqk2/pag0Qf6ueTbRVqgqg/form'
                            target={true}

                        />
                    </div>
                </div>
                <div className='lg:w-3/5 w-full'>
                    <video className='tokyo-city drop-shadow-[0_0_10px_rgba(255,54,215,.5019607843)]' autoPlay loop muted src={tokyoVideo} type="video/webm" />
                </div>
            </div>
        </div>
    )
}

export default Tokyo
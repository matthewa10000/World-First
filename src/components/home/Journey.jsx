import React from 'react'
import Buttom from '../Button'

const Journey = () => {
    return (
        <div id='journey' className='py-20 border-b border-b-[#555] mb-20'>
            <div className='content-wrap'>
                <h3 className='sub-title pb-5'>Your Journey Begins Here</h3>
                <h2 className='section-title'>Your Journey</h2>
                <div className='flex md:flex-row flex-col gap-5 items-start'>
                    <Buttom text="Play" link="#" animation={true} />
                    <Buttom text="Partner With Us" />
                </div>
            </div>
        </div>
    )
}

export default Journey
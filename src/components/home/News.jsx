import React from 'react'
import TwitterGridTest from '../TwitterGridTest'
import ElfsightWidget from '../ElfsightWidget '

const News = () => {
    return (
        <div id='news'>
            <div className='content-wrap py-36'>
                <div className='content-wrap pt-16'>
                    <h3 className='sub-title pb-5 text-center'>News</h3>
                    <h2 className='section-title text-center'>Latest Updates</h2>
                </div>
                {/* <TwitterGridTest /> */}
                <ElfsightWidget />
            </div>
        </div>
    )
}

export default News
import React from 'react'

const Footer = () => {
    return (
        <div id='footer' className='bg-black'>
            <div className='content-wrap md:pt-24 pb-8 pt-16 flex flex-col lg:flex-row gap-6 flex-no-wrap justify-between items-center'>
                <div className='flex text-white justify-between w-full gap'>
                    <div className='w-8/12'>
                        <div className='flex items-center justify-start gap-3'>
                            <img className='w-[140px]' src="../../public/assets/images/logo.webp" alt="logo" />
                            <a href="#">Terms of Use</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Terms of Use</a>
                        </div>
                        <div className='flex items-center justify-start gap-3 my-4'>
                            <a href="#">SVG</a>
                            <a href="#">SVG</a>
                            <a href="#">SVG</a>
                        </div>
                    </div>
                    <div className='w-4/12 text-end'>
                        <div>
                            <a href="#">SVG</a>
                            <a href="#">SVG</a>
                            <a href="#">SVG</a>
                            <a href="#">SVG</a>
                            <a href="#">SVG</a>
                        </div>
                        <p className='sub-title'>© 2024 ME3 LABS INC | ALL RIGHTS RESERVED</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
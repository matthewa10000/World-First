import React, { useState } from 'react'
import logo from '../../public/assets/images/logo.webp'
import Menu from '../components/Menu.jsx'
import { MENU_DATA } from '../lib/data/menuData.js'



const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const heandelMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    return (
        <header className='bg-black absolute w-full top-0 left-0 z-50'>
            <div className='content-wrap py-2 flex row justify-between items-center'>
                <div className='w-1/3 z-10'>
                    <a href="#"><img className='lg:w-36 md:w-20' src={logo} alt="Logo" /></a>
                </div>
                <div className='w-1/3 z-10'>
                    <div onClick={heandelMenu} className='w-14 h-4 mx-auto flex flex-col items-center justify-between '>
                        <div className='w-full h-px bg-white'></div>
                        <div className='w-full h-px bg-white'></div>
                        <div className='w-full h-px bg-white'></div>
                    </div>
                </div>
                <div className='w-1/3 z-10'>
                </div>

                <div className={` transition-top duration-300 ease-in-out fixed left-0 h-full w-full bg-[#c22ad6] ${isMenuOpen ? 'top-0' : '-top-full'}`}>
                    <Menu Menus={MENU_DATA} />
                </div>
            </div>
        </header>
    )
}

export default Header




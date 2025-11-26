import React, { useState, useEffect } from 'react'
import logo from '../../public/assets/images/logo.webp'
import Menu from '../components/Menu.jsx'
import { MENU_DATA } from '../lib/data/menuData.js'



const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const heandelMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full top-0 left-0 z-50 ${isScrolled ? 'bg-black' : ''}`}>
            <div className='content-wrap py-2 flex row justify-between items-center'>
                <div className='w-1/3 z-10'>
                    <a href="/"><img className='lg:w-36 md:w-20' src={logo} alt="Logo" /></a>
                </div>
                <div className='w-1/3 z-10'>
                    <div onClick={heandelMenu} className={`hambargar_menu cursor-pointer w-14 h-4 mx-auto flex flex-col items-center justify-between ${isMenuOpen ? 'active' : ''}`}>
                        <div className={`bar-1 w-full h-px bg-white ${isMenuOpen ? 'rotate-45' : ''}`}></div>
                        <div className={`bar-2 w-full h-px bg-white ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`bar-3 w-full h-px bg-white ${isMenuOpen ? '-rotate-45' : ''}`}></div>
                    </div>
                </div>
                <div className='w-1/3 z-10'>
                </div>

                <div className={` heard_menu fixed left-0 h-full w-full bg-[#ff36d7] flex justify-center items-center -top-full ${isMenuOpen ? 'active' : ''}`}>
                    <div className='menu_wraper'>
                        <div className='header_menu-inner'></div>
                        <Menu Menus={MENU_DATA} closeMenu={() => {
                            setIsMenuOpen(false);
                            document.body.style.overflow = 'auto';
                            console.log('close in header')
                        }} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header




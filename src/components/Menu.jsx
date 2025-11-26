import React, { useState } from 'react';

const Menu = ({ Menus, closeMenu }) => {
    const defaultDilay = 300
    const [openIndex, setOpenIndex] = useState(null);

    const toggleMenu = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='header_menu-items '>
            <ul className='px-8'>
                {Menus.map((menu, index) => (
                    <li
                        key={index}
                        style={{ transitionDelay: `${(index * 100) + defaultDilay}ms` }}
                        className="lg:pl-20 pl-6 relative lg:my-5 my-3 opacity-0 transition-normal duration-500"
                    >
                        <div className='text-[#494949] text-sm font-arial font-bold absolute lg:top-4 left-0'>0{index + 1}.</div>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMenu(index);
                            }}
                        >
                            <a
                                onClick={(e) => {
                                    if (!menu.social_links) {
                                        closeMenu();
                                    } else {
                                        e.preventDefault();
                                        toggleMenu(index);
                                    }
                                }}
                                className="text-[#aeaeae] lg:text-[45px] text-2xl leading-8 font-semibold font-arial lg:leading-[45px] inline-block relative menu-item-amination"
                                href={menu.link}
                            >
                                {menu.name}
                            </a>
                            {menu.social_links && (
                                <span className="text-white text-lg">
                                    {openIndex === index ? '▲' : '▼'} {/* optional arrow */}
                                </span>
                            )}
                        </div>

                        {menu.social_links && openIndex === index && (
                            <ul className="mt-2 pl-4 w-full">
                                {menu.social_links.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <li
                                            key={idx}
                                            className="menu-item-amination relative flex gap-3 items-center my-3"
                                            onClick={closeMenu}
                                        >
                                            <span className='text-2xl text-[#C588F9]'><Icon /></span>
                                            <a target='_blank' href={social.url} className="lg:text-3xl text-xl font-arial font-semibold text-[#aeaeae] leading-[45px]">
                                                {social.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;

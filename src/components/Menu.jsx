import React, { useState } from 'react';

const Menu = ({ Menus }) => {
    const [openIndex, setOpenIndex] = useState(null); // tracks which menu is open

    const toggleMenu = (index) => {
        setOpenIndex(openIndex === index ? null : index); // toggle open/close
    };

    return (
        <div>
            <ul>
                {Menus.map((menu, index) => (
                    <li key={index} className="py-4 border-b border-white/30 flex gap-4 flex-wrap">
                        <div className='text-white text-lg'>{index + 1} </div>
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleMenu(index)}
                        >
                            <a className="text-white text-2xl" href={menu.link}>{menu.name}</a>
                            {menu.social_links && (
                                <span className="text-white text-xl">
                                    {openIndex === index ? '▲' : '▼'} {/* optional arrow */}
                                </span>
                            )}
                        </div>

                        {menu.social_links && openIndex === index && (
                            <ul className="mt-2 pl-4 w-full">
                                {menu.social_links.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <li key={idx} className="py-2 flex items-center gap-2">
                                            <Icon className="w-6 h-6 text-white" />
                                            <a href={social.url} className="text-white text-xl">
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

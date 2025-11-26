import React from 'react';

import IconTwitter from './Icons/IconTwitter';
import IconTelegram from './Icons/IconTelegram';
import IconDiscord from './Icons/IconDiscord';
import IconHelp from './Icons/IconHelp';
import IconGithub from './Icons/IconGithub';
import IconYoutube from './Icons/IconYoutube';
import IconMail from './Icons/IconMail';
import footerImageOne from '../../public/assets/images/footer-img-one.svg';
import footerImageTwo from '../../public/assets/images/footer-image-two.webp';
import footerImageThree from '../../public/assets/images/footer_image_three.svg';
import logo from '../../public/assets/images/logo.webp';


const Footer = () => {
    return (
        <div id='footer' className='bg-black'>
            <div className='content-wrap md:pt-24 pb-8 pt-16'>
                <div className='flex flex-col md:flex-row text-white justify-between w-full gap-6'>
                    <div className='w-full md:w-8/12'>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3'>
                            <a href="/"><img className='w-[140px] block' src={logo} alt="Logo" /></a>
                            <div className='flex flex-row flex-wrap items-center justify-start gap-3'>
                                <a className='hover:underline text-arial text-sm leading-6' href="https://help.me3.io/en/articles/9245378-terms-of-use">Terms of Use</a>
                                <a className='hover:underline text-arial text-sm leading-6' href="https://help.me3.io/en/articles/9245363-privacy-policy">Privacy Policy</a>
                                <a className='hover:underline text-arial text-sm leading-6' href="https://help.me3.io/en/articles/9245321-risk-disclaimers-disclosures">Risk Disclaimers & Disclosure</a>
                            </div>
                        </div>
                        <div className='flex items-center justify-start gap-4 my-4'>
                            <a href="https://projects.assuredefi.com/project/me3"><img className='h-10' src={footerImageOne} alt="footer-img-one" type='svg' /></a>
                            <a href="https://github.com/0xGuard-com/audit-reports/blob/master/Me3/Me3.pdf"><img className='h-10' src={footerImageTwo} alt="footer-image-two" type='pdf' /></a>
                            <a href="https://bscscan.com/token/0x42b4daa9210102707373f4618852f926a4150277"><img className='h-10' src={footerImageThree} alt="footer_image_three" type='svg' /></a>
                        </div>
                    </div>
                    <div className='w-full md:w-4/12'>
                        <div className='flex items-center lg:justify-end gap-3'>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="https://x.com/Me3Labs"><IconTwitter /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="https://t.me/Me3Official"><IconTelegram /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="https://discord.com/invite/me3labs"><IconDiscord /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="https://help.me3.io/en/"><IconHelp /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="https://github.com/Me3-io"><IconGithub /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="https://www.youtube.com/@Me3Labs"><IconYoutube /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="mailto:info@me3.io"><IconMail /></a>
                        </div>
                        <p className='sub-title pt-3 lg:text-right'>© 2024 ME3 LABS INC | ALL RIGHTS RESERVED</p>
                    </div>
                </div>
                <div className='bg-[url("../../public/assets/images/footer-bar.svg")] bg-no-repeat bg-contain w-full h-2.5 md:mt-16 mt-8 mb-8'>
                </div>
            </div>
        </div>
    )
}

export default Footer
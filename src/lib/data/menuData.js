import IconTwitter from '../../components/Icons/IconTwitter';
import IconTelegram from '../../components/Icons/IconTelegram';
import IconDiscord from '../../components/Icons/IconDiscord';
import IconHelp from '../../components/Icons/IconHelp';
import IconGithub from '../../components/Icons/IconGithub';
import IconYoutube from '../../components/Icons/IconYoutube';
import IconMail from '../../components/Icons/IconMail';

export const MENU_DATA = [
    { name: 'Home', link: '/' },
    { name: 'Gacha Galaxy', link: '#tokyo' },
    { name: 'Partner With Us', link: '#journey' },
    { name: 'Latest News', link: '#news' },
    { name: 'Investors & Partners', link: '#partners' },
    { name: 'Help Center', link: 'https://help.me3.io/en/' },
    {
        name: 'Socials & Communities',
        link: '#',
        social_links: [
            { name: 'Twitter/X', url: 'https://x.com/Me3Labs', icon: IconTwitter },
            { name: 'Telegram', url: 'https://t.me/Me3Official', icon: IconTelegram },
            { name: 'Discord', url: 'https://discord.com/invite/me3labs', icon: IconDiscord },
            { name: 'Help Center', url: 'https://help.me3.io/en/', icon: IconHelp },
            { name: 'Github', url: 'https://github.com/Me3-io', icon: IconGithub },
            { name: 'Youtube', url: 'https://www.youtube.com/@Me3Labs', icon: IconYoutube },
            { name: 'Email', url: 'mailto:info@me3.io', icon: IconMail }
        ]
    }
];

import IconTwitter from '../../components/Icons/IconTwitter';
import IconTelegram from '../../components/Icons/IconTelegram';
import IconDiscord from '../../components/Icons/IconDiscord';
import IconHelp from '../../components/Icons/IconHelp';
import IconGithub from '../../components/Icons/IconGithub';
import IconYoutube from '../../components/Icons/IconYoutube';
import IconMail from '../../components/Icons/IconMail';

export const MENU_DATA = [
    { name: 'Home', link: '#hero' },
    { name: 'Gacha Galaxy', link: '#GachaGalaxy' },
    { name: 'Partner With Us', link: '#PartnerWithUs' },
    { name: 'Latest News', link: '#LatestNews' },
    { name: 'Investors & Partners', link: '#InvestorsAndPartners' },
    { name: 'Help Center', link: '#HelpCenter' },
    {
        name: 'Socials & Communities',
        link: '#',
        social_links: [
            { name: 'Twitter/X', url: 'https://twitter.com/example', icon: IconTwitter },
            { name: 'Telegram', url: 'https://telegram.org/example', icon: IconTelegram },
            { name: 'Discord', url: 'https://discord.gg/example', icon: IconDiscord },
            { name: 'Help Center', url: 'https://helpcenter.example', icon: IconHelp },
            { name: 'Github', url: 'https://github.com/example', icon: IconGithub },
            { name: 'Youtube', url: 'https://youtube.com/example', icon: IconYoutube },
            { name: 'Email', url: 'mailto:example@example.com', icon: IconMail }
        ]
    }
];

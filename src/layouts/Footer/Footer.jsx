import './Footer.scss'
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import Icon from "../../components/Icon";

const Footer = () => {

    const socialLinks = [
        {
            label: "Twitter",
            iconName: "twitter",
        },
        {
            label: "Facebook",
            iconName: "facebook",
        },
        { label: "Instagram",
          iconName: "instagram",
        },
        {
            label: "Github",
            iconName: "github",
        },
    ]

    const menuItems = [
        {
            title: 'Quicklinks',
            links: [
                'Home',
                'Pricing Plan',
                'Service',
                'Blog',
                'Our Team',
            ]
        },
        {
            title: 'Support',
            links: [
                'About us',
                'Contact us',
                'FAQ',
                'Tems & Conditions',
                'Privacy Policy',
            ]
        },
        {
            title: 'Need Help?',
            links: [
                {
                    label: 'Tanjung Sari Street no.48, Pontianak City',
                    icon: 'location',
                },
                {
                    label: 'Support@VRNas.com',
                    icon: 'email',
                },
                {
                    label: '+123 456 7890',
                    icon: 'phone',
                },
            ],
        },
    ]


    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__body">
                    <div className="footer__media">
                        <Logo className="footer__logo"/>
                        {socialLinks?.length > 0 && (
                            <Socials
                                className="footer__soc1als"
                                links={socialLinks}
                            />
                        )}
                    </div>
                    <nav className="footer__menu">
                            {menuItems.map(({title, links}, index) => (
                                <div className='footer__menu-column' key={index}>
                                    <a className="footer__menu-title h6" href="/">
                                        {title}
                                    </a>
                                    <ul className="footer__menu-list">
                                        {links?.map((link, index) => {
                                            const isObject = typeof link === 'object'

                                                const label = isObject ? link.label : link
                                                const icon = isObject ? link.icon : null
                                                return (
                                                    <li className='footer__menu-item' key={index}>
                                                        {icon &&
                                                        <Icon name={icon} />}
                                                        <a href="/" className='footer__menu-link'>
                                                            {label}
                                                        </a>
                                                    </li>
                                                    )
                                    })}
                                    </ul>
                                </div>
                            ))}
                    </nav>
                </div>
                <div className="footer__extra">
                    <p className="footer__copyright">
                        © Copyright 2023, All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
import Button from "../../components/Button";
import './Header.scss';
import classNames from "classnames";
import Logo from "../../components/Logo";
import DropDown from "../../components/DropDown";
import BurgerButton from "../../components/BurgerButton";
const Header = (props) => {

    const {
        url,
        isFixed,
        extraAttrs
    } = props

    const menuItems = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'About Us',
            href: '/about us',
        },
        {
            title: 'Service',
            href: '/service',
        },
        {
            title: 'Page',
            href: '/page',
            items: [
                { title: 'Pricing Plan', href: '/pricing-plan' },
                { title: 'FAQ', href: '/faq' },
                { title: 'Terms & Conditions', href: '/terms' },
                { title: 'Privacy Policy', href: '/privacy-policy' },
            ],
            isIcon: true,
        },
        {
            title: 'Blog',
            href: '/blog',
            items: [
                { title: 'Recent articles', href: '/recent-articles' },
                { title: 'Our Team', href: '/our-team' },
                { title: 'Detail Service', href: '/detail-service' },
            ],
            isIcon: true
        },
    ]

    return (
        <header
            className={classNames('header', {
                'is-fixed': isFixed
            })}
            data-js-header=''
        >
            <div
                className='header__inner container'
            >
                <Logo
                    className='header__logo'
                />
                <div
                    className='header__overlay-menu '
                    data-js-header-overlay-menu=''
                >
                    <nav
                        className='header__menu'
                    >
                        <ul className='header__menu-list'>
                            {menuItems.map(({title, href, items, isIcon}, index) => (
                                <li
                                    className='header__menu-item'
                                    key={index}
                                    data-js-header-menu-item=''
                                >
                                    <a
                                        className={classNames('header__menu-link', {
                                            'is-active': url === href
                                        })}
                                        href={href}
                                    >
                                        {title}

                                    </a>
                                    {isIcon && (
                                        <Button
                                            className='header__button-dropdown'
                                            iconName='arrow-down'
                                            label='open dropdown'
                                            isLabelHidden
                                            mode='transparent'
                                            extraAttrs={{
                                            'data-js-header-button-dropdown': ''
                                            }}
                                        />
                                    )}
                                    {items?.length > 0 && (
                                        <DropDown
                                            items={items}
                                            extraAttrs={{
                                                'data-js-header-dropdown': ''
                                            }}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Button
                        className='header__button--mobile-s visible-mobile-s'
                        label='Contact us'
                        mode='dropdown'
                    />
                </div>
                <div className='header__actions'>
                    <Button
                        className='header__button--mobile-s hidden-mobile-s'
                        label='Contact us'
                    />
                    <BurgerButton
                        className='header__burger-button visible-mobile'
                        mode='dropdown'
                        extraAttrs={{
                            'data-js-burger-button': '',
                        }}
                    />
                </div>
            </div>
        </header>
    )
}
export default Header
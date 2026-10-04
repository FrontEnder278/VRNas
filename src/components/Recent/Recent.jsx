import './Recent.scss'
import {Image} from "minista";
import Icon from "@/components/Icon";

const Recent = (props) => {

    const {
        title,
        className,
    } = props

    const recentItems = [
        {
            imgSrc: '/src/assets/images/recent/1.jpg',
            title: 'The Future of Education: How VR is Revolutionizing the Classroom',
            subtitle: 'VR Education',
        },
        {
            imgSrc: '/src/assets/images/recent/2.jpg',
            title: 'Bringing Designs to Life: How VR is Changing Architecture',
            subtitle: 'VR Architecture',
        },
        {
            imgSrc: '/src/assets/images/recent/3.jpg',
            title: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
            subtitle: 'VR Entertainment ',
        },
        {
            imgSrc: '/src/assets/images/recent/1.jpg',
            title: 'Exploring New Worlds: The Benefits of VR Travel',
            subtitle: 'VR Event',
        },
        {
            imgSrc: '/src/assets/images/recent/1.jpg',
            title: 'The Future of Education: How VR is Revolutionizing the Classroom',
            subtitle: 'VR Education',
        },
        {
            imgSrc: '/src/assets/images/recent/2.jpg',
            title: 'Bringing Designs to Life: How VR is Changing Architecture',
            subtitle: 'VR Architecture',
        },
        {
            imgSrc: '/src/assets/images/recent/3.jpg',
            title: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
            subtitle: 'VR Entertainment ',
        },
        {
            imgSrc: '/src/assets/images/recent/1.jpg',
            title: 'Exploring New Worlds: The Benefits of VR Travel',
            subtitle: 'VR Event',
        },
    ]

    return (
        <article className="recent">
            <div
                className="recent__inner"
                data-js-content=''
            >
                <h3 className="recent__title">{title}</h3>
                <ul className="recent__list">
                    {recentItems.map(({imgSrc, title, subtitle}, index) => (
                        <li className='recent__item' key={index}>
                            <Image className='recent__image' src={imgSrc}/>
                                <div className="recent__info">
                                    <span className="recent__subtitle">
                                    {subtitle}
                                </span>
                                    <h3 className="recent__description">
                                        {title}
                                    </h3>
                                </div>
                            <a className="recent__link" href="/">
                                <div className="recent__icon">
                                    <Icon className='arrow-right' name="arrow-right"/>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
            <div
                className='recent__scrollbar'
                data-js-scrollbar=''
            >
                <div
                    className='recent__thumb'
                    data-js-thumb=''
                >
                </div>
            </div>
        </article>
    )
}
export default Recent
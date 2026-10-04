import './ServiceCard.scss'
import classNames from "classnames";
import {Image} from "minista";
import Button from "@/components/Button";


const ServiceCard = (props) => {

    const {
        className,
    } = props


    const menuItems = [
        {
            icon: '/src/assets/images/service/service-1.svg',
            title: 'VR Development',
            description: 'From concept to creation, our team of VR developers will bring your vision to life.',
        },
        {
            icon: '/src/assets/images/service/service-2.svg',
            title: 'VR Design',
            description: 'Our talented VR designers will create immersive and engaging environments that will captivate your audience.',
        },
        {
            icon: '/src/assets/images/service/service-3.svg',
            title: 'VR Consulting',
            description: 'Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.',
        },
        {
            icon: '/src/assets/images/service/service-4.svg',
            title: 'VR Games',
            description: 'We offer a wide selection of VR games that are suitable for players of all ages and skill levels.',
        },
        {
            icon: '/src/assets/images/service/service-5.svg',
            title: 'VR Events',
            description: 'Make your next event unforgettable with our VR event services.',
        },
        {
            icon: '/src/assets/images/service/service-6.svg',
            title: 'VR Entertainment',
            description: 'Create a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.',
        },
    ]

    return (
        <div className={classNames(className, 'service-card')}>
            <ul className="service-card__list">
                {menuItems.map(({icon, title, description}, index) => (
                    <li className='service-card__item' key={index}>
                        <div className='service-card__body'>
                       <Image src={icon}/>
                                <div className="service-card__text">
                                    <h3 className="service-card__title h6">
                                        {title}
                                    </h3>
                                    <div className="service-card__description">
                                        <p>{description}</p>
                                    </div>
                                </div>
                        </div>
                        <div className="service-card__action">
                            <Button
                                className='service-card__button'
                                label='learn more'
                                href='./services'
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ServiceCard;

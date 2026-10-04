import './AdvantagesCard.scss'
import classNames from "classnames";
import {Image} from "minista";


const AdvantagesCard = (props) => {

    const {
        className,
    } = props

    const advantagesItems = [
        {
            title: 'Expertise',
            description: 'Our team consists of experienced VR developers,' +
            ' designers, and technicians who have a passion for VR and a commitment' +
            ' to delivering quality work and give the best service',
            icon: '/src/assets/images/advantages-card/expertice.svg',
        },
        {
            title: 'Customization',
            description: 'Every client is unique, and we believe every VR experience should' +
            ' be too. We\'ll work with you to create a customized solution that meets your' +
            ' specific needs and goals',
            icon: '/src/assets/images/advantages-card/customization.svg',
        },
        {
            title: 'Service',
            description: 'We believe in providing exceptional customer service, from initial' +
            ' consultation to final delivery. Our goal is to ensure you\'re satisfied with every' +
            ' aspect of your VR experience.',
            icon: '/src/assets/images/advantages-card/service.svg',
        }
    ]

    return (
        <div className={classNames(className, 'advantages-card')}>
            <ul className="advantages-card__list">
                {advantagesItems.map(({title, description, icon}, index) => (
                    <li
                        className='advantages-card__item'
                        key={index}>
                       <Image src={icon}/>
                        <div className="advantages-card__item-wrapper">
                        <h3 className="advantages-card__title h6">
                            {title}
                        </h3>
                        <div className="advantages-card__description">
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default AdvantagesCard
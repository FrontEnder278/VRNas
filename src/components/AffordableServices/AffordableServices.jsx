import './AffordableServices.scss'
import classNames from "classnames";
import mainImage from '@/assets/images/affordable/main.png'
import menuItems from "../../sections/Affordable/affordableitem.js";
import Icon from "@/components/Icon";
import Button from "@/components/Button";


const AffordableServices = (props) => {

    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'affordable-services')}
        >
            <div className="affordable-services__wrapper">
            <div className="affordable-services__inner">
                <ul className="affordable-services__list">
                    {menuItems.map(({icon, title, description}, index) => (
                        <li
                            className='affordable-services__item'
                            key={index}
                        >
                            <Icon className='affordable-services__icon' name={icon}/>
                            <div className="affordable-services__text">
                                <h3 className="affordable-services__title h6">
                                    {title}
                                </h3>
                                <div className="affordable-services__description">
                                    <p>{description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                    <span className='affordable-services__line'></span>
                </ul>

                <div className="affordable-services__media">
                    <img
                        className="affordable-services__images"
                        src={mainImage}
                        alt=""
                    />
                </div>
            </div>

            <div className="affordable-services__plan">
                <div className="affordable-services__price">
                    <p className='affordable-services__price-text'>Start from</p>
                    <span>$99</span>
                </div>
                <Button
                    className="affordable-services__button"
                    label='get started'
                    mode='gradient'
                />
                <div className="affordable-services__extra">
                    <p>30 Days Moneyback Guarantee</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default AffordableServices;

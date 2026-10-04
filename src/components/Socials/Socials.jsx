import "./Socials.scss";
import classNames from "classnames";
import Button from "../Button/index.js";

const Socials = (props) => {

    const {
        className,
        links = [],
    } = props

    return (
        <div className={classNames(className, 'soc1als')}>
            <ul className="soc1als__list">
                {links.map(({label, iconName}, index) => (
                    <li
                        className='soc1als__item'
                        key={index}>
                        <Button
                            className='soc1als__button'
                            label={label}
                            isLabelHidden
                            mode='soc1al'
                            href='/'
                            target='_blank'
                            hasFillIcon
                            iconName={iconName}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Socials;
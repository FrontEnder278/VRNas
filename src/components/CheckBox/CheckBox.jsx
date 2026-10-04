import './CheckBox.scss'
import classNames from "classnames";
import checkboxItems from "../../sections/AboutUs/checkbox.js";

const CheckBox = (props) => {

    const {
        className
    } = props

    return (
        <div className={classNames(className, 'checkbox')}>
            <ul className="checkbox__list">
                {checkboxItems.map((item, index) => (
                    <li
                        className="checkbox__item"
                        key={index}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CheckBox
import './DropDown.scss'
import classNames from "classnames";

const DropDown = (props) => {

    const {
      className,
      items,
        extraAttrs
    } = props

    return (
        <div
            className={classNames(className, 'dropdown')}
            {...extraAttrs}

        >
                <ul
                    className='dropdown__list'
                >
                    {items.map(({title, href}, index) => (
                        <li
                            className='dropdown__item'
                            key={index}
                        >
                            <a
                                className='dropdown__link'
                                href={href}
                            >
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
        </div>
    )
}
export default DropDown
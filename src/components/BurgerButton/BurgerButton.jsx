import './BurgerButton.scss'
import classNames from "classnames";

const BurgerButton = (props) => {
    const {
        className,
        extraAttrs
    } = props

    const title = 'Open menu'

    return (
        <button
            className={classNames(className, 'burger-button')}
            type='button'
            aria-label={title}
            title={title}
            {...extraAttrs}
        >
            <div className='burger-button__wrapper'>
                <span className='burger-button__line'></span>
                <span className='burger-button__line'></span>
                <span className='burger-button__line'></span>
            </div>

        </button>
    )
}
export default BurgerButton
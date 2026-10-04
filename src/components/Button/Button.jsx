import './Button.scss'
import classNames from "classnames";
import Icon from '@/components/Icon'
const Button = (props) => {

    const {
        className,
        label,
        target, // если кнопка сделана ссылкой - как именно открывать страницу
        href,
        type='button',
        mode = '',
        isLabelHidden = false, // если будет передан компоненту при его
        // использовании то текст скроется
        iconName,
        extraAttrs,
        hasFillIcon, // заливка кнопки
        iconPosition = 'before',
        iconMode,
        as,
    } = props

    const isLink = href !== undefined // true если ссылка
    const Component = as || (isLink ? 'a' : 'button') // кнопка или ссылка
    const LinkProps = { href, target }
    const buttonProps = { type }
    const specificProps = isLink ? LinkProps : buttonProps
    const title = isLabelHidden ? label : undefined
    const iconComponent = iconName && (
       <Icon
           className='button__icon'
           name={iconName}
           hasFill={hasFillIcon}
           mode={iconMode}
       />
    )

    return (
        <Component
            className={classNames(className, 'button', {
                [`button--${mode}`]: mode,
            })}
            {...specificProps}
            aria-label={title}
            title={title}
            {...extraAttrs}
        >
            {iconPosition === 'before' && iconComponent}
            {!isLabelHidden && (
                <span className='button__label'>{label}</span>
            )}
            {iconPosition === 'after' && iconComponent}
        </Component>
    )
}
export default Button
import './Icon.scss'
import classNames from "classnames";
import { Icon as Ministaicon } from 'minista' // испортируем из
// minista готовый компонет Icon и переименовываем его в Ministaicon
// чтобы избежать конфликтов со своим компонетом Icon

const Icon = (props) => {
    const {
        name, // имя иконки
        hasFill = false, // определяет заливку
        className,
        mode,
    } = props

    return (
        <span
            className={classNames(className, 'icon', {
                [`icon--${mode}`]: mode,
            })}
        >
        <Ministaicon
            iconId={name} // поиск через id нашей иконки по ее имени
            fill={hasFill ? 'currentColor' : 'none'}
            stroke={hasFill ? 'none' : 'currentColor'}
        />
        </span>
    )
}
export default Icon
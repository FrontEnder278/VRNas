import './Tooltip.scss'
import {Image} from "minista";
import classNames from "classnames";

const Tooltip = (props) => {

    const {
        src,
        description,
        author,
        className,
        mode,
    } = props

    return (
        <div
            className={classNames(className, 'tooltip')}
            data-js-tooltip=''
        >
            <div
                className={classNames( 'tooltip__inner', {
                [`tooltip__inner--${mode}`]: mode})}
                data-js-tooltip-inner=''
            >
            <div
                className="tooltip__icon"
                data-js-tooltip-icon=''
            >
                <Image src={src}/>
            </div>
            <div
                className="tooltip__card"
                data-js-tooltip-card=''
            >
                <div className="tooltip__card-info">
                    <div className="tooltip__card-description">
                        <p>{description}</p>
                    </div>
                    <div className="tooltip__card-author">
                        <span>{author}</span> - CEO Anono
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Tooltip
import './Rings.scss'
import classNames from "classnames";

const Rings = (props) => {

    const {
        className,
        mode=''
    } = props

    return (
        <div className={classNames(className, 'rings', {
            [`rings--${mode}`]: mode,
        })}>
                <div className="ring ring__1"></div>
                <div className="ring ring__2"></div>
                <div className="ring ring__3"></div>
                <div className="ring ring__4"></div>
                <div className="ring ring__5"></div>
                <div className="ring ring__6"></div>
        </div>
    )
}
export default Rings;
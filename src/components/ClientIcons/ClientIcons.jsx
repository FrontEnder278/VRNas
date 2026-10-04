import './ClientIcons.scss'
import classNames from "classnames";
import { Image } from "minista"

const ClientIcons = (props) => {

    const {
        className,
        images=[]
    } = props

    return (
        <div className={classNames(className, 'client-icons')}>
            <div className="client-icons__header">


                {images.map((image, index) => (
                    <Image className='client-icons__image' key={index} src={image}/>
                ))}

            </div>
            <div className="client-icons__body">
                <span className="client-icons__number">32k+</span>
                <p className='client-icons__text'>Happy Client</p>
            </div>
        </div>
    )
}

export default ClientIcons
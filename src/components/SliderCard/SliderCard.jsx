import './SliderCard.scss'
import {Image} from "minista";


const SliderCard = ({ title, subtitle, imgSrc }) => {
    return (
        <article className="slider-card">
            <div className="slider-card__inner">
                <div className="slider-card__media">
                 <Image className='slider-card__image' src={imgSrc} alt={title}/>
                  <div className="slider-card__description">
                    <span className="slider-card__subtitle">
                    {subtitle}
                </span>
                <h3 className="slider-card__title h5">
                  {title}
                </h3>
                   </div>
                </div>
            </div>
        </article>
    )
}
export default SliderCard
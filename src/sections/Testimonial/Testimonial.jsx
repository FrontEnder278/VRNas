import './Testimonial.scss'
import Section from "@/components/Section";
import {Image} from "minista";
import Rings from "@/components/Rings";
import tooltipItems from "@/sections/Testimonial/tooltipItems";
import Tooltip from "@/components/Tooltip";

const Testimonial = () => {
    return (
        <Section
            className="testimonial"
            tilteId='testimonial-title'
            title='What Our Clients Are Saying'
            subtitle='testimonial'
        >
            <div className="testimonial__wrapper">
                <Rings className='testimonial__rings'/>
                <div className="testimonial__image-wrapper">
                    <Image className='testimonial__image' src='/src/assets/images/testimonial.png'/>
                </div>
                {tooltipItems.map((tooltipItem, index) => (
                    <Tooltip
                        className="testimonial__tooltip"
                        key={index}
                        {...tooltipItem}
                    />
                ))}
            </div>
        </Section>
    )
}
export default Testimonial

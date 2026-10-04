import './Insights.scss'
import Section from "@/components/Section";
import Button from "@/components/Button";
import SliderCard from "@/components/SliderCard";
import Slider from "@/components/Slider";
import Recent from "@/components/Recent";

const Insights = () => {

        const sliderItems = [
            {
                title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
                subtitle: 'VR Games',
                imgSrc: '/src/assets/images/slider/1.jpg',
            },
            {
                title: 'The Future of Education: How VR is Revolutinizing the Classroom',
                subtitle: 'VR Architecture',
                imgSrc: '/src/assets/images/slider/2.jpg',
            },
            {
                title: 'VR in Education: How Virtual Reality Transforms the Learning Process',
                subtitle: 'VR Education',
                imgSrc: '/src/assets/images/slider/3.jpg',
            },
            {
                title: 'Bringing Designs to Life: How VR is Changing Architecture',
                subtitle: 'VR Entertainment',
                imgSrc: '/src/assets/images/slider/4.jpg',
            },
        ]

    return (
    <Section
        className='insights'
        subtitle='our articles'
        title='Stay Up-to-Date with Our VR Insights'
        titileId='insights-title'
        isContainer
        actions={
            <Button
                className='insights__button'
                label='see all'
            />
        }
    >
        <Slider
            title='Popular Article'
        >
            {sliderItems.map((item, index) => (
                <li className='slider__item swiper-slide' key={index}>
                    <SliderCard {...item} />
                </li>
            ))}
        </Slider>
        <Recent
            title='Recent Article'
        />

    </Section>
    )
}
export default Insights
import './AboutUs.scss'
import Section from "@/components/Section";
import Button from "@/components/Button";
import Checkbox from "@/components/CheckBox";
import AboutUsImage from "@/assets/images/about-us/Image.png";
import HeroVideoPlayer from "@/components/HeroVideoPlayer";
import videoPlayer from "../../components/HeroVideoPlayer/videoPlayer.js";

const AboutUs = (props) => {

    const {
        className,
    } = props

    return (
        <Section
            className='about-us'
            TitleLevel='h2'
            titleId='about-us-title'
            subtitle='about Us'
            title='Bring your events to life like never before with our VR services.'
            description='VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.'
            isContainer
            actions={
            <>
               <Checkbox/>
                <Button
                    className='about-us__button'
                    label='read more'
                    mode='gradient'
                />
            </>
            }
        >
                <img
                    className='about-us__image'
                    src={AboutUsImage}
                    loading='lazy'
                />
                <HeroVideoPlayer className='about-us__video-player' {...videoPlayer.about} />
        </Section>
    )
}
export default AboutUs;
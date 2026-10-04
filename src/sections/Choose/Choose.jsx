import './Choose.scss'
import Section from "../../components/Section/index.jsx";
import Accordion from "../../components/Accordion/Accordion.jsx";
import HeroVideoPlayer from "@/components/HeroVideoPlayer";
import videoPlayer from "../../components/HeroVideoPlayer/videoPlayer.js";
import {Image} from "minista";

const Choose = (props) => {

    const {
        isContainer,
    } = props

    const chooseItems = [
        {
            title: 'Passionate and Experienced Team',
            body: 'We are proud of our team of VR experts who are passionate' +
            ' about VR and dedicated to delivering the highest quality work. Our' +
            ' team consists of experienced VR developers, designers, and technicians' +
            ' who have a proven track record of creating immersive and engaging VR experiences.',
            isOpen: true,
            ariaDetails: 'choose-1',
        },
        {
            title: 'Customized Solutions',
            body: 'We are proud of our team of VR experts who are passionate' +
            ' about VR and dedicated to delivering the highest quality work. Our' +
            ' team consists of experienced VR developers, designers, and technicians' +
            ' who have a proven track record of creating immersive and engaging VR experiences.',
            ariaDetails: 'choose-2',
        },
        {
            title: 'Exceptional Customer Service',
            body: 'We are proud of our team of VR experts who are passionate' +
            ' about VR and dedicated to delivering the highest quality work. Our' +
            ' team consists of experienced VR developers, designers, and technicians' +
            ' who have a proven track record of creating immersive and engaging VR experiences.',
            ariaDetails: 'choose-3',
        },
    ]

    return (
        <Section
            className="choose"
            title='Why Choose Us for Your VR Needs'
            subtitle='why choose us'
            titleId='choose-title'
            isContainer
            actions={
               chooseItems.map(({title, body, isOpen, ariaDetails}, index) => (
                   <Accordion
                       key={index}
                       title={title}
                       body={body}
                       isOpen={isOpen}
                       ariaDetails={ariaDetails}
                   />
               ))
            }
        >

            <Image className='choose__image' src='/src/assets/images/choose-main.png'/>
            <HeroVideoPlayer className='choo' {...videoPlayer.choose}/>
        </Section>
    )
}
export default Choose

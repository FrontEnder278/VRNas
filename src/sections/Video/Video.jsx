import './Video.scss'
import Section from "@/components/Section/Section.jsx";
import VideoPlayer from "@/components/VideoPlayer";
import posterImageDesktop from '@/assets/images/posters/poster-1.jpg'
import heroVideo from '@/assets/videos/hero.mp4'
import posterImageMobile from '@/assets/images/posters/poster-1-mobile.jpg'

const Video = (props) => {

    const {
        isContainer,
    } = props

    const isPoster =  typeof window !== 'undefined' && window.innerWidth <= 767
        ? posterImageMobile
        : posterImageDesktop

    const videoPlayerContent =
        {
          subtitle: 'VR Service',
          title: 'How to get started',
          poster: isPoster,
          src: heroVideo,
        }


    return (
        <Section
            className='video'
            title='Bringing Your Virtual Reality Dreams to Life'
            subtitle='how to get started'
            titleId='video-title'
            isContainer
        >
            <VideoPlayer {...videoPlayerContent} />

        </Section>
    )
}
export default Video
import './Hero.scss';
import Section from "@/components/Section";
import Button from "@/components/Button";
import ClientIcons from "@/components/ClientIcons";
import heroImage from '@/assets/images/hero.png';
import clientimages from "@/sections/Hero/clientimages";
import HeroVideoPlayer from "@/components/HeroVideoPlayer";
import AdvantagesCard from "@/components/AdvantagesCard";
import videoPlayer from "@/components/HeroVideoPlayer/videoPlayer";

const Hero = () => {
    return (
        <Section
            className='hero'
            title='Immerse Yourself in Virtual Reality'
            TitleLevel='h1'
            titleId='hero-title'
            description='Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services'
            isContainer
            actions={

                    <Button
                        className='hero__button'
                        label='discover more'
                        mode='gradient'
                    />
            }

            media={
                <div className="hero__media">

                    <div className="hero__clients">
                        {clientimages.map((clientimage) => (
                            <ClientIcons {...clientimage} key={clientimage.id}/>
                        ))}
                    </div>

                    <div className="hero__video">
                        <HeroVideoPlayer {...videoPlayer.hero}/>
                    </div>

                </div>
            }

            image={
                    <img
                        src={heroImage}
                        alt=""
                        loading="lazy"
                    />
            }
        >
            <div className="hero__body">
                <AdvantagesCard/>
            </div>
        </Section>
    );
};

export default Hero;
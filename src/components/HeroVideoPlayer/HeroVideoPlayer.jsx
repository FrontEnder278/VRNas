import './HeroVideoPlayer.scss'
import Button from "../../components/Button";

const HeroVideoPlayer = (props) => {

    const {
        src,
        poster
    } = props

    return (
        <div className='hero-video-player' data-js-small-video-player=''>
            <div className="hero-video-player__media">
                <video
                    src={src}
                    className="hero-video-player__video"
                    poster={poster}
                    width={200}
                    height={130}
                    data-js-small-video-player-video=''
                 >
                </video>
                <Button
                    className='hero-video-player__button'
                    mode='transparent'
                    iconName='hero-play-button'
                    isLabelHidden
                    hasFillIcon
                    iconMode='hero-play'
                    extraAttrs={{
                    'data-js-small-video-player-button': ''
                    }}
                />
            </div>
        </div>
    )
}
export default HeroVideoPlayer
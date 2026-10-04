import './VideoPlayer.scss'
import classNames from "classnames";
import Button from "@/components/Button";


const VideoPlayer = (props) => {

    const {
        className,
        subtitle,
        title,
        poster,
        src,
    } = props

    return (
        <div
            className={classNames(className, 'video-player')}
            data-js-video-player=''
        >
            <div className="video-player__inner">
                <video
                    className="video-player__video"
                    src={src}
                    poster={poster}
                    data-js-video-player-video=''
                >
                </video>
                <div
                    className="video-player__media"
                    data-js-video-player-media=''
                >
                    <div className="video-player__text">
                        <span className="video-player__subtitle">{subtitle}</span>
                        <h3 className="video-player__title h4">{title}</h3>
                    </div>
                    <Button
                        className='video-player__button'
                        iconName='PlayButton'
                        isLabelHidden
                        label='Play'
                        hasFillIcon
                        iconMode='video-play'
                        extraAttrs={{
                            'data-js-video-player-button': '',
                        }}
                    />
                    <div
                        className="video-player__panel"
                        data-js-video-player-panel=''
                    >
                        <span className='video-player__panel-progress-bar'></span>
                    </div>
                </div>

            </div>
            <div className="video-player__actions">
                <Button
                    label='get started'
                    mode='gradient'
                />
            </div>
        </div>
    )

}
export default VideoPlayer;
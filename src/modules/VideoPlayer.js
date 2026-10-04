const rootSelector = '[data-js-video-player]'

class VideoPlayer {

     selectors = {
        video: '[data-js-video-player-video]',
        media: '[data-js-video-player-media]',
        button: '[data-js-video-player-button]',
    }

    stateClasses = {
         isActive: 'is-active',
    }

    constructor(rootElement) {
         this.rootElement = rootElement;
         this.videoElement = this.rootElement.querySelector(this.selectors.video);
         this.mediaElement = this.rootElement.querySelector(this.selectors.media);
         this.buttonElement = this.rootElement.querySelector(this.selectors.button);
         this.bindEvents()
    }

    onPlayVideo = () => {
        this.videoElement.play();
        this.videoElement.controls = true
        this.videoElement.classList.toggle('is-active', this.stateClasses.isActive)
        this.mediaElement.classList.add('is-active', this.stateClasses.isActive);
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.onPlayVideo)
    }
}

class VideoPlayerCollection {
    constructor () {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach(element => {
            new VideoPlayer(element)
        })
    }
}
export default VideoPlayerCollection
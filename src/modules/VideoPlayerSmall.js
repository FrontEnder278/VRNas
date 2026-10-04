const rootSelector = '[data-js-small-video-player]'

class VideoPlayerSmall {

    selectors = {
        video: '[data-js-small-video-player-video]',
        button: '[data-js-small-video-player-button]',
    }

    stateClasses = {
        isActive: 'is-active'
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.videoElement = this.rootElement.querySelector(this.selectors.video);
        this.buttonElement = this.rootElement.querySelector(this.selectors.button);
        this.bindEvents()
    }

    onPlayVideo = () => {
        this.videoElement.play();
        this.videoElement.controls = true;
        this.videoElement.classList.toggle('is-active', this.stateClasses.isActive);
        this.buttonElement.classList.add(this.stateClasses.isActive);
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.onPlayVideo)
    }

}

class VideoPlayerSmallCollection {

    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach(element => {
            new VideoPlayerSmall(element)
        })
    }
}

export default VideoPlayerSmallCollection;
import 'swiper/css';
import 'swiper/css/pagination';
import getParams from '@/utils/getParams';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const rootSelector = '[data-js-slider]';

class Slider {

    selectors = {
        root: rootSelector,
        swiper: '[data-js-slider-swiper]',
        pagination: '[data-js-slider-pagination]',
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.swiperElement = this.rootElement.querySelector(this.selectors.swiper);
        this.paginationElement = this.rootElement.querySelector(this.selectors.pagination);
        this.params = getParams(
            this.rootElement,
            this.selectors.root,
        );
        this.init()
    }

    init() {
        new Swiper(this.swiperElement, {
            ...this.params,
            modules: [Pagination, Autoplay],
            pagination: {
                el: this.paginationElement,
                type: 'bullets',
                clickable: true,
                bulletClass: 'slider__pagination-bullet',
                bulletActiveClass: 'is-active',
            }
        })
    }
}

class SliderCollection {

    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Slider(element)
        })
    }
}
export default SliderCollection
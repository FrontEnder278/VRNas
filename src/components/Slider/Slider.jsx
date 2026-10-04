import 'swiper/scss'
import './Slider.scss'

const Slider = (props) => {

    const {
        children,
        title,
    } = props

    const defaultSliderParams = {
        slidesPerView: 1, // сколько слайдов видно за раз
        slidesPerGroup: 1, // сколько слайдов будет переключено за раз

        loop: true, // зацикливает слайдер по кругу

        autoplay: {
            delay: 5000, // задержка в мс
            disableOnInteraction: false, // при ручном переключении сохраняет автопрокрутку
        },

        pagination: {
            el: '.slider__pagination', // создать точки пагинации
            clickable: true, // разрешить переключение по ним
        }
    }

    return (
          <div
              className='slider swiper'
              data-js-slider={JSON.stringify(defaultSliderParams)}
          >
              <h3 className="slider__title">{title}</h3>
              <div
                  className='slider__wrapper slider-swiper'
                  data-js-slider-swiper=''
              >
                <ul className="slider__list swiper-wrapper">
                    {children}
                </ul>
                  <div
                      className='slider__pagination'
                      data-js-slider-pagination=''
                  >
                  </div>
              </div>
          </div>
    )
}
export default Slider
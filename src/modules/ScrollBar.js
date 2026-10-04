class ScrollBar {

    selectors = {
        root: '[data-js-content]',
        scrollbar: '[data-js-scrollbar]',
        thumb: '[data-js-thumb]',
    }

    constructor() {
        this.containerElement = document.querySelector(this.selectors.root);
        this.scrollbarElement = document.querySelector(this.selectors.scrollbar)
        this.thumbElement = document.querySelector(this.selectors.thumb)
        this.bindEvents()
        this.onScroll()
    }

    onScroll = () => {
        // Для запуска скролла необходимо знать 3 вещи:
        // 1) доступную высоту для скролла
        // 2) на какое расстояние может двигаться ползунок (диапазон)
        // 3) получение сдвига ползунка в % и перевод в px

        // 1.
        const maxScroll =
            this.containerElement.scrollHeight - this.containerElement.clientHeight;

        // 2.
        const maxMovingThumb =
            this.scrollbarElement.clientHeight - this.thumbElement.clientHeight;

        // 3.
        if (maxScroll === 0 || maxMovingThumb === 0) return;
        const offsetThumbOnScrollbar = this.containerElement.scrollTop / maxScroll * maxMovingThumb;

        this.thumbElement.style.transform = `translateY(${offsetThumbOnScrollbar}px)`;
    }

    // Параметры для перетаскивания
    isDragging = false // перетаскиваем ли сейчас эл-т
    startY = 0 // позиция мыши по оси Y в момент захвата
    startScrollTop = 0 // текущий scrollTop в момент начала перетаскивания


    onDragStart = (event) => {
        event.preventDefault()
        this.isDragging = true
        this.startY = event.clientY // обновляем текущую координату
        this.startScrollTop = this.containerElement.scrollTop // прописываем текущее значение
    }

    onDragMoving = (event) => {
        if (!this.isDragging) return

        const deltaY = event.clientY - this.startY
        // насколько мышь сдвинулась от точки захвата

        const maxDragging = this.scrollbarElement.clientHeight - this.thumbElement.clientHeight
        // аналогично классическому скроллу диапазон перетаскивания

        const maxScroll = this.containerElement.scrollHeight - this.containerElement.clientHeight

        const deltaScroll = deltaY / maxDragging * maxScroll

        this.containerElement.scrollTop = this.startScrollTop + deltaScroll

    }

    onDragEnd = (event) => {
        this.isDragging = false
    }

    bindEvents() {
        this.containerElement.addEventListener('scroll', this.onScroll)
        this.thumbElement.addEventListener('mousedown', this.onDragStart)
        this.thumbElement.addEventListener('dragstart', (event) => event.preventDefault())
        document.addEventListener('mousemove', this.onDragMoving)
        document.addEventListener('mouseup', this.onDragEnd)
    }

}
export default ScrollBar
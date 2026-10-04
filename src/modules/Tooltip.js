const rootSelector = `[data-js-tooltip]`;

class Tooltip {

     selectors = {
        icon: '[data-js-tooltip-icon]',
        card: '[data-js-tooltip-card]',
        inner: '[data-js-tooltip-inner]',
    }

    stateClasses = {
         isActive: 'is-active',
    }

    constructor(rootElement) {
         this.rootElement = rootElement;
         this.iconElement = this.rootElement.querySelector(this.selectors.icon);
         this.cardElement = this.rootElement.querySelector(this.selectors.card);
         this.innerElement = this.rootElement.querySelector(this.selectors.inner);
         this.bindEvents()
    }

    onTooltipActive = () => {
         this.iconElement.classList.toggle(this.stateClasses.isActive);
         this.cardElement.classList.toggle(this.stateClasses.isActive);
         this.innerElement.classList.toggle(this.stateClasses.isActive);
    }

    onTooltipClose = (event) => {
         const isClickIconElement = this.iconElement.contains(event.target);
         const isClickCardElement = this.cardElement.contains(event.target);

         if (!isClickIconElement && !isClickCardElement) {
             this.iconElement.classList.remove(this.stateClasses.isActive);
             this.cardElement.classList.remove(this.stateClasses.isActive);
             this.innerElement.classList.remove(this.stateClasses.isActive);
         }
    }

    bindEvents() {
         this.iconElement.addEventListener('click', this.onTooltipActive)
         document.addEventListener('click', this.onTooltipClose)
    }

}

class TooltipCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Tooltip(element)
        })
    }
}
export default TooltipCollection
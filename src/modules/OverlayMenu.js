class OverlayMenu {

    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay-menu]',
        button: '[data-js-burger-button]',
        dropdownButton: '[data-js-header-button-dropdown]',
        item: '[data-js-header-overlay-menu-item]',
        dropdown: '[data-js-header-dropdown]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.button)
        this.dropdownButtonElements = this.rootElement.querySelectorAll(this.selectors.dropdownButton)
        this.dropdownElements = this.rootElement.querySelectorAll(this.selectors.dropdown)
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    onDropdownButtonClick = (event) => {
        const currentButton = event.currentTarget
        const drop = currentButton.closest('[data-js-header-menu-item]').querySelector('[data-js-header-dropdown]')

        this.dropdownButtonElements.forEach((dropdownButtonElement) => {
            if (dropdownButtonElement !== currentButton) {
                dropdownButtonElement.classList.remove(this.stateClasses.isActive)
            }
        })

        currentButton.classList.toggle(this.stateClasses.isActive)

        this.dropdownElements.forEach((dropdownElement) => {
            if (dropdownElement !== drop) {
                dropdownElement.classList.remove(this.stateClasses.isActive)
            }
        })
        drop.classList.toggle(this.stateClasses.isActive)
    }

    onDropdownClose = (event) => {
        if (!event.target.closest('[data-js-header-menu-item]')) {
            this.dropdownElements.forEach((dropdownElement) => {
                dropdownElement.classList.remove(this.stateClasses.isActive)
            })
        }
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
        this.dropdownButtonElements.forEach(dropdownButtonElement => {
         dropdownButtonElement.addEventListener('click', this.onDropdownButtonClick)
        })
        document.addEventListener('click', this.onDropdownClose)
    }
}
export default OverlayMenu
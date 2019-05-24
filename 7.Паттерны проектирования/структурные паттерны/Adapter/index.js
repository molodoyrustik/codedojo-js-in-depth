//<div class="toggle-button"></div>
class ToggleButton {
  static get adapter() {
    return {
      addClass: (element, className) => {},
      removeClass: (element, className) => {},
      hasClass: (element, className) => {},
      setTextContent: (element, text) => {},
      addEventListener: (element, event, handler) => {},
      removeEventListener: (element, event, handler) => {},
    }
  }
  constructor({ element, onTextContent, offTextContent, adapter }) {
    this.element = element;
    this.onTextContent = onTextContent;
    this.offTextContent = offTextContent;
    this.adapter = Object.assign(ToggleButton.adapter, adapter);
    this.handleClick = () => this.toggle();

    this.init();
  }

  get toggled() {
    return this.adapter.hasClass(this.element, 'click', this.handleClick);
  }

  set toggled(value) {
    this.toggle(value);
  }

  init() {
    return this.adapter.addEventListener(this.element, 'click', this.handleClick);
  }

  destroy() {
    return this.adapter.removeEventListener(this.element, 'click', this.handleClick);
  }

  toggle(isToggled = false) {
    let textContent;

    if (isToggled) {
      textContent = this.onTextContent;
      this.adapter.addClass(this.element, 'toggle-button--toggled');
    } else {
      textContent = this.offTextContent;
      this.adapter.removeClass(this.element, 'toggle-button--toggled');
    }
    this.adapter.setTextContent(this.element, textContent);
  }
}

new ToggleButton({
  element: document.querySelector('.toggle-button'),
  onTextContent: 'Выключить',
  offTextContent: 'Включить',
  adapter: {
    addClass: (element, className) => { element.classList.add(className) },
    removeClass: (element, className) => {  element.classList.remove(className) },
    hasClass: (element, className) => { element.classList.contains(className) },
    setTextContent: (element, text) => { element.textContent = text },
    addEventListener: (element, event, handler) => { element.addEventListener(event, handler) },
    removeEventListener: (element, event, handler) => { element.removeEventListener(event, handler) },
  }
})
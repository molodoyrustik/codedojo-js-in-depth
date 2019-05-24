class FormField {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init() {
    this.element = DOM.createElement('input', props);
  }

  isValid() {
    return this.element.value !== '';
  }
}

class FormFiledDecorator {
  constructor(formField) {
    this.formField = formField;

    this.init();
  }

  init() {
    
  }

  isValid() {
    return this.formField.isValid();
  }
}

class MaxLengthFieldDecorator extends FormFiledDecorator {
  constructor(formField, maxLength = 100) {
    super(formField);
    this.maxLength = maxLength;
  }

  init() {
    this.formField.setAttribute('maxlenght', this.maxLength);
  }
}

let formField = new FormField({
  type: 'search',
  placeholder: 'Enter your search term'
})

formFiled = new MaxLengthFieldDecorator(formField, 255);
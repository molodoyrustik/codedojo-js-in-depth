class Form {

}

class FormBuilder {
  constructor() {
    this.fields = [];
    this.formElement = document.createElement('form');
  }

  addField(options) {
    let field;

    switch(options.type) {
      case 'text':
        field = new TextField(options);
        break;
      case 'email':
        field = new EmailField(options);
        break;
      case 'password':
        field = new PasswordField(options);
        break;
      default:
        throw new Error(`Invalid field type: ${type}`);
    }

    this.fields.push(field);

    return this;
  }

  getForm() {
    for (let field of this.fields) {
      this.formElement.appendChild(field.element);
    }

    return this.formElement;
  }
}

let formBuilder = new FormBuilder();

formBuilder
  .addField({ type: 'text', name:'username' })
  .addField({ type: 'email', name:'email' })
  .addField({ type: 'password', name:'password' });

let form = formBuilder.getForm;

document.body.appendChild(form);
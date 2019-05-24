class View {
  constructor(model, controller) {
      this.model = model;
      this.controller = controller;

      this.initialize();

      model.on('get', this.renderInitialData);
  }

  initialize() {
    this.todoForm = document.getElementById('todo-form');
    this.addInput = document.getElementById('add-input');
    this.todoList = document.getElementById('todo-list');

    this.todoForm.addEventListener('submit', this.handleAddTodoItem.bind(this), false);
  }
  
  renderInitialData = (tasks = []) => {
    this.todoList.innerHTML = '';
    tasks.forEach((task) => {
      const listItem = this.createTodoItem(task.title, task.id, task.completed);
      this.todoList.appendChild(listItem)
    })
  }

  createTodoItem(title, id, completed = false) {
    let checkbox = createElement('input', { type: 'checkbox', className: 'checkbox', checked: completed, onchange: this.toggleTodoItem });
    let label = createElement('label', { className: 'title' }, title);
    let editInput = createElement('input', { type: 'text', className: 'textfield' });
    let editButton = createElement('button', { className: 'edit', onclick: this.editTodoItem }, 'Изменить');
    let deleteButton = createElement('button', { className: 'delete', onclick: this.deleteTodoItem }, 'Удалить');
    let listItem = createElement('li', { className: `todo-item ${completed ? 'completed': ''}`, 'data-id': id }, checkbox, label, editInput, editButton, deleteButton);

    return this.addEventListeners(listItem);;
  }

  findListItem(id) {
    return this.todoList.querySelector(`[data-id="${id}"]`)
  }

  addEventListeners(listItem) {
    const checkbox = listItem.querySelector('.checkbox');
    const editButton = listItem.querySelector('.edit');
    const deleteButton = listItem.querySelector('.delete');

    checkbox.addEventListener('change', this.handleToggleTodoItem.bind(this), false);
    editButton.addEventListener('click', this.handleEditTodoItem.bind(this), false);
    deleteButton.addEventListener('click', this.handleDeleteTodoItem.bind(this), false);

    return listItem;
  }

  handleToggleTodoItem({ target }) {
    // в обработчике не должно быть логики
    const listItem = target.parentNode;
    const id = listItem.getAttribute('data-id');
    const completed  = target.checked;

    listItem.classList.toggle('completed');
    this.update(id, { completed });
  }
  
  handleEditTodoItem({ target }) {
    // в обработчике не должно быть логики
    const listItem = target.parentNode;
    const editButton = listItem.querySelector('.edit');
    const id = listItem.getAttribute('data-id');
    let title = listItem.querySelector('.title');
    let editInput = listItem.querySelector('.textfield');
    let isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.textContent = editInput.value;
        editButton.textContent = 'Изменить';
        this.update(id, { title: editInput.value });
    } else {
        editInput.value = title.textContent;
        editButton.textContent = 'Сохранить';
    }

    listItem.classList.toggle('editing');
  }

  handleDeleteTodoItem({ target }) {
    // в обработчике не должно быть логики
    const listItem = target.parentNode;
    const id = listItem.getAttribute('data-id');

    this.remove(id);
  }

  handleAddTodoItem(e) {
    // в обработчике не должно быть логики
    e.preventDefault();

    let title = this.addInput.value;
    let id = Date.now();

    if (title === '') {
      return alert('Необходимо ввести название задачи.');
    }

    let data = {
      id,
      title,
      completed: false,
    };

    this.add(data);
    this.addInput.value = '';
  }

  add(data) {
    this.controller.add(data);
  }

  update(id, data) {
    this.controller.update(id, data);
  }

  remove(id) {
    this.controller.remove(id);
  }
}
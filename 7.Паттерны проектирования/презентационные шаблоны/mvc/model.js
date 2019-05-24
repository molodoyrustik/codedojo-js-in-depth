class Model {
  constructor(firstname, lastname, dbService) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dbService = dbService;
  }

  update(prop, value) {
    // при обновлении данных можно было использовать Event Emitter
    // для локальной модели
    this[props] = value;
    this.emit('update', value);
    // если есть сервер
    this.dbService.updateData(value)
      .then((err, newData) => {
        if (err) return Error();
        this.emit('update', newData);
      })
  }
}

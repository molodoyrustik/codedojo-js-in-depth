class Model extends EventEmitter {
  constructor(dbService) {
    super();
    this.tasks = [];
    this.dbService = dbService;
    this.message = '';

    this.initialize();
  }

  initialize() {
    this.get();
  }

  add(data, callback) {
    this.dbService.add(data)
      .then((response) => {
        this.message = response.data[0].message;
        callback(this.message);
        this.get();
      });
  }

  get() {
    this.dbService.get()
      .then((response) => {
        this.tasks = response.data[0].payload;
        this.message = response.data[0].message;
        this.emit('get', this.tasks);
      });
  }

  update(id, data, callback) {
    this.dbService.update(id, data)
      .then((response) => {
        this.message = response.data[0].message;
        callback(this.message);
        this.get();
      });
  }

  remove(id, callback) {
    this.dbService.remove(id)
      .then((response) => {
        this.message = response.data[0].message;
        callback(this.message);
        this.get();
      });
  }
}
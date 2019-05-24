const dbService = new DbService('http://localhost:3000/tasks');

const model = new Model(dbService);
const controller = new Controller();
const view = new View(model, controller);

controller.initialize(model, view);
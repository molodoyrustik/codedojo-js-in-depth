const state = load();
const model = new Model(state || undefined);
const controller = new Controller();
const view = new View(model, controller);

controller.initialize(model, view);
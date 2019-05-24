const state = load();
const model = new Model(state || undefined);
const presenter = new Presenter();
const view = new View(presenter);

presenter.initialize(model, view);
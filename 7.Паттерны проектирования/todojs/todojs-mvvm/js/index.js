const state = load();
const model = new Model(state || undefined);
const viewModel = new ViewModel(model);
const view = new View(viewModel);
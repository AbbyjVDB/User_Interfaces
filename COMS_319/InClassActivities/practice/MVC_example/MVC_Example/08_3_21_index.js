// index.js
// Initialize MVC components
const model = new CounterModel();
const view = new CounterView();
const controller = new CounterController(model, view);
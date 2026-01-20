// controller.js
class CounterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindIncrement(this.handleIncrement.bind(this));
        this.view.updateCounter(this.model.getValue());
    }
    handleIncrement() {
        this.model.increment();
        this.view.updateCounter(this.model.getValue());
    }
}
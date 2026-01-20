// view.js
class CounterView {
    constructor() {
        this.counterElement = document.getElementById('counter');
        this.incrementButton = document.getElementById('incrementBtn');
    }
    updateCounter(value) {
        this.counterElement.innerText = value;
    }
    bindIncrement(handler) {
        this.incrementButton.addEventListener('click', handler);
    }
}
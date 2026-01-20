// model.js
class CounterModel {
    constructor() {
        this.value = 0;
    }
    increment() {
        this.value++;
    }
    getValue() {
        return this.value;
    }
}
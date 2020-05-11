<<<<<<< HEAD
<<<<<<< HEAD
const rootReducer = require('./reducer');

console.log(rootReducer);
=======
class Store {

    constructor(state, reducer) {
        this.state = state;
        this.listeners = [];
        this.reducer = reducer;
    }

    getState() {
        return this.state;
    }
    subscribe(listener) {
        this.listeners.push(listener);
        return this.listeners.filter(element => element !== listener);
    };

    dispatch(action) {
        this.state = reducer(this.state, action);
        this.listeners.forEach(element => element());
    };
}


>>>>>>> c3eabfc... added store class
=======
const rootReducer = require('./reducer');

console.log(rootReducer);
>>>>>>> dd5d4c4... moved store class to its own file

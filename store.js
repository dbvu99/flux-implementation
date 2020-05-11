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

const store = new Store(
    { toDos: [], goals: [] },
    {
    }
);


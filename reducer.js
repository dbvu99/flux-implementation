const { ToDosAction, GoalsAction } = require('./actionTypes');

const toDosReducer = (state = [], action) => {
    switch (action.type) {
        case ToDosAction.ADD:
            state.push(action.data);
            return state;
        case ToDosAction.REMOVE:
            return state.filter(e => e.id !== action.data);
        case ToDosAction.TOGGLE:
            for (const e of state) {
                if (e.id === action.data) {
                    e.completed = !e.completed;
                    break;
                }
            }
            return state;
        default:
            return state;
    }
};

const goalsReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const rootReducer = (state = {}, action) => {
    return {
        toDos: toDosReducer(state.toDos, action),
        goals: goalsReducer(state.goals, action)
    };
};

module.exports = rootReducer;
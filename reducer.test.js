const rootReducer = require('./reducer');

test("rootReducer is a function", () => {
    expect(typeof (rootReducer)).toBe("function");
});

test("invalid action can't modify the state", () => {
    const state = { toDos: [] };
    const newState = rootReducer(state, { type: "INVALID_ACTION", toDo: "Finish my homework" });

    expect(newState.toDos).toStrictEqual([]);
    expect(newState.toDos.length).toBe(0);
});


const newTask = { id: 1, task: "finish my homework", completed: false };

test("add action modify the state", () => {
    const state = { toDos: [] };
    const newState = rootReducer(state, { type: "ADD_TODO", data: newTask });

    expect(newState.toDos).toStrictEqual([{ id: 1, task: "finish my homework", completed: false }]);
    expect(newState.toDos.length).toBe(1);
});

test("remove action modify the state", () => {
    const state = { toDos: [newTask] };
    const newState = rootReducer(state, { type: "REMOVE_TODO", data: 1 });

    expect(newState.toDos).toStrictEqual([]);
    expect(newState.toDos.length).toBe(0);
});

test("toggle action modify the state", () => {
    const state = { toDos: [newTask] };
    const newState = rootReducer(state, { type: "TOGGLE_TODO", data: 1 });

    expect(newState.toDos).toStrictEqual([{ id: 1, task: "finish my homework", completed: true }]);
    expect(newState.toDos.length).toBe(1);
});
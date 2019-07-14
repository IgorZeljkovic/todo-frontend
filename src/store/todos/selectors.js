export function todosSelector (state) {
    return state.todos;
}

export function todoByIdSelector (state) {
    return function (id) {
        return state.todos.find(todo => todo.id === parseInt(id));
    }
}
import axios from 'axios';

async function getTodos () {
    try {
        return await axios.get('/todos')
    } catch (e) {

    }
}

async function deleteTodo (id) {
    try {
        return await axios.delete(`/todos/${id}`)
    } catch (e) {

    }
}

async function addTodo (todo) {
    try {
        return await axios.post('/todos', todo)
    } catch (e) {

    }
}

async function editTodo (todo) {
    try {    
        return await axios.put(`todos/${todo.id}`, todo)
    } catch (e) {

    }
}

const todosService = { getTodos, deleteTodo, addTodo, editTodo };
export default todosService;
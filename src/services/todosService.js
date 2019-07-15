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

const todosService = { getTodos, deleteTodo };
export default todosService;
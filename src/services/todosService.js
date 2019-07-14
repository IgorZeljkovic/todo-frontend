import axios from 'axios';

const url = "http://localhost:8000/api/auth/todos";

const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
    }
}

function getTodos (user) {
    return axios.get(url, {
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${user.access_token}`
        }
    })
}

function deleteTodo (user, id) {
    return axios.delete(`${url}/${id}`, {
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${user.access_token}`
        }
    })
}

function addTodo (user, todo) {
    return axios.post(url, todo, {
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${user.access_token}`
        }
    })
}

const todosService = { getTodos, deleteTodo, addTodo };
export default todosService;
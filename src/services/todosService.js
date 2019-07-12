import axios from 'axios';

const url = "http://localhost:8000/api/auth";

const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
    }
}

function getTodos (user) {
    return axios.get(`${url}/todos`, {
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${user.access_token}`
        }
    })
}

function deleteTodo (user, id) {
    return axios.delete(`${url}/todos/${id}`, {
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${user.access_token}`
        }
    })
}

const todosService = { getTodos, deleteTodo };
export default todosService;
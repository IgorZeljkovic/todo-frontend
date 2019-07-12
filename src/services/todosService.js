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

const todosService = { getTodos };
export default todosService;
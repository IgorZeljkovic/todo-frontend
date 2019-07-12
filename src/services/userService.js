import axios from 'axios';

const url = "http://localhost:8000/api/auth";

const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
    }
}

function login (emailPassword) {
    return axios.post(`${url}/login`, emailPassword, options)
}

function logout (user) {
    return axios.post(`${url}/logout`, '', {
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${user.access_token}`
        }
    })
}

function register (user) {
    return axios.post(`${url}/register`, user, options)
}

const userService = { register, logout, login };
export default userService;
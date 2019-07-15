import axios from 'axios';

class AuthService {
    constructor () {
        axios.defaults.baseURL = "http://localhost:8000/api/auth";
        this.setAuthHeader();
    }

    async login (credentials) {
        try {
            const { data } = await axios.post(`/login`, credentials);

            return data;
        } catch (e) {

        }
    }

    async logout () {
        try {
            const { data } = await axios.post(`/logout`, '');

            return data;
        } catch (e) {
            
        }        
    }

    async register (user) {
        try {
            const { data } = await axios.post(`/register`, user);

            return data;
        } catch (e) {

        }
    }

    setAuthHeader () {
        const user = JSON.parse(localStorage.getItem('user'));
        axios.defaults.headers.common['Authorization'] = user ? `Bearer ${user.access_token}` : null;
    }

}

export const authService = new AuthService();
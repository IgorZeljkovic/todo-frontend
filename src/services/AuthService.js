import axios from 'axios';
import { authHeader } from '../helpers/authHeader';

class AuthService {
    constructor () {
        this.url = "http://localhost:8000/api/auth";
    }

    async login (credentials) {
        const { data } = await axios.post(`${this.url}/login`, credentials);

        return data;
    }

    async logout () {
        const { data } = await axios.post(`${this.url}/logout`, '', authHeader());
        
        return data;
    }

    async register (user) {
        const { data } = await axios.post(`${this.url}/register`, user);

        return data;
    }

}

export const authService = new AuthService();
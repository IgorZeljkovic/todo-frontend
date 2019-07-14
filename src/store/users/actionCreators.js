import { SET_USER } from './actionTypes';
import { authService } from '../../services/AuthService';

function setUserState (user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export function setUser (user) {
    return function (dispatch) {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(setUserState(user));
    };
}

export function login (credentials) {
    return async function (dispatch) {
        const user = await authService.login(credentials);
        
        user && dispatch(setUser(user));
    }
}

export function logout () {
    return async function (dispatch) {
        const loggedOut = await authService.logout();

        loggedOut && dispatch(setUser(null));
    }
}

export function register (user) {
    return async function (dispatch) {
        const token = await authService.register(user);
        
        token && dispatch(setUser(token));
    }
}
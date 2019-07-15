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
        authService.setAuthHeader();

        dispatch(setUserState(user));
    };
}

export function login (credentials) {
    return async function (dispatch) {
        try {
            const user = await authService.login(credentials);

            user && dispatch(setUser(user));
        } catch (e) {

        }
    }
}

export function logout () {
    return async function (dispatch) {
        try {
            const loggedOut = await authService.logout();

            loggedOut && dispatch(setUser(null));
        } catch (e) {

        }
    }
}

export function register (user) {
    return async function (dispatch) {
        try {
            const token = await authService.register(user);

            token && dispatch(setUser(token));
        } catch (e) {
            
        }
    }
}
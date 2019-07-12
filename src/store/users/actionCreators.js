import userService from '../../services/userService';
import { SET_USER } from './actionTypes';

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

export function login (emailPassword) {
    return async function (dispatch) {
        const { data : user } = await userService.login(emailPassword);
        user && dispatch(setUser(user));
    }
}

export function logout (user) {
    return async function (dispatch) {
        const { data } = await userService.logout(user);
        console.log(data.message);
        data && dispatch(setUser(null));
    }
}

export function register (user) {
    return async function (dispatch) {
        const { data : token } = await userService.register(user);
        
        token && dispatch(setUser(token));
    }
}
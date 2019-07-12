import todoService from '../../services/todosService';
import { SET_TODOS } from './actionTypes';

function setTodosState (todos) {
    return {
        type: SET_TODOS,
        payload: todos
    }
}

export function getTodos (user) {
    return async function (dispatch) {
        const { data : todos } = await todoService.getTodos(user);
        dispatch(setTodosState(todos));
    }
}
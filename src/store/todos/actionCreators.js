import todoService from '../../services/todosService';
import { SET_TODOS } from './actionTypes';

function setTodosState (todos) {
    return {
        type: SET_TODOS,
        payload: todos
    }
}

export function getTodos () {
    return async function (dispatch) {
        try {
            const { data : todos } = await todoService.getTodos();
        
            dispatch(setTodosState(todos));
        } catch {
            
        }
    }
}
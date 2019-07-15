import todosService from '../../services/todosService';
import { SET_TODOS, DELETE_TODO } from './actionTypes';

function setTodosState (todos) {
    return {
        type: SET_TODOS,
        payload: todos
    }
}

function deleteTodoState (id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export function getTodos () {
    return async function (dispatch) {
        try {
            const { data : todos } = await todosService.getTodos();
        
            dispatch(setTodosState(todos));
        } catch {
            
        }
    }
}

export function deleteTodo (id) {
    return async function (dispatch) {
        try {
            const { data : isDeleted } = await todosService.deleteTodo(id);

            isDeleted && dispatch(deleteTodoState(id));
        } catch (e) {

        }
    }
}
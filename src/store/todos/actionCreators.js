import todosService from '../../services/todosService';
import { SET_TODOS, DELETE_TODO, ADD_TODO } from './actionTypes';

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

function addTodoState (todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function getTodos (user) {
    return async function (dispatch) {
        const { data : todos } = await todosService.getTodos(user);
        dispatch(setTodosState(todos));
    }
}

export function deleteTodo (user, id) {
    return async function (dispatch) {
        const { data : deleted } = await todosService.deleteTodo(user, id);
        deleted && dispatch(deleteTodoState(id));
    }
}

export function addTodo (user, newTodo) {
    return async function (dispatch) {
        const { data : todo } = await todosService.addTodo(user, newTodo);
        todo && dispatch(addTodoState(todo));
    }
}
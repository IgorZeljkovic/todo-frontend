import todosService from '../../services/todosService';
import { SET_TODOS, DELETE_TODO, ADD_TODO, EDIT_TODO } from './actionTypes';

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

function editTodoState (todo) {
    return {
        type: EDIT_TODO,
        payload: todo
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

export function addTodo (newTodo) {
    return async function (dispatch) {
        try {
            const { data : todo } = await todosService.addTodo(newTodo);

            todo && dispatch(addTodoState(todo));
        } catch (e) {

        }
    }
}

export function editTodo (editedTodo) {
    return async function (dispatch) {
        try {
            const { data : todo } = await todosService.editTodo(editedTodo);

            todo && dispatch(editTodoState(todo));
        } catch (e) {

        }
    }
}
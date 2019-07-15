import { SET_TODOS, DELETE_TODO, ADD_TODO, EDIT_TODO } from './actionTypes';

const initialState = [];

export default function todoReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload );
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case EDIT_TODO:
            return state.map(todo => (
                todo.id !== action.payload.id
                ? todo
                : action.payload
            ))
        default:
            return state;
    }
}
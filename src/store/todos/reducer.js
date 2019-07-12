import { SET_TODOS, DELETE_TODO } from './actionTypes';

const initialState = [];

export default function todoReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload );
        default:
            return state;
    }
}
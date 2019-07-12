import { SET_TODOS } from './actionTypes';

const initialState = [];

export default function todoReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;
        default:
            return state;
    }
}
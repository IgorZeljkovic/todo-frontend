import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './users/reducer';
import todoReducer from './todos/reducer';

const reducer = combineReducers ({
    user: userReducer,
    todos: todoReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
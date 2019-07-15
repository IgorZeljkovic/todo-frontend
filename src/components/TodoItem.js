import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { FaRegTrashAlt, FaRegEdit, FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../store/todos/actionCreators';
import { todoByIdSelector } from '../store/todos';

class TodoItem extends Component {

    handleCompleted = () => {
        const id = this.props.todo.id
        const todo = this.props.getTodoById(id);
        
        this.props.edit({
            ...todo,
            is_completed: !todo.is_completed
        });
    }

    render () {
        const { todo } = this.props;

        return (
            <ListGroup.Item variant={ todo.is_completed ? "success" : "light" }>
                <span style={
                    todo.is_completed
                    ? { textDecoration: "line-through" }
                    : {}
                }>
                    { todo.title }
                </span>
                <span style={{ float: "right" }}>
                    <Link 
                        className="todo-item-btn todo-item-done"
                        onClick={ this.handleCompleted }
                        to="#"
                    >
                        {
                            todo.is_completed
                            ? <FaRegTimesCircle />
                            : <FaRegCheckCircle />
                        }
                    </Link>
                    <Link to={`/editTodo/${todo.id}`} className="todo-item-btn">
                        <FaRegEdit />
                    </Link>
                    <Link
                        className="todo-item-btn todo-item-delete"
                        onClick={ () => this.props.delete(todo.id) }
                        to="#"
                    >
                        <FaRegTrashAlt />
                    </Link>
                </span>
            </ListGroup.Item>
        )
    }
}

function matchStateToProps (state) {
    return {
        getTodoById: todoByIdSelector(state)
    }
}

function matchDispatchToProps (dispatch) {
    return {
        delete: (id) => dispatch(deleteTodo(id)),
        edit: (todo) => dispatch(editTodo(todo))
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(TodoItem);
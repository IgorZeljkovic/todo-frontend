import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import { FaRegTrashAlt, FaRegEdit, FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../store/todos/actionCreators';
import { userSelector } from '../store/users';
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
        const { todo, user } = this.props;

        return (
            !todo.is_completed
            ? (
                <ListGroup.Item>
                    { todo.title }
                    <span style={{ float: "right" }}>
                        <Link 
                            className="todo-item-btn todo-item-done"
                            onClick={ this.handleCompleted }
                        >
                            <FaRegCheckCircle />
                        </Link>
                        <Link to={`/editTodo/${todo.id}`} className="todo-item-btn">
                            <FaRegEdit />
                        </Link>
                        <Link
                            className="todo-item-btn todo-item-delete"
                            onClick={ () => this.props.delete(user, todo.id) }
                        >
                            <FaRegTrashAlt />
                        </Link>
                    </span>
                </ListGroup.Item>
            ) : (
                <ListGroup.Item variant="success">
                    <span style={{ textDecoration: "line-through" }}>{ todo.title }</span>
                    <span style={{ float: "right" }}>
                        <Link 
                            className="todo-item-btn todo-item-done"
                            onClick={ this.handleCompleted }
                        >
                            <FaRegTimesCircle />
                        </Link>
                        <Link to={`/editTodo/${todo.id}`} className="todo-item-btn">
                            <FaRegEdit />
                        </Link>
                        <Link
                            className="todo-item-btn todo-item-delete"
                            onClick={ () => this.props.delete(user, todo.id) }
                        >
                            <FaRegTrashAlt />
                        </Link>
                    </span>
                </ListGroup.Item>
            )
        )
    }
}

function matchStateToProps (state) {
    return {
        user: userSelector(state),
        getTodoById: todoByIdSelector(state)
    }
}

function matchDispatchToProps (dispatch) {
    return {
        delete: (user, id) => dispatch(deleteTodo(user, id)),
        edit: (todo) => dispatch(editTodo(todo))
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(TodoItem);
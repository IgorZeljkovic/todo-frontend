import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { deleteTodo } from '../store/todos/actionCreators';
import { userSelector } from '../store/users';

class TodoItem extends Component {
    render () {
        const { todo, user } = this.props;

        return (
            !todo.is_completed
            ? (
                <ListGroup.Item>
                    { todo.title }
                    <span style={{ float: "right" }}>
                        <FaTrashAlt
                            className="delete-todo-btn"
                            onClick={ () => this.props.delete(user, todo.id) }
                        />
                    </span>
                </ListGroup.Item>
            ) : (
                <ListGroup.Item variant="success">
                    { todo.title }
                    <span style={{ float: "right" }}>
    
                    </span>
                </ListGroup.Item>
            )
        )
    }
}

function matchStateToProps (state) {
    return {
        user: userSelector(state)
    }
}

function matchDispatchToProps (dispatch) {
    return {
        delete: (user, id) => dispatch(deleteTodo(user, id))
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(TodoItem);
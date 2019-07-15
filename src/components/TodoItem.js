import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { deleteTodo } from '../store/todos/actionCreators';

class TodoItem extends Component {
    render () {
        const { todo } = this.props;

        return (
            <ListGroup.Item variant={ todo.is_completed ? "success" : "light" }>
                { todo.title }
                <span style={{ float: "right" }}>
                    <FaTrashAlt
                        className="delete-todo-btn"
                        onClick={ () => this.props.delete(todo.id) }
                    />
                </span>
            </ListGroup.Item>
        )
    }
}

function matchDispatchToProps (dispatch) {
    return {
        delete: (id) => dispatch(deleteTodo(id))
    }
}

export default connect(null, matchDispatchToProps)(TodoItem);
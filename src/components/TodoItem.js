import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button } from 'react-bootstrap';
import { deleteTodo } from '../store/todos/actionCreators';
import { connect } from 'react-redux';

class TodoItem extends Component {
    render () {
        const { todo } = this.props;

        return (
            <ListGroup.Item variant={ todo.is_completed ? "success" : "light" }>
                { todo.title }
                <span style={{ float: "right" }}>
                    <Button
                        variant="outline-danger"
                        onClick={ () => this.props.delete(todo.id) }
                    >
                        x
                    </Button>
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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Container, Button } from 'react-bootstrap';
import { deleteTodo } from '../store/todos/actionCreators';
import { userSelector } from '../store/users';
import { connect } from 'react-redux';

class TodoItem extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const { todo, user } = this.props;

        return (
            !todo.is_completed
            ? (
                <ListGroup.Item>
                    { todo.title }
                    <span style={{ float: "right" }}>
                        <Button
                            variant="outline-danger"
                            onClick={ () => this.props.delete(user, todo.id) }
                        >
                            x
                        </Button>
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
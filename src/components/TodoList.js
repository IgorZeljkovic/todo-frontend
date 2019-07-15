import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todosSelector } from '../store/todos';
import TodoItem from './TodoItem';
import { ListGroup, Container } from 'react-bootstrap';
import { getTodos } from '../store/todos/actionCreators'

class TodoList extends Component {
    componentDidMount () {
        this.props.getTodos();
    }

    render () {
        const { todos } = this.props;

        return (
            <Container className="todo-container">
                <ListGroup>
                    {
                        todos.map(todo => (
                            <TodoItem todo={ todo } key={ todo.id } />
                        ))
                    }
                </ListGroup>
            </Container>
        )
    }
}

function mapStateToProps (state) {
    return {
        todos: todosSelector(state)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getTodos: () => dispatch(getTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
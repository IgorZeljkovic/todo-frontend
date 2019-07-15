import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todosSelector } from '../store/todos';
import TodoItem from './TodoItem';
import { ListGroup, Container } from 'react-bootstrap';
import { getTodos } from '../store/todos/actionCreators';
import { Link } from 'react-router-dom';

class TodoList extends Component {
    componentDidMount () {
        this.props.getTodos();
    }

    render () {
        const { todos } = this.props;

        return (
            <Container className="todo-container">
                <Link to="/addTodo" className="btn btn-primary btn-lg" id="add-todo-btn">+</Link>
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
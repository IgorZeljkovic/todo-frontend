import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editTodo } from '../store/todos/actionCreators';
import { todoByIdSelector } from '../store/todos';

class EditTodoForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            ...props.getTodoById(props.match.params.id)
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.props.editTodo(this.state);
        this.props.history.push('/todos');
        
    }

    render () {
        return (
            <Container className="form-container">
                <h2>Edit todo</h2>
                <br/>
                <Form
                    onSubmit = { this.handleSubmit }
                >
                    <Form.Group>
                        <Form.Control
                            type="text" 
                            placeholder="Title"
                            onInput={ event => { this.setState({ title: event.target.value })}}
                            defaultValue={ this.state.title }
                            autoFocus
                        />                      
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="textarea" 
                            placeholder="Description"
                            onInput={ event => { this.setState({ description: event.target.value })}}
                            defaultValue={ this.state.description }
                        />                      
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Priority: </Form.Label>
                        <select
                            className="form-control"
                            onChange={ event => { this.setState({ priority: event.target.value })} }
                            defaultValue={ this.state.priority }
                        >
                            <option></option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

function mapStateToProps (state) {
    return {
        getTodoById: todoByIdSelector(state)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        editTodo: (editedTodo) => dispatch(editTodo(editedTodo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoForm);
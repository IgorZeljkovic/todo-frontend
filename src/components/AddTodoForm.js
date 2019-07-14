import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTodo } from '../store/todos/actionCreators';
import { userSelector } from '../store/users/selectors';

class AddTodoForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            priority: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        
        this.props.addTodo( this.props.user, this.state );
        this.props.history.push('/todos');
        
    }

    render () {
        return (
            <Container className="form-container">
                <h2>Add new todo</h2>
                <br/>
                <Form
                    onSubmit = { this.handleSubmit }
                >
                    <Form.Group>
                        <Form.Control
                            type="text" 
                            placeholder="Title"
                            onInput={ event => { this.setState({ title: event.target.value })}}
                            autoFocus
                        />                      
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="textarea" 
                            placeholder="Description"
                            onInput={ event => { this.setState({ description: event.target.value })}}
                        />                      
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Priority: </Form.Label>
                        <select className="form-control" onChange={ event => { this.setState({ priority: event.target.value })} }>
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
                        Add new
                    </Button>
                </Form>
            </Container>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: userSelector(state)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addTodo: (user, newTodo) => dispatch(addTodo(user, newTodo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
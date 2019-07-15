import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../store/users';
import { Form, Container, Button } from 'react-bootstrap';

class RegisterForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            confirmPassword: '',
            email: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.register({
            ...this.state,
            password_confirmation: this.state.confirmPassword
        });
    }

    render () {
        return (
            <Container className="form-container">
                <h2>Registration</h2>
                <br/>
                <Form
                    onSubmit = { this.handleSubmit }
                >
                    <Form.Group>
                        <Form.Control
                            type="email" 
                            placeholder="Email"
                            onInput={ event => { this.setState({ email: event.target.value })}}
                            autoFocus
                        />                      
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text" 
                            placeholder="Name"
                            onInput={ event => { this.setState({ name: event.target.value })}}
                        />                      
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onInput={ event => { this.setState({ password: event.target.value })}}
                        />                      
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="password" 
                            placeholder="Confirm password"
                            onInput={ event => { this.setState({ confirmPassword: event.target.value })}}
                        />                      
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Register
                    </Button>
                </Form>
            </Container>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        register: user => dispatch(register(user))
    }
}

export default connect(null, mapDispatchToProps)(RegisterForm);
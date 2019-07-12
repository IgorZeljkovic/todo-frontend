import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/users';
import { Form, Container, Button } from 'react-bootstrap';

class LoginForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.login(this.state);
    }

    render () {
        return (
            <Container className="form-container">
                <h2>Login</h2>
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
                            type="password" 
                            placeholder="Password"
                            onInput={ event => { this.setState({ password: event.target.value })}}
                        />                      
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Login
                    </Button>
                </Form>
            </Container>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        login: emailPassword => dispatch(login(emailPassword))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);
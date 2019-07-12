import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSelector, logout } from '../store/users';
import { Navbar, Button } from 'react-bootstrap';

function AppHeader ({ user, logout }) {
    console.log(user)
    return (
        <Navbar>
            <Link to='/' className="navbar-brand">
                <h1>to-do</h1>
            </Link>
            {
                user
                ?
                <Navbar.Collapse className="justify-content-end">
                    <Button
                        onClick={ () => logout(user) }
                        variant="danger"
                    >
                        Logout
                    </Button>
                </Navbar.Collapse>
                :
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/login" className="nav-item nav-link">Login</Link>
                    <Link to="/register" className="nav-item nav-link">Register</Link>
                </Navbar.Collapse>
            }
        </Navbar>
    )
}

function mapStateToProps (state) {
    return {
        user: userSelector(state)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        logout: user => dispatch(logout(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
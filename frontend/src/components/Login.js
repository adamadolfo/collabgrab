import React, { Component } from 'react'
import { Form, Col, Container } from 'react-bootstrap'
import WelcomeNavbar from './WelcomeNavbar'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logIn } from '../actions/userActions'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';

    


class Login extends Component {

    


    state = {
        username: "",
        password: ""
    }

    usernameOnChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    passwordOnChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        const newObj = {
          username: this.state.username,
          password: this.state.password 
        }
        this.props.logIn(newObj)
    }

    render() {
        return(
        <div className="form-page">
            <WelcomeNavbar />
            <Container className="form-container">
                <h1 style={{color: "white", fontSize: "3rem", textAlign: "center", padding: "20px"}}> Login </h1>
                <Container>  
                    
                <Form onSubmit={(e) => this.submitHandler(e)}>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Username: </Form.Label>
                            <Form.Control onChange={this.usernameOnChange} placeholder="Username" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Password: </Form.Label>
                            <Form.Control onChange={this.passwordOnChange} type='password' placeholder="Password" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <button type="submit" class="btn btn-outline-light btn-lg btn-block" style={{marginTop: "100px"}}>Login</button>
                        </Col>
                    </Form.Row>
            </Form>
            </Container>
            </Container>
        </div>
        )
        
    }
}


export default connect(null, {logIn})(Login)
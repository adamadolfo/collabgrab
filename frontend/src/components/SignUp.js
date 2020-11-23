import React, {Component} from 'react'
import { Form, Col, Container } from 'react-bootstrap'
import WelcomeNavbar from './WelcomeNavbar'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signUp } from '../actions/userActions'


function SignUp() {

    const submitHandler = (event) => {
        event.preventDefault()
        const newObj = {
          name: event.target.lastname.value,
          username: event.target.username.value,
          password: event.target.password.value
        }
        // props.createPost(newObj)
    }

        return(
        <div className="form-page">
            <WelcomeNavbar />
            <Container className="form-container">
                <h1 style={{color: "white", fontSize: "3rem", textAlign: "center", padding: "20px"}}> Sign-Up </h1>
                <Container>  
                <Form onSubmit={(e) => this.submitHandler(e)} >
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label" > Name: </Form.Label>
                            <Form.Control placeholder="Name" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Username: </Form.Label>
                            <Form.Control placeholder="Username" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Password: </Form.Label>
                            <Form.Control type='password' placeholder="Password" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <button type="button" class="btn btn-outline-light btn-lg btn-block" style={{marginTop: "100px"}}>Sign-Up</button>
                        </Col>
                    </Form.Row>
            </Form>
            </Container>
            </Container>
        </div>
        )

    
}

SignUp.propTypes = {
    signUp: PropTypes.func.isRequired
}

export default connect(null, { signUp })(SignUp)
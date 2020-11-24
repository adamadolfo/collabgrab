import React, { Component } from 'react'
import { Form, Col, Container } from 'react-bootstrap'
import WelcomeNavbar from './WelcomeNavbar'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signUp } from '../actions/userActions'




class SignUp extends Component {
    state = {
        name: "",
        username: "",
        password: ""
    }

    nameOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
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
          name: this.state.name,
          username: this.state.username,
          password: this.state.password 
        }
        this.props.signUp(newObj)
    }

    render() {
        return(
        <div className="form-page">
            <WelcomeNavbar />
            <Container className="form-container">
                <h1 style={{color: "white", fontSize: "3rem", textAlign: "center", padding: "20px"}}> Sign-Up </h1>
                <Container>  

                <Form onSubmit={(e) => this.submitHandler(e)}>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label" > Name: </Form.Label>
                            <Form.Control onChange={(e) => this.nameOnChange(e)} value={this.state.name} placeholder="Name" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Username: </Form.Label>
                            <Form.Control onChange={(e) => this.usernameOnChange(e)} placeholder="Username" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Password: </Form.Label>
                            <Form.Control onChange={(e) => this.passwordOnChange(e)} type='password' placeholder="Password" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <button type="submit" class="btn btn-outline-light btn-lg btn-block" style={{marginTop: "100px"}}>Sign-Up</button>
                        </Col>
                    </Form.Row>
            </Form>
            </Container>
            </Container>
        </div>
        )
    }    
}

SignUp.propTypes = {
    signUp: PropTypes.func.isRequired
}

export default connect(null, { signUp })(SignUp)
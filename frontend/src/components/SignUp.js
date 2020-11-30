import React, { useState } from 'react'
import { Form, Col, Container } from 'react-bootstrap'
import WelcomeNavbar from './WelcomeNavbar'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signUp } from '../actions/userActions'
import { useHistory } from "react-router-dom";

import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';



function SignUp(props) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const user = useSelector(state => state.user.user.user)

    
    const nameOnChange = (e) => {
        setName(e.target.value)
    }

    const usernameOnChange = (e) => {
        setUsername(e.target.value)
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const newObj = {
          name: name,  
          username: username,
          password: password 
        }
        props.signUp(newObj)
        // if (user) {
        history.push("/dashboard");
        // }
    }

 

        return(
        <div className="form-page">
            <WelcomeNavbar />
            <Container className="form-container">
                <h1 style={{color: "white", fontSize: "3rem", textAlign: "center", padding: "20px"}}> Sign-Up </h1>
                <Container>  

                <Form onSubmit={(e) => submitHandler(e)}>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label" > Name: </Form.Label>
                            <Form.Control onChange={(e) => nameOnChange(e)} placeholder="Name" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Username: </Form.Label>
                            <Form.Control onChange={(e) => usernameOnChange(e)} placeholder="Username" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Password: </Form.Label>
                            <Form.Control onChange={(e) => passwordOnChange(e)} type='password' placeholder="Password" />
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

SignUp.propTypes = {
    signUp: PropTypes.func.isRequired
}

export default connect(null, { signUp })(SignUp)
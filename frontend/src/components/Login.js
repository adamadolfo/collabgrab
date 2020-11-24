import React, { useState } from 'react'
import { Form, Col, Container } from 'react-bootstrap'
import WelcomeNavbar from './WelcomeNavbar'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logIn } from '../actions/userActions'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
    


function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const user = useSelector(state => state.user.user.user)

    const usernameOnChange = (e) => {
        setUsername(e.target.value)
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const newObj = {
          username: username,
          password: password 
        }
        props.logIn(newObj)
        // if (user) {
            history.push("/dashboard");
        // }
    }

    
        return(
        <div className="form-page">
            <WelcomeNavbar />
            <Container className="form-container">
                <h1 style={{color: "white", fontSize: "3rem", textAlign: "center", padding: "20px"}}> Login </h1>
                <Container>  
                    
                <Form onSubmit={(e) => submitHandler(e)}>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Username: </Form.Label>
                            <Form.Control value={username} onChange={usernameOnChange} placeholder="Username" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Password: </Form.Label>
                            <Form.Control value={password} onChange={passwordOnChange} type='password' placeholder="Password" />
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


export default connect(null, {logIn})(Login)
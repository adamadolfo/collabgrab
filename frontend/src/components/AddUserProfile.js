import React, { useState } from 'react'
import { Form, Col, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { editProfile } from '../actions/userActions'




const AddUserProfile = (props) => {
    

    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [img, setImg] = useState("");

    const user = useSelector(state => state.user.user)
        
    const nameOnChange = (e) => {
        setName(e.target.value)
    }

    const bioOnChange = (e) => {
        setBio(e.target.value)
    }

    const imgOnChange = (e) => {
        setImg(e.target.value)
    }

    const locationOnChange = (e) => {
        setLocation(e.target.value)
    }

    const editHandler = (event) => {
        event.preventDefault()
        const newObj = {
          name: name,
          bio: bio,
          location: location,
          img: img,
          user_id: user.id
        }
       
        editProfile(newObj)
    }
    
    
        return(
        <div>
            <Container className="form-container">
                <h1 style={{color: "white", fontSize: "3rem", textAlign: "center", padding: "20px"}}> Edit profile </h1>
                <Container>  

                    <Form onSubmit={(e) => editHandler(e)}>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Name: </Form.Label>
                            <Form.Control value={name} onChange={nameOnChange} placeholder="Name" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Image: </Form.Label>
                            <Form.Control value={img} onChange={imgOnChange} type='text' placeholder="Image (url)" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Location: </Form.Label>
                            <Form.Control value={location} onChange={locationOnChange} type='text' placeholder="Location" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Bio: </Form.Label>
                            <Form.Control value={bio} onChange={bioOnChange} type='text' placeholder="Bio" />
                        </Col>
                    </Form.Row>
                        <Form.Row className="form-row">
                            <Col className="form-column">
                                <button type="submit" class="btn btn-outline-light btn-lg btn-block" style={{marginTop: "40px"}}>Edit Profile</button>
                            </Col>
                        </Form.Row>
                    </Form>
                    
                </Container>
            </Container>
        </div>
        ) 
}

export default connect(null, {editProfile})(AddUserProfile)
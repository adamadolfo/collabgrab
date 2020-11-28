import React, { useState } from 'react'
import { Form, Col, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { addProject } from '../actions/projectActions'




const AddUserProject = (props) => {
    

    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [location, setLocation] = useState("");
    const [requiredSkill, setRequiredSkill] = useState("");

    const user = useSelector(state => state.user.user)
    const skillsArray = useSelector(state => state.skills.skillsArray)
        
    const nameOnChange = (e) => {
        setName(e.target.value)
    }

    const detailsOnChange = (e) => {
        setDetails(e.target.value)
    }

    const locationOnChange = (e) => {
        setLocation(e.target.value)
    }

    const selectedRequiredSkill = (e) => {
        setRequiredSkill(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const newObj = {
          name: name,
          details: details,
          location: location,
          user_id: user.id,
          required_skill: requiredSkill
        }
        props.addProject(newObj)
    }
    
    
        return(
        <div>
            <Container className="form-container">
                <h1 style={{color: "white", fontSize: "3rem", textAlign: "center", padding: "20px"}}> New Project </h1>
                <Container>  

                    <Form onSubmit={(e) => submitHandler(e)}>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Name: </Form.Label>
                            <Form.Control value={name} onChange={nameOnChange} placeholder="Name" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Details: </Form.Label>
                            <Form.Control value={details} onChange={detailsOnChange} type='text' placeholder="Details" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Location: </Form.Label>
                            <Form.Control value={location} onChange={locationOnChange} type='text' placeholder="location" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Col className="form-column">
                            <Form.Label className="form-label"> Required Skill: </Form.Label>
                            <select onChange={selectedRequiredSkill}>
                            {skillsArray.map(skill => <option value={skill.name}> {skill.name} </option>)}
                            </select>
                        </Col>
                    </Form.Row>

                        <Form.Row className="form-row">
                            <Col className="form-column">
                                <button type="submit" class="btn btn-outline-light btn-lg btn-block" style={{marginTop: "100px"}}>Add Project</button>
                            </Col>
                        </Form.Row>
                    </Form>
                    
                </Container>
            </Container>
        </div>
        ) 
}


// const mapStateToProps = state => ({
//     projects: state.projects.projects,
//     project: state.projects.project
// })


export default connect(null, { addProject })(AddUserProject)
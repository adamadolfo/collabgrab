import React, { useState } from 'react'
import { Form, Col, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { createUserSkill } from '../actions/userSkillAction'




const AddUserSkill = (props) => {
    const skillsArray = useSelector(state => state.skills.skillsArray)
  
    let [selection, setSelection] = useState("");
    const user = useSelector(state => state.user.user)


    const handleSelect = (e) => {
        setSelection(selection = e.target.value)
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.skills.count != 0) {
            const skillNum = parseInt(selection)
            let newObj = {
                skill_id: skillNum,
                user_id: user.id
            }
            debugger
            props.createUserSkill(newObj)
        } else {
            console.log("failure")
        }

    }
    console.log(skillsArray)
        return(
        <div>
            <Container className="form-container">
                <h1 style={{color: "white", fontSize: "3rem", textAlign: "center", padding: "20px"}}> New Skill </h1>
                <Container>  

                           
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <select onChange={handleSelect}>
                            <option> Select Skill </option>
                            {skillsArray.length !== 0 ? skillsArray.map(skill => <option value={skill.id}> {skill.name} </option>) : null}
                        </select>
                        <Form.Row className="form-row">
                            <Col className="form-column">
                                <button type="submit" class="btn btn-outline-light btn-lg btn-block" style={{marginTop: "20px"}}>Add Skill</button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Container>
            </Container>
        </div>
        ) 
}


export default connect(null, { createUserSkill })(AddUserSkill)
import React, {useState} from "react"

import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'





function ProjectShow(props) {




    const projectStyle = {
        backgroundColor: "white",
        marginTop: "100px"
    
    }



 

    return(

        <Container>
            <Row>
                <Col style={projectStyle}>
                    <h1>{props.project.name}</h1>
                    <h5> {props.project.location} </h5>
                    <br />
                    <h3>{props.project.details}</h3>
                    <br />
                    <br />
                    {/* <h3> Project Collaborators: </h3>
                    {props.project.users.count != 0 ? props.project.users.map(user => <div className="custom-card"> {user.name} </div>) : null} */}
                </Col>
            </Row>
            <Row>
                <Col style={projectStyle}>
                    <h1>Chat</h1>
                {Object.keys(props.project).length !== 0 ? props.project.posts.map(post => <div>{post.name}: {post.message}</div>) : null}
                </Col>
            </Row>
            <Row>
                <Col style={projectStyle}>
                    
                    <form onSubmit={(e) => props.sendMessage(e)}>
                        <label for="post">Message:</label>
                        <br />
                        <textarea onChange={(e) => props.messageOnChange(e)}type="text" id="post" name="post" />
                        <br />
                        <button> Send </button>
                    </form>
                    
                </Col>
            </Row>
        </Container>
    )

}

export default ProjectShow
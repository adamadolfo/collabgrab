import React, {useEffect} from "react"
import MainNav from "./MainNav"
import Footer from './Footer'
import { connect } from 'react-redux'
import { getFeed } from '../actions/userActions'
import { useSelector } from 'react-redux'


const Feed = (props) => {

    let user = useSelector(state => state.user.user)

    let userObj = {
        user_id: user.id
    }

    let feed = useSelector(state => state.user.feed)
    console.log(feed)
    useEffect(() => {
        props.getFeed(userObj)
    }, [user]) 

    console.log(feed)

    return(
        <>
            <MainNav />
            <div className="background">
                <div className="container">
                {feed.map(blog => <div className="blog-post"> 
                            <div className="row blog-box"> 
                                {/* <img src={} style={{height: "50px", width: "50px", position: "absolute", left: "10px"}} /> */}
                                <div style={{position: "absolute", left: "70px", fontWeight: "bold"}}>   </div>
                                <div style={{position: "absolute", right: "10px"}}> {blog.date}  </div> 
                            </div>  
                            <div className="row blog-box" > 
                                {blog.text} 
                            </div> 
                        </div>)}

                </div>   
            </div>
            <Footer />
        </>
    )
}



export default connect(null, {getFeed} )(Feed)
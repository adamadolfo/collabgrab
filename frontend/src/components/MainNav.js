import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { logOut } from '../actions/userActions'
import { connect } from 'react-redux'

function MainNav() {

    

    const bulletStyle = {
        textDecoration: 'none',
        listStyleType: 'none',
        fontSize: '30px',
        color: 'white',
        right: '0px'
    }

    const logout = () => {
        logOut()
    }
    return (
    
      
    <div class="navbar sticky-top navbar-light" style={{backgroundColor: "#001f2e", opacity: '95%'}}>
        <Link to='/dashboard' style={bulletStyle}>
            <img src='https://i.imgur.com/nHbE8tX.png' height="85px" width="300px"/> 
        </Link>
        <Link to='feed' style={bulletStyle}> 
            <li >Feed</li>
        </Link>
        <Link to='skills' style={bulletStyle}> 
            <li >Skills</li>
        </Link>
        <Link to='projects' style={bulletStyle}>
            <li >Projects</li>
        </Link>
        <Link to='/' style={bulletStyle}>
            <button onClick={() => logout()} style={{backgroundColor: "#001f2e",  fontSize: '30px',
            color: 'white', border: 'none'}}> Logout </button>
        </Link>
    </div>
    );
  }
  

  export default connect(null, { logOut })(MainNav)
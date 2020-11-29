import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeNavbar() {
    return (
      <nav class="navbar navbar-expand-lg welcome-nav">
        <Link to='/' style={{ textDecoration: 'none' }}>
        <img src='https://i.imgur.com/nHbE8tX.png' height="85px" width="300px"/>
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ml-auto">
            <Link to='/login' style={{ textDecoration: 'none' }}>
            <button style={{background: 'none',  fontSize: '30px',
              color: 'white', border: 'none'}}> Login </button>
            </Link >
          </div>
        </div>
    </nav>
    );
  }
  
  export default WelcomeNavbar;
  
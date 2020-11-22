import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeNavbar() {
    return (
      <nav class="navbar navbar-expand-lg welcome-nav">
        <Link to='/'>
        <img src='https://i.imgur.com/nHbE8tX.png' height="85px" width="300px"/>
        </Link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ml-auto">
            <Link to='/login'>
              <a class="nav-item nav-link" href="#">Login</a>
            </Link>
          </div>
        </div>
    </nav>
    );
  }
  
  export default WelcomeNavbar;
  
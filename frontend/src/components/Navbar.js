import React from 'react';
// import image from 'logo.png'

function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <img src='https://i.imgur.com/T5UV3UV.png' height="150px" width="150px"/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link active" href="#">About <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Contact</a>
      <a class="nav-item nav-link" href="#">Login</a>
    </div>
      </div>
    </nav>
    );
  }
  
  export default Navbar;
  
import React from 'react';
import Navbar from './Navbar'
// import image from 'logo.png'

function Welcome() {
    return (
        <div className="welcome">
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    </div>
                    <div class="col-xl-">
                        <h1 style={{fontSize: "3.5rem"}}> Bring an idea to life. </h1>
                        <h1 style={{fontSize: "3.5rem"}}> Collaborate with people world-wide </h1>
                        <button type="button" class="btn btn-outline-light btn-lg btn-block">Block level button</button>
                    </div>
                    <div class="col-sm">
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Welcome;
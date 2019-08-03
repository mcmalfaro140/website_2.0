import React from 'react';
import '../style/home.css';


function Main() {
  return (
    <div className="App">
      
      {/* <img style={{width: '15%', marginRight: '5%', marginTop: '-2%'}} src={require('../img/logo_code copy.png')}></img> */}
      <div className="cont">
        <img className="imglogo" src={require('../img/logo_transparent2.png')}></img>
        <div className="welcome"> Welcome!!!</div>
        <div className="text">My name is <span className="welcome" style={{fontSize: '200%'}}>Misael Corvera.</span> </div>
        <div className="text">I am an enthusiastic Software Developer ready to help you achieve your goals.</div>
        <button className="btn" class="btn btn-primary">Download my resume</button>
        <div>
          <i class="fab fa-github-square"></i>
          <i class="fab fa-linkedin" ></i>
          <i class="fas fa-envelope"></i>
        </div>
        <div class="arrow bounce">
          <a style={{color: 'white'}}class="fas fa-angle-double-down"></a>
        </div>
      </div>
      
    </div>
  );
}

export default Main;

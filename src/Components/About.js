import React from 'react';
import '../style/about.css'
import me from '../img/me.svg';

class About extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="App aboutContainer">
                <section id="About">
                    <div className="about">
                        <div className="title">About Me</div>
                        <div class="row">
                            
                            <div className="projectContainer textCont col-md">
                                <div className="catcher">Who am I?</div>
                                <div className="aboutMeText">Hi. My name is Misael Corvera. I am a web and software developer currently living in the great Los Angeles Area. When I was 15, I got my first computer. Ever since, my passion for technology has grown exponentially. I am passionate about web development. Therefore, I try to keep myself up to date with the latest trending in website design. I have also developed a passion for mobile applications which has allowed me to expand my knowledge and reach more people with my abilities to make a change in my community.</div>
                            </div>
                            <img className="meSvg col-sm" src={me}/>
                        </div>
                        
                    </div>
                </section>
            </div>
         );
    }
}
 
export default About;
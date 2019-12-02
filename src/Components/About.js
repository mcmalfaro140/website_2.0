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
                            
                            <div className="col-md">
                                
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
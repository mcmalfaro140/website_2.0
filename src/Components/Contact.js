import React from 'react';
import '../style/contact.css'

class Contact extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="contactContainer">
                <section id="Contact">
                    <div className="contact">
                        <h2 className="logoNameCont"><span>Misael</span>Corvera</h2>
                        <div class="rowContact row">
                            <div className="contactRow col">
                                <a href="https://github.com/mcmalfaro140" style={{color:'#7f0000'}}><i class="fab fa-github-alt" style={{fontSize:'320%'}}></i></a>
                                <a href="https://github.com/mcmalfaro140" style={{color:'#7f0000'}}><div className="contactTitle">GitHub</div></a>
                                <div>mcmalfaro140</div>
                            </div>
                            <div className="contactRow col">
                                <a href="mailto:mcmalfaro@gmail.com" style={{color:'#7f0000'}}><i class=" fas fa-envelope"></i></a>
                                <a href="mailto:mcmalfaro@gmail.com" style={{color:'#7f0000'}}><div className="contactTitle">Email</div></a>
                                <div>mcmalfaro140@gmail.com</div>
                            </div>
                            <div className="contactRow col">
                                <a href="tel:+18182396835" style={{color:'#7f0000'}}><i class="fas fa-phone"></i></a>
                                <a href="tel:+18182396835" style={{color:'#7f0000'}}><div className="contactTitle">Phone</div></a>
                                <div>(818) 239 - 6835</div>
                            </div>
                            <div className="contactRow col">
                                <a href="https://www.linkedin.com/in/misael-corvera-alfaro-913293160" style={{color:'#7f0000'}}><i class=" fab fa-linkedin-in"></i></a>
                                <a href="https://www.linkedin.com/in/misael-corvera-alfaro-913293160" style={{color:'#7f0000'}}><div className="contactTitle">LinkedIn</div></a>
                                <div>Misael Corvera Alfaro</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">ⓒ Copyright 2020 - Misael Corvera - All right reserved.</div>
                </section>
            </div>
         );
    }
}
 
export default Contact;
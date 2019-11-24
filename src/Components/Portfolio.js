import React from 'react';
import '../style/portfolio.css'
import thinking from '../img/thinking.svg';

class Portfolio extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <section id="Portfolio">
                    <div className = "portfolio container">
                        <div className="title">Portfolio</div>
                        <div class="row">
                            <img className="thinkingSvg col-sm" src={thinking}/>
                            <div className="col-md">
                                <div className="projectContainer "></div>
                                <div className="projectContainer"></div>
                                <div className="projectContainer"></div>
                                <div className="projectContainer"></div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Portfolio;
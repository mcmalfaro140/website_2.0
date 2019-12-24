import React from 'react';
import Main from './Components/Home'
import NavBar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import About from './Components/About'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import './style/loader.css'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

componentDidMount() {
    demoAsyncCall().then(() => this.setState({ isLoading: false }));
}
 
  render() { 
    return (
      this.state.isLoading ? 
      <div className="loader">
        <Loader
          type="Puff"
          color="#ffa500"
          height={200}
          width={200}
        />  
      </div> : 
      <div>
        <NavBar></NavBar>
        <Main></Main>
        <Portfolio></Portfolio>
        <About></About>
        <Resume></Resume>
        <Contact></Contact>
        
      </div>
      
    );
  }
}
//Just to have a loader and make my website cooler
function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}


export default App;

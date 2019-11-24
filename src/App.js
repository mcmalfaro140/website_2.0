import React from 'react';
import Main from './Components/Home'
import NavBar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import About from './Components/About'


function App() {
  return (
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


export default App;

import React from 'react';
import Main from './Components/Main'
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
      <Resume></Resume>
      <Contact></Contact>
      <About></About>
    </div>
    
  );
}


export default App;

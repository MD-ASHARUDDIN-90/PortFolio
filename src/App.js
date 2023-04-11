import { Route,Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About';
import Project from './Pages/Project/Project';
import Skills from './Pages/Skills/Skills';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
  
   <Routes>
   <Route path='/' element={ <HomePage />}/>
   <Route path='/about' element={ <About />}/>
   <Route path='/project' element={ <Project/>}/>
   <Route path='/skills' element={ <Skills/>}/>
   <Route path='/contact' element={ <Contact/>}/>
   </Routes>
  );
}

export default App;

import './cssFiles/App.css';
import {Routes, Route } from 'react-router-dom';

import Home from './components/home'
import Projects from './components/projects'
import About from './components/about'
import Contact from './components/contact'

function App() {
  return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
  );

}

export default App;

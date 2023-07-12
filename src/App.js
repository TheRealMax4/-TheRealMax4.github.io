import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Route, Routes} from "react-router-dom"
import Home from './components/Home';
import Me from './components/Me';
import Projects from './components/Projects';
import Studi from './components/Studi';


function App() {
  return <div className='bodyContainer'>
    <NavBar></NavBar>
    <div className='homeContainer'>
      <Home></Home>
      
      <h1 className='titleConoscenze' id='conoscenzeId'>LE MIE CONOSCENZE</h1>
      <span className='nome'><h2>GAYEVSKYY MAKSYM - DIPLOMATO ALL'ITIS ROSSI</h2></span>
      
      <div className='meContainer'>
        <Me></Me>
      </div>

      <div className='projectsContainer'>

        <h1 className='projectsTitle' id='progettiId'>I MIEI
        <span className='projectsSpan'> PROGETTI</span>
        </h1>
        <Projects></Projects>
      </div>

      <div className='studiContainer'>
        
        <h1 className='projectsTitle' id='studiId'>PERCORSO <br></br>
        <span className='projectsSpan'> SCOLASTICO</span>
        </h1>

        <Studi></Studi>
      </div>


      <div className='contattiContainer'>

              
        
        <h1 className='contactTitle' id='studiId'>CONTATTAMI PER  <br></br>
        <span className='projectsSpan'> LAVORARE INSIEME</span>
        </h1>
        <div className='textContact'>
          Numero di telefono: 3711713954 <br></br>
          Email: maxgaievski@gmail.com
        </div>
      </div>
    </div>
  </div>
}

export default App;

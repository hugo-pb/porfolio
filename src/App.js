import Navbarr from './components/Navbarr';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from './components/Welcome';
import About from "./components/About";
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  
  return (
    <div className="App">
      <Navbarr />
      <Welcome />
      <About />
    
      <Experience />
      <Projects />
    </div>
  );
}

export default App;

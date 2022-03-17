import Navbarr from './components/Navbarr';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from './components/Welcome';
import About from "./components/About";
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <Navbarr />
      <Welcome />
      <About />
    
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

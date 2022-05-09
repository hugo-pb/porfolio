
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from './components/Welcome';
import { Routes, Route,  } from "react-router-dom";
import About from './components/About'
import Experience from './components/Experience'
function App() {
  
  return (
    <div className="App">
      {/* <Navbarr /> */}
      <Routes>
        <Route path="/" element={<Welcome />} />{" "}
        <Route path="about" element={<About />} />
        <Route path="Experience" element={<Experience />} />
      </Routes>
      {/* <About />
    
      <Experience />
      <Projects />
      <Contact />
      <Footer />*/}
    </div>
  );
}

export default App;

import Navbarr from './components/Navbarr';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from './components/Welcome';
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Navbarr />
      <Welcome />
      <About />
    </div>
  );
}

export default App;

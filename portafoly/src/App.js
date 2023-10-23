import {Routes,Route} from "react-router-dom"
import Portafyle from "./Views/Portafyle";
import './App.css';
import Dogs from "./ViewsTwo/Dogs/Dogs";
import Videogames from "./ViewsTwo/Dogs/Videogames/Videogames";
import Food from "./ViewsTwo/Dogs/Food/Food";
import Pf from "./ViewsTwo/Dogs/Pf/Pf";
import Puertas from "./ViewsTwo/Dogs/Puertas/Puertas";
import Ejemplo from "./ejemplo/ejemplo.jsx"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Portafyle />}/>
        <Route path="/Dogs" element={<Dogs />}/>
        <Route path="/Videogames" element={<Videogames />}/>
        <Route path="/Food" element={<Food />}/>
        <Route path="/Pf" element={<Pf />}/>
        <Route path="/Puertas" element={<Puertas />}/>
        <Route path="/Ejemplo" element={<Ejemplo />}/>
      </Routes>
    </div>
  );
}

export default App;

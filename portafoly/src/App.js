import {Routes,Route} from "react-router-dom"
import Portafyle from "./Views/Portafyle";
import './App.css';
import Dogs from "./ViewsTwo/Dogs/Dog/Dogs.jsx";
import Videogames from "./ViewsTwo/Dogs/Videogames/Videogames";
import Food from "./ViewsTwo/Dogs/Food/Food";
import Pf from "./ViewsTwo/Dogs/Pf/Pf";
import Puertas from "./ViewsTwo/Dogs/Puertas/Puertas";
import Ejemplo from "./ejemplo/ejemplo.jsx"
import WSub1 from "./Views/Body/ProyectosWordpress/WSub1/WSub1";

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

        <Route path="/WSub1" element={<WSub1 />}/>
      </Routes>

    </div>
  );
}

export default App;

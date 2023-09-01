import {Routes,Route} from "react-router-dom"
import Portafyle from "./Views/Portafyle";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Portafyle />}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import style from "./Food.module.css"
function Food() {
  return (
    <div>Food
        <div className={style.alimentos} >
<h3>
               Alimentos Saludables
            </h3>
            <h4>Es un sitio web que tiene como objetivo dar a conocer las recetas para llevar una buena salud.  </h4>
          

            
 <p> 
     La app se compone por una landing, un NavBar con su logo, tiene su Search que es 
                el que vamos a utilizar para buscar el perro que queremos adoptar...
                <br />
    <strong>
    Api.REST: food
    </strong>
    <ul>
        <li> Front-End: React Html JavaScript Redux Css Boostrap</li>
        <li>Back-End: Vite Express JavaScript Sequelize</li>
        <li> Base De Datos: PostgresSql Sequelize</li>
    </ul>
 Extra: Github.
 </p>
        </div>
    </div>
  )
}

export default Food
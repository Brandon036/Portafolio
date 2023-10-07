import React from 'react'
import style from "./Videogames.module.css"
function Videogames() {
  return (
    <div>Videogames
         <div className={style.videojuegos}>
    <h3>
              Video Juegos
            </h3>
            <h4>Es una aplicación que tenía como objetivo presentar todos los diferentes tipos de juegos. </h4>
          

            
 <p> 
     La app se compone por una landing, un NavBar con su logo, tiene su Search que es 
                el que vamos a utilizar para buscar el perro que queremos adoptar...
                <br />
    <strong>
    Api.REST: videogames
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

export default Videogames
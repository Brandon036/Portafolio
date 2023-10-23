import React from 'react'
import style from "./Dogs.module.css"
function Dogs() {



  return (



<div className={style.dogs}>
  <div className={style.dogsOne}>
     <h3>
                Dogs
            </h3>
            <div> 
              <h4>Tenía como objetivo mostrar animales adoptivos  </h4>
             <p>Mi rol haciendo este proyecto fue desempeñado como desarrollador full stack, en la parte del back se 
              consumio una api que me daba datos como tipos de perros(razas), imagenes, años o meses de vida.
              </p> 
              <p>
                Ahora en la base de datos trabaje con PostgresSql
              </p>
             </div>
           
  </div>
               
          

            
 <p> 
     La app se compone por una landing, un NavBar con su logo, tiene su Search que es 
                el que vamos a utilizar para buscar el perro que queremos adoptar...
                <br />
    <strong>
         Api.REST: Dogs
    </strong>
    <ul>
        <li> Front-End: React Html JavaScript Redux Css Boostrap</li>
        <li>Back-End: Vite Express JavaScript Sequelize</li>
        <li> Base De Datos: PostgresSql Sequelize</li>
    </ul>
 Extra: Github.
 </p>
            </div >

  )
}

export default Dogs
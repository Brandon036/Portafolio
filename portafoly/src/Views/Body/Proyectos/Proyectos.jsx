import React from 'react'
import style from "./Proyectos.module.css"

function Proyectos() {
  return (
    <div>
        
       <h1>Proyectos </h1>
        <div className={style.p1}>
          
   <div className={style.dogs}>
                <h3>
                Dogs
            </h3>
            <h4>Tenía como objetivo mostrar animales adoptivos  </h4>
          

            
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

        <div className={style.p1imagen}>
        <a href="https://github.com/Brandon036/Pi-Dogs.git">
            <img src="https://i.pinimg.com/originals/da/d2/24/dad224dc4ecbf0f4e03322b3b7188187.gif" alt="" />
             </a>

        </div>

        



 </div>
<br />
 <div className={style.p2}>

<div className={style.p2imagen}>
        <a href="https://github.com/Brandon036/PI_Food.git">
            <img src="https://huimin-static.oss-cn-hangzhou.aliyuncs.com/hm/a7a1278a.gif" alt="" />
             </a>
        </div>

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
<br />
 <div className={style.p3}>
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
    <div className={style.p3imagen}>
    <a href="https://github.com/Brandon036/videogames.git">
            <img src="https://media.tenor.com/JEiWJ_z-oCIAAAAM/gamer-game.gif" alt="" />
             </a>
    </div>
 </div>
<br />

 <div  className={style.p4}>
    <div className={style.p4imagen} >
    <a href="https://github.com/Brandon036/PuertasEnVidrio.git">
            <img src="https://images.adsttc.com/media/images/5968/b62b/b22e/38f0/4900/014e/original/RH_GIF.gif?1500034596" alt="" />
             </a>
    </div>
    <div className={style.puertasenvidrio}>
      
 <h3>Puertas En Vidrio </h3> 
<h4>

Es un sitio web que tiene como objetivo mostrar un catálogo de servicios (está en proceso).
</h4>
<ul>
    <li>Design UI/UX: Figma, Trello.</li>
    <li>Dominio: Hostinger.</li>
    <li>
Deploy: VPS – Nginx</li>
    <li>Front-End: React, Html, JavaScript, Redux, Css, (Responseve).</li>

    <li>Back-End: Vite, Node Js, Express, JavaScript, Sequelize,</li>
    <li>
Base De Datos: PostgresSql Sequelize</li>
</ul>
<p>
    Extra: Github.
</p>


<button>
   <a href="http://www.puertasenvidrio.com/"  target="blank"  >
    Enter
   </a>
    
</button>

       
    

    </div>
 </div>
    </div>
  )
}

export default Proyectos
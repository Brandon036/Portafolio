import React from 'react'
import style from "./Body.module.css"
import Proyectos from './Proyectos/Proyectos'
import Wordpress from './ProyectosWordpress/Wordpress'
import WordpressM from './ProyectosWordpress/WordpressM'
import WorpressP from './ProyectosWordpress/WorpressP'
function Body() {
  return (
    <div>
    
    <div className={style.about}>

      
     
  


      <br />
<p>
  <p>
    Apasionado <strong> Full Stack Developer </strong>  en la creación de aplicaciones web robustas y escalables.
    Mi enfoque se centra en la construcción de soluciones tecnológicas innovadoras que combinan una experiencia de usuario excepcional con una sólida funcionalidad. 
  </p>

   <p>
    Pro en tecnologías como <strong> JavaScript, HTML5, CSS, Node.js y React, </strong> he liderado el desarrollo de proyectos desde su concepción hasta su implementación exitosa. 
   </p>



Mi trayectoria profesional abarca tanto el desarrollo front-end como el back-end, lo que me permite comprender y abordar los desafíos técnicos desde diferentes perspectivas. 
<p>

Tengo un historial probado de colaboración efectiva con equipos interdisciplinarios, combinando mis habilidades técnicas con una comunicación clara y una mentalidad centrada en el cliente para ofrecer 
resultados excepcionales.
</p>



He trabajado en entornos ágiles y dinámicos, adaptándome con facilidad a nuevos desafíos y tecnologías emergentes. Mi experiencia en el diseño y gestión de bases de datos relacionales, 

especialmente utilizando <strong>PostgreSQL y Sequelize </strong>, ha sido fundamental para garantizar un almacenamiento eficiente y seguro de datos críticos. Además, mi capacidad para crear interfaces atractivas 

y responsivas utilizando HTML5, CSS y Bootstrap ha mejorado significativamente.

En resumen, soy un desarrollador orientado a resultados que está constantemente buscando oportunidades para aprender y crecer. Mi pasión por la programación.
</p>
<br />





</div>

<div className={style.pr}>
  <h1>Proyectos Puros</h1>
  <h2 className={style.mano}><strong >👇 Oprime 👇</strong></h2>
  <Proyectos />
  </div> 
  <h1>Proyectos con Wordpress</h1>
  <div>
  <Wordpress />
  </div>
  <div>
    <WordpressM />
  </div>
  <div>
    <WorpressP />
  </div>


    </div>
  )
}

export default Body
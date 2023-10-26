import React from 'react'
import style from "./Wcss/W.module.css"
import { useEffect } from 'react';
function WorpressP() {
  useEffect(() => {
    // Función para animar elementos cuando se desplaza hacia abajo
    function animateOnScroll() {
      const elements = document.querySelectorAll('#w3');
      const scrollTop = window.scrollY;

      elements.forEach((element) => {
        const elementTop = element.offsetTop;

        if (elementTop - 300 < scrollTop) {
          element.style.opacity = 1;
          
        }
      });
    }

    // Agregar un evento de desplazamiento para llamar a la función de animación
    window.addEventListener('scroll', animateOnScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []); // El segundo argumento vacío asegura que el efecto solo se ejecute una vez
  return (
    <div id='w3' className={style.w3}>   
    <h1 className={style.Tw3}>Profesionales</h1>
    <div className={style.cimgs}>
     <img className={style.imgejemplo} src="https://pngimg.es/d/star_PNG41482.png" alt="" />
     <img className={style.imgejemplo} src="https://pngimg.es/d/star_PNG41482.png" alt="" />
     <img className={style.imgejemplo} src="https://pngimg.es/d/star_PNG41482.png" alt="" />
     <img className={style.imgejemplo}  src="https://pngimg.es/d/star_PNG41482.png" alt="" />
     <img className={style.imgejemplo} src="https://pngimg.es/d/star_PNG41482.png" alt="" />
    </div>
    <p className={style.description}>Pagina para cualquier tipo de cliente, escalable, animada, interactiba, minimalista, rendimiento eficaz, acceso rapido,
    buenas practicas recomendadas, un perfecto seo.
     <strong>
        <br />
        + Te ayudo
    <ul>
    <li>Dominio</li>
    <li>Certificado ssl</li>
    <li>Conecar con Google</li>    
    </ul>    
    </strong></p>
    </div>
  )
}

export default WorpressP
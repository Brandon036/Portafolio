import React from 'react'
import style from "./Wcss/W.module.css"
import { useEffect } from 'react';
function Wordpress() {

  useEffect(() => {
    // Función para animar elementos cuando se desplaza hacia abajo
    function animateOnScroll() {
      const elements = document.querySelectorAll('#w1');
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
    <div id='w1' className={style.w1}>
       <h1 className={style.Tw1}>Basicos</h1>
       <div className={style.cimgs}>
        <img className={style.imgejemplo} src="https://pngimg.es/d/star_PNG41482.png" alt="" />
        <img className={style.imgejemplo} src="https://pngimg.es/d/star_PNG41482.png" alt="" />
        <img className={style.imgejemplo} src="https://pngimg.es/d/star_PNG41482.png" alt="" />
        <img className={style.imgejemplo} src="https://pngimg.es/d/star_PNG41482.png" alt="" />
        <img className={style.imgejemplo} src="https://pngimg.es/d/star_PNG41482.png" alt="" />
       </div>
     <p className={style.description}>Pagina de muestra para tipos de clientes.</p>
    </div>
  )
}

export default Wordpress
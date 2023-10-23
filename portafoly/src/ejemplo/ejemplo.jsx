import React, { useEffect } from 'react';
import style from "./ejemplo.module.css"

function ScrollAnimation() {
  useEffect(() => {
    // Función para animar elementos cuando se desplaza hacia abajo
    function animateOnScroll() {
      const elements = document.querySelectorAll('#all');
      const scrollTop = window.scrollY;

      elements.forEach((element) => {
        const elementTop = element.offsetTop;

        if (elementTop - 400 < scrollTop) {
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
    <div >
      {/* Tus elementos HTML con la clase "all" */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* <div className="all">Elemento 1</div>
      <div className="all">Elemento 2</div>
      <div className="all">Elemento 3</div> */}
      
      
      <div id="all" className={style.all}>Elemento 1 anyi</div>
      <div id="all" className={style.all}>Elemento 2</div>
      <div id="all" className={style.all}>Elemento 3</div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      {/* ... Agrega más elementos aquí */}
    </div>
  );
}

export default ScrollAnimation;


import React from 'react'
import style from "./Footer.module.css"

function Footer() {
  return (
    <div className={style.Footer}>
      <h1>Contactame</h1>
      <div className={style.FooterTwo} >
       
 <button className={style.botonesFooter}>
        <a href="https://www.linkedin.com/in/brandonbarrera123/" target='blank'>
          <img className={style.imagendeFooter} src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="" />
        </a>

      </button>


    <button className={style.botonesFooter} >
       <a href="https://github.com/Brandon036" alt=""  target='blank'>
  
        <img className={style.imagendeFooter} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
       </a>
        </button>
        <button className={style.botonesFooter}>
           <a href="https://wa.me/+573105689393?text=¡Hola! Estoy interesado en tus servicios." target="_blank" rel="noopener noreferrer">
       <img  className={style.imagendeFooter} alt="3"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"/> 
       </a>
        </button>
     
        
      </div>

    </div>
  )
}

export default Footer
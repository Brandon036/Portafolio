import React from 'react'
import style from "./WSub.module.css"
/*imagenes de manera importada */
import img1 from "./Wimgs/w1Basic1.webp"
import img2 from "./Wimgs/w1Basic2.webp"
import img3 from "./Wimgs/w1Basic3.webp"
import img4 from "./Wimgs/w1Basic4.webp"
import img5 from "./Wimgs/w1Basic5.webp"




function WSub1() {
  return (
    <div className={style.Wsub1}>
<h1 className={style.t}>Pagina de Inicio</h1>
<h2 className={style.t}> Logo, Cabezera, Menu, Titulo, Descripcion,Servicios, Video final, footer, Whatsapp.</h2>

    <section>
      <img className={style.imgG} src={img1} alt="Logo, Cabezera, Menu" />
      <img className={style.imgG} src={img2} alt="Titulo, Descripcion" />
      <img className={style.imgG} src={img3} alt="Servicios" />
      <img className={style.imgG} src={img4} alt="video final, footer, Whatsapp." />
      <img className={style.imgG1} src={img5} alt=""/>
    </section>
    <br/>
<a href="/">
  <button className={style.botonBr}>
    Devolver
    </button>
</a>

    

    </div>
  )
}

export default WSub1
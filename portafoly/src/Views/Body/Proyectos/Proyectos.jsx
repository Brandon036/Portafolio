import React from 'react'
import style from "./Proyectos.module.css"
import { Link } from 'react-router-dom'


const dogsC =  <div className={style.p1}>
<div className={style.p1imagen}>
{/* <a href="https://github.com/Brandon036/Pi-Dogs.git">  </a> */}
 <Link to={"/Dogs"}>
    <img src="https://i.pinimg.com/originals/d5/0e/65/d50e65e83b9a3857503e5d69fb28b949.gif" alt="" />
   </Link>
</div>
</div>

const foodC = <div className={style.p2}>
<div className={style.p2imagen}>
        {/* <a href="https://github.com/Brandon036/PI_Food.git"></a> */}
          <Link to={"/Food"}>
            <img src="https://i.pinimg.com/originals/9e/df/f2/9edff2502477b038f069a367206b0cc9.gif" alt="" />
          </Link>
        </div>
 </div>

const videogamesC = <div className={style.p3}>
<div className={style.p3imagen}>
{/* <a href="https://github.com/Brandon036/videogames.git"> </a> */}
<Link to={"/Videogames"}>
        <img src="https://i0.wp.com/www.puntogeek.com/wp-content/uploads/2013/11/5bJhqg6.gif?resize=320%2C320" alt="" />
</Link>
</div>
</div>

const puertasC = <div  className={style.p4}>
<div className={style.p4imagen} >
{/* <a href="https://github.com/Brandon036/PuertasEnVidrio.git"> </a> */}
<Link to={"/Puertas"}>
        <img src="https://www.gifss.com/arquitectura/arquitectos/images/arquitecto-3.gif" alt="" />
</Link>
</div>
</div>

 const nft = <div className={style.p5}>
 <div className={style.p5imagen}>
 {/* <a  href="https://github.com/rodri154321/nifytigo.git">        </a> */}
      <Link to={"Pf"}>
             <img src="https://miro.medium.com/v2/resize:fit:1400/0*IeYR9nqblbolhTHE.gif" alt="" />
      </Link>
 </div>
 </div>

function Proyectos() {
  return (
    <div  className={style.Proyect}>
       <div  className={style.Proyectos}>
{dogsC}
<br/>
{foodC}
<br/>
{videogamesC}
<br/>
{puertasC}
<br/>
{nft}
<br/>
{dogsC}
<br/>
{foodC}
<br/>
{videogamesC}
<br/>
  </div>
    </div>
  )
}

export default Proyectos
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import style from "./Header.module.css"
function Header(){
  return (
    <div className={style.hola} >
{/* <div className={style.fijar}>
  
  <div className={style.fondotriangulo} >
        <div className={style.triangulo}>
      </div>
      </div>
</div> */}


      <div className={style.HeaderOne}>
        <div className={style.Foto}>
            <img  className={style.imagendeHeader}  src="https://contents.bebee.com/users/id/Gdxql64dfd6797f460/avatar-1xcG6.png" alt='' /> 
        </div>
        
        <div className={style.Name}>
        <div className={style.button}>
        <div className={style.box}>B</div>
       <div className={style.box}>r</div>
       <div className={style.box}>a</div>
        <div className={style.box}>n</div>
        <div className={style.box}>d</div>
        <div className={style.box}>o</div>
        <div className={style.box}>n</div>
        </div>

        <div className={style.buttonOne}>
        <div className={style.boxOne}>B</div>
        <div className={style.boxOne}>a</div>
        <div className={style.boxOne}>r</div>
        <div className={style.boxOne}>r</div>
        <div className={style.boxOne}>e</div>
        <div className={style.boxOne}>r</div>
        <div className={style.boxOne}>a</div>
        </div>
         <p>FULL STACK DEVELOPER JUNIOR</p>
        </div>
      
      <div className={style.Resid}>
        <h4 >
        Residencia - Bogota, Colombia 
       
        </h4>
      </div>
      </div>
     


    </div>
  )
}

export default Header
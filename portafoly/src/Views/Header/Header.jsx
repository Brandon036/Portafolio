/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import style from "./Header.module.css"
function Header(){
  return (
    <div  >
      <div className={style.HeaderOne}>
        <div className={style.Foto}>
            <img src="https://contents.bebee.com/users/id/Gdxql64dfd6797f460/_avatar-U22m1-400.png" /> 
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
        <p className={style.Re}>  +57 3105689393</p>
        </h4>
      </div>
      </div>
     


    </div>
  )
}

export default Header
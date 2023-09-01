import React from 'react'
import Header from './Header/Header'
import Body from "./Body/Body"
import Footer from "./Fotter/Footer"
import style from "../Views/Portafyle.module.css"

function Portafyle() {
  return (
    <div>
      <div className={style.fondo}>
         <header>
          <br />
            <Header />
          
        </header>
        <body>
         <Body />
        </body>
      </div>
       
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Portafyle
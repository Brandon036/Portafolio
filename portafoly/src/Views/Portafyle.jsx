import React from 'react'
import Header from './Header/Header'
import Body from "./Body/Body"
import Footer from "./Fotter/Footer"
import style from "../Views/Portafyle.module.css"
import MouseFollower from './MouseFollower'
//import { Element } from 'react-scroll';


function Portafyle() {
  

  return (
    <div>
     <MouseFollower />
      <div className={style.fondo}>
      

         <header>
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
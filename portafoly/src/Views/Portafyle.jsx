import React from 'react'
import Header from './Header/Header'
import Body from "./Body/Body"
import Footer from "./Fotter/Footer"
import style from "../Views/Portafyle.module.css"
//import { Element } from 'react-scroll';
//import { useState, useEffect } from 'react'

function Portafyle() {
  
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //  window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 200) { // Ajusta el valor de 200 según tus necesidades
  //     setIsVisible(true);
  //   }
  // };



  return (
    <div>
      
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
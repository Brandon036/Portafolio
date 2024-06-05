import React from 'react'
import style from "./Pf.module.css"
import audio from "./Audio/Audio.mp3"
import  { useEffect } from 'react';
function Pf() {
    
  useEffect(() => {
    // Obtener el elemento de audio por su ID
    const miAudio = document.getElementById('miAudio');

    // Reproducir el audio automáticamente al cargar la página
    miAudio.play();
  }, []);

  return (
    <div>Pf
        <div className={style.nftapp}>
<h3>App Web De Comercio Electrónico.</h3> 
<h4>
Es una aplicación web que tiene como objetivo poder comprar y vender Nfts.
(Fue un proyecto grupal)
</h4>
<ul>
    <li>Design UI/UX: Figma, Trello.</li>
    <li>Dominio: Hostinger.</li>
    <li>
Deploy: VPS – Nginx</li>
    <li>Front-End: React, Html, JavaScript, Redux, Css, (Responseve).</li>
    <li>Back-End: Vite, Node Js, Express, JavaScript, Sequelize,</li>
    <li>
Base De Datos: PostgresSql Sequelize</li>
</ul>
<p>
    Extra: Github.
</p>
<button className={style.botonnft}>
 
<a className={style.text} href="https://nifytigo.vercel.app/"  target="blank"  >
    Enter
   </a>
 
</button>
 <audio  id="miAudio" autoplay controls loop>
<source  src={audio} type="audio/mp3"/>

</audio>
</div>


    </div>
  )
}

export default Pf
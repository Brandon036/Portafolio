import React, { useEffect, useState } from 'react';

function ContadorUsuarios() {
  // Función para obtener el valor de una cookie
  function getCookie(nombre) {
    var nombreEQ = nombre + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nombreEQ) === 0) {
        return cookie.substring(nombreEQ.length, cookie.length);
      }
    }

    return null;
  }

  // Función para establecer una cookie
  function setCookie(nombre, valor, dias) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expira + ";path=/";
  }

  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Función para incrementar el contador de visitas
    function incrementarContador() {
      // Obtén el valor de la cookie "contador"
      var contadorCookie = getCookie('contador');

      // Si la cookie no existe, inicialízala a 0
      if (!contadorCookie) {
        contadorCookie = 0;
      }

      // Incrementa el contador en 1
      contadorCookie++;

      // Establece la cookie "contador" con el nuevo valor y una duración de 1 día
      setCookie('contador', contadorCookie, 1);

      setContador(contadorCookie);
    }

    // Llama a la función incrementarContador cuando la página se cargue
    incrementarContador();
  }, []);

  return (
    <div>
      <h1>Bienvenido a mi página</h1>
      <p>¡Has sido el visitante número <span id="contador">{contador}</span> hoy!</p>
    </div>
  );
}

export default ContadorUsuarios;

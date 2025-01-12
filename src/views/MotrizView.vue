<template>
  <body>
    <div class="about"> <!-- ESTA PAGINA ES LA PAGINA DE MOTRIZ -->
      <div class="motriz1ro">
        <h1 tabindex="1"> PARA LOGRAR EL EJERCICIO DE EMPATÍA, AQUELLAS PERSONAS SIN DISCAPACIDAD MOTRIZ, POR FAVOR EN ESTA PAGINA DEJEN DE USAR EL RATÓN Y UTILICEN ÚNICAMENTE EL TECLADO (usando el Tab y el Enter)</h1>
      </div>
      <a href="#contenido-principal-motriz" class="skip-link">Saltar al contenido principal</a>
      <div class="col-lg-6 motriz-texto-margenes">
        <div class="titulosdetexto">
          <h1 tabindex="2">Discapacidad Motriz</h1>
        </div>
        <h2 tabindex="3">¿Qué es la discapacidad motriz?</h2>
        <br>
        <p tabindex="4">La discapacidad motriz afecta la capacidad de una persona para moverse o controlar sus movimientos. Esto puede incluir dificultades para caminar o realizar otras acciones físicas, y puede requerir el uso de ayudas como sillas de ruedas o muletas.</p>
        <h3 tabindex="5">Algunas dificultades que pueden experimentar las personas que tienen esta discapacidad:</h3>
        <ul>
          <li tabindex="6"><strong>Dificultad para usar el ratón:</strong> Problemas al hacer clic o mover el cursor.</li>
          <li tabindex="7"><strong>Dificultad con el teclado:</strong> Dificultad para presionar teclas o combinaciones.</li>
          <li tabindex="8"><strong>Controles poco accesibles:</strong> Páginas que no permiten navegar sin ratón.</li>
          <li tabindex="9"><strong>Tiempo limitado:</strong> Necesitan más tiempo para interactuar con la web.</li>
          <li tabindex="10"><strong>Dificultad para desplazarse:</strong> Problemas al usar la barra de desplazamiento.</li>
          <li tabindex="11"><strong>Formularios inaccesibles:</strong> Formularios difíciles de completar sin adaptaciones.</li>
          <li tabindex="12"><strong>Diseño no optimizado:</strong> Falta de opciones de navegación por voz o teclado.</li>
        </ul>
        <div class="text-and-image">
          <img :src="require('@/assets/discapacidadmotriz1.jpg')" alt="Foto ilustrativa de una persona con discapacidad motriz" class="image-right">
        </div>
      </div>
      <div class="seccionactividadmotriz">
        <div class="titulosdetexto">
          <h1 tabindex="13" id="contenido-principal-motriz"> Actividad Empatía </h1>
        </div>
        <h2 tabindex="14"> Enlaces con acceso desordenado y en movimiento</h2>
        <p tabindex="15">Como ya sabemos, muchas personas con discapacidad motriz no pueden usar el ratón, por ello, aquí hay una pequeña experiencia del día a día de las personas con esta discapacidad, ya que los links no suelen estar adaptados para ellos.</p>
        <p tabindex="16"> Para usuarios de móvil, este ejercicio muestra lo desafiante que puede ser pulsar un enlace que se mueve, experimentando la falta de accesibilidad.</p>
        <span tabindex="17" aria-label="Fíjate bien en el orden de los links, imagina que estás buscando un contenido concreto..."></span>
        <div class="links-motriz">
          <ul>
            <li><a href="#link1" tabindex="19" role="link">Enlace 1</a></li>
            <li><a href="#link2" tabindex="22" role="link">Enlace 2</a></li>
            <li><a href="#link3" tabindex="20" role="link">Enlace 3</a></li>
            <li><a href="#link4" tabindex="18" role="link">Enlace 4</a></li>
            <li><a href="#link5" tabindex="21" role="link">Enlace 5</a></li>
          </ul>
        </div>
        <p tabindex="22">Frustrante y desesperante, ¿verdad?</p>
      </div>
      <div class="contenedor-principalMORTRIZ">
        <div class="formulariomotriz">
          <div class="formulariomotriz__contenedor">
            <div class="formulariomotriz__formulario">
              <div class="formulariomotriz__titulo">
                <h2 tabindex="23">Si eres una persona con discapacidad Motriz, ¡compártenos qué más podemos incluir!</h2>
              </div>
              <div tabindex="24" aria-label="Escribe en las celdas, si lo necesitas, tienen un botón rojo de autoguardado por si necesitas una pausa de escribir."></div>
              <div class="formulariomotriz__celdas">
                <form action="#">
                  <div class="formulariomotriz__campo">
                    <div class="formulariomotriz__columna">
                      <input type="text" class="formulariomotriz__input" placeholder="Escribe aquí tu nombre" tabindex="25" role="textbox">
                    </div>
                  </div>
                  <div class="formulariomotriz__campo">
                    <div class="formulariomotriz__columna">
                      <textarea class="formulariomotriz__textarea" placeholder="Escribe aquí las mejoras que creas" tabindex="26" role="textbox"></textarea>
                    </div>
                  </div>
                  <div class="formulariomotriz__autoguardado">
                    <button class="formulariomotriz__autoguardado-boton" tabindex="27" role="button">Autoguardar</button>
                  </div>
                  <div class="formulariomotriz__boton">
                    <button type="submit" class="formulariomotriz__enviar" tabindex="28" role="button">ENVIAR</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

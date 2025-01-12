<template>
  <body>
    <div class="home">
      <b-container fluid>

        <!-- Texto introductorio -->
        <b-row class="mb-4 margenes-de-p">
          <b-col>
            <h1 class="titulosdetexto" tabindex="1">
              Bienvenido a la sección baja visión
            </h1>
            <h2 class="titulosdetexto" tabindex="2">
              ¿Qué és la baja visión?
            </h2>
            <p tabindex="3">
              La baja visión, que es aquella que no se corrige completamente con lentes, afecta a una parte significativa de la población, especialmente a personas mayores de 65 años, quienes constituyen el grupo etario más afectado. Se estima que, en 2020, cerca de 2.4 millones de personas mayores de 65 años en Europa tenían algún tipo de discapacidad visual grave.
            </p>
            <p tabindex="4">
              Las personas con esta condición suelen enfrentar dificultades al leer textos pequeños, reconocer iconos, o navegar por interfaces gráficas complejas, lo que puede generar frustración y limitar su acceso a la información. Los usuarios con baja visión pueden tener que ajustar el tamaño de la fuente, usar tecnologías de lectura de pantalla o recurrir a software especializado para realizar tareas cotidianas en línea.
            </p>
            <p tabindex="5"> La falta de un diseño web accesible puede empeorar su experiencia, haciendo que la web sea menos intuitiva y dificultando su interacción con servicios en línea esenciales. Es fundamental que las páginas web y aplicaciones estén diseñadas para ser inclusivas, asegurando que las personas con baja visión tengan una experiencia de navegación fluida y sin barreras.
            </p>
          </b-col>
        </b-row>

          <!-- Cuentos -->
        <h2 class="titulosdetexto" tabindex="6">
            Ve lo que ellos ven
        </h2>
        <b-row  class="d-flex justify-content-center">          <!-- aplico btp para centrar el texto, al ocupar tan poco (10px) se distribuia diferente -->
          <p  class="malContraste" tabindex="7">
            Este texto es una simulación para que experimentes cómo sería la lectura de una persona con baja visión. Imagina que, al intentar leer, te enfrentas a un contraste débil entre el texto y el fondo, lo que dificulta que las letras sean claras. Los ojos deben hacer un esfuerzo adicional para distinguir las palabras, lo que provoca fatiga y dificulta la concentración. Esta simulación tiene como objetivo mostrar las dificultades diarias que enfrentan aquellas personas con problemas visuales al interactuar con textos en línea.
          </p>
          <p class="malTamaño" tabindex="8">
            Así es cómo una persona con baja visión percibe el tamaño de la tipografía al intentar leer.  En lugar de disfrutar de una lectura cómoda, te ves obligado a acercarte más a la pantalla o a hacer un esfuerzo constante para identificar cada palabra. Esta dificultad en la lectura debido al tamaño reducido de la tipografía es una barrera significativa para las personas con baja visión.
          </p>
        </b-row>

        <!--Empatizar-->
        <h2 class="titulosdetexto mt-4 mb-4" tabindex="9">
            Ponte en su lugar
          </h2>
        <section class="seccion-recuadro">
          <h3 class="textovisual" tabindex="10">Cuadro de busqueda con mal contraste</h3>
          <p class="textovisual" tabindex="11"> Así es como una persona con baja visión realiza sus busquedas habituales en internet. Es por ello que a veces se ven obligados a depender de otras personas.</p>
          <form action="" method="get">

            <p>
              <label for="textoBuscar" tabindex="12">Introduce terminos al buscador:</label>
              <input id="textoBuscar" type="text" maxlength="30" tabindex="13" role="textbox"/>
              <input id="botonBuscar" type="submit" value="Buscar"   class="btn btn-primary"  tabindex="14" role="textbox"/>
              <!-- <input type="image" src=".././assets/search-icon.png" width="25">        -->
            </p>
          </form>
        </section>
      </b-container>
    </div>
  </body>
</template>

<script>
export default {
  name: 'BajaVision',
  props: {}
}
</script>

<style scoped>
  .malContraste {
    color: rgb(0, 250, 0);
    margin-right: 5%;
    margin-left: 5%;
  }
  .malTamaño {
    font-size: 10px;
    margin-right: 5%;
    margin-left: 5%;
  }

  /* Estilos para la sección "Ponte en su lugar" */
  .seccion-recuadro {
    border: 2px solid grey; /* Borde azul */
    background-color: #f8f9fa; /* Fondo claro */
    padding: 20px; /* Espaciado interno */
    border-radius: 10px; /* Bordes redondeados */
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 5%;
    margin-left: 5%;
  }
  label {
  color: rgb(238, 238, 213); /* Puedes cambiar este valor al color que prefieras */
}

  #textoBuscar {
    border : 1px solid lightgray;
    padding : 0.02em;
    color    :#a9afb8;
    padding-right: 30px;
    font-size: 1rem;
    width: 100%;
    max-width: 400px; /* Limita el ancho máximo */
  }
  #botonBuscar {
  opacity: 0.5 !important; /* Asegura que el botón no tenga opacidad */
  margin-left: 10px; /* Añade un margen izquierdo de 5px */
}

/* Diseño responsivo para pantallas pequeñas */
@media (max-width: 768px) {
  .seccion-recuadro {
    padding: 15px; /* Reduce el padding en pantallas pequeñas */
  }}
</style>

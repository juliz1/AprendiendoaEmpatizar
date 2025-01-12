<template>
  <body>
    <div>
      <b-container fluid>
        <!-- Texto introductorio -->
        <b-row class="mb-4">
          <b-col>
            <h1 class="titulosdetexto" tabindex="1">
              Bienvenido a la sección visual
            </h1>

            <!-- Botón para activar la lectura por voz -->
            <div class="text-center mt-4  mb-4">
              <b-button @click="readText" variant="primary" tabindex="2" role="button">Leer en voz alta</b-button>
            </div>
            <!--descripcion pagina-->
            <h2 class="Visual-titulo-amarillo" tabindex="3">
              ¿Qué significa tener dificultades visuales?
            </h2>
            <h2 class="Visual-titulo-amarillo" tabindex="4">
              ¿Qué porcentaje de la sociedad vive con discapacidad visual?
            </h2>
          </b-col>
        </b-row>

        <div class="text-center mt-4 margenes-de-p">
          <h2  class="titulosdetexto" tabindex="5">Simulación de Daltonismo</h2>
          <p tabindex="6">Este ejercicio permite a los usuarios sin discapacidades experimentar cómo las personas con daltonismo perciben los colores. Al seleccionar un tipo de daltonismo, los colores originales de la pantalla se ajustan para reflejar cómo los ven las personas con esa condición visual, promoviendo una mayor empatía y comprensión.</p>
          <p tabindex="7">Selecciona un tipo de daltonismo para ver cómo cambia la percepción de los colores.</p>
          <!-- Selector para el tipo de daltonismo -->
          <b-form-select v-model="selectedFilter" :options="filterOptions" class=" barra-visual mb-3" role="listbox"></b-form-select>
          <!-- Zona de colores -->
          <div :style="{ filter: selectedFilter }" class="color-area">
            <div class="color-block bg-danger" tabindex="8">Rojo</div>
            <div class="color-block bg-success" tabindex="9">Verde</div>
            <div class="color-block bg-primary" tabindex="10">Azul</div>
            <div class="color-block bg-warning" tabindex="">Amarillo</div>
          </div>
        </div>
      </b-container>
    </div>
  </body>
</template>

<script> /* LECTOR DE VOZ HECHO PARA Q NO SE PUEDA PARAR PARA MOLESTAR MAS */
export default {
  data () {
    return {
      // Valor del filtro seleccionado
      selectedFilter: 'none',
      // Opciones de filtro
      filterOptions: [
        { value: 'none', text: 'Sin filtro' },
        { value: 'grayscale(100%)', text: 'Monocromía (sin colores)' },
        { value: 'hue-rotate(90deg)', text: 'Protanopía (simulación aproximada)' },
        { value: 'hue-rotate(-90deg)', text: 'Deuteranopía (simulación aproximada)' }
      ]
    }
  },
  methods: {
    // Método para leer todo el contenido de la página en voz alta
    readText () {
      // Verificar si speechSynthesis está disponible en el navegador
      if ('speechSynthesis' in window) {
        // Todo el contenido a leer en voz alta
        const text = `
          Bienvenido a la sección visual. Las personas con dificultades visuales enfrentan desafíos para percibir el entorno a través de la vista, que pueden variar desde una baja visión hasta ceguera total. Según la Organización Mundial de la Salud (OMS), más de 2.200 millones de personas en el mundo viven con algún tipo de discapacidad visual, y al menos 1.000 millones tienen una discapacidad visual que podría haberse prevenido o tratado. Este grupo abarca un rango diverso de necesidades y experiencias, desde quienes necesitan gafas correctivas hasta aquellos que dependen completamente de otros sentidos para interactuar con el mundo. 
          A nivel mundial, aproximadamente el 2-3% de la población tiene ceguera total, mientras que un 5-10% presenta una discapacidad visual moderada o severa. Estos números pueden variar significativamente según el acceso a atención médica, la edad y la región geográfica. Por ejemplo, las personas mayores y quienes viven en zonas con recursos limitados tienen más probabilidades de enfrentarse a problemas visuales no tratados.
          Este ejercicio permite a los usuarios experimentar cómo las personas con daltonismo perciben los colores. Al seleccionar un tipo de daltonismo, los colores originales de la pantalla se ajustan para reflejar cómo los ven las personas con esa condición visual, promoviendo una mayor empatía y comprensión.
          Selecciona un tipo de daltonismo para ver cómo cambia la percepción de los colores. 
          Las opciones disponibles son: Sin filtro, Monocromía (sin colores), Protanopía (simulación aproximada), y Deuteranopía (simulación aproximada).
        `

        // Crear un objeto SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(text)

        // Ajustar las opciones de la voz si es necesario
        utterance.lang = 'es-ES' // Seleccionamos el idioma español
        utterance.rate = 1 // Velocidad de la voz (puedes ajustarla)
        utterance.pitch = 1 // Tono de la voz (puedes ajustarlo)

        // Activar la lectura por voz
        speechSynthesis.speak(utterance)
      } else {
        alert('La síntesis de voz no está soportada en tu navegador.')
      }
    }
  }
}
</script>

<style>
/* Zona de colores */
.color-area {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.color-block {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 5px;
}
</style>

<style scoped>

.barra-visual:hover  {
  background-color: #8e8b8b;
  color: black;
}
</style>

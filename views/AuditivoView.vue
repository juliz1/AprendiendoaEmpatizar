<template>
  <body>
    <div  class="auditivo-section margenes-de-p">
      <b-container fluid>

        <!-- Texto introductorio -->
        <b-row class="mb-4 ">
          <b-col>
            <h1 class="titulosdetexto" tabindex="1">
              Bienvenido a la sección auditiva
            </h1>
            <h2 tabindex="2">
              Personas con dificultades auditivas: una parte importante de nuestra sociedad
            </h2>
            <p tabindex="3">
              Las personas con dificultades auditivas representan aproximadamente el 5% de la población mundial, según datos de la Organización Mundial de la Salud (OMS) publicados en 2021. Esto equivale a más de 430 millones de personas, y se espera que esta cifra aumente con el tiempo debido al envejecimiento de la población y a la exposición constante a ruidos altos en la vida diaria. En este grupo se incluyen personas con diferentes grados de pérdida auditiva, desde leve hasta profunda, así como aquellas que utilizan prótesis auditivas o implantes cocleares.
            </p>
            <p tabindex="4">
              Las dificultades auditivas pueden tener un impacto significativo en la vida diaria, desde la comunicación y las relaciones personales hasta el acceso a la educación y al empleo. Por eso, es esencial promover la inclusión y el entendimiento hacia las personas sordas o con pérdida auditiva, fomentando una sociedad más empática y accesible.
            </p>
            <h2 tabindex="5">
              Una sección pensada para todos
            </h2>
            <p tabindex="6">
              Si no tienes dificultades auditivas, también te invitamos a explorar esta sección. Hemos agregado un vídeo educativo para ayudarte a comprender mejor los retos que enfrentan las personas sordas. Tambien hemos inculido unos videos para que aprendas cuatro conceptos básicos de lengua de signos en lengua española, de esta forma podrás empezar a comunicarte con personas sordas o con pérdida auditiva.
            </p>
          </b-col>
        </b-row>

        <!-- Cuentos -->
        <h2 class="titulosdetexto" tabindex="7">
            Cuentos infantiles
          </h2>
        <b-row>
          <!-- Primer vídeo -->
          <b-col md="6" class="mb-4">
            <b-card title="Cuento '¿A qué sabe la luna?' en lengua de signos" class="text-center">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/MkrKhJNchKc"
                  allowfullscreen tabindex="8" role="link">
                </iframe>
              </div>
            </b-card>
          </b-col>

          <!-- Segundo vídeo -->
          <b-col md="6" class="mb-4">
            <b-card title="Cuento 'La flor multicolor' en lenguaje de signos" class="text-center">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/bXebglHrtHo"
                  allowfullscreen tabindex="9" role="link">
                </iframe>
              </div>
            </b-card>
          </b-col>
        </b-row>

        <!--Empatizar-->
        <h2 class="titulosdetexto mt-4 mb-4" tabindex="10">
            Ponte en sus zapatos
        </h2>
        <b-row class="justify-content-center">
          <b-col md="8">
            <b-card title="Un Mundo Sin...Sonido" class="text-center">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/IoMPD9Uf1HM"
                  allowfullscreen tabindex="11" role="link">
                </iframe>
              </div>
            </b-card>
          </b-col>
        </b-row>
        <!--Aprender-->
        <h2 class="titulosdetexto mt-4 mb-4" tabindex="12">
            Habla con ellos
        </h2>
        <b-row>
          <!-- Primer vídeo -->
          <b-col md="6" class="mb-4">
            <b-card title="Presentación y Cortesía -  Aprende LSE" class="text-center">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/bVqC_EvOLaI"
                  allowfullscreen tabindex="13" role="link">
                </iframe>
              </div>
            </b-card>
          </b-col>

          <!-- Segundo vídeo -->
          <b-col md="6" class="mb-4">
            <b-card title="Presentación y Cortesía II -  Aprende LSE" class="text-center">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/baVKHP8v370"
                  allowfullscreen tabindex="14" role="link">
                </iframe>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
</body>
</template>

<script>
export default {
  name: 'VideoSection'
}
</script>

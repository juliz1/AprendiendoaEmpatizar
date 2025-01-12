<template>
  <div id="app">
    <nav>
      <router-link to="/" role="link">Home</router-link> |  <!-- ESTA PAGINA ES LA PAGINA DE ABOUT (VALEN/MIA) -->
      <router-link to="/motrizview" role="link">Motriz </router-link>| <!-- ESTA PAGINA ES LA PAGINA DE MOTRIZ (VALEN/MIA) -->
      <router-link to="/visualview" role="link">Visual </router-link>| <!-- ESTA PAGINA ES LA PAGINA DE VISUAL (JULIA) -->
      <router-link to="/bajavisionview" role="link">Baja Visión </router-link>| <!-- ESTA PAGINA ES LA PAGINA DE VISUAL (JULIA) -->
      <router-link to="/auditivoview" role="link">Auditiva </router-link>|   <!-- ESTA PAGINA ES LA PAGINA DE AUDITIVO (JULIA) -->
      <router-link to="/cognitivoview" role="link">Cognitiva </router-link>|  <!-- ESTA PAGINA ES LA PAGINA DE COGNITIVO (VALEN/MIA) -->
      <router-link to="/aboutview" role="link">About</router-link>  <!-- ESTA PAGINA ES LA PAGINA DE ABOUT (VALEN/MIA) -->
    </nav>
    <router-view/>
    <footer>
  <div class="footer-content">
    <div class="footer-foto">
      <img :src="require('@/assets/discapacidad.png')" alt="Foto decorativa con personas variadas" class="image-right">
      <div class="footer-line"></div>
      <div class="social-icons">
        <a href="https://facebook.com" target="_blank" role="link">
          <img src="@/assets/facebook.png" alt="Facebook" class="social-icon">
        </a>
        <a href="https://twitter.com" target="_blank" role="link">
          <img src="@/assets/X.png" alt="Twitter" class="social-icon">
        </a>
        <a href="https://instagram.com" target="_blank" role="link">
          <img src="@/assets/instagram.png" alt="Instagram" class="social-icon">
        </a>
      </div>
      <div class="copyright">
        <a href="#">© 2025 Copyright</a>
      </div>
    </div>
  </div>
</footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color:white;
}

nav a.router-link-exact-active {
  color:yellow;
}

.footer-line {
    width: 100%;           /* Se extiende de un lado a otro de la página */
    border-top: 2px solid yellow; /* Línea fina, cambia el color y el grosor aquí */
    margin: 5px 0;           /* Ajusta el espacio superior e inferior de la línea */
  }
.titulosdetexto {
  margin-bottom:3%;
  color: yellow;
  text-decoration: underline;
}

h2,h3,p,ul,li {
  margin-bottom:3%;
  color: white;
}

body {
  background-color: black;
}

h1 {
margin-top: 5%;
}

.margenes-de-p p {
  margin-right: 5%;
  margin-left: 5%;
}
/*MOTRIZ PAGINA */
/*SKIPLINK*/
.skip-link {
  position: absolute;
  top: -40px; /* Coloca el enlace fuera de la vista */
  left: 10px;
  padding: 10px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  z-index: 1000;
}

ol {
    list-style-position: inside;
    padding-left: 0;
  }

  ol li {
    margin-bottom: 5px;
  }

.skip-link:focus {
  top: 10px;
}

/*textp y links*/
.motriz1ro {
  text-align: center;
  color: red;
  margin-bottom: 5%;
  width: 80%;
  margin-left: 8%;
}

.motriz-texto-margenes {
  margin-left: 5%;
}

.text-and-image {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1%;
}

.text-content {
  flex: 1;
}

@media (max-width: 768px) { /*MEDIAQUERIE TAMAÑO MOVIL*/
  .motriz-texto-margenes {
    text-align: left;
    width: 90%;
    box-sizing: border-box;
  }

  .text-and-image {
    display: block;
  }

  .text-content {
    font-size: 16px;
    line-height: 1.4;
    padding: 10px;
  }

  h1, h2, h3 {
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 10px;
    margin-right: 5%;
    margin-left: 5%;

  }

  ul {
    font-size: 16px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }

.seccionactividadmotriz {
  margin-left: 150%;
}
}

@media (min-width: 769px) and (max-width: 1024px) { /* Media query para pantallas de tamaño tablet (768px - 1024px) */
  .motriz-texto-margenes {
    text-align: left;
    width: 85%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .text-and-image {
    display: block;
    width: 100%;
  }

  .text-content {
    font-size: 18px;
    line-height: 1.5;
    padding: 15px;
  }

  h1, h2, h3 {
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 15px;
  }

  ul {
    font-size: 18px;
    padding-left: 25px;
  }

  li {
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
}

@media (min-width: 1279px) { /* PANTALLAS GRANDES */
  .motriz-texto-margenes {
    text-align: left;
    width: 70%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .text-and-image {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .text-content {
    font-size: 20px;
    line-height: 1.6;
    padding: 20px;
  }

  h1, h2, h3 {
    font-size: 24px;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  ul {
    font-size: 20px;
    padding-left: 30px;
  }

  li {
    margin-bottom: 15px;
  }

  p {
    font-size: 20px;
    margin-bottom: 25px;
  }
}

.seccionactividadmotriz {
  margin-left: 5%;
  margin-right: 17%;
}

.about-texto {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

a  {
  text-decoration: underline;
}

a:hover, a:focus  {
  color: yellow;
}
/*Actividad empatia*/
/* Animación de temblor*/
.links-motriz a {
  display: inline-block;
  transition: transform 0.3s ease;
}

.links-motriz a:hover,
.links-motriz a:focus {
  animation: temblor 0.5s ease;
}

/* La animación */
@keyframes temblor {
  0% { transform: translateX(0); }
  25% { transform: translateX(-20px); }
  50% { transform: translateX(20px); }
  75% { transform: translateX(-20px); }
  100% { transform: translateX(20px); }
}

/* INICIO FORMULARIO MOTRIZ */
.contenedor-principalMOTRIZ {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.formulariomotriz {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.formulariomotriz__formulario {
  max-width: 500px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.formulariomotriz__titulo h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: yellow;
}

.formulariomotriz__input,
.formulariomotriz__textarea {
  width: 100%;
  padding: 5%;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.formulariomotriz__textarea {
  height: 15rem;
  resize: none;
}

.formulariomotriz__boton .formulariomotriz__enviar {
  background-color: #007bff;
  color: white;
  padding: 8% 15%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.formulariomotriz__boton .formulariomotriz__enviar:hover,
.formulariomotriz__boton .formulariomotriz__enviar:focus {
  background-color: yellow;
  color: black;
}
/*BOTON AUTOGUARDADO*/
.formulariomotriz__autoguardado {
  position: absolute;
  margin-left: 40%;
}

.formulariomotriz__autoguardado-boton {
  background-color: red;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.formulariomotriz__autoguardado-boton:hover,
.formulariomotriz__autoguardado-boton:focus {
  background-color: green;
  color: white;
}

/* MEDIA QUERY PARA PANTALLAS DE MENOS DE 1000px */
@media (max-width: 1000px) {
  .formulariomotriz__autoguardado {
    position: relative;
    margin-left: 0;
    top: auto;
    bottom: 10px;
    right: auto;
    transform: none;
    width: 100%;
    text-align: center;
  }
}

/* CUADRADOS EMERGENTES MOTRIZ */
.tooltip-text {
  visibility: hidden;
  width: 60vw; /* Ancho del 60% de la ventana */
  height: 60vh; /* Alto del 60% de la ventana */
  background-color: rgb(255, 255, 255);
  color: red;
  display: flex; /*  Flexbox para centrar el texto */
  justify-content: center; /* Centrado horizontalmente */
  align-items: center; /* Centrado verticalmente */
  text-align: center;
  font-size: 3vw;
  font-weight: bold;
  border-radius: 10px;
  padding: 20px;
  position: fixed;
  z-index: 1000;
  top: 50%; /* Centrado verticalmente */
  left: 50%; /* Centrado horizontalmente */
  transform: translate(-50%, -50%); /* Centrado en general */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.tooltip-text span {
  animation: blinkText 1s infinite; /* animación solo para el texto */
}

/* Animación de parpadeo */
@keyframes blinkText {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Mostrar el cuadro al pasar el mouse o al pasar con el teclado */
.tooltip-container:hover .tooltip-text,
.tooltip-container:focus-within .tooltip-text {
  visibility: visible;
  opacity: 1;
}

.tooltip-container button {
  font-size: 20px;
  padding: 4% 8%;
  border-radius: 10px;
  background-color: red;
  color: rgb(0, 0, 0);
  cursor: pointer;
}

.tooltip-container button:hover {
  background-color: green;
}
/* FIN FORMULARIO MOTRIZ */

/* COGNITIVO INICIO */
.cognitivo h2,
.auditivo-section h2 {
color: yellow;
margin-top: 3%;
}
.cognitivo li strong {
  text-decoration: underline;
  color: red;
}
/*COGNITIVO  final*/
.footer__newslatter {
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.newsletter-label {
  margin-right: 10px;
  font-size: 16px;
  text-align: left;
}

.newsletter-input {
  margin-top: 5%;
  padding: 10px;
  width: 50vw;
  height: 10vh;
  margin-bottom: 10px;
  border-radius: 2%;
  text-align: left;
}

.footer__newslatter button {
  padding: 8% 15%;
  background-color: rgb(30, 138, 253);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5%;
  margin-top: 3%;
  margin-bottom: 50%;
  width: auto;
  align-self: center;
}

.footer__newslatter button:hover {
  background-color: green;
}

.footer-foto {
  width: 100%;
  margin-top: 15%;
}

/* BAJA VISION */
.textovisual {
  color: rgb(238, 238, 213);
}

/* VISUAL*/
.Visual-titulo-amarillo {
  color: red;
}

/* FOOTER GENERAL REDES/COPY Y IMGN */
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Alinea todo en el centro */
  justify-content: center;
  margin: 0 20px;
}

.footer-foto {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra los elementos dentro de .footer-foto */
}

.social-icons {
  margin-top: 3%;
  display: flex;
  gap: 20px; /* Espacio entre los iconos */
  margin-bottom: 10px; /* Espacio entre los iconos y el copyright */
}

.social-icon {
  width: 25px; /* Tamaño ajustado de los iconos */
  height: 25px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.9); /* Efecto hover */
}

.image-right {
  max-width: 50%; /* Imagen grande como antes */
  height: auto;
  margin-top: 20px; /* Ajusta el espacio entre la imagen y los iconos/copyright */
}

.copyright {
  font-size: 0.875rem;
  text-align: center;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .image-right {
    margin-left: 15%;
    margin-top: 20px;
    max-width: 70%;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .social-icons {
    margin-bottom: 15px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .image-right {
    margin-left: 10%;
    margin-top: 20px;
    max-width: 80%;
  }
}

@media (min-width: 1279px) {
  .image-right {
    margin-left: 15%;
    margin-top: 20px;
    max-width: 50%;
  }
}

.lista-reflexion {
  background: rgb(60, 60, 60);
  padding-top: 8%;
  padding-bottom: 8%;
  padding-left: 20%;
  padding-right: 20%;
  border-radius: 1%;
  margin-bottom: 5%;
}

.lista-reflexion li strong {
  color: yellow;
}

.amarillo-about {
  color: yellow;
  margin-bottom: 5%;
}
</style>

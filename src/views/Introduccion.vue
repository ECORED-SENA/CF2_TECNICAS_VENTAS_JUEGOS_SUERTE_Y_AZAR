<template lang="pug">
.curso-main-container.introduccion.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 
          i.fas.fa-info
      h1 Introducción

    
    p.mb-5 Para iniciar el desarrollo temático y conceptual de este componente formativo es importante tener un contexto sobre lo que se tratará en este, por tal motivo, a continuación, se presenta una breve introducción que lo enrutará en este aprendizaje
    
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo.mb-0.cs
    .row.p-3
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5  
    
    

   

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

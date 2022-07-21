<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Arqueo

    .row.justify-content-center.align-items-center.mb-5.bg_grad-05

      p.mb-5 Es la revisión, validación o comprobación de los movimientos realizados en efectivo en una jornada determinada, en síntesis, es la verificación de las entradas y salidas de dinero y que coincida con los registros de ventas y transacciones de ventas durante un lapso de tiempo.

      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-3(data-aos="fade-right") 
              img(src='@/assets/curso/images/tema6/img_1.png'  alt='')
            .col-lg-6(data-aos="fade-left") 
                p.mb-3  Al final de las jornadas diarias, como todo negocio, es necesario realizar cuentas, cierres y registrar el hecho en los sistemas de información disponibles, además se debe gestionar el recaudo como lo disponga cada red o comercializadora de juegos de azar.

                p.mb-3 En las capacitaciones específicas de cada empresa explican a su fuerza de venta los procedimientos y protocolos para estos reportes de cierre del día.

                p.mb-0 Estos procedimientos varían según la comercializadora de juegos de suerte y azar; sin embargo, todas incluyen, al menos, las siguientes tareas:

   
    .row.justify-content-center.align-items-center.bg_grad-06.p-4
      .col-lg-12(data-aos="zoom-in-down")
        figure
          img(src='@/assets/curso/images/tema6/img_2.svg')


























</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Cierre de la venta 

    p.mb-3 El objetivo de todo proceso de venta es el cierre, este se refiere a concretar la transacción entre el vendedor y el cliente, es el intercambio de productos y servicios a cambio de un valor monetario. 

    .row.justify-content-center.align-items-center.bg_grad-03
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10(data-aos="zoom-in-down")
          figure
            img(src='@/assets/curso/images/tema5/img_1.png')

      p.mb-5 Los pasos previos descritos durante este programa de formación están enfocados a llegar a que esta tarea se lleve a cabo.
  
      Separador 

      #t_5_1.titulo-segundo
        .h2 5.1. Algunos errores para cerrar la venta

      p.mb-5 Es importante tener en cuenta todos los consejos ya tratados a lo largo del componente; sin embargo, se puede complementar y reiterar la importancia de que el vendedor debe escuchar más de lo que habla. La información que se brinde al cliente depende del tipo de cliente. Tener en cuenta que no debe presionar al cliente, ni confundirlo con exceso de información o palabras que denotan acoso o persistencia para la compra.

      p.mb-3 A continuación algunos ejemplos de expresiones acosadoras:

      .row.justify-content-center.align-items-center  
        .col-lg-10
          .row.justify-content-center.align-items-center   
            .col-auto.onTop.p-3(data-aos="zoom-in-down")
              img(src="@/assets/curso/images/tema5/img_2.png" alt='AvatarTop', style="width:250px;").m-auto    
            .col-lg(data-aos="zoom-in-down")
              .custom_box_left-2
                ul.lista-ul
                  li 
                    i.fas.fa-check.c-check
                    | Este chance es el que mejor paga de todos.
                  li
                    i.fas.fa-check.c-check
                    | Este es el premio que necesita para salir de sus dificultades.
                  li 
                    i.fas.fa-check.c-check
                    | Si tiene problemas financieros esta es la apuesta perfecta.
                  li 
                    i.fas.fa-check.c-check
                    | Es mejor que se apresure, pues hoy mismo es el sorteo.
                  li 
                    i.fas.fa-check.c-check
                    | Hay muchas personas interesadas en comprar este servicio.
                  li 
                    i.fas.fa-check.c-check
                    | Es la mejor inversión que puede hacer.
    p.my-3 Cuando un vendedor cae en este “acoso” (muchas veces sin saberlo), el cliente inmediatamente lo percibe, se genera desconfianza y contrarresta esta situación marchándose del punto de venta, por lo cual una venta se ha perdido.

    p.mb0 Otro error es caer en la mala atención al cliente; sin embargo, este aspecto ya se ha visto en el apartado servicio al cliente.

    Separador 

    #t_5_2.titulo-segundo
      .h2 5.2. Prácticas para cerrar la venta

    .row.justify-content-center.align-items-center.mb-5  
        .col-lg-10
          .bloque-texto-g.color-custom-6.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
            .bloque-texto-g__img.m-left(data-aos="fade-left")(
          :style="{'background-image': `url(${require('@/assets/curso/images/tema5/img_3.png')})`}"
          )
            .bloque-texto-g__texto.p-5(data-aos="fade-right")
              p.mb-3 Las estrategias para cerrar la venta no se enfocan en la venta del producto, sino en cómo ayudar a un cliente con dudas a tomar una decisión; es normal que los clientes tengan temores en fallar en sus elecciones y quizás requieran enterarse de otras opciones de apuestas. Si bien hay clientes que pueden requerir más tiempo y trabajo, el vendedor siempre debe mostrarse positivo, con una actitud animada y amable. Es importante que el vendedor esté atento a las señales de compra. Los dos tipos de “señales de compra” que el cliente puede emitir son: verbales y no verbales (CEUPE, 2020).

          .bloque-texto-a.color-custom-7.p-md-0.mb-5.d-block.d-lg-none
            .row.m-4.align-items-center.justify-content-between
              .col-lg-9(data-aos="fade-right")
                .bloque-texto-a__texto.p-5.my-5
                  p Las estrategias para cerrar la venta no se enfocan en la venta del producto, sino en cómo ayudar a un cliente con dudas a tomar una decisión; es normal que los clientes tengan temores en fallar en sus elecciones y quizás requieran enterarse de otras opciones de apuestas. Si bien hay clientes que pueden requerir más tiempo y trabajo, el vendedor siempre debe mostrarse positivo, con una actitud animada y amable. Es importante que el vendedor esté atento a las señales de compra. Los dos tipos de “señales de compra” que el cliente puede emitir son: verbales y no verbales (CEUPE, 2020).
              .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
                figure
                  img(src='@/assets/curso/images/tema5/img_3.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;").mb-3

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-custom-8.p-4(data-aos="fade-right") 
        .row.justify-content-center.p-5.mb-4
          .col-12
            .h2.text-center Señales de compra verbales
            p.mb-3  Cuándo darse cuenta que el cliente está demostrando su interés real por la compra:
              ul.lista-ul--color.mt-3
                li 
                  i.fas.fa-check.c-check
                  p Inicie una serie de preguntas con respecto al producto.
                li 
                  i.fas.fa-check.c-check
                  p Pregunte por otras opciones, esto lo hace porque quiere asegurar su decisión. 
                li
                  i.fas.fa-check.c-check
                  p Pregunte por descuentos y otras opciones para efectuar el pago. 
            figure
              img(src='@/assets/curso/images/tema5/img_4.png')

      .col-md.tarjeta.color-custom-9.p-4(data-aos="fade-left")
        .row.justify-content-center.p-5.mb-5
          .col-12
            .h2.text-center Señales de compra no verbales
            p.mb-3 Se refiere a los gestos y lenguaje corporal que el cliente usa. Estar pendiente del movimiento de manos, si está inquieto o tranquilo, aburrido o interesado.
            p.mb-2 Si frente a un producto adopta posición de aceptación  o por el contrario, si algo no le gusta, por lo general, también su cuerpo lo hará notar. 
            p.mb-5 Para estos casos hay que estar muy atentos para comprender las señales y de manera apropiada ser lo más acertado posible. 
            figure
              img(src='@/assets/curso/images/tema5/img_5.png')
      
    Separador 

    #t_5_3.titulo-segundo
      .h2 5.3. Tipos de cierre
    
    p.mb-3 Una vez el vendedor haya logrado ganar la atención del cliente y este se sienta motivado a adquirir el producto es el momento de no dilatar el proceso para evitar que se disperse el cliente y no compre el producto, es así que es supremamente importante lograr el cierre de la venta. Por ello, el vendedor debe estar preparado para abordar a su cliente ante diferentes situaciones que se puedan presentar en este preciso momento. Una palabra, un gesto por parte del vendedor puede variar la intención del comprador. 

    .row.justify-content-center.align-items-center.bg_grad-04

      p.mb-5 A continuación se presentan algunas situaciones que se evidencian en un cierre de ventas:

      AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-up")
        div(titulo="Cierre directo")
          .row.align-items-star.justify-content-center.p-4
            .col-lg-5
              img(src='@/assets/curso/images/tema5/img_6.png')
            .col-lg-7
              p.mb-0 Cuando hay aceptación del cliente y se confirma la transacción de venta. Este es el tipo de cierre más deseado por el vendedor, ya que no genera incertidumbre y no hay que reforzar con otro tipo de variables la decisión de la compra. 
          

        div(titulo="Cierre presuntivo")
          .row.align-items-star.justify-content-center.p-4
            .col-lg-5
              img(src='@/assets/curso/images/tema5/img_7.png')
            .col-lg-7
              p.mb-3 Sucede cuando un cliente tiene dudas para decidir qué comprar, un ejemplo de este cierre es que en medio del diálogo de negociación el vendedor le pregunta al cliente el número por el cual desea apostar y este le indica el número; si bien no está concreto el hecho de la venta, el cliente ha aceptado implícitamente la compra de la apuesta; pero luego se debe cerrar la venta, para que el cliente no se arrepienta. 

        
        div(titulo="Hacer desear")
          .row.align-items-star.justify-content-center.p-4
            .col-lg-5
              img(src='@/assets/curso/images/tema5/img_8.png')
            .col-lg-7
              p.mb-3 Privar al cliente de la posesión del producto, desarrollando en él un sentimiento de frustración que aumenta el deseo de poseerlo (CEUPE, 2020). Un ejemplo de este tipo de cierre es “solo me queda uno”, “ya pronto llegará el momento del cierre del sorteo y no se podrá vender más”, “para la próxima semana, el precio será más alto”, entre otros ejemplos que pueden utilizarse, si la situación lo amerita.

        div(titulo="Motivar la posibilidad de ganar")
          .row.align-items-star.justify-content-center.p-4
            .col-lg-5
              img(src='@/assets/curso/images/tema5/img_9.png')
            .col-lg-7
              p.mb-3 El cliente ya tiene la predisposición y deseo de ganar, es importante motivar (sin entrar al engaño) sobre las posibilidades de ganar y el monto que se sorteará en determinadas apuestas.
          

        div(titulo="Cierre por oferta")
          .row.align-items-star.justify-content-center.p-4
            .col-lg-5 
              img(src='@/assets/curso/images/tema5/img_10.png')
            .col-lg-7
              p.mb-3 Cuando hay rebajas o premios especiales, así como obsequios, se le debe motivar al cliente haciéndole saber que las ofertas son limitadas y que es una oportunidad que no debería dejar pasar.

     














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

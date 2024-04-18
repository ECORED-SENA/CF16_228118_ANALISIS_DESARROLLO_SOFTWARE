<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Estructuras de navegación
    .row.mb-5
      .col-lg-8.bg-c13.pe-lg-0.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c11
            .p-3
              p Los servicios ideales ofrecidos por una aplicación móvil o cualquier sitio web brindan al usuario la capacidad de navegar de un punto a otro dentro del mismo entorno, e incluso hacia otros entornos, facilitando el acceso directo a información, acciones, servicios, y materiales, entre otros aspectos. Las estructuras de navegación se clasifican en tres tipos: #[b lineales, jerárquicas y aleatorias].
      .col-lg-4.bg-c12.ps-lg-0.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img1.png', style="width:410px" alt='').m-auto
    .row.align-items-center
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img2.png', style="width:290px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        .row
          .col-12.bg-c30
            .p-4
              p.mb-0 #[b Estructuras lineales]
              p.mb-0 Generan una lectura secuencial y son usadas para tareas muy bien definidas. Por ejemplo, los tutoriales que muchos programas y apps ejecutan en su primera ejecución para instruir al usuario sobre su funcionamiento.
          .col-12.bg-c31
            .p-4
              p.mb-0 #[b Estructuras jerárquicas]
              p.mb-0 Permiten elegir un número de opciones antes de pasar al siguiente nivel, el cual también presenta diferentes opciones. Ofrecen una organización lógica y secuencial que facilita la identificación de la información de manera sencilla. Se adaptan según las necesidades de diseño.
          .col-12.bg-c30
            .p-4
              p.mb-0 #[b Estructuras aleatorias]
              p.mb-0 Utilizadas especialmente en el diseño de videojuegos o sistemas abiertos de interacción, donde el aprendizaje es complejo. Por ejemplo, al cargar una imagen o un escenario diferente en cada actualización de la pantalla, ya sea luchando contra el sistema o contra otros jugadores en red.

</template>

<script>
export default {
  name: 'Tema6',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Usabilidad y funcionalidad de las aplicaciones
    p.mb-5 Para diseñar una interfaz gráfica eficaz para aplicaciones móviles, es esencial entender y aplicar ciertos parámetros importantes que han demostrado mejorar tanto el rendimiento como la usabilidad. Estos son:
    .row.bg-c21
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10.bg-c4.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/img1.svg', style="width:170px" alt='').m-auto
                  .col
                    p.mb-0 #[b Eficacia o efectividad]
                    p.mb-0 La aplicación se considera efectiva cuando los usuarios logran alcanzar y completar los objetivos específicos para los que fue desarrollada. Se mide mediante la tasa de errores detectados y la cantidad de soluciones ofrecidas.
            .col-lg-10.bg-c4.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/img2.svg', style="width:170px" alt='').m-auto
                  .col
                    p.mb-0 #[b Eficiencia]
                    p.mb-0 Se refiere a la relación entre el esfuerzo empleado y la precisión y certeza con las que los usuarios logran realizar sus actividades. La eficiencia busca minimizar los esfuerzos y recursos utilizados mientras se maximiza el rendimiento. Se puede valorar a través del tiempo necesario para completar una tarea y el tiempo de aprendizaje.
            .col-lg-10.bg-c4
              .p-3
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src='@/assets/curso/tema3/img3.svg', style="width:170px" alt='').m-auto
                  .col
                    p.mb-0 #[b Satisfacción]
                    p.mb-0 Representa la respuesta positiva de los usuarios ante la correcta y eficiente ejecución de las actividades propuestas por la aplicación. Se puede medir mediante la frecuencia de uso del producto y las reacciones positivas hacia su uso.
          p.mb-5 Para conocer con más detalle, los principios que regulan la usabilidad y funcionalidad de una interface para páginas web y dispositivos móviles, le invitamos a revisar el siguiente recurso:
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          .row.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/intro/img1.png', style="width:320px" alt='').m-auto
            .col-lg-9(data-aos="fade-left")
              p Para iniciar el desarrollo de una aplicación, lo primero que se debe hacer es definir a quiénes estará dirigida. Este proceso proporcionará una base sólida para las labores de diseño, ya que será un trabajo centrado en el usuario. Se deberán considerar las necesidades que se pretenden cubrir, #[b las edades y las características del público; definir la interfaz de usuario es una de las actividades más complejas]. Para ello, es fundamental una excelente planeación y un conocimiento correcto y profundo de sus componentes, con el fin de lograr el éxito deseado de la aplicación. Además, es necesario tener claridad sobre todas las variables que se van a utilizar, comprendiendo que un solo error, falla, falencia o recurso mal utilizado puede generar inconvenientes para el correcto funcionamiento.
              .row
                .col-12.bg-c2
                  .p-3
                    .row.align-items-center
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src='@/assets/curso/intro/img1.svg', style="width:70px" alt='').m-auto
                      .col
                        p.mb-0 El desarrollo exitoso de una aplicación requiere una serie de pasos críticos que van desde la comprensión del mercado hasta el diseño técnico detallado. A continuación, se presentan los elementos clave en este proceso, que garantizan no solo el cumplimiento de los objetivos y expectativas de los usuarios, sino también la eficiencia y efectividad en el lanzamiento y funcionamiento de la aplicación.
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-10.bg-c3.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/intro/img2.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Identificar eI público objetivo.
            .col-lg-10.bg-c4.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/intro/img3.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Realizar un análisis detallado de los requisitos de la aplicación, comprendiendo profundamente las funcionalidades necesarias para satlúcer las necesidades y expectativas de los usuarios.
            .col-lg-10.bg-c3.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/intro/img4.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Recoger feedback de potenciales usuarios a través de entrevistas, encuestas o pruebas de concepto, 10 que garantiza que las características planeadas estén alineadas con las demandas del mercado y resuelvan problemas reales de los usuarios.
            .col-lg-10.bg-c4.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/intro/img5.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Establecer prioridades entre las civersas funcionalidades para enfocarse en aquellas que ofrecen mayor valor al voyecto desde su lanzamiento.
            .col-lg-10.bg-c3.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/intro/img6.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Proceder con el ciseño técnico de la aplicación, incluyendo la arquitectura de #[i software], la selección de tecnologías y herramientas de desarrollo, y la planificación de las etapas de construcción y pruebas.
            .col-lg-10.bg-c4.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/intro/img7.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Adoptar metodologíass que permitan iteraciones rápidas, flexibilidad en el desarrollo y adaptabilidad ante cambios o nuevos requerimientos.
            .col-lg-10.bg-c3.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/intro/img8.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 Practicar la integración y la entrega continua para mantener la calidad del #[i software] y acelerar el tiempo de lanzamiento al mercado.
    
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

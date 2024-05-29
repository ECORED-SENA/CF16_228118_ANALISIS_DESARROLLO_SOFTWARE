<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Diseño centrado en el usuario
    p.mb-4(data-aos="fade-right") Los patrones estructurales proveen una orientación relacionada a la forma de definir los componentes de los objetos. Dentro de los patrones estructurales se encuentran:
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c4
            .p-3
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src='@/assets/curso/tema4/img1.svg', style="width:130px" alt='').m-auto
                .col
                  p.mb-0 Contar con información previa sobre las necesidades de consumo, estilos y tendencias en el plano tecnológico, entre otras, son factores clave en el diseño centrado en el usuario. Esta información es relevante para la fase de producción y soluciones de diseño. En ella, por ejemplo, se determina cómo será la estructura principal de la aplicación, definiendo cada una de las funciones y tareas que debe realizar la aplicación móvil para cumplir con los requerimientos solicitados e identificados con el cliente o los usuarios.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img1.png', style="width:250px" alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Fases del diseño de las aplicaciones
    p.mb-5(data-aos="fade-right") Existen cuatro fases establecidas para el diseño de aplicaciones móviles, definidas por la norma ISO 13407, que integran el proceso del DCU, diseño centrado en el usuario y que están, además, concebidas bajo seis principios que deben caracterizar una interfaz centrada en el usuario. Las dos primeras fases tienen especial intención de documentar las necesidades y requerimientos del usuario.
    .row.align-items-center.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right").d-none.d-lg-block
        figure.m-0
          img(src='@/assets/curso/tema4/img2.svg', style="width:350px" alt='').ml-auto
      .col-9.col-lg-5(data-aos="fade-left")
        <ul class="list-group">
          <li class="list-group-item purple-ligth"><p class='py-2 mb-0 text-bold'>Comprender y hacer específico el contexto de uso.</p></li>
          <li class="list-group-item gray-blue"><p class='py-2 mb-0 text-bold'>Especificar los requisitos de usuario y de la organización.</p></li>
          <li class="list-group-item purple-ligth"><p class='py-2 mb-0 text-bold'>Producir soluciones de diseño.</p></li>
          <li class="list-group-item gray-blue"><p class='py-2 mb-0 text-bold'>Evaluar los diseños en base a los requisitos.</p></li>
        </ul>
      .col-2.col-lg-1
        figure
          img(src='@/assets/curso/tema4/arrow_down_short.svg', style="max-width: 34px", alt='La figura presenta las fases establecidas para el diseño de aplicaciones móviles, estas son: Comprender y hacer específico el contexto de uso. Especificar los requisitos de usuario y de la organización. Producir soluciones de diseño. Evaluar los diseños en base a los requisitos.').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Principios del diseño centrado en usuarios
    p.mb-5(data-aos="fade-right") Los seis principios que deben caracterizar una interfaz centrada en el usuario apuntan, sin lugar a dudas, a una satisfacción plena del usuario con las aplicaciones que tenga a su disposición.
    .row.mb-5
      .col-12.bg-c22(data-aos="fade-down")
        .p-4
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 1]. Principios que caracterizan al DCU
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema4/img4.svg', style="width:1050px" alt='La figura presenta los principios que caracterizan al diseño centrado en el usuario, estos son: Planificación. Evaluación. Especificación de requisitos. Cumple con los requerimientos. Especificación del contexto de uso. Genera la solución del diseño.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema4/img4m.svg', style="width:350px" alt='La figura presenta los principios que caracterizan al diseño centrado en el usuario, estos son: Planificación. Evaluación. Especificación de requisitos. Cumple con los requerimientos. Especificación del contexto de uso. Genera la solución del diseño.').m-auto
    p.mb-5(data-aos="fade-right") Esta responsabilidad hacia las personas que utilizan los teléfonos inteligentes y los servicios de las aplicaciones responde también a las demandas de la dinámica de consumo actual. Se vincula con la creciente oferta de servicios que conectan a los individuos con el mundo, con otras personas y con sus intereses, y que, además, dinamizan y facilitan su vida y actividades diarias.
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Técnicas para el diseño centrado en usuarios
    .row.align-items-center.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Conocer y comprender las necesidades, limitaciones, comportamientos y características de los usuarios, junto con el modelo de las tres etapas (análisis, diseño y evaluación)  desarrollado en cuatro fases específicas, abre la puerta a la consideración de técnicas para un diseño óptimo de aplicaciones centradas en el usuario.
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img5.svg', style="width:280px" alt='').m-auto
    TabsA.color-acento-botones.mb-5(data-aos="fade-down")
      .tarjeta.color-acento-contenido.p-4(titulo="Conocimiento directo y real")
        .row
          .col-12
            figure.mb-4
              img(src='@/assets/curso/tema4/img7.svg', style="width:100px" alt='')
            p #[b Conocimiento directo y real]
            p.mb-0 El diseño se enfoca en el conocimiento directo y real de los usuarios, las tareas a realizar y el entorno. Es crucial comprender a los usuarios y el contexto en el que se utilizará el sistema.
      .tarjeta.color-acento-contenido.p-4(titulo="Usuarios involucrados")
        .row
          .col-12
            figure.mb-4
              img(src='@/assets/curso/tema4/img8.svg', style="width:100px" alt='')
            p #[b Usuarios involucrados]
            p.mb-0 Los usuarios participan activamente en el diseño y desarrollo, involucrándose directamente en todas las fases del proceso, más allá de la realización de grupos focales o encuestas.
      .tarjeta.color-acento-contenido.p-4(titulo="Evaluación centrada en el usuario")
        .row
          .col-12
            figure.mb-4
              img(src='@/assets/curso/tema4/img9.svg', style="width:100px" alt='')
            p #[b Evaluación centrada en el usuario]
            p.mb-0 El diseño se refina mediante la evaluación centrada en el usuario, realizando pruebas a lo largo de todo el proceso de diseño, incluyendo los diseños preliminares y prototipos.
      .tarjeta.color-acento-contenido.p-4(titulo="Proceso interactivo")
        .row
          .col-12
            figure.mb-4
              img(src='@/assets/curso/tema4/img10.svg', style="width:100px" alt='')
            p #[b Proceso interactivo]
            p.mb-0 Definir las necesidades de los usuarios puede ser complejo, por lo que el proceso implica mostrar opciones iniciales y refinarlas basándose en la retroalimentación.
      .tarjeta.color-acento-contenido.p-4(titulo="Consideración de las emociones del usuario")
        .row
          .col-12
            figure.mb-4
              img(src='@/assets/curso/tema4/img11.svg', style="width:100px" alt='')
            p #[b Consideración de las emociones del usuario]
            p.mb-0 El diseño debe abarcar toda la experiencia del usuario, incluyendo los aspectos de percepción y emoción, buscando no solo la usabilidad sino también una conexión emocional.
      .tarjeta.color-acento-contenido.p-4(titulo="Participación de expertos")
        .row
          .col-12
            figure.mb-4
              img(src='@/assets/curso/tema4/img12.svg', style="width:100px" alt='')
            p #[b Participación de expertos]
            p.mb-0 El equipo de diseño incluye habilidades y perspectivas multidisciplinares, integrando conocimientos de diseñadores, programadores, expertos en accesibilidad, marketing y usuarios finales.
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Ventajas
    p.mb-5(data-aos="fade-right") El diseño por fases y la observancia de los principios del diseño centrado en el usuario promueven un alto nivel de satisfacción de las expectativas, no solo para los usuarios de las aplicaciones y sus servicios, sino también para las compañías u operadores que las ofrecen. Sin embargo, existen algunas ventajas que se manifiestan previamente a la oferta y uso de la aplicación móvil.
    .row.bg-c9
      .col-12
        .p-5
          .row
            .col-12(data-aos="fade-left")
              .p-5.bg-c10
                SlyderA(tipo="b")
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0
                      p #[b Indagación]
                      p.mb-0 Se realiza en la etapa de especificación del contexto de uso y de los requisitos, contextualizando el uso e identificando los requerimientos. Se enfoca en el levantamiento de información para definir las características principales del producto o servicio. Se trabaja con métodos cualitativos (observación, entrevistas, dinámicas de grupo) y cuantitativos (encuestas y cuestionarios).
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema4/img2.png', style="width:380px" alt='').m-auto
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0
                      p #[b Diseño conceptual]
                      p.mb-0 Parte de la recolección y análisis realizado en la indagación. Permite entender y analizar las características de los usuarios y sus necesidades, definiendo el uso que le darán a la aplicación móvil. Esta información es importante porque orienta el diseño que se debe implementar para suplir la necesidad.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema4/img3.png', style="width:380px" alt='').m-auto
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0
                      p #[b Diseño de prototipos]
                      p.mb-0 En esta fase, se elaboran los prototipos de baja y alta resolución, actividades propias de los diseñadores. Estos diseños permiten visualizar la solución de la interfaz. Los conocimientos sobre comunicación, semiótica y retórica son relevantes.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema4/img4.png', style="width:380px" alt='').m-auto
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0
                      p #[b Inspección y test con usuarios]
                      p.mb-0 Se utilizan pruebas de usabilidad y #[i tests] de navegación aplicados a los usuarios, que permiten obtener información sobre los diseños para mejorarlos y validarlos.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema4/img5.png', style="width:380px" alt='').m-auto

</template>

<script>
export default {
  name: 'Tema4',
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

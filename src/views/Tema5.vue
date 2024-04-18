<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Análisis jerárquico de tareas
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p El Análisis Jerárquico de Tareas (HTA) facilita el establecimiento y la descripción detallada de las acciones a realizar de forma secuencial, identificando y detallando cada tarea y actividad, con un enfoque en las operaciones y procedimientos.
        .row
          .col-12.bg-c4
            .p-3
              p.mb-0 Se anticipa que, mediante la realización de una serie de tareas específicas, individuos, programas u organizaciones lograrán alcanzar ciertos objetivos o metas. Además, el HTA considera la creación de un entorno adecuado y efectivo para llevar a cabo las acciones planificadas. El diseño de aplicaciones móviles, el desarrollo de interfaces y todos los elementos que componen el proceso de programación también se benefician de este análisis.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img1.svg', style="width:360px" alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Secuencia
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img1.png', style="width:370px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Una secuencia es un conjunto de elementos organizados en un orden específico, uno tras otro. Generalmente, estas secuencias se presentan como un conjunto de información ordenada. Desde esta perspectiva, se identifican tres variables de una secuencia: selección, iteración y tarea unitaria. La selección implica elegir una tarea dentro de un conjunto de tareas. La Iteración se refiere a la repetición de un subconjunto de tareas. Finalmente, la tarea unitaria describe una actividad única sin actividades subordinadas.
        p.mb-0 En el contexto de la programación de aplicaciones para dispositivos móviles, la secuencia aborda las siguientes necesidades de información:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-10.col-md-8.col-lg.bg-c23.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema5/img2.svg', style="width:100px" alt='').m-auto
          p.text-center #[b Necesidad de información concreta]
          p.text-center.mb-0 ¿Cuál es el costo de este producto?
      .col-10.col-md-8.col-lg.bg-c23.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema5/img3.svg', style="width:100px" alt='').m-auto
          p.text-center #[b Necesidad de información orientada a problemas]
          p.text-center.mb-0 ¿Qué relación existe entre la usabilidad y la arquitectura de información?
      .col-10.col-md-8.col-lg.bg-c23.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema5/img4.svg', style="width:100px" alt='').m-auto
          p.text-center #[b Necesidad de información exploratoria]
          p.text-center.mb-0 Quiero encontrar un buen hotel para este fin de semana.
      .col-10.col-md-8.col-lg.bg-c23.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema5/img5.svg', style="width:100px" alt='').m-auto
          p.text-center #[b Necesidad de información sobre búsquedas previas]
          p.text-center.mb-0 Localizar informa.
    .row.bg-c24.mb-5
      .col-12
        .px-5
          .row.mb-4(data-aos="fade-down")
            .col-auto.bg-c7
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Perceptiva
          .row
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              p La percepción se refiere a todos los elementos que forman parte de la configuración del entorno, como los colores, tipografías, logotipos y otros elementos gráficos que componen la interfaz. La percepción puede ser funcional, jerárquica o secuencial. Es funcional en cuanto a la atribución de roles que desempeñan dichos elementos, es decir, su propósito. Es jerárquica al diferenciar entre elementos prescindibles y esenciales dentro de un conjunto de actividades. Finalmente, es secuencial en cuanto recoge información del flujo normal y lógico del proceso, ofreciendo al usuario una secuencia para completar una actividad.
              p Los pasos básicos para crear una estructura o arquitectura de información incluyen:
              .row
                .col-12.bg-c25
                  .p-3
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema5/img8.svg', style="width:80px" alt='').m-auto
                      .col
                        p.mb-0 #[b 1. Revisión del material previo]
                        p.mb-0 Una exploración de los requerimientos y una investigación de los productos similares al producto a diseñar. Las pistas acerca de cómo funcionan las cosas proceden de su estructura visible: en particular, de sus prestaciones y limitaciones y de su topografía.
                .col-12.bg-c26
                  .p-3
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema5/img9.svg', style="width:80px" alt='').m-auto
                      .col
                        p.mb-0 #[b 2. Identificación de objetos]
                        p.mb-0 Es importante identificar cada uno de los componentes gráficos y de información que contendrá la aplicación móvil, generando una lista ordenada y clasificada por elementos a utilizar.
                .col-12.bg-c27
                  .p-3
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema5/img10.svg', style="width:80px" alt='').m-auto
                      .col
                        p.mb-0 #[b 3. Evaluación del contenido]
                        p.mb-0 Fundamental realizar una revisión previa de los objetos clasificados, generando un inventario que servirá también como un repositorio de los elementos que componen el diseño.
                .col-12.bg-c28
                  .p-3
                    .row.align-items-center
                      .col-md-auto
                        figure
                          img(src='@/assets/curso/tema5/img11.svg', style="width:80px" alt='').m-auto
                      .col
                        p.mb-0 #[b 4. Aplicar la técnica de #[i card sorting]]
                        p.mb-0 Los resultados de esta técnica suelen ser representados en dendrogramas, una representación gráfica o diagrama de datos, en forma de árbol, que organiza los datos en subcategorías que se van dividiendo en otras hasta llegar al nivel de detalle deseado.
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema5/img7.svg', style="width:320px" alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white La hipermedia
    p.mb-5(data-aos="fade-right") La hipermedia se comprende como una estructura asociada con la recuperación de información y el diseño de sistemas de búsqueda, ayuda y navegación. Estos sistemas representan las estrategias disponibles para el usuario con el fin de localizar la información, asimilarla y, posteriormente, reformular su necesidad hasta considerar que ha sido satisfactoriamente resuelta.
    .row
      .col-auto.pe-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img2.png', style="width:250px" alt='').m-auto
      .col.bg-c29(data-aos="fade-left")
        .p-3
          .row.align-items-center.mb-2
            .col-md-auto
              figure
                img(src='@/assets/curso/tema5/img12.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 #[b Búsqueda]
              p.mb-0 El usuario emplea la función de búsqueda para analizar e interactuar con los resultados obtenidos.
              .hr2
          .row.align-items-center.mb-2
            .col-md-auto
              figure
                img(src='@/assets/curso/tema5/img13.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 #[b Navegación]
              p.mb-0 Ocurre cuando el usuario explora el contenido a través de enlaces hipertextuales.
              .hr2
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema5/img14.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 #[b Ayuda]
              p.mb-0 Es crucial desarrollar herramientas que briden al usuario la posibilidad de obtener asistencia. Estas herramientas deben ofrecer orientación, indicando dónde se encuentra el contenido necesario o cuál es el procedimiento a seguir para alcanzar un objetivo.
              .hr2

</template>

<script>
export default {
  name: 'Tema5',
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

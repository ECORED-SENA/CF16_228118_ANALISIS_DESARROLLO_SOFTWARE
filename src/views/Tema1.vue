<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Interfaz
    p.mb-5(data-aos="fade-right") Una interfaz facilita la comunicación entre un sistema informático implementado en un dispositivo electrónico y su usuario. Este término deriva del inglés #[i interface], que se traduce como "superficie de contacto".
    .row.mb-5
      .col-12.bg-c5
        .row.align-items-center.justify-content-center
          .col-md-8.col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img2.svg', style="width:220px" alt='').m-auto
          .col-md-8.col-lg-8(data-aos="fade-left")
            p.mb-0 #[b Su objetivo es proporcionar una herramienta que, de manera intuitiva, permita visualizar, introducir y editar información, creando así un mecanismo de interacción fácil de usar.]
    p.mb-5(data-aos="fade-right") Los tipos de interfaz de usuario son:
    .row.bg-c6
      .col-12
        .px-5
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Interfaces de usuario]
                    p.text-center.mb-0 La comunicación entre el usuario y un sistema informático implementado en un dispositivo electrónico, como la pantalla de un smartphone, es un ejemplo de interfaz de usuario. Esta permite una interacción directa y visual con el sistema.
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Interfaces físicas]
                    p.text-center.mb-0 La conexión física entre dos o más dispositivos, como los puertos USB en las computadoras, facilita el intercambio de datos y energía entre ellos, funcionando como una interfaz física.
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img5.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Interfaces lógicas]
                    p.text-center.mb-0 Permite realizar comunicaciones entre dos o más programas mediante #[i software] que gestiona protocolos de interacciones lógicas, como una API (Interfaz de Programación de Aplicaciones), sirve como una interfaz de #[i software].
          .row.mb-4(data-aos="fade-down")
            .col-auto.bg-c7
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Interfaz de usuario
          .row.align-items-center.mb-5
            .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
              p.mb-0 La interfaz de usuario, o el #[i frontend] de aplicaciones móviles, programas y páginas web, actúa como mediador entre el usuario y los dispositivos electrónicos como computadoras, smartphones o cualquier dispositivo que ejecute #[i software]. Su función principal es proporcionar un entorno visual, integrado por #[b gráficos, imágenes, iconos y animaciones], que facilita la integración, visualización y comprensión de la información que ofrece la aplicación, además de generar #[b las herramientas necesarias para la interacción].
            .col-lg-2.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img7.svg', style="width:220px" alt='').m-auto
          .row.justify-content-center.mb-5
            .col-lg-10.bg-c8(data-aos="fade-down")
              .p-3.p-lg-0
                .row.align-items-center
                  .col-lg-3.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img8.svg', style="width:380px" alt='').m-auto
                  .col-lg-7
                    p.mb-0 La interfaz de usuario (UI) se define también como el conjunto de elementos gráficos que facilitan la interacción, funcionando como controles y canales a través de los cuales los usuarios se comunican con el dispositivo electrónico. En el diseño de aplicaciones móviles, es crucial desarrollar una interfaz de usuario que promueva una transferencia de información fluida y sencilla entre el usuario y la aplicación, asegurando así una navegabilidad e interacción óptima.
          .row.align-items-center.mb-5(data-aos="fade-right")
            .col-auto.d-none.d-md-block
              figure
                img(src='@/assets/curso/tema1/img10.svg', style="width:70px" alt='').m-auto
            .col
              p.mb-0 Existen diversas categorías de interfaces de usuario, clasificadas según la forma en que facilitan la interacción entre el usuario y la máquina. Las interfaces gráficas son comúnmente reconocidas, pero hay otros tipos de interacción que se detallan a continuación:
    .row.bg-c9.mb-5
      .col-12
        .p-5
          .row
            .col-12(data-aos="fade-down")
              .p-5.bg-c10
                SlyderA(tipo="b")
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0
                      p #[b Interfaz gráfica]
                      p.mb-0 Ofrece visualización de información en pantalla. La mayoría de los programas cuentan con una interfaz visual que facilita la interacción con el usuario, permitiendo la visualización, introducción y manipulación de datos.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema1/img3.png', style="width:380px" alt='').m-auto
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0
                      p #[b Interfaz de Voz (VUI)]
                      p.mb-0 Son programas diseñados para identificar e interpretar el habla humana. Ejemplos notables en el mercado incluyen Siri y Cortana, que mediante el uso de inteligencia artificial, pueden comprender órdenes y responder preguntas de los usuarios de manera efectiva.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema1/img4.png', style="width:380px" alt='').m-auto
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0
                      p #[b Interfaz de texto]
                      p.mb-0 Una interfaz simple que permite visualizar y entregar información mediante una pantalla o línea de comando. Generalmente se usa en entornos de programación de bajo nivel, así como en la configuración y operación de sistemas operativos.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema1/img5.png', style="width:380px" alt='').m-auto
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0
                      p #[b Interfaz natural]
                      p.mb-0 Captura e interpreta movimientos del cuerpo humano, convirtiéndolos en acciones interpretadas como órdenes. Es popular en videojuegos que permiten este tipo de interacción a través de interfaces kinésicas y se está extendiendo a entornos de realidad virtual y realidad aumentada.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema1/img6.png', style="width:380px" alt='').m-auto
                  .row.justify-content-center
                    .col-lg-5.mb-4.mb-lg-0
                      p #[b Interfaz cerebro-ordenador]
                      p.mb-0 Tecnología en desarrollo, con numerosas investigaciones en curso, especialmente en el ámbito médico. Se utiliza para permitir a pacientes con prótesis biónicas emitir instrucciones sencillas a software mediante la captura de ondas cerebrales, conectándolas a hardware.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema1/img7.png', style="width:380px" alt='').m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Historia de las interfaces
    .row.align-items-center.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 El desarrollo de las interfaces gráficas comenzó a la par con la comercialización de los computadores personales en la década de 1970; antes de ello, solo se utilizaban interfaces de texto, lo cual complicaba la comunicación debido a su complejidad. Gracias a los esfuerzos de empresas como IBM, Microsoft y Apple, rápidamente se diseñaron herramientas gráficas que simplificaron la interacción con los sistemas operativos y el software de aquel entonces, empleando la metáfora del escritorio de oficina como representación del entorno gráfico.
      .col-lg-2.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img11.svg', style="width:230px" alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-4.bg-c12.pe-lg-0.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img8.png', style="width:410px" alt='').m-auto
      .col-lg-8.bg-c13.ps-lg-0(data-aos="fade-left")
        .row
          .col-12.bg-c11
            .p-3
              p #[b Los prirreros productos de Apple, Microsoft e IBM jugaron un papel crucial en el establecirñento de los principios de diseño e interacción que aún se emplean, ofreciendo a los usuarios un lenguaje claro y un entorno interactivo, basado en señales, íconos, hipervínculos, y dinámicas únicas que reflejan las acciones del sistema inforrnático.]
              hr.hr1
    p.mb-0(data-aos="fade-right") Estos avances permitieron crear entornos de trabajo mucho más familiares y accesibles para la mayoría de los usuarios, transformando la experiencia de interactuar con una pantalla negra y una línea de texto de comando, en una interfaz totalmente gráfica e interactiva, más agradable y estimulante para la interacción.
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

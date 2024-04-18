<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diseño de interfaces para aplicaciones móviles
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .row.align-items-center
          .col-md-auto.d-none.d-md-block
            figure
              img(src='@/assets/curso/tema2/img1.svg', style="width:90px" alt='').m-auto
          .col
            p.mb-0 Basándose en la teoría que sustenta la creación de interfaces gráficas para páginas web y aplicaciones móviles, el diseño y la comunicación gráfica tienen como objetivo proyectar los mensajes que el ser humano necesita para crear y establecer un orden jerárquico, estructural y significativo. Por esta razón, se utilizan los llamados códigos visuales, que permiten estructurar de manera lógica y significativa grupos de elementos que representan los mensajes visuales. Es posible identificar seis códigos visuales:
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width:350px" alt='').m-auto
    .row.bg-c14.mb-5
      .col-12
        .p-5
          .row
            .col-12
              .p-5
                SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
                  .tarjeta.color-acento-botones
                    .row
                      .col-12
                        img(src='@/assets/curso/tema2/img3.png' alt='AvatarTop')
                    .row
                      .col-12
                        .p-3
                          p.text-center #[b El código morfológico]
                          p.mb-0 Incluye los elementos gráficos que el diseñador utiliza para generar las estructuras y el lenguaje gráfico en el entorno. Algunos elementos básicos como figuras geométricas son ampliamente reconocidos. Ejemplo: la distancia y forma de los iconos en un iPhone.
                  .tarjeta.color-acento-botones
                    .row
                      .col-12
                        img(src='@/assets/curso/tema2/img4.png' alt='AvatarTop')
                    .row
                      .col-12
                        .p-3
                          p.text-center #[b El código cromático]
                          p.mb-0 Se refiere a los esquemas de color empleados en diversos diseños. Abarca la selección de intensidad, contraste, luminosidad y otros atributos relacionados con la cromaticidad.
                  .tarjeta.color-acento-botones
                    .row
                      .col-12
                        img(src='@/assets/curso/tema2/img5.png' alt='AvatarTop')
                    .row
                      .col-12
                        .p-3
                          p.text-center #[b El código tipográfico]
                          p.mb-0 Concierne a las propiedades y atributos de los textos y caracteres, definiendo aspectos como tamaño, forma, peso y orientación.
                  .tarjeta.color-acento-botones
                    .row
                      .col-12
                        img(src='@/assets/curso/tema2/img6.png' alt='AvatarTop')
                    .row
                      .col-12
                        .p-3
                          p.text-center #[b El código fotográfico]
                          p.mb-0 Define las imágenes y fotografías que se emplearán, siguiendo un patrón determinado por el tipo de toma, el encuadre, las escalas, entre otros aspectos.
                  .tarjeta.color-acento-botones
                    .row
                      .col-12
                        img(src='@/assets/curso/tema2/img7.png' alt='AvatarTop')
                    .row
                      .col-12
                        .p-3
                          p.text-center #[b Códigos visuales]
                          p.mb-0 Compuestos por todos los elementos mencionados anteriormente pero integrados y estructurados bajo un estilo particular que incluye alfabeto, tipografía, iconos, esquemas, ilustración, fotografía.
                  .tarjeta.color-acento-botones
                    .row
                      .col-12
                        img(src='@/assets/curso/tema2/img8.png' alt='AvatarTop')
                    .row
                      .col-12
                        .p-3
                          p.text-center #[b Códigos secuenciales]
                          p.mb-0 Integrados por animaciones, video, zonas sensibles y estructuras de interacción.
    p.mb-5(data-aos="fade-right") En este mismo sentido, tras haber explorado los elementos gráficos más empleados, resulta crucial entender cómo deben distribuirse en el espacio de trabajo para lograr una organización adecuada de los elementos esenciales, que a su vez favorezca una óptima visualización y navegabilidad.
    .row.mb-5
      .col-12.bg-c15
        .row.justify-content-center.align-items-center
          .col-lg-3.mt-4.mt-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema2/img10.png', style="width:280px" alt='').m-auto
          .col-lg-7(data-aos="fade-left")
            .p-4.p-lg-0
              p.mb-0 La #[b "ley de la buena forma"] sugiere que los ustarios tienden a percibir y enterder la información de la manera más clara y sencilla posible, reduciendo todo a formas básicas y comprersibles. Esto implica que los usuarios irterpretan mejor los acontecimientos y los mensajes presertados en la interfaz cuando la información se organiza en formas simples.
    p.mb-0(data-aos="fade-down") Organizar la información en estructuras simples y jerarquizar los elementos de la interfaz facilita que los usuarios organicen y comprendan mejor la información presentada. Esta organización promueve una mejor toma de decisiones al realizar una tarea. Por ejemplo, el uso de contraste de color puede ser efectivo para diferenciar grandes bloques de información, mejorando así la claridad y la eficacia comunicativa de la interfaz.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Legibilidad y contraste
    .row.mb-4
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Es crucial definir con precisión los colores y tamaños del texto para facilitar la lectura; el contraste debe ser adecuado para permitir esta actividad cómodamente. Asimismo, es importante considerar aspectos como el interlineado y los espacios, entre otros, para asegurar una lectura confortable y sin esfuerzos.
        .row
          .col-12.bg-c2
            .p-3
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src='@/assets/curso/tema2/img2.svg', style="width:70px" alt='').m-auto
                .col
                  p.mb-0 #[b En cuanto al manejo y estructura de la información, es esencial organizar la información de forma jerárquica, empezando con los títulos, subtítulos, pies de foto y otros tipos de texto.]
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img11.png', style="width:280px" alt='').m-auto
    .row.mb-5(data-aos="fade-down")
      .col-md-auto.d-none.d-md-block
        figure
          img(src='@/assets/curso/tema2/img3.svg', style="width:70px" alt='').m-auto
      .col
        p.mb-0 Estos deben presentar configuraciones variadas que faciliten su distinción de manera sencilla y que sean fácilmente reconocibles por el usuario. Todos los elementos presentes en la aplicación, incluidos textos, gráficos, íconos y elementos adicionales, deben mantener una consistencia y equilibrio que contribuyan a la coherencia estilística del sistema.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.bg-c16.mb-4
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img4.svg', style="width:130px" alt='').m-auto
            .col
              p.mb-0 #[b Familias tipográficas]
              p.mb-0 Una familia tipográfica completa ofrece un amplio rango de acción al disponer de diversas variantes adecuadas para textos largos, títulos, números en el cuerpo del texto, encabezados, pies de página, etc., estableciendo niveles jerárquicos dentro de la interfaz gráfica de usuario.
      .col-lg-10.bg-c16.mb-4
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img5.svg', style="width:130px" alt='').m-auto
            .col
              p.mb-0 #[b Tipografías limpias]
              p.mb-0 El uso de tipografías limpias y abiertas, como las fuentes Sans-serif, debido a que son más fáciles de leer en las pequeñas pantallas de los Smartphones, especialmente para lecturas prolongadas.
      .col-lg-10.bg-c16
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img6.svg', style="width:130px" alt='').m-auto
            .col
              p.mb-0 #[b Tamaño de tipografía en cada S.O]
              p.mb-0 El tamaño de la tipografía se mide en píxeles escalados (#[i "scaled pixels"] o sp); en aplicaciones móviles, este tamaño varía de 12sp a 22sp. Los títulos principales pueden llegar a 34px, y el tamaño en las etiquetas de botones importantes ronda los 28px. Los tamaños disminuyen jerárquicamente hasta el tamaño más pequeño, cercano a los 14px, aunque se recomienda no usar tamaños inferiores a 20px para textos de lectura.
    .row.bg-c17.mb-5
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
                    h3.text-white Retícula
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Estos elementos se utilizan para definir la zona donde se ubicará la información, estableciendo las áreas y la división del espacio disponible, así como las proporciones, espacios y tamaños que tendrán los distintos componentes de la interfaz.
              .row
                .col-12.bg-c18
                  .p-3
                    p.mb-0 Una retícula bien estructurada garantiza que los elementos contenidos sean accesibles y fáciles de interactuar con el dedo, de manera clara y sin inconvenientes. Este aspecto es crucial para el correcto funcionamiento de la aplicación, ya que es importante definir adecuadamente el espacio de contacto de cada elemento dentro de la pantalla. Por lo tanto, se debe utilizar un módulo de espaciado y separación de 8dp, siendo común tener márgenes laterales de 16dp.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img13.png', style="width:380px" alt='').m-auto
          .row.mb-4(data-aos="fade-down")
            .col-auto.bg-c7
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p1
                      img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
                  .col
                    h3.text-white Color
          p.mb-5(data-aos="fade-right") En el diseño gráfico para páginas web y aplicaciones móviles, se categorizan colores específicos, especialmente los denominados colores reservados: rojo, amarillo y verde, a los que se añaden los colores señaléticos: blanco, negro y azul. Estos colores se distinguen por ser, simultáneamente, color y signo, dado que conllevan un significado intrínseco en su contexto.
          .row.justify-content-center.mb-5(data-aos="fade-left")
            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt1(data-aos="flip-left")
                .crd_hover_txt1--img
                  figure
                    img(src="@/assets/curso/tema2/img14.png", alt="alt")
                .crd_hover_txt1--body
                  p #[b Rojo]
                  ul.lista-ul.mb-5
                    li.d-flex
                      i.lista-ul__vineta
                      | Se utiliza para identificar errores y generar alertas importantes.
                    li.d-flex
                      i.lista-ul__vineta
                      | Indica peligro y llama la atención rápidamente.
            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt2(data-aos="flip-left")
                .crd_hover_txt2--img
                  figure
                    img(src="@/assets/curso/tema2/img15.png", alt="alt")
                .crd_hover_txt2--body
                  p #[b Amarillo]
                  ul.lista-ul.mb-5
                    li.d-flex
                      i.lista-ul__vineta
                      | Se emplea para indicar prevención, marcando que una acción requiere toma de decisiones con consecuencias.
                    li.d-flex
                      i.lista-ul__vineta
                      | Genera una alerta al usuario sobre la toma de decisiones y las posibles consecuencias.
            .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt3(data-aos="flip-left")
                .crd_hover_txt3--img
                  figure
                    img(src="@/assets/curso/tema2/img16.png", alt="alt")
                .crd_hover_txt3--body
                  p #[b Verde]
                  ul.lista-ul.mb-5
                    li.d-flex
                      i.lista-ul__vineta
                      | Se utiliza especialmente para mostrar mensajes de éxito y confirmación.
                    li.d-flex
                      i.lista-ul__vineta
                      | Indica que una acción o actividad se ha realizado correctamente.
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Ícono
    .row.align-items-center.mb-2
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Los íconos constituyen los elementos más empleados en el desarrollo de aplicaciones móviles, gracias a su tamaño y composición, que facilitan su localización e interacción. Deben ser diseñados con atención para que sus visualizaciones comuniquen el mensaje adecuado y permitan al usuario comprender su intencionalidad de forma intuitiva. Los signos se clasifican en tres categorías: íconos, índices y símbolos.
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img7.svg', style="width:280px" alt='').m-auto
    .row.bg-c19.mb-5
      .col-12
        .p-5
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Ícono]
                    p.mb-0 El signo guarda similitud con lo que representa. 
                    p.mb-0 #[b Ejemplo]: uno de los iconos más populares es el de like de aprobación, que se utiliza en Facebook.
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Índice]
                    p.mb-0 Existe una relación directa entre el signo y el objeto que señala. 
                    p.mb-0 #[b Ejemplo]: en los correos electrónicos, el lápiz posibilita identificar la acción de escribir un nuevo mensaje.
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Símbolo]
                    p.mb-0 No hay conexión lógica entre el signo y su significado; su interpretación depende mayormente de convenciones sociales, así como del conocimiento y experiencia del receptor.
                    p.mb-0 #[b Ejemplo]: el avión de papel que nos indica enviar el mensaje o la nube que representa guardar la información en un repositorio remoto
          p.mb-5(data-aos="fade-right") Es relevante añadir que los íconos conforman un lenguaje de signos y que el diseño de un signo conlleva, desde una perspectiva semiótica, tres dimensiones críticas. Estas dimensiones son:
          .row.justify-content-center(data-aos="fade-left")
            .col-lg-10.bg-c3.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema2/img11.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 #[b Dimensión semiótica]
                    p.mb-0 Se trata de la relación directa de la imagen con su significado explícito, estableciendo una conexión directa entre el ícono, la imagen representada y el mensaje que comunica. Por ejemplo, la papelera de reciclaje.
            .col-lg-10.bg-c4.mb-4
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema2/img12.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 #[b Dimensión semántica]
                    p.mb-0 Define un sistema visual en el que todos los elementos están interconectados, permitiendo su identificación como parte de una estructura unificada.
            .col-lg-10.bg-c3
              .p-3
                .row.align-items-center
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema2/img13.svg', style="width:70px" alt='').m-auto
                  .col
                    p.mb-0 #[b Dimensión funcional]
                    p.mb-0 Se enfoca en vincular el ícono con su utilidad práctica para el usuario, facilitando la comprensión directa de su significado y cómo interactuar con él. Evalúa qué tan intuitivo es el ícono para los usuarios y qué acción facilita.
    .row.mb-4(data-aos="fade-down")
      .col-auto.bg-c7
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p1
                img(src='@/assets/curso/tema1/img6.svg', style="width:50px" alt='').m-auto
            .col
              h3.text-white Ícono de lanzamiento
    .row.align-items-center.mb-5
      .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Se sugiere adoptar el ícono de lanzamiento como el emblema distintivo de la aplicación. Este ícono se convertirá en el referente visual que asocie a los usuarios con el producto. Es crucial crear un elemento gráfico de alta definición simbólica que sea único y original, que permita diferenciar la aplicación de otras en el mercado, que destaque tanto en la tienda de descargas como en el listado de aplicaciones ya instaladas en el dispositivo móvil del usuario.
      .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img14.svg', style="width:280px" alt='').m-auto
    .row.justify-content-center
      .col-lg-10.bg-c20(data-aos="fade-right")
        .p-4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img15.svg', style="width:120px" alt='').m-auto
            .col
              p.mb-0 #[b En esencia, las cualidades visuales del ícono deben comunicar de manera clara y eficaz el propósito principal de la aplicación y el estilo que la caracteriza.]

</template>

<script>
export default {
  name: 'Tema2',
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

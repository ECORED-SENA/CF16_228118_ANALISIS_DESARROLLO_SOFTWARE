<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Dispositivos y Visualización
    .row
      .col-lg-auto.pe-0.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema7/img1.png', style="width:280px" alt='').m-auto
      .col.bg-c27(data-aos="fade-left")
        .p-4
          p.mb-0 El elemento esencial para la visualización en dispositivos es la resolución de pantalla. Para entender qué significa la resolución, es crucial definir los píxeles: estos determinan la resolución de una pantalla. La capacidad de video que un dispositivo puede alcanzar depende del total de píxeles en su pantalla.
    .row.bg-c32
      .col-12
        .p-5
          .row(data-aos="fade-right")
            .col-12.bg-c33.mb-4
              .p-3
                .row.align-items-center
                  .col-lg-3.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema7/img2.png', style="width:280px" alt='').m-auto
                  .col-lg-9
                    p.mb-0 #[b Píxeles]: la pantalla se compone de pequeños puntos conocidos como píxeles, los cuales son diminutos puntos que cubren toda el área de la pantalla y permiten la visualización de imágenes. Un píxel se puede considerar como la unidad más pequeña de una imagen.
            .col-12.bg-c33.mb-4
              .p-3
                .row.align-items-center
                  .col-lg-3.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema7/img3.png', style="width:280px" alt='').m-auto
                  .col-lg-9
                    p.mb-0 #[b Imagen y dimensiones de la pantalla]: por ejemplo, una resolución HD de 1280 x 720 significa que la pantalla tiene 1280 columnas de 720 píxeles cada una, formando una matriz. Generalmente, el primer número indica la anchura y el segundo, la altura de la pantalla.
            .col-12.bg-c33.mb-4
              .p-3
                .row.align-items-center
                  .col-lg-3.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema7/img4.png', style="width:280px" alt='').m-auto
                  .col-lg-9
                    p.mb-0 #[b Estándar de resolución]: las resoluciones de pantalla se clasifican en estándares como VGA, XGA, HD, Full HD, 1440p, y 4K, entre otros. A mayor resolución, mejor calidad de imagen.
            .col-12.bg-c33
              .p-3
                .row.align-items-center
                  .col-lg-3.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema7/img5.png', style="width:280px" alt='').m-auto
                  .col-lg-9
                    p.mb-0 #[b Tamaño de la pantalla]: el tamaño de la pantalla se mide en pulgadas. Una pulgada equivale a 2,54 centímetros o 25,4 mm, y se denota con comillas después del número, por ejemplo: 3,2″ (3,2 pulgadas).

</template>

<script>
export default {
  name: 'Tema7',
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

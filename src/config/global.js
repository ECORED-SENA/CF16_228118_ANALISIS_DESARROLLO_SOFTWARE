export default {
  global: {
    componenteFormativo:
      'Herramientas para el diseño y desarrollo móvil híbrido',
    descripcionCurso:
      'En este componente, el aprendiz consolidará su conocimiento en conceptos fundamentales relacionados con herramientas de diseño, reforzando las bases necesarias para el desarrollo de interfaces gráficas móviles centradas en el usuario. Se examinarán en detalle los principios, estructuras y modelos gráficos que son funcionales para el desarrollo de aplicaciones, además de reconocer el carácter cambiante y evolutivo del desarrollo de estas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Interfaz',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño de interfaces para aplicaciones móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Legibilidad y contraste',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Usabilidad y funcionalidad de las aplicaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Diseño centrado en el usuario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis jerárquico de tareas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estructuras de navegación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Dispositivos y Visualización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF16_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Interfaz',
      referencia:
        'Diseño de materiales. Componentes de la interface gráfica para móviles. MATERIAL.IO.',
      tipo: 'Página web con recursos',
      link: 'https://material.io/components?platform=android',
    },
    {
      tema: 'Diseño de materiales',
      referencia:
        'Video CPQuito2 - Principios de diseño de experiencia de usuario para Mobile.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vVZ2F89MiyI',
    },
    {
      tema: 'Estructuras de navegación',
      referencia:
        'Jose Rafael Rojas B. (2021). Diseño y Desarrollo de Aplicaciones Móviles 01 – Introducción.',
      tipo: 'Video',
      link: 'https://youtu.be/2STnjpA8XQc',
    },
  ],
  glosario: [
    {
      termino: '<i>Benchmarking</i>',
      significado:
        'proceso de creación, recopilación, comparación y análisis de indicadores (<i>benchmarks</i>) para medir el avance de procesos y funciones importantes en una organización.',
    },
    {
      termino: 'Estándar ISO 13407',
      significado:
        'marco de guía para el desarrollo de sistemas interactivos usables, que incorpora el Diseño Centrado en el Usuario (DCU) durante el ciclo de vida del desarrollo.',
    },
    {
      termino: 'Hipermedia',
      significado:
        'conjunto de métodos para la escritura, diseño y composición de contenidos multimediales como imágenes, videos, textos, audios, mapas y otros soportes, facilitando nuevas interacciones para los usuarios.',
    },
    {
      termino: 'Ley de Fitts',
      significado:
        'ley que describe la rapidez y precisión del movimiento humano al apuntar a un objetivo, aplicable al acto de apuntar con la mano o dedos y al uso de dispositivos como el mouse en computadoras.',
    },
    {
      termino: 'Navegabilidad',
      significado:
        'facilidad con la que los usuarios pueden desplazarse por las páginas o ventanas de un sitio web o aplicación, requiriendo recursos y estrategias de navegación efectivas.',
    },
    {
      termino: '<i>Pixel</i>',
      significado:
        'abreviatura de <i>Picture Element</i>, la unidad más pequeña de color que compone una imagen digital.',
    },
    {
      termino: '<i>Skeumorfismo</i>',
      significado:
        'objeto evolucionado que retiene detalles del diseño original para hacerlo más familiar, derivado de las palabras griegas <i>skeuos</i> (herramienta o contenedor) y <i>morphe</i> (forma).',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández Casado, Pablo E, 2019. Usabilidad web, teoría y uso. Bogotá, Madrid: Ediciones de la U, Ra-Ma Editorial.',
      link: '',
    },
    {
      referencia:
        'Gothelf, J., Seiden, J., & López Manzano, J. (2014). Lean UX. Logroño: UNIR Editorial.',
      link: '',
    },
    {
      referencia:
        'Jacobson, I., Booch G., Rumbaugh, J.(2007). El lenguaje unificado de modelado: manual de referencia. Madrid: Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kendall, K., Kendall, J., & Kendall, J. (2011). Análisis y diseño de sistemas. México, DF: Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Klein, L. (2014). Experiencia de usuario para lean startups. Logroño: UNIR Editorial.',
      link: '',
    },
    {
      referencia:
        'Krug, S. (2015). No me hagas pensar, "actualización". Madrid: Anaya Multimedia.',
      link: '',
    },
    {
      referencia:
        'Luján Castillo, José Dimas, 2017. HTML5, CSS y Javascript. Crea tu web y apps con el estándar de desarrollo. Bogotá: Alfaomega Colombiana RC Libros.',
      link: '',
    },
    {
      referencia:
        'Pohl, K. & Rupp, C. (2011). Requirements engineering fundamentals. Santa Barbara, CA: Rocky Nook.',
      link: '',
    },
    {
      referencia:
        'Pressman, R., Campos Olguín, V., & Enríquez Brito, J. (2010). Ingeniería del <em>software</em>. México: McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Recio García, Juan Antonio, 2018. HTML5, CSS3 y JQuery Curso práctico. Bogotá: Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Sommerville I. (2011).  Ingeniería del <em>software</em>. México: Addison-Wesley',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilson Andrés Cuervo Nieto',
          cargo: 'Experto Temático',
          centro: 'Grupo de Apoyo Administrativo - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Margarita Marcela Medrano Gómez',
        //  cargo: 'Evaluador para contenidos inclusivos y accesibles',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

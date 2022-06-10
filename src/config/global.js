export default {
  global: {
    componenteFormativo: 'Proceso de ventas en juegos de suerte y azar',
    descripcionCurso:
      'El presente componente explica de manera detallada los conocimientos para llevar a cabo ventas efectivas de los juegos de suerte y azar en Colombia, con la finalidad de aumentar los ingresos de vendedores y organizaciones, instruyendo a vendedores para la adquisición de destrezas en estrategias de fidelización y los procesos administrativos que implica el cierre de la venta diaria.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proceso de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Protocolo de la venta',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Fidelización',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estrategia de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Claves para definir la estrategia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ventas online (en línea)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Aplicabilidad en el campo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Adaptación al futuro del trabajo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Objeciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cierre de la venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Algunos errores para cerrar la venta',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Prácticas para cerrar la venta',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Tipos de cierre',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Arqueo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'CEUPE magazine. (2020). ¿En qué consiste el cierre de la venta? CEUPE magazine.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      referencia:
        'Espacio digital. (2020).¿Cómo hacer que tu marca destaque en redes sociales? Espacio digital. ',
      link:
        'https://www.espaciodigital.com.co/blog/destacar-marca-redes-sociales/ ',
    },
    {
      referencia:
        'Kirberg, A. (2017). Marketing de fidelización. Ecoe Ediciones.',
    },
    {
      referencia:
        'Pérez, A. (2018). Estrategias de ventas: definición en 6 claves e implementación en 4 pasos. OBS Business School.',
      link:
        'https://www.obsbusiness.school/blog/estrategias-de-ventas-definicion-en-6-claves-e-implementacion-en-4-pasos',
    },
    {
      referencia:
        'Saldarriaga, J., Vélez, C. & Betancur, G. (2014). Estrategia de mercadeo de los vendedores ambulantes. Semestre Económico Revista Científica.',
      link:
        'https://revistas.udem.edu.co/index.php/economico/article/view/1828/ ',
    },
    {
      referencia:
        'SENA. (2021). Retener clientes: fidelizar clientes [video]. YouTube',
      link: 'https://youtu.be/64IsYDBncao ',
    },
  ],
  glosario: [
    {
      termino: 'Código QR',
      significado:
        'Es la evolución del código de barras, se trata de una impresión con un código visual, el cual es leído y descifrado por lectores ópticos (cámaras, láser) que transmiten los datos a una máquina o computadora.',
    },
    {
      termino: 'Cuarta revolución industria',
      significado:
        'Industria 4.0 es el término por el cual se denomina la actual etapa sobre las formas productivas y de vida por la que la humanidad está atravesando. Su base parte de las anteriores revoluciones industriales y se soporta además con el uso y posibilidades de la ciencia y la tecnología, entre ellas el manejo de datos, el procesamiento, la comunicación de información, los avances de  bioingeniería y otras ramas de la ciencia e ingeniería.',
    },
    {
      termino: 'Fuerza de venta',
      significado:
        'Se refiere al equipo de personas responsables de generar una efectiva producción a través de la oferta y venta de servicios y productos.',
    },
    {
      termino: 'Merchandising',
      significado:
        'Conjunto de productos publicitarios para promocionar un producto, promociones, una marca, etc.',
    },
    {
      termino: 'Moda',
      significado:
        'hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer.',
    },
    {
      termino: 'Segmentos de mercado',
      significado:
        'Dividir los compradores en segmentos más pequeños, estas divisiones cumplen con criterios en común para tener claridad hacia qué “target” orientar las ventas.',
    },
    {
      termino: 'Target',
      significado:
        'Término usado para definir el segmento de mercado objetivo, es decir, a qué tipo de público o qué características en común tienen para orientar las ventas hacia ese segmento.',
    },
  ],
  complementario: [
    {
      tema: 'Adaptación del futuro trabajo',
      referencia:
        'Espacio digital. (2020). ¿Cómo hacer que tu marca destaque en redes sociales? Espacio digital. ',
      tipo: 'Artículo web',
      link:
        'https://www.espaciodigital.com.co/blog/destacar-marca-redes-sociales/',
    },
    {
      tema: 'Cierre de la venta',
      referencia:
        'SENA. (2021). El cierre de ventas: introducción [video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=y3NqB6wUkuE ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jaime Hernán Tejada Llano',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Diana Carolina Acevedo Baron',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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

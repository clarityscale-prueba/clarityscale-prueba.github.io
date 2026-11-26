/*
  CONFIGURACIÓN DEL FUNNEL
  ------------------------
  Este es el único archivo de texto que necesitas cambiar para adaptar la página
  a tu negocio. Los colores y la tipografía están en estilos.css (arriba del todo).
*/
window.FUNNEL = {
  // Nombre corto del lead magnet. Se guarda en cada registro de tu hoja.
  lead_magnet: "clase-filtrada",

  marca: {
    nombre: "Clarity Scale",
    // Ruta o URL de tu logo (opcional). Ejemplo: "logo.png". Vacío = solo texto.
    logo: ""
  },

  // Textos de la primera pantalla
  textos: {
    antetitulo: "Clase filtrada · Para psicólogos, terapeutas y profesionales de la salud mental",
    titulo: "Convierte tu Instagram en tu mejor fuente de pacientes (sin depender de referidos)",
    bajada: "La consultoría completa con la que una psicóloga empezó a recibir pacientes desde sus redes. Responde 4 preguntas y te la envío por WhatsApp.",
    incluye_titulo: "En la clase vas a ver",
    incluye: [
      "Por qué tu contenido no te trae pacientes: la diferencia entre hablar de tu servicio y hablarle al dolor de tu paciente.",
      "Cómo convertir tu experiencia en autoridad: la bio y los posts fijados que hicieron que un paciente la eligiera entre varias psicólogas.",
      "Cómo hacer que te escriban: el plan semanal de historias y la palabra clave que convierte a tus seguidores en conversaciones."
    ],
    // Línea legal al pie del formulario (no la quites: es parte de tu aviso de privacidad)
    aviso_parcial: "Lo que escribas aquí se guarda aunque no termines, para poder ayudarte si se corta la conexión.",
    boton_final: "Quiero la clase",
    // Video opcional debajo del cuestionario. URL de YouTube tipo "https://www.youtube.com/embed/ID" o vacío.
    video_embed: ""
  },

  /*
    PREGUNTAS DE CALIFICACIÓN
    Una pregunta por pantalla, en este orden. La primera aparece en cuanto carga la página.
    - Las opciones con  descalifica: true  son las "puertas": si la persona elige una,
      queda como NO calificada (igual recibe el contenido, pero a Meta no se le avisa).
    - Una pregunta sin ninguna opción que descalifique sirve para conocer a la persona.
  */
  preguntas: [
    {
      id: "experiencia",
      texto: "¿Cuánto tiempo llevas atendiendo pacientes o clientes?",
      opciones: [
        { texto: "Todavía no atiendo", valor: "no_atiende", descalifica: true },
        { texto: "Menos de 6 meses", valor: "menos_6m", descalifica: true },
        { texto: "Entre 6 meses y 2 años", valor: "6m_2a" },
        { texto: "Más de 2 años", valor: "mas_2a" }
      ]
    },
    {
      id: "contenido",
      texto: "¿Cómo está hoy tu cuenta de Instagram?",
      opciones: [
        { texto: "Todavía no publico contenido", valor: "no_publica" },
        { texto: "Publico de vez en cuando", valor: "ocasional" },
        { texto: "Publico cada semana, pero casi nadie interactúa", valor: "semanal_sin_comunidad" },
        { texto: "Publico cada semana y ya tengo una comunidad que comenta y escribe", valor: "semanal_con_comunidad" }
      ]
    },
    {
      id: "capacidad",
      texto: "¿Cuánto ganas al mes, más o menos, sumando consultas, clínica y otros trabajos?",
      opciones: [
        { texto: "Menos de 500 USD", valor: "bajo", descalifica: true },
        { texto: "Entre 500 y 1.000 USD", valor: "medio" },
        { texto: "Más de 1.000 USD", valor: "alto" }
      ]
    },
    {
      id: "freno",
      texto: "¿Qué te frena más hoy para conseguir pacientes con tus redes?",
      opciones: [
        { texto: "Publico, pero no me llegan pacientes", valor: "no_convierte" },
        { texto: "No sé qué publicar ni tengo una estrategia", valor: "sin_estrategia" },
        { texto: "No tengo claro a qué tipo de paciente hablarle", valor: "sin_nicho" },
        { texto: "Cobro barato o doy descuentos para cerrar", valor: "cobra_barato" }
      ]
    }
  ],

  // Datos de contacto (última pantalla)
  contacto: {
    pedir_correo: true,
    lada_por_defecto: "593",
    // Lada y nombre del país. Solo los países de tu mercado.
    ladas: [
      ["593", "Ecuador"], ["51", "Perú"], ["57", "Colombia"], ["52", "México"],
      ["1", "Estados Unidos"]
    ]
  },

  // Tu aviso de privacidad (página privacidad.html de esta misma carpeta)
  privacidad_url: "privacidad.html",
  privacidad: {
    responsable: "Miguel Muñoz",
    correo_contacto: "mmunozproductivo@gmail.com",
    finalidad: "enviarte la clase que pediste y contactarte por WhatsApp o correo para ofrecerte una llamada sobre mis servicios de estrategia de marca personal"
  },

  // Meta: el ID de tu pixel (conjunto de datos). Se llena en el módulo 06.
  meta: {
    pixel_id: "1399855964775823"
  },

  // URL de la aplicación web de Google Apps Script (termina en /exec). Se llena en el módulo 05.
  apps_script_url: "https://script.google.com/macros/s/AKfycbynwurg56lywTcScDcd0JaEkSIPXpYsoWZdA28xJZpECR2vyRr3Abqzt_RHKA2ribaj9Q/exec",

  // WhatsApp donde la persona te escribe para pedir el contenido
  whatsapp: {
    // Número con lada, solo dígitos.
    numero: "593967101603",
    // {nombre} y {correo} se reemplazan solos. Deja el correo: te sirve para ligar el chat con tu hoja.
    mensaje: "Hola Miguel, soy {nombre}. Me registré con el correo {correo} y quiero recibir la clase filtrada.",
    // Cómo se muestra el número si la persona prefiere copiarlo
    numero_visible: "+593 96 710 1603"
  },

  // Página de entrega (gracias.html)
  entrega: {
    titulo: "Listo, {nombre}. La clase te llega por WhatsApp.",
    texto: "Te la envío por WhatsApp para poder resolver tus dudas en la misma conversación.",
    pasos: [
      "Toca el botón de abajo.",
      "Envía el mensaje que ya va escrito.",
      "Te respondo con el enlace de la clase."
    ],
    boton: "Pedir la clase por WhatsApp",
    respaldo: "¿No se abrió WhatsApp? Escríbeme a este número:"
  }
};

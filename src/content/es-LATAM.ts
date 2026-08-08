import { liveProjectAssets } from './links';
import type { SiteContent } from './types';

export const esLATAM = {
  locale: 'es-LATAM',
  shortLocale: 'ES',
  seo: {
    title: 'Guilherme Ramires | Python, Full-Stack e IA',
    description:
      'Ingeniero de Software Python con más de 5 años en APIs, aplicaciones full-stack, automatización e IA. Conoce su trabajo y resultados.',
    ogTitle: 'Guilherme Ramires — Ingeniero de Software Python',
    ogDescription:
      'De problemas ambiguos a software en producción: Python, Full-Stack e Inteligencia Artificial.',
  },
  header: {
    brand: 'Guilherme Ramires', descriptor: 'Ingeniero de Software Python',
    cta: 'Hablemos', resume: 'Descargar CV (EN)',
    nav: [
      { id: 'home', label: 'Inicio' }, { id: 'impact', label: 'Impacto' },
      { id: 'build', label: 'Lo que construyo' }, { id: 'cases', label: 'Casos' },
      { id: 'projects', label: 'Proyectos' }, { id: 'experience', label: 'Experiencia' },
      { id: 'about', label: 'Sobre mí' }, { id: 'contact', label: 'Contacto' },
    ],
  },
  hero: {
    eyebrow: 'INGENIERO DE SOFTWARE PYTHON · FULL-STACK E IA',
    title: 'De problemas ambiguos a software en producción.',
    intro:
      'Soy Guilherme Ramires, ingeniero de software con más de 5 años de experiencia construyendo APIs, aplicaciones, automatizaciones e integraciones de inteligencia artificial. Transformo necesidades de negocio en software probado, desplegable y preparado para el mundo real.',
    reinforcement: 'Arquitectura, código, pruebas y entrega — más allá del prototipo.',
    primaryCta: 'Conoce mi trabajo', secondaryCta: 'Descargar CV (EN)',
    availability: 'Disponible para oportunidades remotas · Florianópolis, Brasil · UTC-3',
    portraitAlt: 'Retrato profesional de Guilherme Ramires, ingeniero de software Python.',
  },
  metrics: {
    eyebrow: '01 / IMPACT', title: 'Resultados antes que adjetivos.',
    intro:
      'Mi trabajo no termina cuando el código se ejecuta. Debe reducir fricción, ampliar capacidad y seguir siendo confiable en producción.',
    items: [
      { value: '5+ años', company: 'Experiencia profesional', context: 'construyendo sistemas y servicios con Python' },
      { value: '+40%', company: 'Spinver', context: 'de aumento en contactos exitosos con leads tras combinar datos de personas y extracción de teléfonos' },
      { value: '98%', company: 'Spinver', context: 'de precisión al extraer teléfonos brasileños de textos no estructurados, antes de la popularización de la IA generativa' },
      { value: '35% → 71%', company: 'DOJO — Smart Ways', context: 'de precisión entre la primera POC y la entrega de un producto de análisis de ropa con LLM tras adoptar RAG' },
      { value: '4 h/semana', company: 'QuintoAndar', context: 'ahorradas en promedio mediante automatizaciones creadas para distintos equipos' },
      { value: '2 horas', company: 'Softplan', context: 'ahorradas al equipo de Diseño mediante la generación automática de informes con LLM' },
    ],
    companyStrip: 'Experiencia construida junto a equipos de Delfos, Softplan, DOJO, QuintoAndar y Spinver.',
  },
  capabilities: {
    eyebrow: '02 / MODULES', title: 'Software que resuelve el problema completo.',
    intro:
      'Desde la lógica de negocio hasta la interfaz, desde la integración hasta el despliegue: combino ingeniería backend, visión de producto e inteligencia artificial para convertir procesos complejos en sistemas utilizables.',
    items: [
      {
        key: 'full-stack', category: 'Desarrollo Full-Stack',
        title: 'Productos completos, no piezas aisladas.',
        description: 'Construyo y mantengo aplicaciones Python, interfaces web, herramientas internas e integraciones entre sistemas. Pienso en el flujo completo: datos, reglas de negocio, experiencia de usuario, operación y mantenimiento.',
        technologies: ['Python', 'Django', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PostgreSQL', 'MongoDB'],
      },
      {
        key: 'backend', category: 'Backend y APIs', title: 'La base debe sostener el producto.',
        description: 'Desarrollo APIs REST, servicios internos, integraciones y procesamiento en segundo plano con foco en claridad, pruebas y confiabilidad. También mantengo y modernizo sistemas legados sin interrumpir la operación.',
        technologies: ['Python', 'FastAPI', 'Django', 'Flask', 'Pydantic', 'PostgreSQL', 'Redis', 'Docker', 'pytest'],
      },
      {
        key: 'ai', category: 'Ingeniería de IA',
        title: 'IA conectada al producto, no atrapada en una demostración.',
        description: 'Integro LLMs y modelos de IA aplicados al procesamiento de imágenes en sistemas reales mediante APIs, componentes reutilizables y flujos automatizados. Mi experiencia incluye recomendaciones, chatbots, extracción estructurada de atributos y pipelines con OpenAI y Vertex AI.',
        technologies: ['OpenAI API', 'Google Vertex AI', 'FastAPI', 'AWS Lambda', 'S3', 'n8n', 'Redis', 'Docker'],
      },
      {
        key: 'automation', category: 'Automatización, Crawlers y ETL',
        title: 'La repetición y los datos dispersos son oportunidades de ingeniería.',
        description: 'Construyo crawlers, pipelines y automatizaciones que capturan, organizan y entregan datos a otros equipos y sistemas. Este trabajo ya amplió cobertura comercial, redujo esfuerzo manual y apoyó experimentos de ingresos.',
        technologies: ['Scrapy', 'Redis', 'Pandas', 'Dagster', 'InfluxDB', 'SQL', 'NoSQL', 'APIs'],
      },
    ],
  },
  cases: {
    eyebrow: '03 / CASES', title: 'Problemas reales. Decisiones técnicas. Impacto verificable.',
    intro: 'Una stack solo importa cuando resuelve algo. Estos casos muestran cómo transformé necesidades operativas y de producto en software desplegable.',
    labels: { problem: 'Problema', solution: 'Construcción', impact: 'Impacto', stack: 'Stack' },
    items: [
      {
        company: 'Spinver', title: 'Más contactos útiles a partir de datos difíciles de capturar.',
        problem: 'La adquisición de datos necesitaba alcanzar más fuentes y transformar información no estructurada en contactos utilizables.',
        solution: 'Desarrollé crawlers en Python, agentes con Scrapy, flujos respaldados por Redis e integraciones con bases SQL y NoSQL. También integré una API de datos de personas y construí un sistema especializado en extraer teléfonos brasileños de textos no estructurados.',
        impact: 'La combinación de la API de datos de personas con la extracción de teléfonos aumentó en un 40% los contactos exitosos con leads. El sistema de extracción alcanzó un 98% de precisión antes de la popularización de la IA generativa.',
        stack: ['Python', 'Scrapy', 'Redis', 'SQL', 'NoSQL'],
      },
      {
        company: 'Softplan', title: 'Inteligencia artificial integrada en productos internos.',
        problem: 'Los productos internos necesitaban acceso reutilizable a IA generativa, rendimiento consistente y un camino confiable desde el prototipo hasta el despliegue.',
        solution: 'Desarrollé APIs en Python que conectaban sistemas de negocio con pipelines de LLM. También construí un servicio de recomendación con FastAPI, caché Redis, múltiples estrategias, Docker y pruebas automatizadas, además de flujos con n8n y OpenAI. Para el equipo de Diseño, implementé un sistema que combinaba automatización y un LLM para generar informes automáticamente.',
        impact: 'El sistema de informes ahorró 2 horas de trabajo al equipo de Diseño. Las demás entregas mejoraron el rendimiento del servicio de recomendaciones y acortaron los ciclos de prototipado de chatbots desplegables mediante Rancher y GitLab CI/CD.',
        stack: ['Python', 'FastAPI', 'Redis', 'OpenAI', 'n8n', 'Docker', 'Rancher', 'GitLab CI/CD'],
      },
      {
        company: 'DOJO — Smart Ways', title: 'De imágenes de ropa a atributos listos para otros sistemas.',
        problem: 'Un producto de análisis de ropa necesitaba transformar la información contenida en imágenes en atributos estructurados con suficiente precisión para otros sistemas.',
        solution: 'Construí servicios Python alrededor de AWS Lambda, S3 y Vertex AI, separando las responsabilidades de entrada, predicción, validación y salida. Después de la primera POC, incorporé RAG al flujo con LLM para mejorar la calidad del análisis. Los servicios se expusieron mediante APIs y componentes Dockerizados.',
        impact: 'La primera POC alcanzó un 35% de precisión. Tras adoptar RAG, la entrega llegó al 71% — una mejora de 36 puntos porcentuales — y puso las predicciones a disposición de sistemas downstream.',
        stack: ['Python', 'AWS Lambda', 'Amazon S3', 'Google Vertex AI', 'APIs', 'Docker', 'pruebas unitarias'],
      },
      {
        company: 'Delfos', title: 'Datos operativos conectados para activos solares y eólicos.',
        problem: 'Los sistemas de energía renovable dependían de pipelines e integraciones capaces de procesar datos operativos provenientes de distintas fuentes.',
        solution: 'Construí y mantuve pipelines Dagster, herramientas Python y APIs conectando InfluxDB, PostgreSQL y servicios de procesamiento.',
        impact: 'El trabajo redujo la complejidad de integración y mejoró la confiabilidad de los servicios mediante pruebas unitarias, componentes Dockerizados y pipelines de GitLab CI/CD.',
        stack: ['Python', 'Dagster', 'InfluxDB', 'PostgreSQL', 'Docker', 'GitLab CI/CD'],
      },
      {
        company: 'QuintoAndar', title: 'Ingeniería para acelerar experimentos sin descuidar la operación.',
        problem: 'Un equipo enfocado en experimentación necesitaba ejecutar hipótesis de ingresos mientras mantenía servicios legados y flujos operativos en funcionamiento.',
        solution: 'Desarrollé servicios Python, APIs internas, automatizaciones para distintos equipos y pipelines ETL. También construí endpoints y herramientas internas, revisé código, escribí pruebas y resolví incidentes.',
        impact: 'Las automatizaciones ahorraron, en promedio, 4 horas de trabajo por semana. Las demás entregas aceleraron experimentos de ingresos y protegieron la continuidad de los servicios y bases de datos existentes.',
        stack: ['Python', 'APIs internas', 'automatización', 'ETL', 'pruebas', 'bases de datos'],
      },
    ],
  },
  projects: {
    eyebrow: '04 / SHIPPED', title: 'Proyectos que salieron del editor y llegaron a las personas.',
    intro: 'Los productos publicados muestran cómo transformo una necesidad en una experiencia utilizable. Los proyectos open source revelan la ingeniería detrás de la entrega: arquitectura, integraciones, pruebas y decisiones de implementación.',
    live: {
      title: 'Productos digitales en funcionamiento',
      description: 'Sitios y experiencias que se pueden abrir, explorar y evaluar ahora mismo.',
      items: [
        { slug: 'donateka', tag: 'PRODUCTO PUBLICADO', title: 'Donateka', description: 'Una experiencia digital publicada y preparada para comunicar con claridad la propuesta del proyecto en diferentes mercados.', role: 'Desarrollo del sitio.', cta: 'Visitar Donateka', url: 'https://donateka.com.br/pt', image: liveProjectAssets.donateka.png, imageWebp: liveProjectAssets.donateka.webp, imageAvif: liveProjectAssets.donateka.avif, imageAlt: 'Página inicial de Donateka.', event: 'live_project_opened' },
        { slug: 'ramirestech', tag: 'PRODUCTO PROPIO', title: 'RamiresTech Digital Solutions', description: 'El sitio de mi operación de soluciones digitales, creado para convertir servicios complejos en una propuesta clara, navegable y orientada a la conversión.', role: 'Estrategia, producto, copy, diseño y desarrollo.', cta: 'Conocer RamiresTech', url: 'https://ramirestech.com/', image: liveProjectAssets.ramirestech.png, imageWebp: liveProjectAssets.ramirestech.webp, imageAvif: liveProjectAssets.ramirestech.avif, imageAlt: 'Página inicial de RamiresTech Digital Solutions.', event: 'live_project_opened' },
        { slug: 'fjm-clean', tag: 'PROYECTO PARA CLIENTE', title: 'FJM Clean', description: 'Presencia digital comercial para un negocio local de limpieza de tapizados, estructurada para explicar sus servicios y convertir el interés en conversaciones por WhatsApp.', role: 'Estrategia, copy, diseño y desarrollo.', cta: 'Visitar FJM Clean', url: 'https://fjmclean.com.br/', image: liveProjectAssets.fjmClean.png, imageWebp: liveProjectAssets.fjmClean.webp, imageAvif: liveProjectAssets.fjmClean.avif, imageAlt: 'Página inicial de FJM Clean.', event: 'live_project_opened' },
        { slug: 'mercadinho-delivery', tag: 'MINI E-COMMERCE', title: 'Mercadinho Delivery', description: 'Prototipo funcional de mini e-commerce que organiza un catálogo de mercado en una experiencia simple de descubrimiento y pedido.', role: 'Producto, experiencia, interfaz y desarrollo.', status: 'Prototipo funcional', cta: 'Explorar el prototipo', url: 'https://mercadinho-delivery.pages.dev/', image: liveProjectAssets.mercadinho.png, imageWebp: liveProjectAssets.mercadinho.webp, imageAvif: liveProjectAssets.mercadinho.avif, imageAlt: 'Interfaz del prototipo Mercadinho Delivery con catálogo de productos.', event: 'live_project_opened' },
      ],
    },
    source: {
      title: 'Mira cómo construyo.',
      description: 'Repositorios seleccionados por la calidad de su evidencia técnica y su alineación con Python, Full-Stack e IA, no solo por ser públicos.',
      items: [
        { slug: 'llm-recommendation-api', tag: 'FULL-STACK + IA', title: 'Sistema de recomendación con LLM', description: 'Una solución completa de recomendación que combina estrategias basadas en historial y preferencias con descripciones generadas por LLM. Integra servicios FastAPI, interfaz React, caché Redis con fallback, Docker y pruebas automatizadas.', proof: 'Strategy Pattern · TTL de caché de 72 horas · LLM real o emulado · frontend y APIs iniciados con un solo comando.', stack: ['Python', 'FastAPI', 'React', 'Redis', 'OpenAI', 'Docker', 'pytest'], cta: 'Ver arquitectura y código', url: 'https://github.com/GuiJR777/llm_recommendation_api', event: 'repository_opened' },
        { slug: 'jus-brasil-web-crawler', tag: 'PYTHON BACKEND', title: 'Crawler jurídico con API y caché', description: 'API Python que recibe un número de proceso, selecciona el crawler compatible, extrae datos de primera y segunda instancia y devuelve una respuesta estructurada. Redis reduce consultas repetidas y Docker simplifica la ejecución local.', proof: 'Selección de crawler por segmento judicial · FastAPI · caché Redis · respuesta tipada · pruebas unitarias.', stack: ['Python', 'FastAPI', 'Beautiful Soup', 'Redis', 'Docker', 'pytest'], cta: 'Ver código', url: 'https://github.com/GuiJR777/jus-brasil-web-crawler', event: 'repository_opened' },
      ],
    },
    creative: {
      title: 'Laboratorio creativo', description: 'Creatividad aplicada a sistemas interactivos.',
      items: [{ slug: 'ramirestech-games', tag: 'GAME DEVELOPMENT', title: 'Juegos, prototipos y game jams', description: 'Mi laboratorio de interacción y gameplay: juegos propios y prototipos publicados que transforman reglas, feedback visual y experiencia del jugador en sistemas jugables.', cta: 'Jugar en itch.io', url: 'https://ramirestechgames.itch.io/', event: 'games_opened' }],
    },
  },
  experience: {
    eyebrow: '05 / HISTORY', title: 'Cinco años transformando contexto en entrega.',
    intro: 'Mi experiencia abarca productos digitales, sistemas internos, adquisición de datos, automatización, inteligencia artificial e infraestructura de entrega.',
    items: [
      { company: 'Delfos', role: 'Python Developer', period: 'mar 2026 — jun 2026', model: 'remoto, Brasil', summary: 'Pipelines Dagster, APIs e integraciones para procesar datos operativos de activos solares y eólicos.' },
      { company: 'Softplan', role: 'Software Engineer II — AI Specialist', period: 'may 2025 — oct 2025', model: 'remoto, Brasil', summary: 'APIs de IA generativa, servicios de recomendación, automatizaciones con n8n y componentes desplegables con Docker, Rancher y GitLab CI/CD.' },
      { company: 'DOJO — Smart Ways', role: 'Data Engineer — Python Services', period: 'nov 2024 — abr 2025', model: 'remoto, Brasil', summary: 'Servicios Python para extracción estructurada de atributos de imágenes con AWS Lambda, S3 y Vertex AI.' },
      { company: 'QuintoAndar', role: 'Software Engineer', period: 'dic 2021 — ago 2024', model: 'remoto, Brasil', summary: 'Servicios Python, APIs internas, automatización y ETL para experimentos de ingresos y flujos operativos.' },
      { company: 'Spinver', role: 'Python Full-Stack Developer', period: 'ago 2020 — nov 2021', model: 'Brasil', summary: 'Crawlers, extracción de datos, integraciones con bases y mantenimiento de aplicaciones Python e interfaces web.' },
    ],
  },
  technologies: {
    eyebrow: '06 / STACK', title: 'Las herramientas cambian. Los fundamentos sostienen la entrega.',
    intro: 'Elijo tecnologías según el problema, el contexto del equipo y el costo de mantener la solución después del lanzamiento.',
    groups: [
      { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Flask', 'Pydantic', 'APIs REST', 'integraciones de servicios', 'procesamiento en segundo plano'] },
      { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
      { title: 'Bases de datos y datos', items: ['PostgreSQL', 'MariaDB', 'MongoDB', 'Redis', 'InfluxDB', 'SQL', 'Pandas', 'ETL', 'Dagster'] },
      { title: 'Inteligencia artificial y automatización', items: ['OpenAI API', 'Google Vertex AI', 'integraciones con LLMs', 'n8n'] },
      { title: 'Cloud y entrega', items: ['AWS Lambda', 'Amazon S3', 'GCP', 'Docker', 'Rancher', 'GitLab CI/CD', 'Git'] },
      { title: 'Calidad y colaboración', items: ['pytest', 'pruebas unitarias', 'revisión de código', 'debugging', 'clean code', 'modernización de legados', 'desarrollo ágil'] },
    ],
  },
  process: {
    eyebrow: '07 / PROCESS', title: 'Claridad para decidir. Ingeniería para entregar.',
    steps: [
      { title: 'Entender el problema real', description: 'Traduzco necesidades ambiguas en requisitos, riesgos, flujos y criterios de éxito claros.' },
      { title: 'Diseñar el camino más simple que pueda sostenerse', description: 'Defino responsabilidades, contratos e integraciones antes de acumular complejidad innecesaria.' },
      { title: 'Construir con ciclos cortos de feedback', description: 'Entrego incrementos utilizables, valido decisiones temprano y ajusto la implementación según el comportamiento real del sistema.' },
      { title: 'Probar lo que no puede fallar', description: 'Uso pruebas unitarias, revisión de código y debugging para reducir regresiones y aumentar la confianza de release.' },
      { title: 'Preparar el software para operar', description: 'Docker, CI/CD y documentación forman parte de la entrega. El software solo está listo cuando el equipo puede ejecutarlo, observarlo y mantenerlo.' },
    ], ready: 'ready_to_ship',
  },
  about: {
    eyebrow: '08 / README', title: 'Ingeniería con visión de producto.',
    paragraphs: [
      'Mi trabajo comienza donde los procesos manuales, las integraciones frágiles y las ideas poco definidas dejan de escalar. Me gusta descomponer problemas, conectar las piezas correctas y transformar incertidumbre en software confiable.',
      'Durante más de cinco años trabajé con aplicaciones Python, APIs, automatización, adquisición de datos, sistemas internos, inteligencia artificial y modernización de legados. Esa experiencia me enseñó a equilibrar velocidad de entrega con la responsabilidad de mantener lo que ya está en producción.',
      'También estudio Videojuegos Digitales. Los videojuegos son mi laboratorio creativo: un espacio donde ingeniería, interacción y experiencia de usuario deben funcionar juntas.',
    ],
    facts: ['Florianópolis, SC, Brasil', 'Portugués nativo', 'Inglés avanzado', 'Videojuegos Digitales en Descomplica — en curso', 'Disponible para oportunidades remotas'],
  },
  contact: {
    eyebrow: '09 / CONNECT', title: '¿Tienes un problema que debe convertirse en software?',
    intro: 'Si buscas a alguien capaz de conectar negocio, ingeniería e IA para entregar soluciones utilizables, hablemos. Estoy disponible para oportunidades remotas y proyectos alineados con mi experiencia.',
    primaryCta: 'Enviar un mensaje', linkedinCta: 'Conectar en LinkedIn', emailCta: 'Enviar un correo directamente',
    labels: { name: 'Nombre', email: 'Correo profesional', company: 'Empresa', subject: 'Asunto', message: 'Mensaje' },
    placeholders: { name: 'Tu nombre', email: 'tu@empresa.com', company: 'Nombre de la empresa (opcional)', message: 'Cuéntame brevemente sobre la oportunidad, el desafío o el proyecto.' },
    subjects: ['Oportunidad laboral', 'Proyecto o alianza', 'Conversación técnica', 'Otro'],
    consent: 'Al enviar, aceptas que use estos datos únicamente para responder a tu mensaje.',
    states: { idle: 'Enviar un mensaje', sending: 'Enviando...', success: 'Mensaje recibido. Responderé lo antes posible.', error: 'No fue posible enviar el mensaje. Inténtalo de nuevo o escribe a guilhermejramires@gmail.com.', configurationError: 'El envío desde el sitio aún no está configurado. Escribe directamente a guilhermejramires@gmail.com.' },
    validation: { summary: 'Revisa los campos indicados antes de enviar.', name: 'Escribe tu nombre con al menos 2 caracteres.', email: 'Escribe un correo válido.', subject: 'Selecciona un asunto.', message: 'Escribe un mensaje con al menos 20 caracteres.' },
  },
  a11y: {
    navigation: 'Navegación',
    skipToContent: 'Saltar al contenido', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
    skipAnimation: 'Saltar animación', newTab: 'abre en una nueva pestaña',
    languageSelector: 'Seleccionar idioma', activeLanguage: 'Idioma activo',
    previousProject: 'Proyecto anterior', nextProject: 'Proyecto siguiente',
    goToProject: 'Ir al proyecto', carouselLabel: 'Productos digitales en funcionamiento',
  },
  footer: {
    line: 'Guilherme Ramires · Ingeniero de Software Python · Full-Stack e IA',
    closing: 'Construido con intención, código y atención al detalle.',
    availability: 'available_for_remote_work = True', rights: 'Todos los derechos reservados.',
  },
} satisfies SiteContent;

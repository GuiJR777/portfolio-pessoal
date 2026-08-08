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
      { id: 'home', label: 'Inicio' }, { id: 'impact', label: 'Resultados' },
      { id: 'projects', label: 'Proyectos' }, { id: 'experience', label: 'Experiencia' },
      { id: 'about', label: 'Sobre mí' }, { id: 'contact', label: 'Contacto' },
    ],
  },
  hero: {
    eyebrow: 'INGENIERO DE SOFTWARE PYTHON · FULL-STACK E IA',
    title: 'Convierto problemas de negocio en software listo para usar.',
    intro:
      'Soy Guilherme Ramires, ingeniero de software Python con más de 5 años en APIs, productos web, automatización e IA aplicada.',
    reinforcement: 'Entiendo el contexto, construyo la solución y la llevo a producción.',
    primaryCta: 'Hablar sobre una oportunidad', secondaryCta: 'Descargar CV (EN)',
    availability: 'Disponible para oportunidades remotas · Florianópolis, Brasil · UTC-3',
    portraitAlt: 'Retrato profesional de Guilherme Ramires, ingeniero de software Python.',
  },
  metrics: {
    eyebrow: '01 / IMPACT', title: 'Resultados que llegaron al negocio.',
    intro: 'Una selección del impacto que generé en producto, ingresos y operación.',
    items: [
      { value: '5+ años', company: 'Experiencia profesional', context: 'entregando software Python en productos y operaciones reales' },
      { value: '+40%', company: 'Spinver', context: 'más contactos exitosos tras integrar datos de personas y extracción de teléfonos' },
      { value: '35% → 71%', company: 'DOJO — Smart Ways', context: 'de precisión en análisis de ropa tras evolucionar la POC con RAG' },
      { value: '4 h/semana', company: 'QuintoAndar', context: 'ahorradas en promedio mediante automatizaciones para distintos equipos' },
    ],
    companyStrip: 'Experiencia construida junto a equipos de Delfos, Softplan, DOJO, QuintoAndar y Spinver.',
  },
  capabilities: {
    eyebrow: '02 / MODULES', title: 'Puedo entrar en el problema y salir con la entrega.',
    intro: 'Trabajo donde backend, producto y automatización deben funcionar juntos.',
    items: [
      {
        key: 'full-stack', category: 'Desarrollo Full-Stack',
        title: 'Del backend a una experiencia publicada.',
        description: 'Llevo productos web desde el flujo y las reglas de negocio hasta la interfaz, publicación y mantenimiento.',
        technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Docker'],
      },
      {
        key: 'backend', category: 'Backend y APIs', title: 'APIs y servicios que sostienen el producto.',
        description: 'Construyo y modernizo servicios Python, integraciones y flujos de datos pensando en pruebas, confiabilidad y mantenimiento.',
        technologies: ['Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'Redis', 'Docker', 'pytest'],
      },
      {
        key: 'ai', category: 'Ingeniería de IA',
        title: 'IA aplicada al trabajo real.',
        description: 'Integro LLMs, automatizaciones y modelos de imagen en sistemas reales: recomendaciones, informes, chatbots y extracción estructurada.',
        technologies: ['OpenAI API', 'Google Vertex AI', 'FastAPI', 'AWS Lambda', 'n8n', 'Redis', 'Scrapy'],
      },
    ],
  },
  cases: {
    eyebrow: '03 / CASES', title: 'Tres problemas. Tres resultados medibles.',
    intro: 'El contexto cambia; mi papel es convertir la necesidad en una entrega que funciona.',
    labels: { problem: 'Problema', solution: 'Construcción', impact: 'Impacto', stack: 'Stack' },
    items: [
      {
        company: 'Spinver', title: 'Más contactos útiles a partir de datos difíciles de capturar.',
        problem: 'La operación comercial necesitaba convertir datos dispersos en contactos utilizables.',
        solution: 'Conecté una API de datos de personas con crawlers Python y un extractor de teléfonos para textos no estructurados.',
        impact: 'Los contactos exitosos con leads crecieron un 40% y el extractor alcanzó un 98% de precisión.',
        stack: ['Python', 'Scrapy', 'Redis', 'SQL', 'NoSQL'],
      },
      {
        company: 'Softplan', title: 'Inteligencia artificial integrada en productos internos.',
        problem: 'Los equipos internos necesitaban IA generativa sin depender de prototipos aislados.',
        solution: 'Construí APIs Python, un servicio de recomendación con FastAPI y Redis, y automatizaciones con n8n y OpenAI.',
        impact: 'Los informes automáticos ahorraron 2 horas al equipo de Diseño y los componentes reutilizables aceleraron nuevas soluciones con LLM.',
        stack: ['Python', 'FastAPI', 'Redis', 'OpenAI', 'n8n', 'Docker', 'Rancher', 'GitLab CI/CD'],
      },
      {
        company: 'DOJO — Smart Ways', title: 'De imágenes de ropa a atributos listos para otros sistemas.',
        problem: 'Un producto necesitaba convertir imágenes de ropa en atributos estructurados para otros sistemas.',
        solution: 'Estructuré servicios Python con Lambda, S3 y Vertex AI y evolucioné la primera POC con RAG.',
        impact: 'La precisión subió del 35% al 71% y las predicciones pasaron a alimentar sistemas downstream.',
        stack: ['Python', 'AWS Lambda', 'Amazon S3', 'Google Vertex AI', 'APIs', 'Docker', 'pruebas unitarias'],
      },
    ],
  },
  projects: {
    eyebrow: '04 / SHIPPED', title: 'Trabajo que puedes abrir y evaluar.',
    intro: 'Productos publicados y repositorios seleccionados muestran ejecución, no solo repertorio.',
    live: {
      title: 'Productos en producción o demostración',
      description: 'Ábrelos y comprueba la entrega funcionando.',
      items: [
        { slug: 'donateka', tag: 'PRODUCTO PUBLICADO', title: 'Donateka', description: 'Sitio publicado para comunicar el valor del producto en diferentes mercados.', role: 'Desarrollo web.', cta: 'Visitar Donateka', url: 'https://donateka.com.br/pt', image: liveProjectAssets.donateka.png, imageWebp: liveProjectAssets.donateka.webp, imageAvif: liveProjectAssets.donateka.avif, imageAlt: 'Página inicial de Donateka.', event: 'live_project_opened' },
        { slug: 'ramirestech', tag: 'PRODUCTO PROPIO', title: 'RamiresTech Digital Solutions', description: 'Producto propio que convierte servicios digitales complejos en una propuesta clara y orientada a la conversión.', role: 'Estrategia, producto, diseño y desarrollo.', cta: 'Conocer RamiresTech', url: 'https://ramirestech.com/', image: liveProjectAssets.ramirestech.png, imageWebp: liveProjectAssets.ramirestech.webp, imageAvif: liveProjectAssets.ramirestech.avif, imageAlt: 'Página inicial de RamiresTech Digital Solutions.', event: 'live_project_opened' },
        { slug: 'fjm-clean', tag: 'PROYECTO PARA CLIENTE', title: 'FJM Clean', description: 'Sitio comercial que presenta servicios y convierte interés en conversaciones por WhatsApp.', role: 'Estrategia, diseño y desarrollo.', cta: 'Visitar FJM Clean', url: 'https://fjmclean.com.br/', image: liveProjectAssets.fjmClean.png, imageWebp: liveProjectAssets.fjmClean.webp, imageAvif: liveProjectAssets.fjmClean.avif, imageAlt: 'Página inicial de FJM Clean.', event: 'live_project_opened' },
        { slug: 'mercadinho-delivery', tag: 'MINI E-COMMERCE', title: 'Mercadinho Delivery', description: 'Mini e-commerce funcional para descubrir productos y armar pedidos.', role: 'Producto, interfaz y desarrollo.', status: 'Prototipo funcional', cta: 'Explorar el prototipo', url: 'https://mercadinho-delivery.pages.dev/', image: liveProjectAssets.mercadinho.png, imageWebp: liveProjectAssets.mercadinho.webp, imageAvif: liveProjectAssets.mercadinho.avif, imageAlt: 'Interfaz del prototipo Mercadinho Delivery con catálogo de productos.', event: 'live_project_opened' },
      ],
    },
    source: {
      title: 'Código que respalda la conversación.',
      description: 'Dos repositorios alineados con Python, producto e IA aplicada.',
      items: [
        { slug: 'llm-recommendation-api', tag: 'FULL-STACK + IA', title: 'Sistema de recomendación con LLM', description: 'Aplicación con FastAPI, React, Redis y LLM que combina estrategias de recomendación con descripciones generadas.', proof: 'Estrategias intercambiables · caché · fallback · Docker · pruebas.', stack: ['Python', 'FastAPI', 'React', 'Redis', 'OpenAI', 'Docker', 'pytest'], cta: 'Ver arquitectura y código', url: 'https://github.com/GuiJR777/llm_recommendation_api', event: 'repository_opened' },
        { slug: 'jus-brasil-web-crawler', tag: 'PYTHON BACKEND', title: 'Crawler jurídico con API y caché', description: 'API que selecciona el crawler correcto, extrae datos procesales y usa Redis para evitar consultas repetidas.', proof: 'FastAPI · respuesta tipada · caché Redis · pruebas unitarias.', stack: ['Python', 'FastAPI', 'Beautiful Soup', 'Redis', 'Docker', 'pytest'], cta: 'Ver código', url: 'https://github.com/GuiJR777/jus-brasil-web-crawler', event: 'repository_opened' },
      ],
    },
    creative: {
      title: 'Laboratorio creativo', description: 'Creatividad aplicada a sistemas interactivos.',
      items: [{ slug: 'ramirestech-games', tag: 'GAME DEVELOPMENT', title: 'Juegos, prototipos y game jams', description: 'Juegos y prototipos publicados donde exploro interacción, reglas y feedback visual.', cta: 'Jugar en itch.io', url: 'https://ramirestechgames.itch.io/', event: 'games_opened' }],
    },
  },
  experience: {
    eyebrow: '05 / HISTORY', title: 'Experiencia en producto, datos e IA.',
    intro: 'Cinco empresas, contextos distintos y la misma responsabilidad: llevar la solución al uso real.',
    items: [
      { company: 'Delfos', role: 'Python Developer', period: 'mar 2026 — jun 2026', model: 'remoto, Brasil', summary: 'Pipelines Dagster, APIs e integraciones para procesar datos operativos de activos solares y eólicos.' },
      { company: 'Softplan', role: 'Software Engineer II — AI Specialist', period: 'may 2025 — oct 2025', model: 'remoto, Brasil', summary: 'APIs de IA generativa, servicios de recomendación, automatizaciones con n8n y componentes desplegables con Docker, Rancher y GitLab CI/CD.' },
      { company: 'DOJO — Smart Ways', role: 'Data Engineer — Python Services', period: 'nov 2024 — abr 2025', model: 'remoto, Brasil', summary: 'Servicios Python para extracción estructurada de atributos de imágenes con AWS Lambda, S3 y Vertex AI.' },
      { company: 'QuintoAndar', role: 'Software Engineer', period: 'dic 2021 — ago 2024', model: 'remoto, Brasil', summary: 'Servicios Python, APIs internas, automatización y ETL para experimentos de ingresos y flujos operativos.' },
      { company: 'Spinver', role: 'Python Full-Stack Developer', period: 'ago 2020 — nov 2021', model: 'Brasil', summary: 'Crawlers, extracción de datos, integraciones con bases y mantenimiento de aplicaciones Python e interfaces web.' },
    ],
  },
  conversionCtas: {
    impact: { text: '¿Buscas a alguien que conecte producto, backend e IA más allá del prototipo?', label: 'Hablar sobre una oportunidad' },
    projects: { text: '¿Quieres este nivel de ejecución en tu equipo o producto?', label: 'Hablar sobre una posición' },
    experience: { text: '¿Mi experiencia encaja con el desafío que necesitas resolver?', label: 'Comprobar compatibilidad' },
  },
  about: {
    eyebrow: '06 / README', title: 'Ingeniero por profesión. Constructor por naturaleza.',
    paragraphs: [
      'Me gusta tomar problemas poco definidos, encontrar el flujo esencial y convertirlos en software que otras personas puedan usar y mantener.',
      'Fuera del trabajo estudio Videojuegos Digitales. Los juegos son mi laboratorio para explorar sistemas, interacción y experiencia de usuario.',
    ],
    facts: ['Florianópolis, SC, Brasil', 'Portugués nativo', 'Inglés avanzado', 'Videojuegos Digitales en Descomplica — en curso', 'Disponible para oportunidades remotas'],
  },
  contact: {
    eyebrow: '07 / CONNECT', title: '¿Hablamos sobre la próxima oportunidad?',
    intro: 'Estoy disponible para entrevistas en posiciones remotas de Python, backend, full-stack e IA aplicada, especialmente donde producto y ejecución deben avanzar juntos.',
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

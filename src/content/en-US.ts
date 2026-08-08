import { liveProjectAssets } from './links';
import type { SiteContent } from './types';

export const enUS = {
  locale: 'en-US',
  shortLocale: 'EN',
  seo: {
    title: 'Guilherme Ramires | Python, Full-Stack & AI',
    description:
      'Python Software Engineer with 5+ years of experience in APIs, full-stack applications, automation, and AI. Explore his work and results.',
    ogTitle: 'Guilherme Ramires — Python Software Engineer',
    ogDescription:
      'From ambiguous problems to production software: Python, Full-Stack, and Artificial Intelligence.',
  },
  header: {
    brand: 'Guilherme Ramires',
    descriptor: 'Python Software Engineer',
    cta: "Let's talk",
    resume: 'Download resume (EN)',
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'impact', label: 'Impact' },
      { id: 'build', label: 'What I Build' },
      { id: 'cases', label: 'Case Studies' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
  },
  hero: {
    eyebrow: 'PYTHON SOFTWARE ENGINEER · FULL-STACK & AI',
    title: 'From ambiguous problems to production software.',
    intro:
      "I'm Guilherme Ramires, a software engineer with 5+ years of experience building APIs, applications, automation tools, and AI integrations. I turn business needs into tested, deployable software built for real-world use.",
    reinforcement:
      'Architecture, code, testing, and delivery — beyond the prototype.',
    primaryCta: 'Explore my work',
    secondaryCta: 'Download resume (EN)',
    availability:
      'Open to remote opportunities · Florianópolis, Brazil · UTC-3',
    portraitAlt:
      'Professional portrait of Guilherme Ramires, Python Software Engineer.',
  },
  metrics: {
    eyebrow: '01 / IMPACT',
    title: 'Results before adjectives.',
    intro:
      'My work does not end when the code runs. It needs to remove friction, expand capacity, and remain reliable in production.',
    items: [
      {
        value: '5+ years',
        company: 'Professional experience',
        context: 'building Python systems and services',
      },
      {
        value: '+40%',
        company: 'Spinver',
        context:
          'increase in successful lead contacts after combining people data with phone extraction',
      },
      {
        value: '98%',
        company: 'Spinver',
        context:
          'accuracy extracting Brazilian phone numbers from unstructured text, before generative AI became mainstream',
      },
      {
        value: '35% → 71%',
        company: 'DOJO — Smart Ways',
        context:
          'accuracy improvement from the first POC to delivery of an LLM-powered clothing analysis product after adopting RAG',
      },
      {
        value: '4 hrs/week',
        company: 'QuintoAndar',
        context: 'saved on average through automation built for multiple teams',
      },
      {
        value: '2 hours',
        company: 'Softplan',
        context:
          'saved for the Design team through automated LLM-powered report generation',
      },
    ],
    companyStrip:
      'Experience built with teams at Delfos, Softplan, DOJO, QuintoAndar, and Spinver.',
  },
  capabilities: {
    eyebrow: '02 / MODULES',
    title: 'Software that solves the whole problem.',
    intro:
      'From business logic to interfaces, from integration to deployment: I combine backend engineering, product thinking, and artificial intelligence to turn complex processes into usable systems.',
    items: [
      {
        key: 'full-stack',
        category: 'Full-Stack Development',
        title: 'Complete products, not isolated pieces.',
        description:
          'I build and maintain Python applications, web interfaces, internal tools, and system integrations. I consider the full flow: data, business rules, user experience, operations, and maintenance.',
        technologies: [
          'Python', 'Django', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Bootstrap',
          'PostgreSQL', 'MongoDB',
        ],
      },
      {
        key: 'backend',
        category: 'Backend & APIs',
        title: 'The foundation must support the product.',
        description:
          'I develop REST APIs, internal services, integrations, and background processing with a focus on clarity, testing, and reliability. I also maintain and modernize legacy systems without disrupting operations.',
        technologies: [
          'Python', 'FastAPI', 'Django', 'Flask', 'Pydantic', 'PostgreSQL',
          'Redis', 'Docker', 'pytest',
        ],
      },
      {
        key: 'ai',
        category: 'AI Engineering',
        title: 'AI connected to the product, not trapped in a demo.',
        description:
          'I integrate LLMs and image-processing AI models into real systems through APIs, reusable components, and automated workflows. My experience includes recommendations, chatbots, structured attribute extraction, and pipelines using OpenAI and Vertex AI.',
        technologies: [
          'OpenAI API', 'Google Vertex AI', 'FastAPI', 'AWS Lambda', 'S3',
          'n8n', 'Redis', 'Docker',
        ],
      },
      {
        key: 'automation',
        category: 'Automation, Crawlers & ETL',
        title: 'Repetition and scattered data are engineering opportunities.',
        description:
          'I build crawlers, pipelines, and automation tools that capture, organize, and deliver data to other teams and systems. This work has expanded commercial coverage, reduced manual effort, and supported revenue experiments.',
        technologies: [
          'Scrapy', 'Redis', 'Pandas', 'Dagster', 'InfluxDB', 'SQL', 'NoSQL', 'APIs',
        ],
      },
    ],
  },
  cases: {
    eyebrow: '03 / CASES',
    title: 'Real problems. Technical decisions. Verifiable impact.',
    intro:
      'A tech stack only matters when it solves something. These cases show how I turned operational and product needs into deployable software.',
    labels: {
      problem: 'Problem', solution: 'Build', impact: 'Impact', stack: 'Stack',
    },
    items: [
      {
        company: 'Spinver',
        title: 'More actionable contacts from hard-to-capture data.',
        problem:
          'Data acquisition needed to reach more sources and transform unstructured information into usable contacts.',
        solution:
          'I developed Python crawlers, Scrapy-based agents, Redis-backed workflows, and SQL and NoSQL integrations. I also integrated a people data API and built a system specialized in extracting Brazilian phone numbers from unstructured text.',
        impact:
          'Combining the people data API with phone extraction increased successful lead contacts by 40%. The extraction system achieved 98% accuracy before generative AI became mainstream.',
        stack: ['Python', 'Scrapy', 'Redis', 'SQL', 'NoSQL'],
      },
      {
        company: 'Softplan',
        title: 'Artificial intelligence integrated into internal products.',
        problem:
          'Internal products needed reusable access to generative AI, consistent performance, and a reliable path from prototyping to deployment.',
        solution:
          'I developed Python APIs connecting business systems to LLM pipelines. I also built a recommendation service with FastAPI, Redis caching, multiple strategies, Docker, and automated tests, plus n8n and OpenAI workflows. For the Design team, I implemented a system that combined automation and an LLM to generate reports automatically.',
        impact:
          'The reporting system saved the Design team 2 hours of work. The other deliveries improved recommendation service performance and shortened prototyping cycles for chatbots deployable through Rancher and GitLab CI/CD.',
        stack: [
          'Python', 'FastAPI', 'Redis', 'OpenAI', 'n8n', 'Docker', 'Rancher',
          'GitLab CI/CD',
        ],
      },
      {
        company: 'DOJO — Smart Ways',
        title: 'From clothing images to attributes ready for downstream systems.',
        problem:
          'A clothing analysis product needed to transform information contained in images into structured attributes with enough accuracy for downstream systems.',
        solution:
          'I built Python services around AWS Lambda, S3, and Vertex AI, separating input, prediction, validation, and output responsibilities. After the first POC, I incorporated RAG into the LLM workflow to improve analysis quality. The services were exposed through APIs and Dockerized components.',
        impact:
          'The first POC achieved 35% accuracy. After RAG was adopted, the delivered product reached 71% — a 36-percentage-point improvement — and made predictions available to downstream systems.',
        stack: [
          'Python', 'AWS Lambda', 'Amazon S3', 'Google Vertex AI', 'APIs',
          'Docker', 'unit testing',
        ],
      },
      {
        company: 'Delfos',
        title: 'Connected operational data for solar and wind assets.',
        problem:
          'Renewable energy systems depended on pipelines and integrations capable of processing operational data from different sources.',
        solution:
          'I built and maintained Dagster pipelines, Python tools, and APIs connecting InfluxDB, PostgreSQL, and processing services.',
        impact:
          'The work reduced integration complexity and improved service reliability through unit tests, Dockerized components, and GitLab CI/CD pipelines.',
        stack: ['Python', 'Dagster', 'InfluxDB', 'PostgreSQL', 'Docker', 'GitLab CI/CD'],
      },
      {
        company: 'QuintoAndar',
        title: 'Engineering that accelerated experiments without neglecting operations.',
        problem:
          'An experimentation-focused squad needed to execute revenue hypotheses while keeping legacy services and operational workflows running.',
        solution:
          'I developed Python services, internal APIs, automation tools for multiple teams, and ETL pipelines. I also built internal endpoints and tools, reviewed code, wrote tests, and troubleshot incidents.',
        impact:
          'The automation saved an average of 4 hours of work per week. The other deliveries accelerated revenue experiments and protected the continuity of existing services and databases.',
        stack: ['Python', 'internal APIs', 'automation', 'ETL', 'testing', 'databases'],
      },
    ],
  },
  projects: {
    eyebrow: '04 / SHIPPED',
    title: 'Projects that moved beyond the editor and reached real users.',
    intro:
      'Published products show how I turn a need into a usable experience. Open-source projects reveal the engineering behind delivery: architecture, integrations, tests, and implementation decisions.',
    live: {
      title: 'Published digital products',
      description: 'Websites and experiences you can open, explore, and evaluate right now.',
      items: [
        {
          slug: 'donateka', tag: 'LIVE PRODUCT', title: 'Donateka',
          description:
            "A published digital experience designed to communicate the project's value clearly across different markets.",
          role: 'Website development.', cta: 'Visit Donateka',
          url: 'https://donateka.com.br/pt', image: liveProjectAssets.donateka.png,
          imageWebp: liveProjectAssets.donateka.webp, imageAvif: liveProjectAssets.donateka.avif,
          imageAlt: 'Donateka homepage.', event: 'live_project_opened',
        },
        {
          slug: 'ramirestech', tag: 'OWN PRODUCT', title: 'RamiresTech Digital Solutions',
          description:
            'The website for my digital solutions business, built to turn complex services into a clear, navigable, conversion-oriented proposition.',
          role: 'Strategy, product, copy, design, and development.', cta: 'Explore RamiresTech',
          url: 'https://ramirestech.com/', image: liveProjectAssets.ramirestech.png,
          imageWebp: liveProjectAssets.ramirestech.webp, imageAvif: liveProjectAssets.ramirestech.avif,
          imageAlt: 'RamiresTech Digital Solutions homepage.', event: 'live_project_opened',
        },
        {
          slug: 'fjm-clean', tag: 'CLIENT PROJECT', title: 'FJM Clean',
          description:
            'A commercial web presence for a local upholstery-cleaning business, structured to explain its services and turn interest into WhatsApp conversations.',
          role: 'Strategy, copy, design, and development.', cta: 'Visit FJM Clean',
          url: 'https://fjmclean.com.br/', image: liveProjectAssets.fjmClean.png,
          imageWebp: liveProjectAssets.fjmClean.webp, imageAvif: liveProjectAssets.fjmClean.avif,
          imageAlt: 'FJM Clean homepage.', event: 'live_project_opened',
        },
        {
          slug: 'mercadinho-delivery', tag: 'MINI E-COMMERCE', title: 'Mercadinho Delivery',
          description:
            'A functional mini e-commerce prototype that organizes a grocery catalog into a simple product-discovery and ordering experience.',
          role: 'Product, experience, interface, and development.', status: 'Functional prototype',
          cta: 'Explore the prototype', url: 'https://mercadinho-delivery.pages.dev/',
          image: liveProjectAssets.mercadinho.png, imageWebp: liveProjectAssets.mercadinho.webp,
          imageAvif: liveProjectAssets.mercadinho.avif,
          imageAlt: 'Mercadinho Delivery prototype interface with a product catalog.',
          event: 'live_project_opened',
        },
      ],
    },
    source: {
      title: 'See how I build.',
      description:
        'Repositories selected for the quality of their technical evidence and their fit with Python, Full-Stack, and AI — not simply because they are public.',
      items: [
        {
          slug: 'llm-recommendation-api', tag: 'FULL-STACK + AI',
          title: 'LLM-powered recommendation system',
          description:
            'A complete recommendation solution combining history- and preference-based strategies with LLM-generated product descriptions. It brings together FastAPI services, a React interface, Redis caching with fallback, Docker, and automated tests.',
          proof:
            'Strategy Pattern · 72-hour cache TTL · real or emulated LLM · frontend and APIs launched with one command.',
          stack: ['Python', 'FastAPI', 'React', 'Redis', 'OpenAI', 'Docker', 'pytest'],
          cta: 'Explore architecture and code',
          url: 'https://github.com/GuiJR777/llm_recommendation_api', event: 'repository_opened',
        },
        {
          slug: 'jus-brasil-web-crawler', tag: 'PYTHON BACKEND',
          title: 'Legal crawler with API and caching',
          description:
            'A Python API that receives a case number, selects the compatible crawler, extracts first- and second-instance data, and returns a structured response. Redis reduces repeated requests, while Docker simplifies local execution.',
          proof:
            'Crawler selection by judicial segment · FastAPI · Redis cache · typed response · unit tests.',
          stack: ['Python', 'FastAPI', 'Beautiful Soup', 'Redis', 'Docker', 'pytest'],
          cta: 'View code', url: 'https://github.com/GuiJR777/jus-brasil-web-crawler',
          event: 'repository_opened',
        },
      ],
    },
    creative: {
      title: 'Creative lab', description: 'Creativity applied to interactive systems.',
      items: [{
        slug: 'ramirestech-games', tag: 'GAME DEVELOPMENT',
        title: 'Games, prototypes, and game jams',
        description:
          'My interaction and gameplay lab: published games and prototypes that turn rules, visual feedback, and player experience into playable systems.',
        cta: 'Play on itch.io', url: 'https://ramirestechgames.itch.io/', event: 'games_opened',
      }],
    },
  },
  experience: {
    eyebrow: '05 / HISTORY',
    title: 'Five years of turning context into delivery.',
    intro:
      'My experience spans digital products, internal systems, data acquisition, automation, artificial intelligence, and delivery infrastructure.',
    items: [
      { company: 'Delfos', role: 'Python Developer', period: 'Mar 2026 — Jun 2026', model: 'Remote, Brazil', summary: 'Dagster pipelines, APIs, and integrations for processing operational data from solar and wind assets.' },
      { company: 'Softplan', role: 'Software Engineer II — AI Specialist', period: 'May 2025 — Oct 2025', model: 'Remote, Brazil', summary: 'Generative AI APIs, recommendation services, n8n automation, and deployable components using Docker, Rancher, and GitLab CI/CD.' },
      { company: 'DOJO — Smart Ways', role: 'Data Engineer — Python Services', period: 'Nov 2024 — Apr 2025', model: 'Remote, Brazil', summary: 'Python services for structured image attribute extraction using AWS Lambda, S3, and Vertex AI.' },
      { company: 'QuintoAndar', role: 'Software Engineer', period: 'Dec 2021 — Aug 2024', model: 'Remote, Brazil', summary: 'Python services, internal APIs, automation, and ETL supporting revenue experiments and operational workflows.' },
      { company: 'Spinver', role: 'Python Full-Stack Developer', period: 'Aug 2020 — Nov 2021', model: 'Brazil', summary: 'Crawlers, data extraction, database integrations, and maintenance of Python applications and web interfaces.' },
    ],
  },
  technologies: {
    eyebrow: '06 / STACK',
    title: 'Tools change. Fundamentals sustain delivery.',
    intro:
      "I choose technology based on the problem, the team's context, and the cost of maintaining the solution after launch.",
    groups: [
      { title: 'Backend', items: ['Python', 'FastAPI', 'Django', 'Flask', 'Pydantic', 'REST APIs', 'service integrations', 'background processing'] },
      { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
      { title: 'Databases and data', items: ['PostgreSQL', 'MariaDB', 'MongoDB', 'Redis', 'InfluxDB', 'SQL', 'Pandas', 'ETL', 'Dagster'] },
      { title: 'Artificial intelligence and automation', items: ['OpenAI API', 'Google Vertex AI', 'LLM integrations', 'n8n'] },
      { title: 'Cloud and delivery', items: ['AWS Lambda', 'Amazon S3', 'GCP', 'Docker', 'Rancher', 'GitLab CI/CD', 'Git'] },
      { title: 'Quality and collaboration', items: ['pytest', 'unit testing', 'code reviews', 'debugging', 'clean code', 'legacy modernization', 'agile delivery'] },
    ],
  },
  process: {
    eyebrow: '07 / PROCESS',
    title: 'Clarity to decide. Engineering to deliver.',
    steps: [
      { title: 'Understand the real problem', description: 'I translate ambiguous needs into clear requirements, risks, workflows, and success criteria.' },
      { title: 'Design the simplest approach that can last', description: 'I define responsibilities, contracts, and integrations before unnecessary complexity accumulates.' },
      { title: 'Build with short feedback loops', description: 'I deliver usable increments, validate decisions early, and adjust implementation based on real system behavior.' },
      { title: 'Test what cannot afford to break', description: 'I use unit tests, code review, and debugging to reduce regressions and increase release confidence.' },
      { title: 'Prepare the software to operate', description: 'Docker, CI/CD, and documentation are part of delivery. Software is only ready when the team can run, observe, and maintain it.' },
    ],
    ready: 'ready_to_ship',
  },
  about: {
    eyebrow: '08 / README',
    title: 'Engineering with product perspective.',
    paragraphs: [
      'My work begins where manual processes, fragile integrations, and loosely defined ideas stop scaling. I enjoy breaking problems down, connecting the right pieces, and turning uncertainty into reliable software.',
      'Over more than five years, I have worked with Python applications, APIs, automation, data acquisition, internal systems, artificial intelligence, and legacy modernization. That experience taught me to balance delivery speed with the responsibility of maintaining what is already in production.',
      'I am also studying Digital Games. Games are my creative lab: a space where engineering, interaction, and user experience must work together.',
    ],
    facts: ['Florianópolis, SC, Brazil', 'Native Portuguese', 'Advanced English', 'Digital Games at Descomplica — in progress', 'Open to remote opportunities'],
  },
  contact: {
    eyebrow: '09 / CONNECT',
    title: 'Have a problem that needs to become software?',
    intro:
      "If you need someone who can connect business, engineering, and AI to deliver usable solutions, let's talk. I am open to remote opportunities and projects aligned with my experience.",
    primaryCta: 'Send a message', linkedinCta: 'Connect on LinkedIn',
    emailCta: 'Email me directly',
    labels: { name: 'Name', email: 'Work email', company: 'Company', subject: 'Subject', message: 'Message' },
    placeholders: { name: 'Your name', email: 'you@company.com', company: 'Company name (optional)', message: 'Tell me briefly about the opportunity, challenge, or project.' },
    subjects: ['Job opportunity', 'Project or partnership', 'Technical conversation', 'Other'],
    consent: 'By submitting, you agree that I may use this information only to reply to your message.',
    states: {
      idle: 'Send a message', sending: 'Sending...',
      success: 'Message received. I will get back to you as soon as possible.',
      error: 'The message could not be sent. Try again or email guilhermejramires@gmail.com.',
      configurationError: 'Website delivery is not configured yet. Email guilhermejramires@gmail.com directly.',
    },
    validation: {
      summary: 'Review the highlighted fields before submitting.',
      name: 'Enter your name using at least 2 characters.', email: 'Enter a valid email address.',
      subject: 'Select a subject.', message: 'Write a message using at least 20 characters.',
    },
  },
  a11y: {
    navigation: 'Navigation',
    skipToContent: 'Skip to content', openMenu: 'Open menu', closeMenu: 'Close menu',
    skipAnimation: 'Skip animation', newTab: 'opens in a new tab',
    languageSelector: 'Select language', activeLanguage: 'Active language',
    previousProject: 'Previous project', nextProject: 'Next project',
    goToProject: 'Go to project', carouselLabel: 'Published digital products',
  },
  footer: {
    line: 'Guilherme Ramires · Python Software Engineer · Full-Stack & AI',
    closing: 'Built with intent, code, and attention to detail.',
    availability: 'available_for_remote_work = True', rights: 'All rights reserved.',
  },
} satisfies SiteContent;

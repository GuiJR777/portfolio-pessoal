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
      { id: 'impact', label: 'Results' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
  },
  hero: {
    eyebrow: 'PYTHON SOFTWARE ENGINEER · FULL-STACK & AI',
    title: 'I turn business problems into software ready for real use.',
    intro:
      "I'm Guilherme Ramires, a Python software engineer with 5+ years of experience across APIs, web products, automation, and applied AI.",
    reinforcement:
      'I understand the context, build the solution, and take it to production.',
    primaryCta: 'Discuss an opportunity',
    secondaryCta: 'Download resume (EN)',
    availability:
      'Open to remote opportunities · Florianópolis, Brazil · UTC-3',
    portraitAlt:
      'Professional portrait of Guilherme Ramires, Python Software Engineer.',
  },
  metrics: {
    eyebrow: '01 / IMPACT',
    title: 'Results that reached the business.',
    intro:
      'Selected impact across product, revenue, and operations.',
    items: [
      {
        value: '5+ years',
        company: 'Professional experience',
        context: 'shipping Python software in real products and operations',
      },
      {
        value: '+40%',
        company: 'Spinver',
        context: 'more successful lead contacts after integrating people data and phone extraction',
      },
      {
        value: '35% → 71%',
        company: 'DOJO — Smart Ways',
        context: 'accuracy in clothing analysis after evolving the first POC with RAG',
      },
      {
        value: '4 hrs/week',
        company: 'QuintoAndar',
        context: 'saved on average through automation for multiple teams',
      },
    ],
    companyStrip:
      'Experience with teams at Delfos, Softplan, DOJO, QuintoAndar, and Spinver.',
  },
  capabilities: {
    eyebrow: '02 / MODULES',
    title: 'I can enter at the problem and leave with the delivery.',
    intro:
      'I work where backend, product, and automation need to function together.',
    items: [
      {
        key: 'full-stack',
        category: 'Full-Stack Development',
        title: 'From backend to a published experience.',
        description:
          'I take web products from flow and business rules to interface, launch, and maintenance.',
        technologies: [
          'Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Docker',
        ],
      },
      {
        key: 'backend',
        category: 'Backend & APIs',
        title: 'APIs and services that support the product.',
        description:
          'I build and modernize Python services, integrations, and data flows with testing, reliability, and maintenance in mind.',
        technologies: [
          'Python', 'FastAPI', 'Pydantic', 'PostgreSQL', 'Redis', 'Docker', 'pytest',
        ],
      },
      {
        key: 'ai',
        category: 'AI Engineering',
        title: 'AI applied to real work.',
        description:
          'I connect LLMs, automation, and image models to real systems: recommendations, reports, chatbots, and structured extraction.',
        technologies: [
          'OpenAI API', 'Google Vertex AI', 'FastAPI', 'AWS Lambda', 'n8n', 'Redis', 'Scrapy',
        ],
      },
    ],
  },
  cases: {
    eyebrow: '03 / CASES',
    title: 'Three problems. Three measurable outcomes.',
    intro:
      'The context changes; my role is to turn the need into a delivery that works.',
    labels: {
      problem: 'Problem', solution: 'Build', impact: 'Impact', stack: 'Stack',
    },
    items: [
      {
        company: 'Spinver',
        title: 'More actionable contacts from hard-to-capture data.',
        problem:
          'The commercial operation needed to turn scattered data into usable contacts.',
        solution:
          'I connected a people-data API to Python crawlers and a phone extractor for unstructured text.',
        impact:
          'Successful lead contacts increased by 40%, and the extractor reached 98% accuracy.',
        stack: ['Python', 'Scrapy', 'Redis', 'SQL', 'NoSQL'],
      },
      {
        company: 'Softplan',
        title: 'Artificial intelligence integrated into internal products.',
        problem:
          'Internal teams needed generative AI without relying on isolated prototypes.',
        solution:
          'I built Python APIs, a FastAPI and Redis recommendation service, and n8n/OpenAI automation.',
        impact:
          'Automated reports saved the Design team 2 hours, while reusable components accelerated new LLM solutions.',
        stack: [
          'Python', 'FastAPI', 'Redis', 'OpenAI', 'n8n', 'Docker', 'Rancher',
          'GitLab CI/CD',
        ],
      },
      {
        company: 'DOJO — Smart Ways',
        title: 'From clothing images to attributes ready for downstream systems.',
        problem:
          'A product needed to turn clothing images into structured attributes for other systems.',
        solution:
          'I structured Python services with Lambda, S3, and Vertex AI, then evolved the first POC with RAG.',
        impact:
          'Accuracy increased from 35% to 71%, and predictions became available to downstream systems.',
        stack: [
          'Python', 'AWS Lambda', 'Amazon S3', 'Google Vertex AI', 'APIs',
          'Docker', 'unit testing',
        ],
      },
    ],
  },
  projects: {
    eyebrow: '04 / SHIPPED',
    title: 'Work you can open and evaluate.',
    intro:
      'Published products and selected repositories show execution, not just technical range.',
    live: {
      title: 'Products in production or demonstration',
      description: 'Open them and see the delivery working.',
      items: [
        {
          slug: 'donateka', tag: 'LIVE PRODUCT', title: 'Donateka',
          description:
            "A published website that communicates the product's value across different markets.",
          role: 'Web development.', cta: 'Visit Donateka',
          url: 'https://donateka.com.br/pt', image: liveProjectAssets.donateka.png,
          imageWebp: liveProjectAssets.donateka.webp, imageAvif: liveProjectAssets.donateka.avif,
          imageAlt: 'Donateka homepage.', event: 'live_project_opened',
        },
        {
          slug: 'ramirestech', tag: 'OWN PRODUCT', title: 'RamiresTech Digital Solutions',
          description:
            'My own product, turning complex digital services into a clear, conversion-oriented proposition.',
          role: 'Strategy, product, design, and development.', cta: 'Explore RamiresTech',
          url: 'https://ramirestech.com/', image: liveProjectAssets.ramirestech.png,
          imageWebp: liveProjectAssets.ramirestech.webp, imageAvif: liveProjectAssets.ramirestech.avif,
          imageAlt: 'RamiresTech Digital Solutions homepage.', event: 'live_project_opened',
        },
        {
          slug: 'fjm-clean', tag: 'CLIENT PROJECT', title: 'FJM Clean',
          description:
            'A commercial website that explains services and turns interest into WhatsApp conversations.',
          role: 'Strategy, design, and development.', cta: 'Visit FJM Clean',
          url: 'https://fjmclean.com.br/', image: liveProjectAssets.fjmClean.png,
          imageWebp: liveProjectAssets.fjmClean.webp, imageAvif: liveProjectAssets.fjmClean.avif,
          imageAlt: 'FJM Clean homepage.', event: 'live_project_opened',
        },
        {
          slug: 'mercadinho-delivery', tag: 'MINI E-COMMERCE', title: 'Mercadinho Delivery',
          description:
            'A functional mini e-commerce for product discovery and order building.',
          role: 'Product, interface, and development.', status: 'Functional prototype',
          cta: 'Explore the prototype', url: 'https://mercadinho-delivery.pages.dev/',
          image: liveProjectAssets.mercadinho.png, imageWebp: liveProjectAssets.mercadinho.webp,
          imageAvif: liveProjectAssets.mercadinho.avif,
          imageAlt: 'Mercadinho Delivery prototype interface with a product catalog.',
          event: 'live_project_opened',
        },
      ],
    },
    source: {
      title: 'Code that supports the conversation.',
      description:
        'Two repositories aligned with Python, product engineering, and applied AI.',
      items: [
        {
          slug: 'llm-recommendation-api', tag: 'FULL-STACK + AI',
          title: 'LLM-powered recommendation system',
          description:
            'A FastAPI, React, Redis, and LLM application combining recommendation strategies with generated descriptions.',
          proof:
            'Interchangeable strategies · cache · fallback · Docker · tests.',
          stack: ['Python', 'FastAPI', 'React', 'Redis', 'OpenAI', 'Docker', 'pytest'],
          cta: 'Explore architecture and code',
          url: 'https://github.com/GuiJR777/llm_recommendation_api', event: 'repository_opened',
        },
        {
          slug: 'jus-brasil-web-crawler', tag: 'PYTHON BACKEND',
          title: 'Legal crawler with API and caching',
          description:
            'An API that selects the correct crawler, extracts court-case data, and uses Redis to avoid repeated requests.',
          proof:
            'FastAPI · typed response · Redis cache · unit tests.',
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
          'Published games and prototypes where I explore interaction, rules, and visual feedback.',
        cta: 'Play on itch.io', url: 'https://ramirestechgames.itch.io/', event: 'games_opened',
      }],
    },
  },
  experience: {
    eyebrow: '05 / HISTORY',
    title: 'Experience across product, data, and AI.',
    intro:
      'Five companies, different contexts, and the same responsibility: make the solution reach real use.',
    items: [
      { company: 'Delfos', role: 'Python Developer', period: 'Mar 2026 — Jun 2026', model: 'Remote, Brazil', summary: 'Dagster pipelines, APIs, and integrations for processing operational data from solar and wind assets.' },
      { company: 'Softplan', role: 'Software Engineer II — AI Specialist', period: 'May 2025 — Oct 2025', model: 'Remote, Brazil', summary: 'Generative AI APIs, recommendation services, n8n automation, and deployable components using Docker, Rancher, and GitLab CI/CD.' },
      { company: 'DOJO — Smart Ways', role: 'Data Engineer — Python Services', period: 'Nov 2024 — Apr 2025', model: 'Remote, Brazil', summary: 'Python services for structured image attribute extraction using AWS Lambda, S3, and Vertex AI.' },
      { company: 'QuintoAndar', role: 'Software Engineer', period: 'Dec 2021 — Aug 2024', model: 'Remote, Brazil', summary: 'Python services, internal APIs, automation, and ETL supporting revenue experiments and operational workflows.' },
      { company: 'Spinver', role: 'Python Full-Stack Developer', period: 'Aug 2020 — Nov 2021', model: 'Brazil', summary: 'Crawlers, data extraction, database integrations, and maintenance of Python applications and web interfaces.' },
    ],
  },
  conversionCtas: {
    impact: {
      text: 'Looking for someone who connects product, backend, and AI beyond the prototype?',
      label: 'Discuss an opportunity',
    },
    projects: {
      text: 'Want this level of execution on your team or product?',
      label: 'Talk about a role',
    },
    experience: {
      text: 'Does my experience fit the challenge you are hiring for?',
      label: 'Check our fit',
    },
  },
  about: {
    eyebrow: '06 / README',
    title: 'Engineer by profession. Builder by nature.',
    paragraphs: [
      'I enjoy taking loosely defined problems, finding the essential flow, and turning them into software other people can use and maintain.',
      'Outside work, I study Digital Games. Games are my lab for exploring systems, interaction, and user experience.',
    ],
    facts: ['Florianópolis, SC, Brazil', 'Native Portuguese', 'Advanced English', 'Digital Games at Descomplica — in progress', 'Open to remote opportunities'],
  },
  contact: {
    eyebrow: '07 / CONNECT',
    title: 'Shall we discuss the next opportunity?',
    intro:
      'I am open to interviews for remote Python, backend, full-stack, and applied AI roles — especially where product thinking and execution need to work together.',
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

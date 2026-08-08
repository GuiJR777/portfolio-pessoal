import { liveProjectAssets } from './links';
import type { SiteContent } from './types';

export const ptBR = {
  locale: 'pt-BR',
  shortLocale: 'PT',
  seo: {
    title: 'Guilherme Ramires | Python, Full-Stack e IA',
    description:
      'Engenheiro de Software Python com 5+ anos em APIs, aplicações full-stack, automações e IA. Conheça seus projetos, resultados e experiência.',
    ogTitle: 'Guilherme Ramires — Python Software Engineer',
    ogDescription:
      'Do problema ambíguo ao software em produção: Python, Full-Stack e Inteligência Artificial.',
  },
  header: {
    brand: 'Guilherme Ramires',
    descriptor: 'Python Software Engineer',
    cta: 'Vamos conversar',
    resume: 'Baixar currículo (EN)',
    nav: [
      { id: 'home', label: 'Início' },
      { id: 'impact', label: 'Resultados' },
      { id: 'projects', label: 'Projetos' },
      { id: 'experience', label: 'Experiência' },
      { id: 'about', label: 'Sobre' },
      { id: 'contact', label: 'Contato' },
    ],
  },
  hero: {
    eyebrow: 'PYTHON SOFTWARE ENGINEER · FULL-STACK & IA',
    title: 'Transformo problemas de negócio em software pronto para uso.',
    intro:
      'Sou Guilherme Ramires, engenheiro de software Python com mais de 5 anos em APIs, produtos web, automação e IA aplicada.',
    reinforcement:
      'Entendo o contexto, construo a solução e levo até produção.',
    primaryCta: 'Conversar sobre uma oportunidade',
    secondaryCta: 'Baixar currículo (EN)',
    availability:
      'Disponível para oportunidades remotas · Florianópolis, Brasil · UTC-3',
    portraitAlt:
      'Retrato profissional de Guilherme Ramires, engenheiro de software Python.',
  },
  metrics: {
    eyebrow: '01 / IMPACT',
    title: 'Resultados que chegaram ao negócio.',
    intro:
      'Uma seleção do impacto que gerei em produto, receita e operação.',
    items: [
      {
        value: '5+ anos',
        company: 'Trajetória profissional',
        context: 'entregando software Python em produtos e operações reais',
      },
      {
        value: '+40%',
        company: 'Spinver',
        context: 'mais sucesso no contato com leads após integrar dados e extração de telefones',
      },
      {
        value: '35% → 71%',
        company: 'DOJO — Smart Ways',
        context: 'de assertividade na análise de roupas após evoluir a POC com RAG',
      },
      {
        value: '4h/semana',
        company: 'QuintoAndar',
        context: 'poupadas, em média, por automações criadas para diferentes times',
      },
    ],
    companyStrip:
      'Experiência em times da Delfos, Softplan, DOJO, QuintoAndar e Spinver.',
  },
  capabilities: {
    eyebrow: '02 / MODULES',
    title: 'Posso entrar no problema e sair com a entrega.',
    intro:
      'Atuo onde backend, produto e automação precisam funcionar juntos.',
    items: [
      {
        key: 'full-stack',
        category: 'Full-Stack Development',
        title: 'Do backend à experiência publicada.',
        description:
          'Levo produtos web do fluxo e das regras de negócio até a interface, publicação e manutenção.',
        technologies: [
          'Python',
          'Django',
          'HTML',
          'CSS',
          'JavaScript',
          'PostgreSQL',
          'Docker',
        ],
      },
      {
        key: 'backend',
        category: 'Backend & APIs',
        title: 'APIs e serviços que sustentam o produto.',
        description:
          'Construo e modernizo serviços Python, integrações e fluxos de dados com testes, confiabilidade e manutenção em mente.',
        technologies: [
          'Python',
          'FastAPI',
          'Pydantic',
          'PostgreSQL',
          'Redis',
          'Docker',
          'pytest',
        ],
      },
      {
        key: 'ai',
        category: 'AI Engineering',
        title: 'IA aplicada a trabalho real.',
        description:
          'Integro LLMs, automações e modelos de imagem a sistemas reais: recomendações, relatórios, chatbots e extração estruturada.',
        technologies: [
          'OpenAI API',
          'Google Vertex AI',
          'FastAPI',
          'AWS Lambda',
          'n8n',
          'Redis',
          'Scrapy',
        ],
      },
    ],
  },
  cases: {
    eyebrow: '03 / CASES',
    title: 'Três problemas. Três resultados mensuráveis.',
    intro:
      'O contexto muda; meu papel é transformar a necessidade em uma entrega que funciona.',
    labels: {
      problem: 'Problema',
      solution: 'Construção',
      impact: 'Impacto',
      stack: 'Stack',
    },
    items: [
      {
        company: 'Spinver',
        title: 'Mais contatos úteis a partir de dados difíceis de capturar.',
        problem:
          'A operação comercial precisava transformar dados dispersos em contatos utilizáveis.',
        solution:
          'Integrei uma API de dados de pessoas a crawlers Python e a um extrator de telefones para textos não estruturados.',
        impact:
          'O sucesso de contato com leads cresceu 40%, e o extrator alcançou 98% de precisão.',
        stack: ['Python', 'Scrapy', 'Redis', 'SQL', 'NoSQL'],
      },
      {
        company: 'Softplan',
        title: 'Inteligência artificial integrada a produtos internos.',
        problem:
          'Times internos precisavam usar IA generativa sem depender de protótipos isolados.',
        solution:
          'Criei APIs Python, um serviço de recomendação com FastAPI e Redis e automações com n8n e OpenAI.',
        impact:
          'A geração automática de relatórios poupou 2 horas da equipe de Design e os componentes reutilizáveis aceleraram novas soluções com LLM.',
        stack: [
          'Python',
          'FastAPI',
          'Redis',
          'OpenAI',
          'n8n',
          'Docker',
          'Rancher',
          'GitLab CI/CD',
        ],
      },
      {
        company: 'DOJO — Smart Ways',
        title: 'De imagens de roupas a atributos prontos para outros sistemas.',
        problem:
          'Um produto precisava transformar imagens de roupas em atributos estruturados para outros sistemas.',
        solution:
          'Estruturei serviços Python com Lambda, S3 e Vertex AI e evoluí a primeira POC com RAG.',
        impact:
          'A assertividade subiu de 35% para 71%, e as predições passaram a alimentar sistemas downstream.',
        stack: [
          'Python',
          'AWS Lambda',
          'Amazon S3',
          'Google Vertex AI',
          'APIs',
          'Docker',
          'testes unitários',
        ],
      },
    ],
  },
  projects: {
    eyebrow: '04 / SHIPPED',
    title: 'Trabalho que você pode abrir e avaliar.',
    intro:
      'Produtos publicados e repositórios selecionados mostram execução, não só repertório.',
    live: {
      title: 'Produtos em produção ou demonstração',
      description: 'Abra, navegue e veja a entrega funcionando.',
      items: [
        {
          slug: 'donateka',
          tag: 'PRODUTO PUBLICADO',
          title: 'Donateka',
          description:
            'Site publicado para comunicar a proposta do produto em diferentes mercados.',
          role: 'Desenvolvimento web.',
          cta: 'Acessar Donateka',
          url: 'https://donateka.com.br/pt',
          image: liveProjectAssets.donateka.png,
          imageWebp: liveProjectAssets.donateka.webp,
          imageAvif: liveProjectAssets.donateka.avif,
          imageAlt: 'Página inicial da Donateka.',
          event: 'live_project_opened',
        },
        {
          slug: 'ramirestech',
          tag: 'PRODUTO PRÓPRIO',
          title: 'RamiresTech Digital Solutions',
          description:
            'Produto próprio que transforma serviços digitais complexos em uma proposta clara e orientada à conversão.',
          role: 'Estratégia, produto, design e desenvolvimento.',
          cta: 'Conhecer a RamiresTech',
          url: 'https://ramirestech.com/',
          image: liveProjectAssets.ramirestech.png,
          imageWebp: liveProjectAssets.ramirestech.webp,
          imageAvif: liveProjectAssets.ramirestech.avif,
          imageAlt: 'Página inicial da RamiresTech Digital Solutions.',
          event: 'live_project_opened',
        },
        {
          slug: 'fjm-clean',
          tag: 'PROJETO PARA CLIENTE',
          title: 'FJM Clean',
          description:
            'Site comercial que apresenta serviços e direciona clientes para contato pelo WhatsApp.',
          role: 'Estratégia, design e desenvolvimento.',
          cta: 'Acessar FJM Clean',
          url: 'https://fjmclean.com.br/',
          image: liveProjectAssets.fjmClean.png,
          imageWebp: liveProjectAssets.fjmClean.webp,
          imageAvif: liveProjectAssets.fjmClean.avif,
          imageAlt: 'Página inicial da FJM Clean.',
          event: 'live_project_opened',
        },
        {
          slug: 'mercadinho-delivery',
          tag: 'MINI E-COMMERCE',
          title: 'Mercadinho Delivery',
          description:
            'Mini e-commerce funcional para descoberta de produtos e montagem de pedidos.',
          role: 'Produto, interface e desenvolvimento.',
          status: 'Protótipo funcional',
          cta: 'Explorar o protótipo',
          url: 'https://mercadinho-delivery.pages.dev/',
          image: liveProjectAssets.mercadinho.png,
          imageWebp: liveProjectAssets.mercadinho.webp,
          imageAvif: liveProjectAssets.mercadinho.avif,
          imageAlt:
            'Interface do protótipo Mercadinho Delivery com catálogo de produtos.',
          event: 'live_project_opened',
        },
      ],
    },
    source: {
      title: 'Código que sustenta a conversa.',
      description:
        'Dois repositórios alinhados a Python, produto e IA aplicada.',
      items: [
        {
          slug: 'llm-recommendation-api',
          tag: 'FULL-STACK + IA',
          title: 'Sistema de recomendação com LLM',
          description:
            'Aplicação com FastAPI, React, Redis e LLM que combina estratégias de recomendação com descrições geradas.',
          proof:
            'Estratégias intercambiáveis · cache · fallback · Docker · testes.',
          stack: [
            'Python',
            'FastAPI',
            'React',
            'Redis',
            'OpenAI',
            'Docker',
            'pytest',
          ],
          cta: 'Ver arquitetura e código',
          url: 'https://github.com/GuiJR777/llm_recommendation_api',
          event: 'repository_opened',
        },
        {
          slug: 'jus-brasil-web-crawler',
          tag: 'PYTHON BACKEND',
          title: 'Crawler jurídico com API e cache',
          description:
            'API que seleciona o crawler correto, extrai dados processuais e usa Redis para evitar consultas repetidas.',
          proof:
            'FastAPI · resposta tipada · cache Redis · testes unitários.',
          stack: [
            'Python',
            'FastAPI',
            'Beautiful Soup',
            'Redis',
            'Docker',
            'pytest',
          ],
          cta: 'Ver código',
          url: 'https://github.com/GuiJR777/jus-brasil-web-crawler',
          event: 'repository_opened',
        },
      ],
    },
    creative: {
      title: 'Laboratório criativo',
      description: 'Criatividade aplicada a sistemas interativos.',
      items: [
        {
          slug: 'ramirestech-games',
          tag: 'GAME DEVELOPMENT',
          title: 'Jogos, protótipos e game jams',
          description:
            'Jogos e protótipos publicados onde exploro interação, regras e feedback visual.',
          cta: 'Jogar no itch.io',
          url: 'https://ramirestechgames.itch.io/',
          event: 'games_opened',
        },
      ],
    },
  },
  experience: {
    eyebrow: '05 / HISTORY',
    title: 'Experiência que combina produto, dados e IA.',
    intro:
      'Cinco empresas, diferentes contextos e a mesma responsabilidade: fazer a solução chegar ao uso real.',
    items: [
      {
        company: 'Delfos',
        role: 'Python Developer',
        period: 'mar 2026 — jun 2026',
        model: 'remoto, Brasil',
        summary:
          'Pipelines Dagster, APIs e integrações para processamento de dados operacionais de ativos solares e eólicos.',
      },
      {
        company: 'Softplan',
        role: 'Software Engineer II — AI Specialist',
        period: 'mai 2025 — out 2025',
        model: 'remoto, Brasil',
        summary:
          'APIs de IA generativa, serviço de recomendações, automações com n8n e componentes implantáveis com Docker, Rancher e GitLab CI/CD.',
      },
      {
        company: 'DOJO — Smart Ways',
        role: 'Data Engineer — Python Services',
        period: 'nov 2024 — abr 2025',
        model: 'remoto, Brasil',
        summary:
          'Serviços Python para extração estruturada de atributos de imagens com AWS Lambda, S3 e Vertex AI.',
      },
      {
        company: 'QuintoAndar',
        role: 'Software Engineer',
        period: 'dez 2021 — ago 2024',
        model: 'remoto, Brasil',
        summary:
          'Serviços Python, APIs internas, automações e ETL para experimentos de receita e fluxos operacionais.',
      },
      {
        company: 'Spinver',
        role: 'Python Full-Stack Developer',
        period: 'ago 2020 — nov 2021',
        model: 'Brasil',
        summary:
          'Crawlers, extração de dados, integrações com bancos e manutenção de aplicações Python e interfaces web.',
      },
    ],
  },
  conversionCtas: {
    impact: {
      text: 'Busca alguém que conecte produto, backend e IA sem parar no protótipo?',
      label: 'Conversar sobre uma oportunidade',
    },
    projects: {
      text: 'Quer esse nível de execução no seu time ou produto?',
      label: 'Falar sobre uma vaga',
    },
    experience: {
      text: 'Minha experiência parece compatível com o seu desafio?',
      label: 'Checar compatibilidade',
    },
  },
  about: {
    eyebrow: '06 / README',
    title: 'Engenheiro por profissão. Construtor por natureza.',
    paragraphs: [
      'Gosto de pegar problemas ainda pouco definidos, encontrar o fluxo essencial e transformá-los em software que outras pessoas conseguem usar e manter.',
      'Fora do trabalho, curso Jogos Digitais. Games são meu laboratório para explorar sistemas, interação e experiência do usuário.',
    ],
    facts: [
      'Florianópolis, SC, Brasil',
      'Português nativo',
      'Inglês avançado',
      'Jogos Digitais na Descomplica — em andamento',
      'Aberto a oportunidades remotas',
    ],
  },
  contact: {
    eyebrow: '07 / CONNECT',
    title: 'Vamos falar sobre a próxima oportunidade?',
    intro:
      'Estou aberto a entrevistas para posições remotas em engenharia Python, backend, full-stack e IA aplicada — especialmente onde produto e execução precisam andar juntos.',
    primaryCta: 'Enviar uma mensagem',
    linkedinCta: 'Falar pelo LinkedIn',
    emailCta: 'Enviar e-mail diretamente',
    labels: {
      name: 'Nome',
      email: 'E-mail profissional',
      company: 'Empresa',
      subject: 'Assunto',
      message: 'Mensagem',
    },
    placeholders: {
      name: 'Seu nome',
      email: 'voce@empresa.com',
      company: 'Nome da empresa (opcional)',
      message:
        'Conte brevemente sobre a oportunidade, o desafio ou o projeto.',
    },
    subjects: [
      'Oportunidade profissional',
      'Projeto ou parceria',
      'Conversa técnica',
      'Outro assunto',
    ],
    consent:
      'Ao enviar, você concorda que eu use estes dados apenas para responder à sua mensagem.',
    states: {
      idle: 'Enviar uma mensagem',
      sending: 'Enviando...',
      success: 'Mensagem recebida. Responderei assim que possível.',
      error:
        'Não foi possível enviar agora. Tente novamente ou escreva para guilhermejramires@gmail.com.',
      configurationError:
        'O envio pelo site ainda não está configurado. Escreva diretamente para guilhermejramires@gmail.com.',
    },
    validation: {
      summary: 'Revise os campos indicados antes de enviar.',
      name: 'Informe seu nome com pelo menos 2 caracteres.',
      email: 'Informe um e-mail válido.',
      subject: 'Selecione um assunto.',
      message: 'Escreva uma mensagem com pelo menos 20 caracteres.',
    },
  },
  a11y: {
    navigation: 'Navegação',
    skipToContent: 'Pular para o conteúdo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    skipAnimation: 'Pular animação',
    newTab: 'abre em nova aba',
    languageSelector: 'Selecionar idioma',
    activeLanguage: 'Idioma ativo',
    previousProject: 'Projeto anterior',
    nextProject: 'Próximo projeto',
    goToProject: 'Ir para o projeto',
    carouselLabel: 'Produtos digitais publicados',
  },
  footer: {
    line: 'Guilherme Ramires · Python Software Engineer · Full-Stack & IA',
    closing: 'Construído com intenção, código e atenção aos detalhes.',
    availability: 'available_for_remote_work = True',
    rights: 'Todos os direitos reservados.',
  },
} satisfies SiteContent;

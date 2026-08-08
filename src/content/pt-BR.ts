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
      { id: 'impact', label: 'Impacto' },
      { id: 'build', label: 'O que eu construo' },
      { id: 'cases', label: 'Cases' },
      { id: 'projects', label: 'Projetos' },
      { id: 'experience', label: 'Experiência' },
      { id: 'about', label: 'Sobre' },
      { id: 'contact', label: 'Contato' },
    ],
  },
  hero: {
    eyebrow: 'PYTHON SOFTWARE ENGINEER · FULL-STACK & IA',
    title: 'Do problema ambíguo ao software em produção.',
    intro:
      'Sou Guilherme Ramires, engenheiro de software com mais de 5 anos de experiência construindo APIs, aplicações, automações e integrações de inteligência artificial. Transformo necessidades de negócio em software testado, implantável e preparado para uso real.',
    reinforcement:
      'Arquitetura, código, testes e entrega — sem parar no protótipo.',
    primaryCta: 'Conheça meu trabalho',
    secondaryCta: 'Baixar currículo (EN)',
    availability:
      'Disponível para oportunidades remotas · Florianópolis, Brasil · UTC-3',
    portraitAlt:
      'Retrato profissional de Guilherme Ramires, engenheiro de software Python.',
  },
  metrics: {
    eyebrow: '01 / IMPACT',
    title: 'Resultado antes de adjetivo.',
    intro:
      'Meu trabalho não termina quando o código executa. Ele precisa reduzir atrito, ampliar capacidade e continuar confiável quando chega à produção.',
    items: [
      {
        value: '5+ anos',
        company: 'Trajetória profissional',
        context: 'construindo sistemas e serviços com Python',
      },
      {
        value: '+40%',
        company: 'Spinver',
        context:
          'de aumento no sucesso de contato com leads após integrar dados de pessoas à extração de telefones',
      },
      {
        value: '98%',
        company: 'Spinver',
        context:
          'de precisão ao extrair telefones brasileiros de textos não estruturados, antes da popularização da IA generativa',
      },
      {
        value: '35% → 71%',
        company: 'DOJO — Smart Ways',
        context:
          'de assertividade entre a primeira POC e a entrega de uma análise de roupas com LLM após a adoção de RAG',
      },
      {
        value: '4h/semana',
        company: 'QuintoAndar',
        context:
          'economizadas, em média, por automações criadas para diferentes times',
      },
      {
        value: '2 horas',
        company: 'Softplan',
        context:
          'economizadas para a equipe de Design com geração automática de relatórios usando LLM',
      },
    ],
    companyStrip:
      'Experiência construída em times da Delfos, Softplan, DOJO, QuintoAndar e Spinver.',
  },
  capabilities: {
    eyebrow: '02 / MODULES',
    title: 'Software que resolve o problema inteiro.',
    intro:
      'Da regra de negócio à interface, da integração à implantação: combino engenharia de backend, visão de produto e inteligência artificial para transformar processos complexos em sistemas utilizáveis.',
    items: [
      {
        key: 'full-stack',
        category: 'Full-Stack Development',
        title: 'Produtos completos, não peças isoladas.',
        description:
          'Construo e mantenho aplicações Python, interfaces web, ferramentas internas e integrações entre sistemas. Penso no fluxo completo: dados, regras de negócio, experiência do usuário, operação e manutenção.',
        technologies: [
          'Python',
          'Django',
          'Flask',
          'HTML',
          'CSS',
          'JavaScript',
          'Bootstrap',
          'PostgreSQL',
          'MongoDB',
        ],
      },
      {
        key: 'backend',
        category: 'Backend & APIs',
        title: 'A base precisa aguentar o produto.',
        description:
          'Desenvolvo APIs REST, serviços internos, integrações e processamento em segundo plano com foco em clareza, testes e confiabilidade. Também atuo na manutenção e modernização de sistemas legados sem interromper a operação.',
        technologies: [
          'Python',
          'FastAPI',
          'Django',
          'Flask',
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
        title: 'IA conectada ao produto, não presa na demonstração.',
        description:
          'Integro LLMs e modelos de IA aplicados a imagens a sistemas reais por meio de APIs, componentes reutilizáveis e fluxos automatizados. Minha experiência inclui recomendações, chatbots, extração estruturada de atributos e pipelines com OpenAI e Vertex AI.',
        technologies: [
          'OpenAI API',
          'Google Vertex AI',
          'FastAPI',
          'AWS Lambda',
          'S3',
          'n8n',
          'Redis',
          'Docker',
        ],
      },
      {
        key: 'automation',
        category: 'Automation, Crawlers & ETL',
        title: 'Onde há repetição e dados dispersos, há espaço para engenharia.',
        description:
          'Crio crawlers, pipelines e automações que capturam, organizam e disponibilizam dados para outras áreas e sistemas. Essa capacidade já ampliou cobertura comercial, reduziu trabalho manual e sustentou experimentos de receita.',
        technologies: [
          'Scrapy',
          'Redis',
          'Pandas',
          'Dagster',
          'InfluxDB',
          'SQL',
          'NoSQL',
          'APIs',
        ],
      },
    ],
  },
  cases: {
    eyebrow: '03 / CASES',
    title: 'Problemas reais. Decisões técnicas. Impacto comprovável.',
    intro:
      'Uma stack só importa quando resolve algo. Estes cases mostram como transformei necessidades operacionais e de produto em software entregável.',
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
          'A aquisição de dados precisava alcançar mais fontes e transformar informações desestruturadas em contatos utilizáveis.',
        solution:
          'Desenvolvi crawlers Python, agentes com Scrapy, fluxos apoiados por Redis e integrações com bancos SQL e NoSQL. Também integrei uma API de dados de pessoas e construí um sistema especializado em extrair telefones brasileiros de textos não estruturados.',
        impact:
          'A combinação da API de dados de pessoas com a extração de telefones aumentou em 40% o sucesso de contato com leads. O sistema de extração alcançou 98% de precisão antes da popularização da IA generativa.',
        stack: ['Python', 'Scrapy', 'Redis', 'SQL', 'NoSQL'],
      },
      {
        company: 'Softplan',
        title: 'Inteligência artificial integrada a produtos internos.',
        problem:
          'Produtos internos precisavam consumir recursos de IA generativa com componentes reutilizáveis, desempenho consistente e um caminho confiável até a implantação.',
        solution:
          'Desenvolvi APIs Python conectando sistemas de negócio a pipelines de LLM. Também construí um serviço de recomendação com FastAPI, cache Redis, múltiplas estratégias, Docker e testes automatizados, além de workflows com n8n e OpenAI. Para a equipe de Design, implementei um sistema que combinava automação e LLM para gerar relatórios automaticamente.',
        impact:
          'O sistema de relatórios economizou 2 horas de trabalho da equipe de Design. As demais entregas melhoraram o desempenho do serviço de recomendações e encurtaram os ciclos de prototipação de chatbots implantáveis por Rancher e GitLab CI/CD.',
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
          'Um produto de análise de roupas precisava transformar informações presentes em imagens em atributos estruturados com assertividade suficiente para consumo por outros sistemas.',
        solution:
          'Construí serviços Python em torno de AWS Lambda, S3 e Vertex AI, separando as responsabilidades de entrada, predição, validação e saída. Após a primeira POC, incorporei RAG ao fluxo com LLM para elevar a qualidade da análise. Os serviços foram expostos por APIs e componentes Dockerizados.',
        impact:
          'A primeira POC alcançou 35% de assertividade. Após a adoção de RAG, a entrega chegou a 71% — uma evolução de 36 pontos percentuais — e disponibilizou as predições para sistemas downstream.',
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
      {
        company: 'Delfos',
        title: 'Dados operacionais conectados para ativos solares e eólicos.',
        problem:
          'Sistemas de energia renovável dependiam de pipelines e integrações capazes de processar dados operacionais vindos de fontes diferentes.',
        solution:
          'Construí e mantive pipelines Dagster, ferramentas Python e APIs conectando InfluxDB, PostgreSQL e serviços de processamento.',
        impact:
          'O trabalho reduziu a complexidade de integração e reforçou a confiabilidade dos serviços com testes unitários, componentes Dockerizados e pipelines de GitLab CI/CD.',
        stack: [
          'Python',
          'Dagster',
          'InfluxDB',
          'PostgreSQL',
          'Docker',
          'GitLab CI/CD',
        ],
      },
      {
        company: 'QuintoAndar',
        title: 'Engenharia para acelerar experimentos sem abandonar a operação.',
        problem:
          'Uma squad orientada a experimentação precisava colocar hipóteses de receita em prática enquanto mantinha serviços legados e fluxos operacionais funcionando.',
        solution:
          'Desenvolvi serviços Python, APIs internas, automações para diferentes times e pipelines ETL. Também construí endpoints e ferramentas internas, revisei código, escrevi testes e atuei na resolução de incidentes.',
        impact:
          'As automações economizaram, em média, 4 horas de trabalho por semana. As demais entregas aceleraram experimentos de receita e protegeram a continuidade dos serviços e bancos de dados existentes.',
        stack: [
          'Python',
          'APIs internas',
          'automação',
          'ETL',
          'testes',
          'bancos de dados',
        ],
      },
    ],
  },
  projects: {
    eyebrow: '04 / SHIPPED',
    title: 'Projetos que saíram do editor e chegaram às pessoas.',
    intro:
      'Produtos publicados mostram minha capacidade de transformar uma necessidade em experiência utilizável. Os projetos open source abrem a engenharia por trás da entrega: arquitetura, integrações, testes e decisões de implementação.',
    live: {
      title: 'Produtos digitais publicados',
      description:
        'Sites e experiências que podem ser abertas, exploradas e avaliadas agora.',
      items: [
        {
          slug: 'donateka',
          tag: 'PRODUTO PUBLICADO',
          title: 'Donateka',
          description:
            'Experiência digital publicada e preparada para apresentar a proposta do projeto com clareza em diferentes mercados.',
          role: 'Desenvolvimento do site.',
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
            'Site da minha operação de soluções digitais, criado para transformar serviços complexos em uma proposta clara, navegável e orientada à conversão.',
          role: 'Estratégia, produto, copy, design e desenvolvimento.',
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
            'Presença digital comercial para um negócio local de limpeza de estofados, estruturada para explicar os serviços e transformar interesse em contato pelo WhatsApp.',
          role: 'Estratégia, copy, design e desenvolvimento.',
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
            'Protótipo funcional de mini e-commerce que organiza um catálogo de mercado em uma experiência simples de descoberta e pedido.',
          role: 'Produto, experiência, interface e desenvolvimento.',
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
      title: 'Veja como eu construo.',
      description:
        'Repositórios selecionados pela qualidade da prova técnica e pelo alinhamento com Python, Full-Stack e IA — não apenas por estarem públicos.',
      items: [
        {
          slug: 'llm-recommendation-api',
          tag: 'FULL-STACK + IA',
          title: 'Sistema de recomendação com LLM',
          description:
            'Uma solução completa de recomendação que combina estratégias baseadas em histórico e preferências com geração de descrições por LLM. A aplicação reúne APIs FastAPI, interface React, cache Redis com fallback, Docker e testes automatizados.',
          proof:
            'Strategy Pattern · cache com TTL de 72h · LLM real ou emulado · frontend e APIs executados com um único comando.',
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
            'API Python que recebe um número de processo, seleciona o crawler compatível, extrai dados de primeiro e segundo grau e devolve uma resposta estruturada. Redis reduz consultas repetidas e Docker simplifica a execução local.',
          proof:
            'Seleção de crawler por segmento judiciário · FastAPI · cache Redis · resposta tipada · testes unitários.',
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
            'Meu laboratório de interação e gameplay: jogos próprios e protótipos publicados que transformam regras, feedback visual e experiência do jogador em sistemas jogáveis.',
          cta: 'Jogar no itch.io',
          url: 'https://ramirestechgames.itch.io/',
          event: 'games_opened',
        },
      ],
    },
  },
  experience: {
    eyebrow: '05 / HISTORY',
    title: 'Cinco anos transformando contexto em entrega.',
    intro:
      'Minha trajetória combina produtos digitais, sistemas internos, aquisição de dados, automação, inteligência artificial e infraestrutura de entrega.',
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
  technologies: {
    eyebrow: '06 / STACK',
    title: 'Ferramentas mudam. Fundamentos sustentam a entrega.',
    intro:
      'Escolho tecnologias pelo problema, pelo contexto do time e pelo custo de manter a solução depois do lançamento.',
    groups: [
      {
        title: 'Backend',
        items: [
          'Python',
          'FastAPI',
          'Django',
          'Flask',
          'Pydantic',
          'REST APIs',
          'integrações de serviços',
          'processamento em segundo plano',
        ],
      },
      {
        title: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      },
      {
        title: 'Bancos e dados',
        items: [
          'PostgreSQL',
          'MariaDB',
          'MongoDB',
          'Redis',
          'InfluxDB',
          'SQL',
          'Pandas',
          'ETL',
          'Dagster',
        ],
      },
      {
        title: 'Inteligência artificial e automação',
        items: [
          'OpenAI API',
          'Google Vertex AI',
          'integrações com LLMs',
          'n8n',
        ],
      },
      {
        title: 'Cloud e entrega',
        items: [
          'AWS Lambda',
          'Amazon S3',
          'GCP',
          'Docker',
          'Rancher',
          'GitLab CI/CD',
          'Git',
        ],
      },
      {
        title: 'Qualidade e colaboração',
        items: [
          'pytest',
          'testes unitários',
          'code review',
          'debugging',
          'clean code',
          'modernização de legados',
          'desenvolvimento ágil',
        ],
      },
    ],
  },
  process: {
    eyebrow: '07 / PROCESS',
    title: 'Clareza para decidir. Engenharia para entregar.',
    steps: [
      {
        title: 'Entender o problema real',
        description:
          'Traduzo necessidades pouco definidas em requisitos, riscos, fluxos e critérios de sucesso compreensíveis.',
      },
      {
        title: 'Projetar o caminho mais simples que se sustenta',
        description:
          'Defino responsabilidades, contratos e integrações antes de acumular complexidade desnecessária.',
      },
      {
        title: 'Construir com feedback curto',
        description:
          'Entrego partes utilizáveis, valido decisões cedo e ajusto a implementação com base no comportamento real do sistema.',
      },
      {
        title: 'Testar o que não pode quebrar',
        description:
          'Uso testes unitários, revisão de código e debugging para reduzir regressões e aumentar a confiança de release.',
      },
      {
        title: 'Preparar para operar',
        description:
          'Docker, CI/CD e documentação fazem parte da entrega. Software só está pronto quando o time consegue executar, observar e manter.',
      },
    ],
    ready: 'ready_to_ship',
  },
  about: {
    eyebrow: '08 / README',
    title: 'Engenharia com visão de produto.',
    paragraphs: [
      'Meu trabalho começa onde processos manuais, integrações frágeis e ideias ainda pouco definidas deixam de escalar. Gosto de decompor problemas, conectar as partes certas e transformar incerteza em software confiável.',
      'Ao longo de mais de cinco anos, atuei com aplicações Python, APIs, automação, aquisição de dados, sistemas internos, inteligência artificial e modernização de legados. Isso me ensinou a equilibrar velocidade de entrega com a responsabilidade de manter o que já está em produção.',
      'Também curso Jogos Digitais. Games são meu laboratório criativo: um espaço onde engenharia, interação e experiência do usuário precisam funcionar juntas.',
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
    eyebrow: '09 / CONNECT',
    title: 'Tem um problema que precisa virar software?',
    intro:
      'Se você procura alguém capaz de conectar negócio, engenharia e IA para entregar soluções utilizáveis, vamos conversar. Estou aberto a oportunidades remotas e projetos compatíveis com minha experiência.',
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

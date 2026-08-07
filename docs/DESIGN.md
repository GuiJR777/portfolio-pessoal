# Identidade visual do portfólio — Guilherme Ramires

> Documento mestre de direção visual, layout, interação e movimento.
> Deve ser lido em conjunto com `docs/site-content.md`.
> Posicionamento: **Python Software Engineer | Full-Stack & AI**.

---

## 1. Conceito criativo

### Nome do conceito

**Code → Product**

### Ideia central

O site começa como uma classe Python incompleta e se transforma, diante do visitante, em um produto digital completo. O código é a origem; os resultados, cases, interfaces e projetos entregues são a saída.

O visitante deve perceber que Guilherme:

- entende problemas pouco definidos;
- estrutura soluções;
- escreve software;
- conecta backend, interface e inteligência artificial;
- transforma protótipos em entregas utilizáveis.

### Narrativa visual

1. **Source:** a experiência começa dentro de um editor de código escuro.
2. **Build:** módulos, métricas e cases são montados durante o scroll.
3. **Ship:** os projetos aparecem em uma área mais clara, editorial e orientada ao produto.
4. **Connect:** o site termina em um estado de entrega pronta, convidando o visitante a iniciar uma conversa.

### Frase que orienta todas as decisões

> O código não é a decoração do portfólio. É a matéria-prima que se transforma em produto.

---

## 2. Personalidade da identidade

### A identidade deve parecer

- técnica, sem ser fria;
- criativa, sem ser caótica;
- confiante, sem parecer arrogante;
- premium, sem parecer uma agência genérica;
- moderna, sem depender de modismos visuais;
- humana, apesar da linguagem de sistema.

### A identidade não deve parecer

- terminal hacker, cyberpunk ou “Matrix”;
- template genérico de portfólio para desenvolvedor;
- interface de videogame aplicada a todas as seções;
- dashboard SaaS cheio de cards flutuantes;
- currículo convertido diretamente em página web;
- demonstração de efeitos que compete com o conteúdo;
- site de agência vendendo serviços em massa.

### Arquétipo visual

**Engenheiro criador:** rigor de engenharia combinado com visão de produto e repertório criativo.

---

## 3. Princípios de design

### 3.1 Resultado antes de ornamento

Métricas, projetos e decisões técnicas têm prioridade sobre efeitos. A animação deve explicar estado, hierarquia ou continuidade.

### 3.2 O sistema aparece sendo montado

Bordas, trilhas, marcadores e blocos podem entrar como peças que encontram sua posição. O texto principal não deve ser digitado durante o scroll nem permanecer escondido esperando animações.

### 3.3 Código como assinatura, não como textura

Código real aparece no preloader, na Hero e em pequenos rótulos. Não usar trechos aleatórios de código como fundo decorativo.

### 3.4 Movimento com função

Cada movimento deve indicar uma destas ações:

- inicialização;
- conexão;
- montagem;
- mudança de estado;
- conclusão;
- navegação.

### 3.5 O visitante controla o ritmo

Sem scroll hijacking, autoplay de carrossel, cursor personalizado, animações obrigatórias longas ou elementos fugindo do ponteiro.

### 3.6 Criatividade não pode custar legibilidade

Títulos, parágrafos, métricas, links e CTAs permanecem legíveis sem hover e antes de qualquer animação terminar.

---

## 4. Sistema cromático

### 4.1 Paleta principal

| Token | Cor | Uso |
|---|---:|---|
| `void` | `#080B12` | Fundo da abertura, Hero e contato |
| `build` | `#0D1420` | Fundo da fase de construção |
| `surface-1` | `#111925` | Cards escuros e editor |
| `surface-2` | `#172231` | Elementos elevados e estados ativos |
| `stroke-dark` | `#293548` | Bordas sobre fundos escuros |
| `text-strong-dark` | `#F5F7FA` | Títulos sobre fundo escuro |
| `text-body-dark` | `#CAD3DF` | Texto corrido sobre fundo escuro |
| `text-muted-dark` | `#8E9BAD` | Metadados e rótulos secundários |
| `paper` | `#F2F4EF` | Fundo da fase de projetos e conteúdo humano |
| `paper-card` | `#FFFFFF` | Cards sobre fundo claro |
| `ink` | `#111820` | Títulos sobre fundo claro |
| `ink-body` | `#465160` | Texto corrido sobre fundo claro |
| `stroke-light` | `#D7DEE5` | Bordas sobre fundo claro |
| `compile-mint` | `#68E2B9` | CTA primário, estado concluído e assinatura |
| `signal-blue` | `#80A7FF` | Links e conexões sobre fundo escuro |
| `signal-blue-ink` | `#2E5BCC` | Links sobre fundo claro |
| `syntax-amber` | `#F2BE6B` | Métricas e nomes de classes |
| `syntax-violet` | `#C895FF` | Palavras-chave Python no código |
| `error-dark` | `#FF7386` | Erros sobre fundos escuros; nunca decorativo |
| `error-light` | `#B8243F` | Erros sobre fundos claros; nunca decorativo |

### 4.2 Regra de distribuição

- 70% fundos e superfícies neutras;
- 20% texto, bordas e estrutura;
- 10% cores de sinalização.

`compile-mint`, `signal-blue`, `syntax-amber` e `syntax-violet` não devem competir no mesmo componente. Cada bloco usa no máximo uma cor dominante e uma cor auxiliar.

### 4.3 Progressão de tema

| Fase | Seções | Tema |
|---|---|---|
| Source | Preloader, Hero, provas rápidas | `void` |
| Build | Especialidades e cases profissionais | `build` |
| Ship | Projetos, experiência, tecnologias e processo | `paper` |
| Human | Sobre mim | `paper`, com composição mais editorial |
| Connect | Contato e footer | `void` |

A mudança de fundo deve acontecer por transição de seção, não por flashes ou gradientes animados.

### 4.4 Gradientes

Permitidos apenas como luz ambiente de baixa opacidade:

- azul atrás da Hero;
- verde-menta próximo ao ponto de transformação do código;
- vinheta suave para separar a área de contato.

Não usar texto com gradiente, fundos arco-íris ou blobs em movimento contínuo.

### 4.5 Contraste

- Texto corrido deve atender WCAG AA.
- Texto secundário nunca deve depender apenas de `text-muted-dark` em tamanho inferior a `14px`.
- O botão primário usa fundo `compile-mint` e texto `#07110E`.
- Links sobre fundo claro usam `signal-blue-ink`, não `signal-blue`.
- Cor nunca é o único indicador de foco, sucesso ou erro.

---

## 5. Tipografia

### 5.1 Famílias

| Função | Fonte | Uso |
|---|---|---|
| Display | `Sora` | Headline, títulos de seção e números |
| Texto | `Inter` | Parágrafos, navegação, botões e formulários |
| Código | `JetBrains Mono` | Preloader, rótulos técnicos e microcopy de sistema |

Usar somente os pesos necessários:

- Sora: `500`, `600`, `700`;
- Inter: `400`, `500`, `600`;
- JetBrains Mono: `400`, `500`.

### 5.2 Escala recomendada

| Elemento | Desktop | Mobile |
|---|---|---|
| Hero H1 | `clamp(3.5rem, 6.2vw, 5.75rem)` | mínimo visual de `2.5rem` |
| H2 | `clamp(2.25rem, 4vw, 4rem)` | mínimo visual de `2rem` |
| H3 | `1.25rem–1.5rem` | `1.125rem–1.25rem` |
| Texto de destaque | `1.125rem–1.25rem` | `1.0625rem` |
| Corpo | `1rem–1.0625rem` | `1rem` |
| Rótulo mono | `0.75rem–0.8125rem` | `0.75rem` |

### 5.3 Regras tipográficas

- Headline com `letter-spacing` entre `-0.04em` e `-0.025em`.
- Texto corrido com altura de linha entre `1.6` e `1.75`.
- Largura máxima de parágrafo: `64ch`.
- Não usar caixa alta em parágrafos ou CTAs.
- Caixa alta é reservada para eyebrows e estados curtos.
- Código deve permanecer código; não usar fonte mono em todo o site.
- Não justificar texto.

---

## 6. Assinatura e marca pessoal

### Wordmark principal

Usar **Guilherme Ramires** em Sora SemiBold. O sobrenome pode receber um pequeno cursor retangular em `compile-mint`, sem piscar continuamente.

### Assinatura técnica

`GuilhermeRamires` em JetBrains Mono pode aparecer em contextos ligados ao código, à Hero e ao favicon.

### Monograma

Para favicon e avatar reduzido, usar `{GR}` ou `GR_` em composição simples. Escolher apenas uma versão na implementação; não manter dois símbolos concorrentes.

### Regra

O nome legível é a marca principal. O monograma é um recurso de escala, não um substituto do nome.

---

## 7. Grid e composição

### Container

- largura máxima: `1280px`;
- desktop: `64px` de margem lateral;
- tablet: `40px`;
- mobile: `20px–24px`;
- respeitar `env(safe-area-inset-*)` em dispositivos móveis.

### Grid responsivo

| Faixa | Colunas | Espaçamento |
|---|---:|---:|
| `0–639px` | 4 | `16px` |
| `640–1023px` | 6 | `24px` |
| `1024–1439px` | 12 | `24px–32px` |
| `1440px+` | 12 | `32px` |

### Ritmo vertical

- seções principais no desktop: `120px–160px`;
- seções principais no mobile: `72px–96px`;
- distância entre eyebrow e título: `16px`;
- distância entre título e texto: `24px`;
- distância entre introdução e conteúdo: `48px–72px`.

### Formas

- cards: raio de `16px`;
- painel de código: raio de `14px`;
- botões: raio de `10px–12px`;
- badges e estados: raio total;
- bordas: `1px`;
- sombras discretas, concentradas nos painéis que realmente mudam de nível.

Evitar transformar todos os blocos em cards. Métricas, tecnologias e experiência podem usar divisórias e grid aberto.

---

## 8. Preloader / introdução animada

### Objetivo

Apresentar a metáfora do site em poucos segundos e criar uma transição contínua para a Hero. Ele não deve funcionar como bloqueio técnico de carregamento.

### Código inicial

```python
from professions import SoftwareEngineer


class GuilhermeRamires(SoftwareEngineer):
    def __init__(self): ...
```

### Código expandido na Hero

Após a transformação, o painel pode revelar linhas adicionais:

```python
class GuilhermeRamires(SoftwareEngineer):
    focus = ("Full-Stack", "AI")
    experience = "5+ years"
    remote = True
```

Essas linhas permanecem iguais nos três idiomas, pois fazem parte da assinatura técnica, não da copy editorial.

### Editor

- nome da aba: `identity.py`;
- fundo: `surface-1`;
- borda: `stroke-dark`;
- numeração de linha com baixo contraste;
- cursor em `compile-mint`;
- sem logos de VS Code, Apple ou qualquer ferramenta específica;
- controles da janela devem ser abstratos, não uma cópia literal do macOS.

### Syntax highlighting

| Token | Cor |
|---|---|
| `from`, `import`, `class`, `def` | `syntax-violet` |
| `SoftwareEngineer`, nome da classe | `syntax-amber` |
| módulo e atributos | `signal-blue` |
| strings e `True` | `compile-mint` |
| pontuação e texto base | `text-body-dark` |
| números de linha | `text-muted-dark` |

### Storyboard

| Tempo aproximado | Estado |
|---:|---|
| `0–250ms` | Fundo e janela do editor aparecem |
| `250–1450ms` | O código é digitado por linha, com pausas naturais curtas |
| `1450–1650ms` | O cursor conclui a última linha e pisca uma vez |
| `1650–2150ms` | A moldura do editor expande usando transformação FLIP |
| `1900–2350ms` | O bloco de código encaixa no painel visual da Hero |
| `2100–2500ms` | Copy, CTAs, foto e navegação são revelados |

### Transição para a Hero

1. O conteúdo da Hero já deve estar renderizado atrás da introdução.
2. A área interna do código mantém continuidade espacial durante a expansão.
3. A barra superior, os números de linha e os controles do editor desaparecem.
4. O código vira um painel de identidade na coluna visual da Hero.
5. As linhas adicionais entram como propriedades resolvidas da classe.
6. A foto profissional aparece ao lado ou atrás do painel, sem ser coberta no rosto.

### Duração e recorrência

- duração ideal na primeira visita da sessão: `1.8s–2.5s`;
- hard limit: `2.5s`;
- visitas seguintes na mesma sessão: pular a introdução ou usar transição de no máximo `300ms`;
- nunca repetir ao trocar idioma ou navegar por âncoras;
- o visitante pode pular com `Esc`, toque ou botão **Pular animação**.

### Acessibilidade do preloader

- A animação de digitação usa `aria-hidden="true"`.
- Leitores de tela recebem diretamente o título e a apresentação estática da Hero.
- Não anunciar cada caractere por `aria-live`.
- Não mover foco para dentro da introdução.
- Com `prefers-reduced-motion: reduce`, mostrar o código completo e fazer apenas um fade de `150ms` para a Hero.
- O conteúdo continua acessível se JavaScript falhar.

### Mobile

- editor ocupa a largura útil, sem exceder `calc(100vw - 32px)`;
- fonte do código entre `12px` e `13px`;
- o painel transformado entra acima da copy ou entre a copy e a foto;
- não tentar preservar uma composição desktop reduzida;
- se a altura for pequena, remover numeração de linha e linhas adicionais.

---

## 9. A Hero

### Estrutura desktop

- altura mínima: `100svh`, respeitando conteúdo e acessibilidade;
- grid de 12 colunas;
- copy: colunas `1–7`;
- visual: colunas `8–12`;
- headline é o elemento dominante;
- painel de código e foto formam uma única composição, não dois cards desconectados.

### Estrutura visual

1. Eyebrow técnico.
2. Headline do `site-content.md`.
3. Texto de apoio com largura controlada.
4. CTA primário e secundário.
5. Estado de disponibilidade.
6. Painel de código transformado.
7. Foto profissional.

### Foto

- retrato real e profissional;
- enquadramento de busto;
- recorte vertical ou quase quadrado;
- fundo limpo, compatível com recorte sobre `void`;
- tratamento de cor neutro, com leve temperatura quente na pele;
- sem filtro azul, ruído artificial ou sobreposição de código no rosto.

### Fundo

- base `void`;
- grid técnico muito sutil, visível apenas próximo ao visual;
- halo azul de baixa opacidade atrás da foto;
- ponto de luz menta no encaixe do painel de código;
- nenhuma partícula flutuante contínua.

### Entrada da copy

- eyebrow: fade e deslocamento vertical de `8px`;
- título: revelação por linha ou máscara, nunca digitação;
- parágrafo e CTAs: entrada em sequência curta;
- atraso total após o morph: no máximo `300ms`.

---

## 10. O site sendo construído durante o scroll

### Build rail

No desktop, usar uma trilha fina e persistente na lateral esquerda ou direita da área de conteúdo. Ela representa as fases do build.

Rótulos recomendados:

| Etapa | Rótulo visual |
|---:|---|
| 00 | `BOOT` |
| 01 | `IMPACT` |
| 02 | `MODULES` |
| 03 | `CASES` |
| 04 | `SHIPPED` |
| 05 | `HISTORY` |
| 06 | `STACK` |
| 07 | `PROCESS` |
| 08 | `README` |
| 09 | `CONNECT` |

### Comportamento da trilha

- etapa futura: círculo vazio e linha neutra;
- etapa ativa: `compile-mint` e rótulo visível;
- etapa concluída: ponto preenchido, sem animação pulsante;
- o rótulo muda quando aproximadamente 35% da seção entra na viewport;
- no mobile, substituir a trilha por um indicador curto no topo da seção;
- não transformar a trilha em navegação principal obrigatória.

### Linguagem de montagem

Ao entrar na viewport, cada seção pode executar uma única montagem curta:

1. a borda ou linha estrutural é desenhada;
2. a superfície aparece;
3. o conteúdo sobe entre `8px` e `16px`;
4. o estado muda de neutro para concluído.

O texto já deve ocupar seu espaço antes da animação. Não criar layout shift.

### Micro-rótulos

Usar rótulos como `01 / IMPACT`, `module.loaded` ou `build.complete` apenas em eyebrows, nunca como substitutos de títulos claros.

### O que não usar

- digitação de parágrafos inteiros;
- barras de loading falsas em todas as seções;
- logs correndo no fundo;
- sons de teclado;
- scroll preso por etapas;
- cursor customizado;
- efeitos de glitch;
- chuva de caracteres;
- animações que reiniciam ao subir e descer a página.

---

## 11. Direção por seção

### 11.1 Header

- altura entre `64px` e `72px`;
- transparente sobre a Hero, com fundo sólido após rolagem;
- wordmark à esquerda;
- navegação central no desktop;
- idioma, currículo e CTA à direita;
- indicador de seção ativa fino, sem cápsula em todos os links;
- ao rolar para baixo, reduzir discretamente a altura;
- no mobile, usar menu simples e tela cheia, com foco controlado.

### 11.2 Provas em números

- grid `3 × 2` no desktop;
- números grandes em Sora;
- cada número tem empresa, contexto e unidade visíveis;
- usar divisórias e alinhamento, não seis cards idênticos flutuando;
- animação numérica opcional, de no máximo `500ms`, executada uma vez;
- o valor final existe no HTML e não depende da animação.

### 11.3 Empresas

- apresentar nomes em uma faixa tipográfica sóbria;
- logos oficiais apenas se houver arquivos adequados e permissão de uso;
- sem carrossel infinito de logos;
- aparência monocromática para não disputar atenção com as métricas.

### 11.4 O que eu construo

- quatro módulos em grid assimétrico;
- Full-Stack e AI Engineering recebem maior área;
- Backend e Automation/Crawlers/ETL funcionam como módulos de profundidade;
- cada módulo recebe um diagrama ou ícone linear mínimo;
- hover mostra conexão entre entrada, processamento e saída, sem revelar conteúdo essencial.

### 11.5 Cases profissionais

Cada case usa uma estrutura visual consistente:

| Camada | Conteúdo |
|---|---|
| Problema | O atrito de negócio ou técnico |
| Construção | Arquitetura, tecnologia e decisão |
| Impacto | Métrica ou resultado publicável |

- alternar texto e visual sem zigue-zague excessivo;
- métricas ficam próximas ao resultado que comprovam;
- não usar screenshots de sistemas privados;
- representar arquitetura com diagramas abstratos e precisos, sem dados proprietários;
- cards podem entrar como módulos conectados à trilha de build.

### 11.6 Produtos no ar

- esta é a transição visual da fase **Build** para **Ship**;
- fundo muda de escuro para `paper`;
- screenshots reais ganham protagonismo;
- carrossel manual com Donateka, RamiresTech, FJM Clean e Mercadinho Delivery;
- desktop: aproximadamente `2.2–2.5` cards visíveis;
- mobile: `1.05–1.1` card visível para indicar continuidade;
- proporção de screenshot: `16:10`;
- card inteiro clicável, abrindo em nova aba;
- incluir ícone de link externo e texto de destino;
- sem autoplay;
- setas, paginação e teclado devem apontar para o mesmo estado.

### 11.7 Engenharia open source

- usar grid, não carrossel;
- sistema de recomendação com LLM ocupa maior área;
- crawler jurídico aparece como prova complementar;
- mostrar README/resumo, stack, testes e link para código;
- snippet de código pode aparecer somente se for curto, legível e relevante;
- não usar números artificiais de estrelas, commits ou downloads.

### 11.8 Laboratório criativo

- seção menor e visualmente distinta;
- tratar games como evidência de criatividade, sistemas interativos e interesse por produto;
- screenshot ou vídeo curto apenas sob interação;
- link claro para itch.io;
- não permitir que a seção pareça uma mudança de carreira dentro do mesmo site.

### 11.9 Experiência profissional

- timeline inspirada em histórico de versões, não em currículo tradicional;
- linha vertical com estados concluídos;
- cada item mostra empresa, cargo, período e uma contribuição principal;
- expandir detalhes por clique é permitido, mas o essencial permanece visível;
- não criar hashes de commit falsos;
- transições entre Spinver e QuintoAndar devem ser explicadas pela copy, não inferidas pelo desenho.

### 11.10 Tecnologias

- organizar por finalidade conforme `site-content.md`;
- usar lista estruturada, não nuvem de logos;
- logos são opcionais e secundários;
- sem barras de domínio ou porcentagens;
- grupos podem lembrar um manifesto de dependências, mas precisam manter títulos humanos;
- tecnologias centrais aparecem primeiro: Python, FastAPI/Django/Flask, React, bancos, IA, Docker e cloud.

### 11.11 Como trabalho

- apresentar cinco etapas como pipeline;
- no desktop, linha conectando etapas; no mobile, sequência vertical;
- cada etapa ativa o próximo conector uma vez;
- o pipeline termina em `ready_to_ship`, sem simular uma entrega real;
- o visitante deve entender o processo mesmo com as animações desativadas.

### 11.12 Sobre mim

- composição editorial, com mais espaço e menos elementos técnicos;
- foto secundária ou detalhe pessoal autêntico, se disponível;
- games entram como camada criativa, não como quebra de posicionamento;
- usar `README` como micro-rótulo, sem formatar a biografia como arquivo inteiro;
- esta seção serve como pausa humana depois da densidade técnica.

### 11.13 Contato

- retorno ao fundo `void`;
- estado visual: sistema pronto para nova entrada;
- headline forte e direta;
- formulário curto;
- canais alternativos visíveis;
- confirmação de envio com `build.complete`, acompanhada de mensagem humana;
- erros usam texto claro e não apenas borda vermelha;
- não exibir telefone pessoal por padrão.

### 11.14 Footer

- wordmark, localização, fuso horário, links profissionais e copyright;
- pequeno status estático como `available_for_remote_work = True`;
- sem animação contínua no cursor;
- seletor de idioma permanece acessível.

---

## 12. Componentes

### Botão primário

- fundo `compile-mint`;
- texto escuro;
- altura mínima `48px`;
- ícone de seta opcional;
- hover: elevação de `-2px` e leve aumento de luminosidade;
- active: retornar a `0` sem reduzir demais o botão;
- foco: outline duplo e visível.

### Botão secundário

- fundo transparente;
- borda adaptada ao tema;
- hover preenche a superfície;
- não competir visualmente com o CTA principal.

### Links de texto

- sublinhado ou seta externa visível;
- no hover, a linha pode se desenhar da esquerda para a direita;
- não depender apenas de mudança de cor.

### Cards

- borda de `1px`;
- superfície sem blur pesado;
- sombra apenas em hover ou elevação real;
- translação máxima de `4px`;
- sem tilt 3D;
- o conteúdo importante fica disponível sem hover.

### Chips de tecnologia

- compactos;
- texto legível;
- agrupados por contexto;
- sem transformar a interface em uma coleção de etiquetas.

### Formulário

- labels persistentes acima do campo;
- placeholder apenas como exemplo;
- altura mínima de campo: `48px`;
- textarea: mínimo de `140px`;
- validação próxima ao campo;
- estado de envio explícito;
- mensagem de sucesso com próximo passo.

### Seletor de idioma

- rótulos: `PT`, `EN`, `ES`;
- sem bandeiras;
- manter a mesma seção após a troca;
- persistir escolha do visitante;
- largura flexível para não quebrar a navegação.

---

## 13. Iconografia e diagramas

### Estilo

- traço entre `1.5px` e `2px`;
- cantos levemente arredondados;
- aparência técnica e limpa;
- no máximo duas cores por ilustração;
- ícones de uma única família visual.

### Motivos permitidos

- nós e conexões;
- módulos;
- brackets;
- camadas;
- fluxo de entrada e saída;
- check de build concluído;
- cursor como detalhe pontual.

### Motivos proibidos

- cérebro brilhante para representar IA;
- robô humanoide genérico;
- nuvem de números binários;
- cadeado para qualquer backend;
- foguete em todos os CTAs;
- ícones 3D inconsistentes;
- ilustrações stock de pessoas usando notebook.

---

## 14. Imagens e screenshots

### Screenshots dos projetos

- capturar em `1440 × 900` ou proporção equivalente `16:10`;
- usar conteúdo real e estado visualmente forte;
- remover informações pessoais, tokens, chaves, dashboards privados ou dados sensíveis;
- manter consistência de escala entre os quatro projetos;
- fornecer AVIF ou WebP, com fallback quando necessário;
- usar `loading="lazy"` fora da Hero;
- definir largura e altura para impedir layout shift.

### Tratamento visual

- moldura de navegador mínima e própria;
- endereço pode ser simplificado, mas nunca inventado;
- sombra suave sobre o fundo `paper`;
- zoom de hover entre `1.01` e `1.025`;
- sem mockups de notebook ou celular quando o screenshot direto comunicar melhor.

### Vídeo e GIF

- não iniciar automaticamente com áudio;
- evitar GIF pesado;
- preferir vídeo curto, comprimido, sem som e carregado sob interação;
- fornecer imagem estática como fallback.

---

## 15. Sistema de movimento

### Curva principal

`cubic-bezier(0.22, 1, 0.36, 1)`

### Durações

| Tipo | Duração |
|---|---:|
| Feedback imediato | `120–160ms` |
| Hover e foco | `160–220ms` |
| Entrada de componente | `240–360ms` |
| Entrada de seção | `360–520ms` |
| Morph da Hero | `500–700ms` |

### Regras

- animar `transform` e `opacity` sempre que possível;
- escalonar itens em `50–70ms`, com atraso total máximo de `280ms`;
- deslocamentos de entrada entre `8px` e `16px`;
- executar animações de seção apenas uma vez;
- pausar animações quando a aba estiver oculta;
- não animar blur grande, box-shadow pesado, width ou height em loops;
- manter o scroll nativo.

### Reduced motion

Com `prefers-reduced-motion: reduce`:

- remover digitação;
- remover morph espacial;
- remover parallax;
- apresentar estados finais por fade curto;
- manter carrosséis manuais e navegação funcional;
- nunca esconder informação.

---

## 16. Responsividade

### Mobile-first

- copy aparece antes do efeito visual quando houver disputa por espaço;
- nenhuma linha de código deve exigir scroll horizontal na Hero;
- carrosséis usam gesto nativo e controles explícitos;
- elementos clicáveis têm área mínima de `44 × 44px`;
- o header não pode ocupar mais de cerca de `72px` fechado;
- o build rail vira rótulo local de seção;
- grids assimétricos viram sequência editorial simples;
- efeitos de hover têm equivalente por foco ou toque.

### Alturas pequenas

Em notebooks e celulares com pouca altura:

- a Hero pode ultrapassar `100svh`;
- não comprimir fonte, CTAs ou foto para forçar tudo na primeira dobra;
- reduzir efeitos ambientais antes de reduzir conteúdo;
- preloader deve usar menos linhas e menor duração.

### Idiomas

- componentes aceitam expansão de texto de pelo menos 30%;
- evitar largura fixa em botões e navegação;
- não quebrar `Full-Stack`, `EN-US` ou nomes próprios em linhas ruins;
- a animação nunca depende da largura exata de uma frase traduzida;
- textos do `site-content.md` são a fonte de verdade.

---

## 17. Acessibilidade

- estrutura semântica com um `h1` e hierarquia correta de títulos;
- link **Pular para o conteúdo** como primeiro elemento focável;
- foco visível em todos os controles;
- navegação completa por teclado;
- targets mínimos de `44 × 44px`;
- contraste WCAG AA para texto e controles;
- mensagens de formulário associadas aos campos;
- `aria-current` no item de navegação ativo;
- `alt` descritivo para fotos e screenshots quando relevante;
- imagens decorativas com `alt=""`;
- ícones nunca substituem sozinhos o nome de uma ação;
- carrossel não captura setas fora de seu foco;
- nova aba é indicada visualmente e no nome acessível;
- idioma da página muda no atributo `lang`;
- não depender de cor para mostrar etapa concluída.

---

## 18. Performance

### Metas de experiência

- a Hero deve aparecer imediatamente; a introdução não pode esperar todas as imagens;
- priorizar a foto da Hero com tamanho adequado;
- screenshots abaixo da dobra usam lazy loading;
- fontes devem usar subset latino e `font-display: swap`;
- evitar bibliotecas pesadas apenas para efeitos simples;
- o preloader não é uma justificativa para atrasar o Largest Contentful Paint;
- reservar dimensões de imagens, vídeos e cards;
- não carregar vídeo do laboratório criativo antes de interação;
- efeitos ambientais devem ser CSS/SVG leves, não canvas contínuo.

### Regra prática

Se um efeito não melhora hierarquia, entendimento ou continuidade e custa processamento perceptível, removê-lo.

---

## 19. Tokens iniciais de implementação

```css
:root {
  --color-void: #080b12;
  --color-build: #0d1420;
  --color-surface-1: #111925;
  --color-surface-2: #172231;
  --color-stroke-dark: #293548;
  --color-text-strong-dark: #f5f7fa;
  --color-text-body-dark: #cad3df;
  --color-text-muted-dark: #8e9bad;

  --color-paper: #f2f4ef;
  --color-paper-card: #ffffff;
  --color-ink: #111820;
  --color-ink-body: #465160;
  --color-stroke-light: #d7dee5;

  --color-compile-mint: #68e2b9;
  --color-signal-blue: #80a7ff;
  --color-signal-blue-ink: #2e5bcc;
  --color-syntax-amber: #f2be6b;
  --color-syntax-violet: #c895ff;
  --color-error-dark: #ff7386;
  --color-error-light: #b8243f;

  --font-display: "Sora", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-code: "JetBrains Mono", monospace;

  --container-max: 80rem;
  --radius-button: 0.75rem;
  --radius-card: 1rem;
  --radius-code: 0.875rem;

  --ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 160ms;
  --duration-medium: 320ms;
  --duration-section: 480ms;
}
```

Os tokens podem ser adaptados à stack usada, mas os papéis semânticos devem ser preservados. Não espalhar hex codes diretamente pelos componentes.

---

## 20. Arquitetura visual dos estados

### Estados globais

| Estado | Representação |
|---|---|
| Inicializando | cursor e código incompleto |
| Construindo | borda, conector ou módulo entrando |
| Ativo | menta e contraste principal |
| Concluído | ponto preenchido ou check discreto |
| Publicado | screenshot e link externo |
| Disponível | status estático, sem pulsação permanente |
| Erro | mensagem humana + cor + ícone |

### Consistência

O mesmo verde-menta não pode significar “hover” em um lugar, “novo” em outro e “sucesso” em outro. Seu significado principal é **ativo, concluído ou pronto**.

---

## 21. Checklist de assets

### Obrigatórios

- [ ] Retrato profissional principal em alta resolução.
- [ ] Screenshot `16:10` da Donateka.
- [ ] Screenshot `16:10` da RamiresTech.
- [ ] Screenshot `16:10` da FJM Clean.
- [ ] Screenshot `16:10` do Mercadinho Delivery.
- [ ] Thumbnail do sistema de recomendação com LLM.
- [ ] Thumbnail do crawler jurídico.
- [ ] Imagem ou captura do portfólio de games.
- [ ] Currículos finais para download.
- [ ] Favicon SVG baseado no monograma aprovado.
- [ ] Open Graph `1200 × 630`.

### Opcionais

- [ ] Foto secundária para a seção Sobre.
- [ ] Logos oficiais monocromáticos das empresas, se o uso for adequado.
- [ ] Vídeos curtos de projetos interativos.
- [ ] Diagramas simplificados dos cases privados.

---

## 22. Checklist de qualidade visual

### Antes de implementar

- [ ] Aprovar uma composição desktop e uma mobile da Hero.
- [ ] Validar a transformação do preloader sem texto real.
- [ ] Confirmar qual versão do monograma será usada.
- [ ] Reunir screenshots consistentes dos projetos.
- [ ] Confirmar a foto definitiva.

### Antes de publicar

- [ ] Preloader dura no máximo `2.5s`.
- [ ] Introdução não repete na mesma sessão.
- [ ] Site funciona sem animação.
- [ ] Site funciona por teclado.
- [ ] Contraste foi testado nos temas escuro e claro.
- [ ] Nenhum texto depende de hover.
- [ ] Nenhum conteúdo marcado como `TODO` em `site-content.md` foi publicado.
- [ ] Troca entre PT, EN e ES não muda a seção atual.
- [ ] Screenshots não expõem informações sensíveis.
- [ ] Links externos indicam abertura em nova aba.
- [ ] Formulário possui estados de envio, sucesso e erro.
- [ ] Não há layout shift perceptível na Hero ou nos projetos.
- [ ] Reduced motion foi testado.
- [ ] Mobile foi validado em largura e altura pequenas.

---

## 23. Critério final de decisão

Para cada efeito ou componente, perguntar:

1. Ele reforça a transformação de código em produto?
2. Ele ajuda o visitante a entender uma prova, uma etapa ou uma ação?
3. Ele continua claro em mobile, teclado e reduced motion?
4. Ele preserva a velocidade percebida?

Se a resposta for “não” para duas ou mais perguntas, o elemento deve ser simplificado ou removido.

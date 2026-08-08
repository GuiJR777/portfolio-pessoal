import type { Locale } from '../lib/locale';

export type SectionId =
  | 'home'
  | 'impact'
  | 'companies'
  | 'build'
  | 'cases'
  | 'projects'
  | 'experience'
  | 'stack'
  | 'process'
  | 'about'
  | 'contact';

export interface SeoContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface HeaderContent {
  brand: string;
  descriptor: string;
  cta: string;
  resume: string;
  nav: NavItem[];
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  intro: string;
  reinforcement: string;
  primaryCta: string;
  secondaryCta: string;
  availability: string;
  portraitAlt: string;
}

export interface Metric {
  value: string;
  company: string;
  context: string;
}

export interface MetricsContent {
  eyebrow: string;
  title: string;
  intro: string;
  items: Metric[];
  companyStrip: string;
}

export interface Capability {
  key: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface CapabilityContent {
  eyebrow: string;
  title: string;
  intro: string;
  items: Capability[];
}

export interface ProfessionalCase {
  company: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
}

export interface CasesContent {
  eyebrow: string;
  title: string;
  intro: string;
  labels: {
    problem: string;
    solution: string;
    impact: string;
    stack: string;
  };
  items: ProfessionalCase[];
}

export type AnalyticsEvent =
  | 'resume_downloaded'
  | 'linkedin_opened'
  | 'github_opened'
  | 'live_project_opened'
  | 'repository_opened'
  | 'games_opened'
  | 'contact_submitted'
  | 'language_changed';

export interface ProjectLink {
  slug: string;
  tag: string;
  title: string;
  description: string;
  role?: string;
  proof?: string;
  status?: string;
  stack?: string[];
  cta: string;
  url: string;
  image?: string;
  imageAvif?: string;
  imageWebp?: string;
  imageAlt?: string;
  event: AnalyticsEvent;
}

export interface ProjectGroup {
  title: string;
  description: string;
  items: ProjectLink[];
}

export interface ProjectsContent {
  eyebrow: string;
  title: string;
  intro: string;
  live: ProjectGroup;
  source: ProjectGroup;
  creative: ProjectGroup;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  model: string;
  summary: string;
}

export interface ExperienceContent {
  eyebrow: string;
  title: string;
  intro: string;
  items: ExperienceItem[];
}

export interface TechnologyGroup {
  title: string;
  items: string[];
}

export interface TechnologiesContent {
  eyebrow: string;
  title: string;
  intro: string;
  groups: TechnologyGroup[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
  ready: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  facts: string[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  linkedinCta: string;
  emailCta: string;
  labels: {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    company: string;
    message: string;
  };
  subjects: string[];
  consent: string;
  states: {
    idle: string;
    sending: string;
    success: string;
    error: string;
    configurationError: string;
  };
  validation: {
    summary: string;
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

export interface AccessibilityContent {
  skipToContent: string;
  navigation: string;
  openMenu: string;
  closeMenu: string;
  skipAnimation: string;
  newTab: string;
  languageSelector: string;
  activeLanguage: string;
  previousProject: string;
  nextProject: string;
  goToProject: string;
  carouselLabel: string;
}

export interface FooterContent {
  line: string;
  closing: string;
  availability: string;
  rights: string;
}

export interface SiteContent {
  locale: Locale;
  shortLocale: 'PT' | 'EN' | 'ES';
  seo: SeoContent;
  header: HeaderContent;
  hero: HeroContent;
  metrics: MetricsContent;
  capabilities: CapabilityContent;
  cases: CasesContent;
  projects: ProjectsContent;
  experience: ExperienceContent;
  technologies: TechnologiesContent;
  process: ProcessContent;
  about: AboutContent;
  contact: ContactContent;
  a11y: AccessibilityContent;
  footer: FooterContent;
}

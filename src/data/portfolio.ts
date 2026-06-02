import {
  Award,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Fingerprint,
  GraduationCap,
  LockKeyhole,
  MailCheck,
  MonitorCheck,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  logoUrl?: string;
  fallbackIcon?: LucideIcon;
  brandColor?: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: SkillItem[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  stack: string[];
  highlights: string[];
  accent: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  logoUrl: string;
  summary: string;
  metrics?: string[];
  icon: LucideIcon;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  result: string;
  downloadHref: string;
  icon: LucideIcon;
}

export const owner = {
  name: 'Nguyễn Trí Dũng',
  role: 'Software Engineer / Computer Science Student',
  focus: 'Backend Engineering, AI Applications, Scalable Systems',
  location: 'Open to software engineering and AI product opportunities',
  resumeHref: '/nguyen-tri-dung-resume.txt',
  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-profile',
  },
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const focusCards = [
  {
    label: 'Backend',
    value: 'APIs, auth, data models',
  },
  {
    label: 'AI Apps',
    value: 'NLP, vision, retrieval',
  },
  {
    label: 'Systems',
    value: 'Docker, scale, reliability',
  },
];

const simpleIcon = (slug: string, color: string): string => `https://cdn.simpleicons.org/${slug}/${color}`;

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend Engineering',
    description: 'Service design, domain modeling, APIs, authentication, and production-minded data flows.',
    icon: ServerCog,
    skills: [
      { name: 'Go', logoUrl: simpleIcon('go', '00ADD8'), brandColor: '#00ADD8' },
      { name: 'Spring Boot', logoUrl: simpleIcon('springboot', '6DB33F'), brandColor: '#6DB33F' },
      { name: 'FastAPI', logoUrl: simpleIcon('fastapi', '009688'), brandColor: '#009688' },
      { name: 'Python', logoUrl: simpleIcon('python', '3776AB'), brandColor: '#3776AB' },
      { name: 'REST APIs', logoUrl: simpleIcon('openapiinitiative', '6BA539'), brandColor: '#6BA539' },
      { name: 'JWT', logoUrl: simpleIcon('jsonwebtokens', 'D63AFF'), brandColor: '#D63AFF' },
    ],
  },
  {
    title: 'Frontend Systems',
    description: 'Typed React dashboards with responsive interfaces and clean interaction states.',
    icon: Code2,
    skills: [
      { name: 'React', logoUrl: simpleIcon('react', '61DAFB'), brandColor: '#61DAFB' },
      { name: 'TypeScript', logoUrl: simpleIcon('typescript', '3178C6'), brandColor: '#3178C6' },
      { name: 'Tailwind CSS', logoUrl: simpleIcon('tailwindcss', '06B6D4'), brandColor: '#06B6D4' },
      { name: 'React Router', logoUrl: simpleIcon('reactrouter', 'CA4245'), brandColor: '#CA4245' },
      { name: 'Framer Motion', logoUrl: simpleIcon('framer', 'FFFFFF'), brandColor: '#FFFFFF' },
    ],
  },
  {
    title: 'Data & Infrastructure',
    description: 'Reliable persistence, deployment-ready containers, and practical engineering workflows.',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', logoUrl: simpleIcon('postgresql', '4169E1'), brandColor: '#4169E1' },
      { name: 'Docker', logoUrl: simpleIcon('docker', '2496ED'), brandColor: '#2496ED' },
      { name: 'SQL', logoUrl: simpleIcon('sqlite', '003B57'), brandColor: '#0EA5E9' },
      { name: 'Schema Design', fallbackIcon: Database, brandColor: '#22C55E' },
      { name: 'API Integration', logoUrl: simpleIcon('swagger', '85EA2D'), brandColor: '#85EA2D' },
    ],
  },
  {
    title: 'AI Applications',
    description: 'Applied AI features that connect model outputs with useful product experiences.',
    icon: BrainCircuit,
    skills: [
      { name: 'NLP', logoUrl: simpleIcon('openai', 'FFFFFF'), brandColor: '#FFFFFF' },
      { name: 'Intent Detection', fallbackIcon: BrainCircuit, brandColor: '#A78BFA' },
      { name: 'Knowledge Retrieval', fallbackIcon: Network, brandColor: '#38BDF8' },
      { name: 'Face Recognition', fallbackIcon: Fingerprint, brandColor: '#34D399' },
      { name: 'Focus Detection', fallbackIcon: MonitorCheck, brandColor: '#FBBF24' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Student Focus AI',
    subtitle: 'AI-powered classroom attention monitoring system',
    description:
      'A real-time education analytics platform that combines computer vision, FastAPI services, and a React dashboard for monitoring classroom engagement.',
    icon: MonitorCheck,
    stack: ['FastAPI', 'React', 'Python', 'Face Recognition', 'Realtime UI'],
    highlights: [
      'Face recognition pipeline for student identification',
      'Real-time focus detection and classroom attention insights',
      'Dashboard experience for educators and administrators',
    ],
    accent: 'from-emerald-300 to-cyan-300',
  },
  {
    title: 'Recruitment Fanpage Platform',
    subtitle: 'Secure hiring workflow platform',
    description:
      'A recruitment management backend built around secure authentication, clear roles, and database-backed workflows for fanpage hiring operations.',
    icon: ShieldCheck,
    stack: ['Spring Boot', 'PostgreSQL', 'JWT', 'RBAC', 'Email OTP'],
    highlights: [
      'JWT authentication with role-based access control',
      'Email OTP verification for account security',
      'Structured PostgreSQL schema for recruitment workflows',
    ],
    accent: 'from-sky-300 to-emerald-300',
  },
  {
    title: 'AI Chatbot System',
    subtitle: 'Knowledge-driven conversational backend',
    description:
      'A scalable chatbot architecture focused on intent detection, knowledge retrieval, and practical NLP patterns for product support experiences.',
    icon: Bot,
    stack: ['NLP', 'Intent Detection', 'Retrieval', 'Python', 'Backend Architecture'],
    highlights: [
      'Intent classification flow for routing user requests',
      'Knowledge retrieval layer for grounded responses',
      'Backend structure designed for iteration and scale',
    ],
    accent: 'from-fuchsia-300 to-amber-200',
  },
];

export const timeline: TimelineItem[] = [
  {
    title: 'Software Engineer',
    organization: 'FAR EAST FOOD INDUSTRY COMPANY LIMITED',
    period: 'Jan 2026 - Present',
    logoUrl: '/logovd.jpg',
    summary: 'Built recruitment systems for company hiring operations, supporting high-volume applicant intake and hiring outcomes.',
    metrics: ['1,000+ applicants', '30+ hires'],
    icon: Rocket,
  },
  {
    title: 'Software Engineer Intern',
    organization: 'Ban Vien Company',
    period: 'Aug 2025 - Dec 2025',
    logoUrl: '/banvien-logo.svg',
    summary: 'Contributed to the company internal human resource management system during the internship.',
    icon: ServerCog,
  },
];

export const education = {
  title: 'Graduated from International University (VNU-HCM)',
  subtitle: 'Computer Science - GPA: 3.6/4.0',
  icon: GraduationCap,
  topics: [
    'Artificial Intelligence',
    'Principles of Database Management',
    'Software Engineering',
    'Algorithms & Data Structures',
    'Web Application Development',
    'Computer Architecture',
    'Computer Networks',
  ],
};

export const certificates: CertificateItem[] = [
  {
    title: 'IELTS Academic',
    issuer: 'English Proficiency',
    result: 'Band 7.0',
    downloadHref: '/certificates/ielts-7-demo.svg',
    icon: Award,
  },
  {
    title: 'HSK Level 4',
    issuer: 'Chinese Proficiency',
    result: 'HSK 4',
    downloadHref: '/certificates/hsk4-demo.svg',
    icon: Award,
  },
];

export const principles = [
  {
    title: 'System-first thinking',
    description:
      'I care about boundaries, data flow, and reliability before adding complexity to a codebase.',
    icon: Network,
  },
  {
    title: 'Security-aware defaults',
    description:
      'Authentication, roles, and validation are part of the product design, not a final checklist item.',
    icon: LockKeyhole,
  },
  {
    title: 'Useful AI integration',
    description:
      'AI features should be measurable, explainable, and connected to a workflow users already understand.',
    icon: Fingerprint,
  },
  {
    title: 'Clear communication',
    description:
      'I document tradeoffs and make project decisions easy for teammates and recruiters to evaluate.',
    icon: MailCheck,
  },
];

import {
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Fingerprint,
  GraduationCap,
  Layers3,
  LockKeyhole,
  MailCheck,
  MonitorCheck,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
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
  description: string;
  points: string[];
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

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend Engineering',
    description: 'Service design, domain modeling, APIs, authentication, and production-minded data flows.',
    icon: ServerCog,
    skills: ['Go', 'Spring Boot', 'FastAPI', 'Python', 'REST APIs', 'JWT'],
  },
  {
    title: 'Frontend Systems',
    description: 'Typed React dashboards with responsive interfaces and clean interaction states.',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'Framer Motion'],
  },
  {
    title: 'Data & Infrastructure',
    description: 'Reliable persistence, deployment-ready containers, and practical engineering workflows.',
    icon: Database,
    skills: ['PostgreSQL', 'Docker', 'SQL', 'Schema Design', 'API Integration'],
  },
  {
    title: 'AI Applications',
    description: 'Applied AI features that connect model outputs with useful product experiences.',
    icon: BrainCircuit,
    skills: ['NLP', 'Intent Detection', 'Knowledge Retrieval', 'Face Recognition', 'Focus Detection'],
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
    title: 'Software Engineer / Computer Science Student',
    organization: 'Academic and independent engineering work',
    period: 'Current',
    description:
      'Building backend-heavy applications that combine secure APIs, practical AI features, and polished product interfaces.',
    points: [
      'Designing REST services with authentication, authorization, and database persistence',
      'Connecting AI model workflows to usable dashboards and business logic',
      'Practicing production habits across code structure, containers, and typed frontend development',
    ],
    icon: Rocket,
  },
  {
    title: 'Backend & AI Application Builder',
    organization: 'Project-based systems',
    period: '2024 - Present',
    description:
      'Focused on translating AI ideas into working systems with clear boundaries between model logic, APIs, and user-facing data.',
    points: [
      'Built FastAPI and Spring Boot services around concrete product workflows',
      'Worked with PostgreSQL schemas for authentication, roles, and application data',
      'Explored NLP, computer vision, and retrieval patterns in applied systems',
    ],
    icon: Workflow,
  },
  {
    title: 'Full-stack Product Developer',
    organization: 'Portfolio projects',
    period: '2023 - Present',
    description:
      'Created recruiter-friendly web interfaces that make complex backend and AI capabilities easier to inspect.',
    points: [
      'Implemented React dashboards with TypeScript and responsive layouts',
      'Used Docker-oriented workflows to keep local development repeatable',
      'Balanced clean UI with practical system details and project storytelling',
    ],
    icon: Layers3,
  },
];

export const education = {
  title: 'Computer Science Student',
  subtitle: 'Software engineering, backend systems, and applied AI',
  icon: GraduationCap,
  topics: [
    'Data structures and algorithms',
    'Database systems',
    'Web application architecture',
    'Software design principles',
    'Machine learning fundamentals',
    'Distributed systems foundations',
  ],
};

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

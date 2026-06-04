export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  challenges: string[];
  stack: string[];
  category: string;
  status: string;
  github: string | null;
  live: string | null;
  gradient: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  stack: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
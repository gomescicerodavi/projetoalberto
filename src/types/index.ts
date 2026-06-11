// Tipos comuns para o projeto
export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Resource {
  title: string;
  description: string;
  category: string;
  icon: string;
  links: { label: string; url: string }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Right {
  title: string;
  description: string;
}

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

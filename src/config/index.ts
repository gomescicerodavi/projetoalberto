// Configurações e constantes do projeto

export const SITE_CONFIG = {
  name: "Inclusão Digital",
  title: "Inclusão Digital - A Importância da Legenda e da Janela em Libras",
  description:
    "Plataforma dedicada à conscientização sobre inclusão digital, acessibilidade web e direitos das pessoas surdas.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/usuario/projetoalberto",
    twitter: "https://twitter.com/inclusaodigital",
    email: "contato@inclusaodigital.com",
  },
};

export const NAVIGATION_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Recursos", href: "#recursos" },
  { label: "Direitos", href: "#direitos" },
];

export const FOOTER_SECTIONS = [
  {
    title: "Sobre",
    links: [
      { label: "Missão", href: "#" },
      { label: "Equipe", href: "#" },
      { label: "Contato", href: "#" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Guias", href: "/recursos" },
      { label: "Quiz", href: "/quiz" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
      { label: "Acessibilidade", href: "#" },
    ],
  },
];

export const STATISTICS = [
  {
    value: "10M+",
    label: "Pessoas surdas no Brasil",
  },
  {
    value: "85%",
    label: "Sites sem acessibilidade básica",
  },
  {
    value: "1 de 4",
    label: "Adultos com alguma deficiência",
  },
  {
    value: "100%",
    label: "Direito à informação",
  },
];

export const COLORS = {
  primary: "from-blue-500 to-purple-600",
  secondary: "from-blue-50 to-purple-50",
  dark: {
    secondary: "from-blue-950/20 to-purple-950/20",
  },
};

export const ACCESSIBILITY_FEATURES = [
  "Navegação por teclado completa",
  "Compatibilidade com leitores de tela",
  "Contraste de cores adequado (WCAG AA)",
  "Semântica HTML5 apropriada",
  "Atributos ARIA quando necessário",
  "Texto alternativo em imagens",
  "Linguagem clara e acessível",
];

export const TECHNOLOGIES = [
  { name: "Next.js", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "WAI-ARIA", icon: "♿" },
  { name: "HTML5", icon: "🏗️" },
  { name: "CSS3", icon: "🎨" },
];

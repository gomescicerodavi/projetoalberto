"use client";

import { Footer, Card, Button } from "@/components";

interface Resource {
  title: string;
  description: string;
  category: string;
  icon: string;
  links: { label: string; url: string }[];
}

const resources: Resource[] = [
  {
    title: "Guia de Acessibilidade Web",
    description:
      "Documentação completa sobre como tornar websites acessíveis para todas as pessoas.",
    category: "Desenvolvimento",
    icon: "📘",
    links: [
      { label: "WCAG 2.1", url: "#" },
      { label: "WAI-ARIA", url: "#" },
      { label: "Melhores Práticas", url: "#" },
    ],
  },
  {
    title: "Libras Básico",
    description:
      "Aprenda os fundamentos da Língua Brasileira de Sinais com vídeos interativos.",
    category: "Educação",
    icon: "🤟",
    links: [
      { label: "Alfabeto em Sinais", url: "#" },
      { label: "Números", url: "#" },
      { label: "Expressões Comuns", url: "#" },
    ],
  },
  {
    title: "Legendagem Profissional",
    description:
      "Recursos sobre como criar legendas de qualidade para conteúdo audiovisual.",
    category: "Produção",
    icon: "🎬",
    links: [
      { label: "Técnicas", url: "#" },
      { label: "Ferramentas", url: "#" },
      { label: "Normas", url: "#" },
    ],
  },
  {
    title: "Direitos Digitais",
    description:
      "Informações sobre os direitos das pessoas surdas e com deficiência na era digital.",
    category: "Legal",
    icon: "⚖️",
    links: [
      { label: "Lei de Acessibilidade", url: "#" },
      { label: "Constituição", url: "#" },
      { label: "Tratados Internacionais", url: "#" },
    ],
  },
  {
    title: "Ferramentas de Desenvolvimento",
    description:
      "Software e bibliotecas para implementar acessibilidade em aplicações web.",
    category: "Desenvolvimento",
    icon: "🛠️",
    links: [
      { label: "Axe DevTools", url: "#" },
      { label: "NVDA Screen Reader", url: "#" },
      { label: "React ARIA", url: "#" },
    ],
  },
  {
    title: "Comunidades e Organizações",
    description:
      "Redes de pessoas e organizações trabalhando por inclusão digital e acessibilidade.",
    category: "Comunidade",
    icon: "👥",
    links: [
      { label: "FENEIS", url: "#" },
      { label: "Abraça", url: "#" },
      { label: "W3C Brasil", url: "#" },
    ],
  },
];

export default function Recursos() {
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Recursos para Inclusão Digital
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Ferramentas, guias e conhecimentos para criar um mundo digital mais acessível
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources
                .filter((r) => r.category === category)
                .map((resource) => (
                  <Card
                    key={resource.title}
                    icon={resource.icon}
                    title={resource.title}
                    description={resource.description}
                  >
                    <div className="mt-4 space-y-2">
                      {resource.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          className="block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          → {link.label}
                        </a>
                      ))}
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}

       
      </main>

      <Footer />
    </div>
  );
}

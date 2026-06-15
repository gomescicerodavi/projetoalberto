"use client";

import { Footer, Button } from "@/components";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Cícero Davi",
    role: "Desenvolvedor Front-end",
    avatar: "🎨",
    bio: "Responsável pela criação da interface, experiência do usuário e componentes visuais acessíveis.",
  },
  {
    name: "Renan da Silva",
    role: "Desenvolvedor Front-end",
    avatar: "🎨",
    bio: "Responsável pela criação da interface, experiência do usuário e componentes visuais acessíveis.",
  },
];

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* Hero */}
        <section className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Sobre Inclusão Digital
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Somos uma plataforma dedicada a conscientizar e educar sobre a importância da acessibilidade digital, legendas e Libras para criar um mundo mais inclusivo.
          </p>
        </section>

        {/* Missão */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-900">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              🎯 Missão
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Promover a inclusão digital e garantir que a informação seja acessível para todas as pessoas, valorizando Libras e legendagem.
            </p>
          </div>
          <div className="p-8 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-900">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              👁️ Visão
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Um mundo digital onde nenhuma pessoa é excluída por falta de acessibilidade. Igualdade de acesso à informação para todos.
            </p>
          </div>
          <div className="p-8 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-900">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              ❤️ Valores
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Inclusão, acessibilidade, respeito à diversidade, educação e ação. Acreditamos que tecnologia deve servir a todos.
            </p>
          </div>
        </section>

        {/* Por que foi criado */}
        <section className="mb-20 bg-white dark:bg-slate-900 rounded-xl p-12 border border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Por que existe Inclusão Digital?
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              No Brasil, aproximadamente <strong>10 milhões de pessoas</strong> são surdas ou têm perda auditiva. Apesar desse número significativo, muitos conteúdos digitais não possuem legendas ou interpretação em Libras.
            </p>
            <p>
              <strong>85% dos websites</strong> carecem de acessibilidade básica, criando barreiras digitais invisíveis para pessoas com deficiência.
            </p>
            <p>
              A Constituição Federal e legislações específicas como a Lei de Acessibilidade garantem o direito à informação e comunicação para todos. Porém, sem conscientização e educação, esses direitos permanecem apenas no papel.
            </p>
            <p>
              Criamos esta plataforma para <strong>conscientizar, educar e incentivar</strong> a implementação de práticas acessíveis na web.
            </p>
          </div>
        </section>

        {/* Equipe */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Nossa Equipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tecnologias */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Tecnologias Utilizadas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Next.js", icon: "⚡" },
              { name: "React", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Tailwind CSS", icon: "🎨" },
              { name: "Node.js", icon: "🟢" },
              { name: "WAI-ARIA", icon: "♿" },
              { name: "HTML5", icon: "🏗️" },
              { name: "CSS3", icon: "🎨" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <p className="font-medium text-slate-900 dark:text-white">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Quer fazer parte dessa missão?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Contribua para tornar a internet acessível para todos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contribuir
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Contato
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

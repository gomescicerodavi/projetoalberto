"use client";

import { Footer, Card, Button } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
            Bem-vindo ao Futuro Acessível
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          A Acessibilidade é um <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Direito</span>
        </h2>

        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Legendas e Janela em Libras aproximam pessoas, eliminam barreiras e promovem inclusão digital verdadeira. Todas as informações devem ser acessíveis para todos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/recursos">
            <Button size="lg">Explorar Recursos</Button>
          </Link>
          <Link href="/sobre">
            <Button variant="outline" size="lg">Saiba Mais</Button>
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section id="sobre" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Por que Acessibilidade Importa?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon="📝"
            title="Legendas"
            description="Legendas não beneficiam apenas pessoas surdas. Facilitam aprendizado em ambientes ruidosos, para pessoas com déficit de atenção e aprendizado de idiomas."
            items={["✓ Melhor compreensão", "✓ Maior acessibilidade", "✓ SEO otimizado"]}
          />
          <Card
            icon="🤟"
            title="Janela em Libras"
            description="A Língua Brasileira de Sinais é a primeira língua de muitas pessoas surdas. A Janela em Libras garante comunicação completa e natural."
            items={["✓ Comunicação natural", "✓ Inclusão plena", "✓ Valorização cultural"]}
          />
          <Card
            icon="🌐"
            title="Web Acessível"
            description="Sites acessíveis beneficiam todos: pessoas com deficiência, idosos, e usuários em conectividade lenta. É um direito digital fundamental."
            items={["✓ WAI-ARIA completo", "✓ Navegação por teclado", "✓ Contraste adequado"]}
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section id="recursos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              10M+
            </div>
            <p className="text-slate-600 dark:text-slate-400">Pessoas surdas no Brasil</p>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              85%
            </div>
            <p className="text-slate-600 dark:text-slate-400">Sites sem acessibilidade básica</p>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              1 de 4
            </div>
            <p className="text-slate-600 dark:text-slate-400">Adultos com alguma deficiência</p>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-slate-600 dark:text-slate-400">Direito à informação</p>
          </div>
        </div>
      </section>

      {/* Rights Section */}
      <section id="direitos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Direitos das Pessoas Surdas
        </h3>

        <div className="space-y-6">
          {[
            {
              title: "Acesso à Informação",
              desc: "Direito a legendas, legendas abertas e interpretação em Libras em conteúdos públicos.",
            },
            {
              title: "Educação Inclusiva",
              desc: "Acesso a intérpretes, Libras como disciplina e materiais adaptados nas escolas.",
            },
            {
              title: "Trabalho Digno",
              desc: "Ambiente de trabalho acessível com suporte linguístico apropriado.",
            },
            {
              title: "Saúde Acessível",
              desc: "Serviços de saúde com intérpretes de Libras e comunicação clara.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20 rounded-r-lg"
            >
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-12 text-center border border-blue-200 dark:border-blue-900">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Teste Seu Conhecimento
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Participe do nosso quiz interativo sobre inclusão digital, acessibilidade e Libras
          </p>
          <Link href="/quiz">
            <Button size="lg">Fazer Quiz Agora</Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-4xl font-bold mb-4">
            Junte-se ao Movimento por Inclusão Digital
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Aprender sobre acessibilidade é o primeiro passo. Implementar é a mudança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Começar Agora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Documentação
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

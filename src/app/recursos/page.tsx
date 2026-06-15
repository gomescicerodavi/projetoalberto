"use client";

import { useState } from "react";
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

// Conteúdo informativo para cada link
const linkContent: Record<string, { title: string; content: string }> = {
  "WCAG 2.1": {
    title: "WCAG 2.1 - Diretrizes de Acessibilidade para Conteúdo Web",
    content: `WCAG 2.1 é o padrão internacional de acessibilidade web desenvolvido pelo W3C (World Wide Web Consortium).

Princípios Principais:
• Perceptível - Informações devem ser apresentadas de forma que os usuários possam perceber
• Operável - Componentes devem ser navegáveis via teclado
• Compreensível - Texto claro e interface previsível
• Robusto - Compatível com tecnologias assistivas

Níveis de Conformidade:
• A (Mínimo) - Atende requisitos básicos
• AA (Recomendado) - Maior acessibilidade
• AAA (Avançado) - Máximo nível de acessibilidade

Aplica-se a websites, aplicações web, documentos e componentes interativos.`
  },
  "WAI-ARIA": {
    title: "WAI-ARIA - Accessible Rich Internet Applications",
    content: `WAI-ARIA fornece papéis, propriedades e estados para melhorar a acessibilidade de aplicações web ricas.

Componentes Principais:
• Roles - Definem o tipo de elemento (ex: navigation, main, region)
• Properties - Descrevem características (ex: aria-label, aria-describedby)
• States - Indicam estado atual (ex: aria-expanded, aria-selected)

Benefícios:
• Melhora compatibilidade com leitores de tela
• Fornece informações contextuais importantes
• Permite navegação mais intuitiva

Use quando HTML5 semântico não é suficiente.`
  },
  "Melhores Práticas": {
    title: "Melhores Práticas em Acessibilidade Web",
    content: `Dicas práticas para criar websites mais acessíveis:

1. Contraste de Cores
• Mínimo 4.5:1 para texto normal
• Mínimo 3:1 para texto grande

2. Navegação por Teclado
• Todos os elementos interativos acessíveis via Tab
• Focus visível em todos os controles

3. Imagens
• Sempre forneça texto alternativo (alt text)
• Descreva o conteúdo relevante, não apenas "imagem"

4. Estrutura Semântica
• Use heading tags (h1, h2, etc) apropriadamente
• Marque listas com <ul>, <ol>, <li>

5. Formulários
• Associe labels com inputs
• Forneça mensagens de erro claras`
  },
  "Alfabeto em Sinais": {
    title: "Alfabeto em Sinais - Introdução",
    content: `O alfabeto de Libras (Dactilologia) é a soletração manual das letras do alfabeto português.

Como Aprender:
• Posição correta das mãos
• Movimentos precisos de cada letra
• Prática em frente ao espelho
• Velocidade gradual

Dicas Importantes:
• Mantenha as mãos visíveis na altura do peito
• Use uma mão principal e uma auxiliar para algumas letras
• Pratique com frequência para ganhar velocidade
• Combine com expressão facial para melhor comunicação

Aplicações:
• Nomes próprios que não têm sinal correspondente
• Termos técnicos e palavras estrangeiras
• Aprendizagem de novos sinais
• Soletração quando necessário esclarecer`
  },
  "Números": {
    title: "Números em Libras",
    content: `Aprenda a contar e expressar números em Libras de forma clara.

Números Cardinais (0-10):
• Zero a Dez têm sinais específicos
• Cada número tem uma configuração única de mão
• Importante diferenciar 1-10 de 11-19

Números Maiores:
• Dezenas (20, 30, 40, etc.)
• Centenas (100, 200, etc.)
• Milhares
• Combinações de números

Contextos de Uso:
• Telefone e endereço
• Horários e datas
• Preços e quantidades
• Idades e medidas

Prática Recomendada:
• Comece com 0-10 e domine bem
• Pratique números aleatórios
• Use em contextos reais (horário, preço)`
  },
  "Expressões Comuns": {
    title: "Expressões Comuns em Libras",
    content: `Principais expressões para comunicação cotidiana em Libras.

Saudações:
• Olá / Oi
• Tudo bem?
• Como você está?
• Bom dia / Boa tarde / Boa noite

Expressões de Cortesia:
• Obrigado / Muito obrigado
• De nada
• Por favor
• Com licença
• Desculpe

Comunicação Básica:
• Qual é seu nome?
• Meu nome é...
• Quanto custa?
• Você fala... (língua)?
• Eu não entendi

Dicas para Comunicação:
• Pronuncie as palavras enquanto faz os sinais
• Use expressão facial adequada
• Mantenha contato visual
• Seja paciente ao aprender
• Pratique com surdos para melhorar`
  },
  "Técnicas": {
    title: "Técnicas de Legendagem Profissional",
    content: `Aprenda as principais técnicas para criar legendas de qualidade.

Tipos de Legendas:
• Legendas fechadas (CC) - Som completo e sons ambientes
• Legendas abertas - Sempre visíveis
• Legendas descritas (AD) - Descrição de ações visuais

Boas Práticas:
• Sincronização precisa com o áudio
• Máximo 2 linhas de texto
• 32-42 caracteres por linha
• Tempo de permanência mínimo 1-2 segundos

Formatação:
• Use maiúsculas apenas para nomes próprios
• Adicione sinais de pontuação
• Identifique quem está falando: JOÃO: Texto aqui
• Use [...] para trechos omitidos

Conteúdo Especial:
• [SOM DO TELEFONE] para efeitos
• [MÚSICA INSTRUMENTAL] para música
• [VOZES SOBREPOSTAS] para conflitos de áudio`
  },
  "Ferramentas": {
    title: "Ferramentas para Legendagem",
    content: `Software e plataformas recomendadas para criar legendas.

Softwares Desktop:
• Subtitle Edit - Gratuito, multipataforma
• Aegisub - Editor profissional
• HandBrake - Conversão e legendagem
• OpenShot - Editor de vídeo com legendas

Plataformas Online:
• Rev.com - Legendagem profissional
• Happy Scribe - IA + edição manual
• Kapwing - Editor web simples
• Descript - Transcrição automática

Automação:
• FFMPEG - Processamento em lote
• MoviePy - Python para legendagem
• AI Speech-to-Text - Google, AWS, Azure

Dicas de Escolha:
• Considere o volume de trabalho
• Verifique a qualidade da transcrição automática
• Use IA como base, revise manualmente
• Escolha conforme seu orçamento`
  },
  "Normas": {
    title: "Normas e Padrões de Legendagem",
    content: `Diretrizes internacionais para legendagem profissional.

Normas Internacionais:
• EBU-TT (Europa) - Formato XML padronizado
• SMPTE (Estados Unidos) - Padrões técnicos
• ITU-R (Telecomunicações) - Recomendações globais
• CEA-608/708 (USA) - Legendas fechadas

Normas Brasileiras:
• ABNT NBR 15290 - Acessibilidade em TV
• Lei 13.146/2015 - Inclusão de Pessoas com Deficiência
• Portaria 310/2006 - Legendagem na televisão
• Resoluções ANATEL - Transmissão de conteúdo

Tempo e Sincronização:
• Legendas em tela: mínimo 0.5s, máximo 7s
• Atraso não deve ultrapassar 2s do áudio
• Antecipação máxima de 0.5s

Validação:
• Qualidade mínima esperada
• Testes de compatibilidade
• Revisão profissional
• Feedback de usuários surdos`
  },
  "Lei de Acessibilidade": {
    title: "Lei Brasileira de Acessibilidade",
    content: `Lei nº 10.098/2000 - Estabelece normas gerais de acessibilidade.

Principais Pontos:
• Garante acesso a prédios, espaços e meios de transporte
• Estabelece normas construtivas e técnicas
• Obriga eliminação de barreiras arquitetônicas
• Abrange acesso à informação e comunicação

Direitos Assegurados:
• Circulação em espaços públicos e privados
• Acesso a equipamentos e tecnologia
• Comunição sem barreiras
• Participação social e política

Responsabilidades:
• Empresas e instituições devem garantir acesso
• Conteúdo digital deve ser acessível
• Comunicação de emergência em múltiplos formatos
• Atendimento prioritário a pessoas com deficiência

Penalidades:
• Multas para não-conformidade
• Ações judiciais
• Processos administrativos
• Publicidade na mídia

Complementada por:
• Lei 13.146/2015 (Lei Brasileira de Inclusão)
• Decreto 5.296/2004 (Regulamentação)
• Portarias do MMFDH`
  },
  "Constituição": {
    title: "Direitos Constitucionais de Pessoas com Deficiência",
    content: `Direitos garantidos pela Constituição Federal de 1988.

Artigos Relevantes:
• Art. 5º - Igualdade e liberdade
• Art. 196 - Saúde é direito de todos
• Art. 205 - Educação inclusiva
• Art. 227 - Proteção de pessoas com deficiência

Direitos Fundamentais:
• Igualdade perante a lei
• Liberdade de expressão
• Acesso à justiça
• Direito à educação
• Direito ao trabalho
• Acesso à saúde
• Participação política

Mecanismos de Proteção:
• Ação civil pública
• Mandato de segurança
• Habeas corpus
• Ministério Público como vigilante

Avanços Recentes:
• Emenda Constitucional 65/2010 - Garantias adicionais
• Reforma do Judiciário - Acesso à justiça
• Leis complementares - Regulamentação específica

Jurisprudência:
• STF - Decisões sobre direitos
• STJ - Jurisprudência unificada
• Tribunais estaduais - Aplicação local`
  },
  "Tratados Internacionais": {
    title: "Tratados Internacionais sobre Direitos de Pessoas com Deficiência",
    content: `Acordos internacionais que o Brasil é signatário.

Principais Tratados:
• CDPD (Convenção ONU) - Direitos e dignidade
• Protocolo Facultativo - Mecanismo de denúncia
• Agenda 2030 - Objetivos de Desenvolvimento Sustentável

Convenção ONU sobre Direitos de Pessoas com Deficiência:
• Reconhece direitos fundamentais
• Promove inclusão e participação
• Garante igualdade de oportunidades
• Combate discriminação

Obrigações do Brasil:
• Legislação interna em conformidade
• Programa de capacitação
• Acesso ao trabalho e educação
• Igualdade perante a lei
• Participação na vida pública

Monitoramento:
• Comitê da ONU analisa relatórios
• Sociedade civil participa do processo
• Recomendações internacionais

Implementação:
• Tradução em políticas públicas
• Programas de inclusão
• Fiscalização de direitos
• Responsabilização de violações`
  },
  "Axe DevTools": {
    title: "Axe DevTools - Ferramenta de Análise de Acessibilidade",
    content: `Software essencial para testar acessibilidade web automaticamente.

O que é:
• Extensão de navegador gratuita
• Desenvolvida pela Deque Systems
• Integra-se ao Chrome DevTools
• Identifica problemas de acessibilidade

Funcionalidades:
• Escaneamento automático de páginas
• Identificação de violações WCAG
• Testes de contraste de cor
• Análise de estrutura semântica
• Relatórios detalhados

Como Usar:
1. Instale a extensão no Chrome/Edge
2. Abra DevTools (F12)
3. Vá até aba "Axe DevTools"
4. Clique "Scan ALL of my page"
5. Analise os resultados

Resultados:
• Critical - Bloqueadores severos
• Serious - Prejudica usabilidade
• Moderate - Pode prejudicar uso
• Minor - Melhoria sugerida

Próximos Passos:
• Corrija os problemas encontrados
• Execute novo scan após correções
• Complemente com testes manuais`
  },
  "NVDA Screen Reader": {
    title: "NVDA - Leitor de Tela Gratuito",
    content: `NVDA (NonVisual Desktop Access) - Software de código aberto para leitura de tela.

Características:
• Totalmente gratuito
• Código-fonte aberto
• Suporta Windows e Linux
• Comunidade ativa de desenvolvedores

Funcionalidades:
• Leitura de texto na tela
• Navegação por teclas
• Integração com navegadores
• Suporte a Braille
• Feedback de voz

Instalação e Uso:
1. Baixe em https://www.nvaccess.org
2. Execute o instalador
3. Configure voz e velocidade
4. Use NVDA+N para menu

Atalhos Principais:
• NVDA+Seta para cima - Ler do início
• NVDA+Tab - Foco no elemento
• Tab - Navegar por links
• H - Próximo heading
• L - Próximo link
• B - Próximo botão

Teste de Acessibilidade:
• Navegue seu site com NVDA ativo
• Verifique estrutura e semântica
• Teste todos os formulários
• Comprove lógica de navegação`
  },
  "React ARIA": {
    title: "React ARIA - Biblioteca de Acessibilidade",
    content: `React ARIA - Hooks e componentes para acessibilidade em React.

O que é:
• Biblioteca desenvolvida pela Adobe
• Fornece hooks ARIA prontos
• Segue padrões WAI-ARIA
• Reduz trabalho manual

Componentes Disponíveis:
• Dialog
• Button
• Link
• Checkbox
• Radio Group
• Select
• Search Field
• Slider
• Tabs
• Menu

Instalação:
npm install react-aria

Exemplo Básico:
import { useButton } from 'react-aria';

function MyButton(props) {
  let ref = React.useRef();
  let { buttonProps } = useButton(props, ref);
  
  return <button {...buttonProps} ref={ref}>
    {props.children}
  </button>;
}

Benefícios:
• Automação de ARIA
• Testes já inclusos
• Documentação completa
• Comunidade supportiva

Alternativas:
• Headless UI
• Radix UI
• Chakra UI`
  },
  "FENEIS": {
    title: "FENEIS - Federação Nacional de Educação e Integração",
    content: `Maior organização de surdos do Brasil.

Sobre:
• Fundada em 1987
• Filiada à World Federation of the Deaf
• Representa os interesses dos surdos
• Atua em múltiplas frentes

Principais Ações:
• Advocacia por direitos
• Educação e capacitação em Libras
• Eventos e encontros
• Projetos de inclusão
• Pesquisa e dados

Serviços:
• Cursos de Libras
• Interpretação de Libras
• Consultoria em acessibilidade
• Advocacy jurídico
• Redes de apoio

Contato:
• Site: https://www.feneis.org.br
• Sedes em diversos estados
• Comunidade online ativa

Como Participar:
• Voluntariado
• Filiação
• Participação em eventos
• Doações
• Disseminação de informações

Parcerias:
• Escolas e universidades
• Órgãos governamentais
• Empresas privadas
• ONGs nacionais e internacionais`
  },
  "Abraça": {
    title: "Abraça - Ação Brasileira pela Inclusão",
    content: `Organização dedicada à promoção de inclusão e acessibilidade.

Missão:
• Promover inclusão de pessoas com deficiência
• Garantir acesso pleno à sociedade
• Trabalhar por acessibilidade universal
• Fortalecer comunidades

Áreas de Atuação:
• Educação inclusiva
• Empregabilidade
• Tecnologia assistiva
• Acessibilidade urbana
• Comunicação e mídia

Programas:
• Capacitação profissional
• Mentoring para emprego
• Consultoria em acessibilidade
• Campanhas de conscientização
• Parcerias com empresas

Impacto:
• Milhares beneficiados
• Empresas em transformação
• Políticas influenciadas
• Comunidade fortalecida

Envolvimento:
• Voluntariado
• Doações
• Parcerias corporativas
• Disseminação de conhecimento

Contato:
• Site: https://abraca.org.br
• Redes sociais ativas
• Equipe responsiva`
  },
  "W3C Brasil": {
    title: "W3C Brasil - World Wide Web Consortium",
    content: `Membro brasileiro do W3C - Responsável pela internet.

Sobre o W3C:
• Organismo internacional de padronização web
• Define WCAG, HTML, CSS, JavaScript
• Desenvolve tecnologias para inclusão
• Estabelece diretrizes globais

W3C Brasil:
• Escritório regional no Brasil
• Representa interesses brasileiros
• Promove acessibilidade web
• Atua junto ao governo

Trabalhos Principais:
• Educação em acessibilidade
• Desenvolvimento de padrões
• Certificação de profissionais
• Pesquisa e inovação

Iniciativas de Acessibilidade:
• Desenvolvimento WCAG
• Grupos de trabalho especializados
• Testes de conformidade
• Recursos educacionais

Como Participar:
• Membro de organização
• Voluntário
• Participante em grupos de trabalho
• Disseminador de conhecimento

Recursos:
• Documentação oficial
• Ferramentas de teste
• Comunidade online
• Eventos e treinamentos

Contato:
• Site: https://www.w3c.br
• Comunidades locais
• Eventos regulares`
  }
};

export default function Recursos() {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const categories = Array.from(new Set(resources.map((r) => r.category)));

  const handleLinkClick = (label: string) => {
    setSelectedLink(label);
  };

  const closeModal = () => {
    setSelectedLink(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
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
                        <button
                          key={link.label}
                          onClick={() => handleLinkClick(link.label)}
                          className="block text-sm text-blue-600 dark:text-blue-400 hover:underline text-left w-full"
                        >
                          → {link.label}
                        </button>
                      ))}
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedLink && linkContent[selectedLink] && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-6 flex justify-between items-start">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white pr-4">
                  {linkContent[selectedLink].title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 shrink-0"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 whitespace-pre-wrap text-slate-700 dark:text-slate-300 leading-relaxed">
                {linkContent[selectedLink].content}
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-6">
                <button
                  onClick={closeModal}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
       
      </main>

      <Footer />
    </div>
  );
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  copyrightText?: string;
}

export function Footer({
  sections = [
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
        { label: "Guias", href: "#" },
        { label: "Quiz", href: "#" },
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
  ],
  copyrightText = "© 2024 Inclusão Digital. Todos os direitos reservados.",
}: FooterProps) {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h5 className="font-bold text-slate-900 dark:text-white mb-3">
                {section.title}
              </h5>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-slate-600 dark:text-slate-400 text-sm">
          <p>{copyrightText} | Desenvolvido com ♿ para todos</p>
        </div>
      </div>
    </footer>
  );
}

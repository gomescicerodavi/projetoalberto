# 🌐 Inclusão Digital - A Importância da Legenda e da Janela em Libras

Um website moderno, acessível e responsivo dedicado à conscientização sobre inclusão digital, acessibilidade web e direitos das pessoas surdas.

## 🎯 Sobre

Este projeto foi desenvolvido para promover a inclusão digital e educação sobre:
- 📝 **Legendas** em conteúdo audiovisual
- 🤟 **Língua Brasileira de Sinais (Libras)**
- 🌐 **Acessibilidade na Web (WAI-ARIA)**
- ⚖️ **Direitos das pessoas com deficiência**

## 🚀 Tecnologias

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4, CSS3
- **Acessibilidade**: WAI-ARIA, Semantic HTML5
- **Desenvolvimento**: ESLint, PostCSS

## 📦 Quick Start

1. **Instale as dependências**
```bash
npm install
```

2. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

3. **Acesse no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   ├── quiz/
│   │   └── page.tsx        # Quiz interativo
│   ├── recursos/
│   │   └── page.tsx        # Recursos educacionais
│   └── sobre/
│       └── page.tsx        # Página sobre
├── components/
│   ├── index.ts            # Exportações
│   ├── Button.tsx          # Botão
│   ├── Card.tsx            # Card
│   ├── Navigation.tsx      # Navegação
│   └── Footer.tsx          # Rodapé
├── types/
│   └── index.ts            # Tipos TypeScript
└── utils/
    └── index.ts            # Funções utilitárias
```

## 🎨 Componentes

### Button
Botão com variantes e tamanhos personalizáveis.

### Card
Card reutilizável para conteúdo estruturado.

### Navigation
Barra de navegação fixa responsiva.

### Footer
Rodapé com seções customizáveis.

## 📄 Páginas

- **Home** (`/`) - Página inicial com informações e CTA
- **Quiz** (`/quiz`) - Quiz interativo sobre acessibilidade
- **Recursos** (`/recursos`) - Catálogo de recursos educacionais
- **Sobre** (`/sobre`) - Informações do projeto e equipe

## ♿ Acessibilidade

✅ WCAG 2.1 AA Compliant
✅ Navegação por teclado
✅ Leitores de tela
✅ Contraste adequado
✅ Semântica HTML5
✅ Atributos ARIA

## 🔧 Comandos

```bash
npm run dev      # Desenvolvimento
npm run build    # Build
npm start        # Produção
npm run lint     # Lint
```

## 📝 Licença

MIT License

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou PR.

---

**Desenvolvido com ♿ para todos** ❤️

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

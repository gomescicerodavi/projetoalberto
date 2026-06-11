import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inclusão Digital - A Importância da Legenda e da Janela em Libras",
  description: "Conheça a importância da acessibilidade digital, legendas e Libras para pessoas surdas. Promovemos inclusão, acesso à informação e direitos digitais.",
  keywords: "acessibilidade, legendas, Libras, inclusão digital, pessoas surdas, acessibilidade web",
  authors: [{ name: "Projeto Inclusão Digital" }],
  openGraph: {
    title: "Inclusão Digital",
    description: "A Importância da Legenda e da Janela em Libras",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex">
        <Sidebar />
        <main className="flex-1 ml-64 transition-all duration-300 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

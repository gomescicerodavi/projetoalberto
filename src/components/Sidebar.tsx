"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLink {
  label: string;
  href: string;
  icon: string;
}

interface SidebarProps {
  logo?: string;
  title?: string;
  links?: SidebarLink[];
}

export function Sidebar({
  logo = "♿",
  title = "Inclusão Digital",
  links = [
    { label: "Início", href: "/", icon: "🏠" },
    { label: "Quiz", href: "/quiz", icon: "📝" },
    { label: "Recursos", href: "/recursos", icon: "📚" },
    { label: "Sobre", href: "/sobre", icon: "ℹ️" },
  ],
}: SidebarProps) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-64" : "w-20"
        } bg-gradient-to-b from-blue-600 to-blue-800 dark:from-slate-900 dark:to-slate-950 text-white fixed left-0 top-0 h-screen flex flex-col transition-all duration-300 ease-in-out z-40 border-r border-blue-700 dark:border-slate-800`}
      >
        {/* Logo Area */}
        <div className="flex items-center justify-between p-4 border-b border-blue-700 dark:border-slate-800">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg flex-shrink-0">
              {logo}
            </div>
            {open && (
              <h1 className="text-lg font-bold whitespace-nowrap">{title}</h1>
            )}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="p-1 hover:bg-blue-700 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              className={`w-5 h-5 transition-transform ${open ? "rotate-0" : "rotate-180"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive(link.href)
                      ? "bg-white text-blue-600 font-semibold"
                      : "text-blue-100 hover:bg-blue-700 dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{link.icon}</span>
                  {open && <span className="whitespace-nowrap">{link.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Info */}
        <div className="border-t border-blue-700 dark:border-slate-800 p-4">
          {open ? (
            <div className="text-xs text-blue-100">
              <p className="font-semibold mb-1">Projeto</p>
              <p>Promovendo inclusão digital e acessibilidade</p>
            </div>
          ) : (
            <div className="text-center text-xl">📱</div>
          )}
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 md:hidden z-30 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

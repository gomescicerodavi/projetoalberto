"use client";

import React, { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface NavigationProps {
  logo?: string;
  title?: string;
  links?: NavLink[];
}

export function Navigation({
  logo = "♿",
  title = "Inclusão Digital",
  links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Recursos", href: "#recursos" },
    { label: "Direitos", href: "#direitos" },
  ],
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            {logo}
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white hidden sm:block">
            {title}
          </h1>
        </div>

        <button
          className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
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

        <div className="hidden md:flex gap-4 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 md:hidden">
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

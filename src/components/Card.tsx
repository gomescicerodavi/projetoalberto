import React from "react";

interface CardProps {
  icon?: string;
  title: string;
  description: string;
  items?: string[];
  children?: React.ReactNode;
}

export function Card({ icon, title, description, items, children }: CardProps) {
  return (
    <div className="p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h4>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      {items && (
        <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}

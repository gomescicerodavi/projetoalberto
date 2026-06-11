import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg",
    secondary:
      "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700",
    outline:
      "border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

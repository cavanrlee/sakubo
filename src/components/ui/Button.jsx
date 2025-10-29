// Button Component (button.jsx)
import React from "react";
import { cn } from "@/lib/utils";

export function Button({ children, className, variant = "default", ...props }) {
  const base =
    "px-4 py-2 rounded-2xl font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    default: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    outline:
      "border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-400",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
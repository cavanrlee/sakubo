
// Card Component (card.jsx)
import React from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }) {
  return (
    <div className={cn("bg-white rounded-2xl shadow-sm border p-4", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={cn("p-2", className)}>{children}</div>;
}

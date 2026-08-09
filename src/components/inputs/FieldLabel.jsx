import React from "react";

export default function FieldLabel({ label, htmlFor }) {
  if (!label) return null;

  return (
    <label htmlFor={htmlFor} className="form-label text-left font-bold text-sm text-muted d-block mb-1">
      {label}
    </label>
  );
}

// Shared tokens for every input component in this folder. Kept identical
// to the original TextInput's values so nothing visually changes —
// this is just the one place they now live instead of being redefined
// (or drifting) per input type.

export const BASE_INPUT_CLASS =
  "w-full rounded-lg p-3 text-sm bg-transparent outline-none focus:outline-none transition-colors duration-200";

export const INPUT_VARIANTS = {
  primary: { borderColor: "#D1D5DB", focusBorderColor: "#4CAF50" },
  secondary: { borderColor: "#D1D5DB", focusBorderColor: "#9CA3AF" },
  white: { borderColor: "#D1D5DB", focusBorderColor: "white", color: "white" },
  black: { borderColor: "#D1D5DB", focusBorderColor: "black", color: "black" },
  warning: { borderColor: "#D1D5DB", focusBorderColor: "#FBBF24" },
  danger: { borderColor: "#D1D5DB", focusBorderColor: "#EF4444" },
};

export function resolveVariant(variant, hasError) {
  return hasError ? "danger" : variant;
}

// Errors can arrive as a plain string (e.g. from client-side validation) or
// as an array (Laravel-style validation responses: { field: ["message"] }).
// The original component only handled the array shape and would render
// undefined for a plain string — this handles both.
export function getErrorMessage(errors, name) {
  const err = errors?.[name];
  if (!err) return null;
  return Array.isArray(err) ? err[0] : err;
}

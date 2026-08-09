// Same color values as the original Button — nothing changed visually,
// just pulled out so the component body reads as logic, not a wall of
// color maps.

const THEME_GREEN = "#4CAF50";
const THEME_GREEN_LIGHT = "#e8f5e8"; // lighter hover shade
const THEME_GREEN_DARK = "#27642b"; // darker hover shade

export const BUTTON_BASE_CLASS =
  "w-full px-5 py-3 rounded-lg! text-sm font-medium transition-colors transition-shadow duration-200 shadow-sm";

export const SOLID_STYLES = {
  primary: { backgroundColor: THEME_GREEN, color: "white" },
  secondary: { backgroundColor: "#6B7280", color: "white" },
  white: { backgroundColor: "white", color: "black" },
  black: { backgroundColor: "black", color: "white" },
  warning: { backgroundColor: "#FBBF24", color: "black" },
  danger: { backgroundColor: "#EF4444", color: "white" },
};

export const SOLID_HOVER_BACKGROUND = {
  primary: THEME_GREEN_DARK,
  secondary: "#4B5563",
  white: "#F3F4F6",
  black: "#111827",
  warning: "#F59E0B",
  danger: "#DC2626",
};

export const OUTLINE_STYLES = {
  primary: { border: `2px solid ${THEME_GREEN}`, color: THEME_GREEN, backgroundColor: "transparent" },
  secondary: { border: "2px solid #6B7280", color: "#6B7280", backgroundColor: "transparent" },
  white: { border: "2px solid white", color: "white", backgroundColor: "transparent" },
  black: { border: "2px solid black", color: "black", backgroundColor: "transparent" },
  warning: { border: "2px solid #FBBF24", color: "#FBBF24", backgroundColor: "transparent" },
  danger: { border: "2px solid #EF4444", color: "#EF4444", backgroundColor: "transparent" },
};

export const OUTLINE_HOVER_BACKGROUND = {
  primary: THEME_GREEN_LIGHT,
  secondary: "#F9FAFB", // gray-50
  white: "#F9FAFB",
  black: "#F3F4F6",
  warning: "#FEF3C7", // yellow-50
  danger: "#FEE2E2", // red-50
};

// NOTE: kept verbatim from the original, but flagging a likely mismatch —
// the source comment said "text turns white on hover" for `primary`, yet
// the value here is `themeGreen` (same as the resting outline text color),
// so hovering a primary outline button currently changes only the
// background, not the text. If that was intentional, ignore this; if not,
// change `primary` below to "white" to match the other variants' pattern.
export const OUTLINE_HOVER_TEXT = {
  primary: THEME_GREEN,
  secondary: "white",
  white: "black",
  black: "white",
  warning: "black",
  danger: "white",
};

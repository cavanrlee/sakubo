import { useState } from "react";
import {
  SOLID_STYLES,
  SOLID_HOVER_BACKGROUND,
  OUTLINE_STYLES,
  OUTLINE_HOVER_BACKGROUND,
  OUTLINE_HOVER_TEXT,
} from "./styles";

// The original had hover working out as commented-out onMouseEnter/
// onMouseLeave handlers that mutated e.target.style directly. Two problems
// with that approach: (1) it silently breaks if the style ever needs to
// react to a prop change (e.g. variant swapping) while already hovered,
// since nothing tells React to recompute it, and (2) every consumer would
// have needed the same "if (disabled) return" guard copy-pasted at each
// call site. Using React state instead means the style is always a pure
// function of props + hover state — recomputed on every render, no manual
// sync required, and disabled buttons simply never receive hover handlers.
export default function useButtonStyle({ variant, outline, disabled }) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = outline ? OUTLINE_STYLES[variant] : SOLID_STYLES[variant];

  const style =
    isHovered && !disabled
      ? outline
        ? {
            ...baseStyle,
            backgroundColor: OUTLINE_HOVER_BACKGROUND[variant],
            color: OUTLINE_HOVER_TEXT[variant],
          }
        : { ...baseStyle, backgroundColor: SOLID_HOVER_BACKGROUND[variant] }
      : baseStyle;

  const hoverHandlers = disabled
    ? undefined
    : {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      };

  return { style, hoverHandlers };
}

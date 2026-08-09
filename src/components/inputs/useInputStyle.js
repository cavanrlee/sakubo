import { INPUT_VARIANTS, resolveVariant } from "./styles";

// Reproduces the original's focus behavior exactly: border color is set via
// direct DOM style mutation on focus/blur (not React state), so typing
// doesn't trigger a re-render just to swap a border color. The resting
// style is still fully React-controlled and recomputes if the variant or
// error state changes (e.g. a field goes red the moment validation fails,
// even while the user is still looking at it).
export default function useInputStyle(variant, hasError) {
  const finalVariant = resolveVariant(variant, hasError);
  const config = INPUT_VARIANTS[finalVariant] ?? INPUT_VARIANTS.primary;

  const style = {
    border: `1px solid ${config.borderColor}`,
    color: config.color || "inherit",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = config.focusBorderColor;
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = config.borderColor;
  };

  return { style, handleFocus, handleBlur };
}

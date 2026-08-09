import React from "react";
import useButtonStyle from "./useButtonStyle";
import { BUTTON_BASE_CLASS } from "./styles";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  outline = false,
  disabled = false,
  onClick,
  className = "",
}) {
  const { style, hoverHandlers } = useButtonStyle({ variant, outline, disabled });

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${BUTTON_BASE_CLASS} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      style={style}
      {...hoverHandlers}
    >
      {children}
    </button>
  );
}

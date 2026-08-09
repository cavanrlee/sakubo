import React from "react";
import FieldLabel from "./FieldLabel";
import FieldError from "./FieldError";
import useInputStyle from "./useInputStyle";
import { BASE_INPUT_CLASS } from "./styles";

export default function TextField({
  form,
  errors,
  handleChange,
  name,
  label,
  placeHolder,
  type = "text",
  variant = "primary",
}) {
  const { style, handleFocus, handleBlur } = useInputStyle(variant, !!errors?.[name]);

  return (
    <div>
      <FieldLabel label={label} htmlFor={name} />
      <input
        id={name}
        name={name}
        type={type}
        value={form[name] ?? ""}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeHolder}
        style={style}
        className={BASE_INPUT_CLASS}
      />
      <FieldError errors={errors} name={name} />
    </div>
  );
}

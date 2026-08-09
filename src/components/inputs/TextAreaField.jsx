import React from "react";
import FieldLabel from "./FieldLabel";
import FieldError from "./FieldError";
import useInputStyle from "./useInputStyle";
import { BASE_INPUT_CLASS } from "./styles";

export default function TextAreaField({
  form,
  errors,
  handleChange,
  name,
  label,
  placeHolder,
  variant = "primary",
  rows = 4,
}) {
  const { style, handleFocus, handleBlur } = useInputStyle(variant, !!errors?.[name]);

  return (
    <div>
      <FieldLabel label={label} htmlFor={name} />
      <textarea
        id={name}
        name={name}
        value={form[name] ?? ""}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeHolder}
        style={style}
        rows={rows}
        className={BASE_INPUT_CLASS}
      />
      <FieldError errors={errors} name={name} />
    </div>
  );
}

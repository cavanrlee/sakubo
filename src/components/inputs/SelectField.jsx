import React from "react";
import FieldLabel from "./FieldLabel";
import FieldError from "./FieldError";
import useInputStyle from "./useInputStyle";
import { BASE_INPUT_CLASS } from "./styles";

export default function SelectField({
  form,
  errors,
  handleChange,
  name,
  label,
  options = [],
  variant = "primary",
}) {
  const { style, handleFocus, handleBlur } = useInputStyle(variant, !!errors?.[name]);

  // Some callers store this field as an array (e.g. a multi-select value
  // reused for a plain <select>). Falling back to the first entry keeps
  // this component usable either way without the caller needing to know.
  const value = Array.isArray(form[name]) ? form[name][0] ?? "" : form[name] ?? "";

  return (
    <div>
      <FieldLabel label={label} htmlFor={name} />
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={style}
        className={`${BASE_INPUT_CLASS} form-select`}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <FieldError errors={errors} name={name} />
    </div>
  );
}

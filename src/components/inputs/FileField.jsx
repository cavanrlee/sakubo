import React from "react";
import FieldLabel from "./FieldLabel";
import FieldError from "./FieldError";
import useInputStyle from "./useInputStyle";
import { BASE_INPUT_CLASS } from "./styles";

export default function FileField({ form, errors, handleChange, name, label, variant = "primary" }) {
  const { style, handleFocus, handleBlur } = useInputStyle(variant, !!errors?.[name]);
  const selectedFile = form[name];

  return (
    <div>
      <FieldLabel label={label} htmlFor={name} />
      <input
        id={name}
        name={name}
        type="file"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={style}
        className={BASE_INPUT_CLASS}
      />
      {selectedFile?.name && (
        <p className="text-xs text-gray-500 mt-1 text-left">Selected: {selectedFile.name}</p>
      )}
      <FieldError errors={errors} name={name} />
    </div>
  );
}

import React from "react";
import FieldError from "./FieldError";
import { BASE_INPUT_CLASS } from "./styles";

// Checkboxes and radios in the original component were two copies of the
// exact same JSX with only `type` different. This is the shared shape;
// CheckboxField and RadioField below just fix the `type` for clarity at
// the call site (and so each has its own displayName in devtools).
export default function ToggleField({ form, errors, handleChange, name, label, type }) {
  return (
    <div>
      <div className="flex gap-2">
        <input
          id={name}
          name={name}
          type={type}
          checked={!!form[name]}
          onChange={handleChange}
          className={`${BASE_INPUT_CLASS} w-auto`}
        />
        <label htmlFor={name} className="text-sm font-bold whitespace-nowrap! text-gray-700">
          {label}
        </label>
      </div>
      <FieldError errors={errors} name={name} />
    </div>
  );
}

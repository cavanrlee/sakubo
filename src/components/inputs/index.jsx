import React from "react";
import TextField from "./TextField";
import TextAreaField from "./TextAreaField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";
import RadioField from "./RadioField";
import FileField from "./FileField";

// Kept as the single entry point so every existing <TextInput type="..." />
// call site in the app keeps working unchanged. Add a new input kind by
// building its component alongside the others in this folder and adding
// one line here — call sites never need to know it moved.
const FIELD_COMPONENTS = {
  textarea: TextAreaField,
  select: SelectField,
  checkbox: CheckboxField,
  radio: RadioField,
  file: FileField,
};

export default function TextInput({ type = "text", ...props }) {
  const Field = FIELD_COMPONENTS[type] ?? TextField;

  // Text-like inputs (text, number, email, password, date, time, url...)
  // all fall through to TextField, which forwards `type` to the native
  // <input>. Every other kind has its own dedicated component and ignores
  // `type` internally.
  return <Field {...props} type={type} />;
}

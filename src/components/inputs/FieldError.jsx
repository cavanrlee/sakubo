import React from "react";
import { getErrorMessage } from "./styles";

export default function FieldError({ errors, name }) {
  const message = getErrorMessage(errors, name);
  if (!message) return null;

  return <p className="text-red-500 text-left text-xs mt-1">{message}</p>;
}

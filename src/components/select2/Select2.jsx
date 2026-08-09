import React, { useCallback, useMemo } from "react";
import Select from "react-select";
import { getErrorMessage } from "@/components/inputs/styles";
import { SELECT2_STYLES } from "./selectStyles";

// Drop-in replacement for the original Select2Styled. Renamed to match
// the `import Select2Dropdown from "@/components/Select2Dropdown"` used
// elsewhere in the app (e.g. the products/services step) — same props,
// same markup classes, same visual result.
export default function Select2Dropdown({
  form,
  errors,
  handleChange,
  name,
  label,
  options = [],
  placeholder = "Type to search offerings...",
}) {
  // The original recomputed this with `options.filter(opt =>
  // (form[name] || []).includes(opt.value))` — an O(selected × options)
  // scan on every render. Building a Set once turns each lookup into O(1),
  // which matters once the option list (products/services, etc.) grows.
  const selectedValues = useMemo(() => {
    const selectedIds = new Set(form[name] || []);
    return options.filter((opt) => selectedIds.has(opt.value));
  }, [options, form[name]]);

  // Stable identity across renders so react-select (and any memoized
  // parent) doesn't treat this as a changed prop every time.
  const handleSelectChange = useCallback(
    (selected) => {
      handleChange({
        target: {
          name,
          value: selected ? selected.map((s) => s.value) : [],
        },
      });
    },
    [handleChange, name]
  );

  // Handles both error shapes ({ name: "msg" } and { name: ["msg"] }) —
  // the original's `errors[name][0]` assumed the array shape only.
  const errorMessage = getErrorMessage(errors, name);

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-bold w-100 text-left text-sm mb-2 text-gray-700">
        {label}
      </label>

      <Select
        inputId={name}
        options={options}
        value={selectedValues}
        onChange={handleSelectChange}
        isMulti
        placeholder={placeholder}
        styles={SELECT2_STYLES}
      />

      {errorMessage && <p className="text-red-500 text-xs mt-1">{errorMessage}</p>}
    </div>
  );
}

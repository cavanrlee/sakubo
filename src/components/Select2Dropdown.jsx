import React from "react";
import Select from "react-select";

const Select2Styled = ({
  form,
  errors,
  handleChange,
  name,
  label,
  options = [],
}) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "12px",
      borderColor: state.isFocused ? "#22C55E" : "#E5E7EB",
      boxShadow: "none",
      padding: "6px",
      minHeight: "50px",
      "&:hover": {
        borderColor: "#22C55E",
      },
    }),

    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#e8f5e8",
      borderRadius: "9999px",
      padding: "4px 8px",
    }),

    multiValueLabel: (provided) => ({
      ...provided,
      color: "#065F46",
      fontWeight: "500",
    }),

    multiValueRemove: (provided) => ({
      ...provided,
      color: "#065F46",
      ":hover": {
        backgroundColor: "transparent",
        color: "#EF4444",
      },
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#9CA3AF",
    }),
  };

  return (
    <div className="mb-4">
      <label className="block font-bold w-100 text-left text-sm mb-2 text-gray-700">
        {label}
      </label>

      <Select
        options={options}
        value={form[name] || []}
        onChange={(selected) =>
          handleChange({
            target: { name, value: selected },
          })
        }
        isMulti
        placeholder="Type to search offerings..."
        styles={customStyles}
      />

      {errors && errors[name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[name][0]}
        </p>
      )}
    </div>
  );
};

export default Select2Styled;
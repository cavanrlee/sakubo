// react-select style-function overrides — identical values to the
// original inline `customStyles`. The original rebuilt this object (and
// every function inside it) on every render, even though none of it
// depends on props or state. Since it's static, it's now created once at
// module load instead of once per render.
export const SELECT2_STYLES = {
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

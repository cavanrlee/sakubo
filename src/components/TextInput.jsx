const TextInput = ({
  form,
  errors,
  handleChange,
  name,
  placeHolder,
  label,
  type = "text",
  variant = "primary",
  options = [],
}) => {
  const baseClass =
    "w-full rounded-lg p-3 text-sm bg-transparent outline-none focus:outline-none transition-colors duration-200";

  const variants = {
    primary: { borderColor: "#D1D5DB", focusBorderColor: "#4CAF50" },
    secondary: { borderColor: "#D1D5DB", focusBorderColor: "#9CA3AF" },
    white: { borderColor: "#D1D5DB", focusBorderColor: "white", color: "white" },
    black: { borderColor: "#D1D5DB", focusBorderColor: "black", color: "black" },
    warning: { borderColor: "#D1D5DB", focusBorderColor: "#FBBF24" },
    danger: { borderColor: "#D1D5DB", focusBorderColor: "#EF4444" },
  };

  const finalVariant = errors && errors[name] ? "danger" : variant;

  const style = {
    border: `1px solid ${variants[finalVariant].borderColor}`,
    color: variants[finalVariant].color || "inherit",
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = variants[finalVariant].focusBorderColor;
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = variants[finalVariant].borderColor;
  };

  const commonProps = {
    name,
    ...(type !== "checkbox" &&
      type !== "radio" &&
      type !== "file" && {
      onChange: handleChange
    }),
    className: `${baseClass} ${type === "checkbox" || type === "radio" ? "w-auto" : ""} ${type === "select" ? "form-select" : ""}`,
    placeholder: placeHolder,
    style,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return <textarea {...commonProps} value={form[name] || ""} rows="4" />;

      case "select":
        return (
          <select {...commonProps} value={form[name] || ""}>
            <option value="">Select {label}</option>
            {options.map((opt, i) => (
              <option key={i} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );

      case "checkbox":
        return (
          <div className="flex gap-2">
            <input
              {...commonProps}
              type="checkbox"
              checked={!!form[name]}
              onChange={(e) =>
                handleChange({
                    target: { name, checked: e.target.checked, type: "checkbox" },
                })
              }
            />
            <span className="text-sm font-bold whitespace-nowrap! text-gray-700">{label}</span>
          </div>
        );

      case "radio":
        return (
          <div className="flex gap-2">
            <input
              {...commonProps}
              type="radio"
              checked={!!form[name]}
              onChange={(e) =>
                handleChange({
                  target: { name, checked: e.target.checked, type: "radio" },
                })
              }
            />
            <span className="text-sm font-bold whitespace-nowrap! text-gray-700">{label}</span>
          </div>
        );

      case "file":
        return (
          <input
            {...commonProps}
            type="file"
            onChange={(e) =>
              handleChange({
                target: { name, value: e.target.files[0] },
              })
            }
          />
        );

      default: // text, number, email, password, etc.
        return <input {...commonProps} type={type} value={form[name] || ""} />;
    }
  };

  return (
    <div>
      {/* Only show label for non-checkbox/radio */}
      {type !== "checkbox" && type !== "radio" && (
        <label className="form-label text-left font-bold text-sm text-muted d-block mb-1">
          {label}
        </label>
      )}

      {renderInput()}

      {errors && errors[name] && (
        <p className="text-red-500 text-left text-xs mt-1">{errors[name][0]}</p>
      )}
    </div>
  );
};

export default TextInput;


  {/* PRIMARY 
  <TextInput
    form={{ name: "" }}
    errors={{}}
    handleChange={() => {}}
    name="primary"
    label="Primary Input"
    variant="primary"
  />

  PRIMARY WITH ERROR 
  <TextInput
    form={{ name: "" }}
    errors={{ primaryError: "This field is required" }}
    handleChange={() => {}}
    name="primaryError"
    label="Primary Error"
    variant="primary"
  />

   SECONDARY 
  <TextInput
    form={{ name: "" }}
    errors={{}}
    handleChange={() => {}}
    name="secondary"
    label="Secondary Input"
    variant="secondary"
  />

   WHITE 
  <TextInput
    form={{ name: "" }}
    errors={{}}
    handleChange={() => {}}
    name="white"
    label="White Input"
    variant="white"
  />

   BLACK 
  <TextInput
    form={{ name: "" }}
    errors={{}}
    handleChange={() => {}}
    name="black"
    label="Black Input"
    variant="black"
  />

   WARNING 
  <TextInput
    form={{ name: "" }}
    errors={{}}
    handleChange={() => {}}
    name="warning"
    label="Warning Input"
    variant="warning"
  />

   DANGER 
  <TextInput
    form={{ name: "" }}
    errors={{}}
    handleChange={() => {}}
    name="danger"
    label="Danger Input"
    variant="danger"
  />

   TEXTAREA 
  <TextInput
    form={{ description: "" }}
    errors={{}}
    handleChange={() => {}}
    name="description"
    label="Textarea Input"
    type="textarea"
    variant="primary"
  />

   SELECT 
  <TextInput
    form={{ country: "" }}
    errors={{}}
    handleChange={() => {}}
    name="country"
    label="Select Input"
    type="select"
    variant="primary"
    options={[
      { value: "ph", label: "Philippines" },
      { value: "us", label: "United States" },
      { value: "jp", label: "Japan" },
    ]}
  />

   CHECKBOX 
  <TextInput
    form={{ agree: false }}
    errors={{}}
    handleChange={() => {}}
    name="agree"
    label="Checkbox Input"
    type="checkbox"
    variant="primary"
  />

   RADIO 
  <TextInput
    form={{ gender: "" }}
    errors={{}}
    handleChange={() => {}}
    name="gender"
    label="Radio Input"
    type="radio"
    variant="primary"
  />

   FILE 
  <TextInput
    form={{ file: "" }}
    errors={{}}
    handleChange={() => {}}
    name="file"
    label="File Input"
    type="file"
    variant="primary"
  />
</>

*/}
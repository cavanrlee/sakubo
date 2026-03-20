const themeGreen = "#4CAF50";
const themeGreenLight = "#e8f5e8"; // lighter hover shade
const themeGreenDark = "#27642b";  // darker hover shade

const Button = ({
  children,
  type = "button",
  variant = "primary",
  outline = false,
  disabled = false,
  onClick,
}) => {

  const baseClass =
    "w-full px-5 py-3 rounded-lg! text-sm font-medium transition-colors transition-shadow duration-200 shadow-sm";

  // SOLID COLORS
  const solidStyle = {
    primary: { backgroundColor: themeGreen, color: "white" },
    secondary: { backgroundColor: "#6B7280", color: "white" }, 
    white: { backgroundColor: "white", color: "black" },
    black: { backgroundColor: "black", color: "white" },
    warning: { backgroundColor: "#FBBF24", color: "black" }, 
    danger: { backgroundColor: "#EF4444", color: "white" }, 
  };

  const hoverSolid = {
    primary: themeGreenDark,
    secondary: "#4B5563", 
    white: "#F3F4F6",     
    black: "#111827",     
    warning: "#F59E0B",   
    danger: "#DC2626",  
  };

  // OUTLINE COLORS
  const outlineStyle = {
    primary: { border: `2px solid ${themeGreen}`, color: themeGreen, backgroundColor: "transparent" },
    secondary: { border: "2px solid #6B7280", color: "#6B7280", backgroundColor: "transparent" },
    white: { border: "2px solid white", color: "white", backgroundColor: "transparent" },
    black: { border: "2px solid black", color: "black", backgroundColor: "transparent" },
    warning: { border: "2px solid #FBBF24", color: "#FBBF24", backgroundColor: "transparent" },
    danger: { border: "2px solid #EF4444", color: "#EF4444", backgroundColor: "transparent" },
  };

  const hoverOutline = {
    primary: themeGreenLight,
    secondary: "#F9FAFB", // gray-50
    white: "#F9FAFB",
    black: "#F3F4F6",
    warning: "#FEF3C7", // yellow-50
    danger: "#FEE2E2", // red-50
  };

  const hoverOutlineText = {
    primary: themeGreen,   // text turns white on hover
    secondary: "white",
    white: "black",
    black: "white",
    warning: "black",
    danger: "white",
  };
  
  // HANDLE HOVER
  // const handleMouseEnter = (e) => {
  //   if (disabled) return;

  //   if (outline) {
  //     e.target.style.backgroundColor = hoverOutline[variant];
  //     e.target.style.color = hoverOutlineText[variant];
  //   } else {
  //     e.target.style.backgroundColor = hoverSolid[variant];
  //   }
  // };

  // const handleMouseLeave = (e) => {
  //   if (disabled) return;

  //   const style = outline ? outlineStyle[variant] : solidStyle[variant];
  //   e.target.style.backgroundColor = style.backgroundColor;
  //   e.target.style.color = style.color;
  // };

  const currentStyle = outline ? outlineStyle[variant] : solidStyle[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      style={currentStyle}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;


{/* SOLID BUTTONS 

<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="white">White</Button>
<Button variant="black">Black</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Delete</Button>


<Button variant="primary" outline>Save</Button>
<Button variant="secondary" outline>Cancel</Button>
<Button variant="white" outline>White</Button>
<Button variant="black" outline>Black</Button>
<Button variant="warning" outline>Warning</Button>
<Button variant="danger" outline>Delete</Button>


<Button variant="primary" disabled>Save</Button>
<Button variant="secondary" disabled>Cancel</Button>
<Button variant="white" disabled>White</Button>
<Button variant="black" disabled>Black</Button>
<Button variant="warning" disabled>Warning</Button>
<Button variant="danger" disabled>Delete</Button>


<Button type="submit" variant="primary">Submit</Button>
<Button type="submit" variant="danger" outline>Delete</Button>

*/}
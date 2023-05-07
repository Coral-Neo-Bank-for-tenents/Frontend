import React from "react";

const GlowingButton = ({ text, onClick }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const buttonStyle = {
    borderRadius: "9999px",
    padding: "1rem 2.5rem",
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "white",
    backgroundColor: isHovering ? "#2563EB" : "#1E40AF",
    boxShadow: isHovering ? "0 0 0 3px rgba(37, 99, 235, 0.5)" : "",
    transition: "all 0.2s ease-in-out",
    outline: "none",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </button>
  );
};

export default GlowingButton;

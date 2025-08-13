import React from "react";

function Paragraph({ text = "N/A", size = "14px", className = "" }) {
  return (
    <p
      className={`text-[14px] font-[400] leading-[20px] text-custom-gray ${className}`}
      style={{ fontSize: size }}
    >
      {text}
    </p>
  );
}

export default Paragraph;

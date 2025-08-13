import React from "react";

function Heading({ text = "N/A", size = "22px", className = "" }) {
  return (
    <h2
      className={` font-[500] leading-[28px] text-custom-black ${className}`}
      style={{ fontSize: size }}
    >
      {text}
    </h2>
  );
}

export default Heading;

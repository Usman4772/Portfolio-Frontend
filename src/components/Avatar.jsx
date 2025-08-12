import Image from "next/image";
import React from "react";

function Avatar({ className, width = 200, height = 200, onClick = () => {} }) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center flex-col ${className}`}
      onClick={onClick}
    >
      <Image
        src={"/avatar.png"}
        width={width}
        height={height}
        alt="Avatar"
        className="rounded-full"
      />
    </div>
  );
}

export default Avatar;

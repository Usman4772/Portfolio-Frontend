import Image from "next/image";
import React from "react";

function Avatar() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <Image src={"/avatar.png"} width={200} height={200} alt="Avatar" />
      <div className=" w-52 rounded-md h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent shadow-lg"></div>
    </div>
  );
}

export default Avatar;

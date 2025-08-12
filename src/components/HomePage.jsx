import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Image from "next/image";
import Avatar from "./Avatar";

function HomePage() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <NavBar />
      <div className="flex flex-col justify-center flex-1 items-center">
        <Avatar />
        {/* <div className="mt-1 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent shadow-md"></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

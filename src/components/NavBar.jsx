import React from "react";
import BlinkingBadge from "./BlinkingBadge";
import BrandingHeader from "./BrandingHeader";
import GitHubButton from "./GithubButton";

function NavBar({ setQuery, getAIResponse }) {
  function handleClickTalent() {
    setQuery("Let's Connect");
    getAIResponse("Let's Connect");
  }

  return (
    <div className="w-full p-2 flex justify-center md:justify-between items-start">
      <BlinkingBadge
        text="Let's Connect"
        handleClick={handleClickTalent}
        className="cursor-pointer max-md:hidden"
      />
      <BrandingHeader />
      <GitHubButton href="https://github.com/Usman4772" />
    </div>
  );
}

export default NavBar;

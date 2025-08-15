import React from "react";
import BlinkingBadge from "./BlinkingBadge";
import BrandingHeader from "./BrandingHeader";
import GitHubButton from "./GithubButton";

function NavBar({ setQuery, getAIResponse }) {
  function handleClickTalent() {
    setQuery("I'm looking for talent.");
    getAIResponse("I'm looking for talent.");
  }

  return (
    <div className="w-full p-4 flex justify-center md:justify-between items-start">
      <BlinkingBadge
        text="Looking for a talent?"
        handleClick={handleClickTalent}
        className="cursor-pointer max-md:hidden"
      />
      <BrandingHeader />
      <GitHubButton href="https://github.com/Usman4772" />
    </div>
  );
}

export default NavBar;

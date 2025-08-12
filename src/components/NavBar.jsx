import React from "react";
import BlinkingBadge from "./BlinkingBadge";
import BrandingHeader from "./BrandingHeader";
import GitHubButton from "./GithubButton";

function NavBar() {
  return (
    <div className="w-full p-4 flex justify-between items-start">
      <BlinkingBadge text="Looking for a talent?" />
      <BrandingHeader />
      <GitHubButton />
    </div>
  );
}

export default NavBar;

import React from "react";

export const Header = () => {
  return (
    <header className="h-10 w-full px-8 flex items-center justify-between">
      <div className="text-2xl">육두문자 Team Blog</div>
      <nav className="flex gap-2">
        <div>Post</div>
        <div>About</div>
      </nav>
    </header>
  );
};

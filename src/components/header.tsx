<<<<<<< HEAD
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-centers">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <span>육두문자</span>
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
          <div><ThemeSwitch/></div>
            <li>
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span>About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
=======
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
>>>>>>> b028cd2 (refactor(front-web): front-web 폴더 제거, README 파일 제목 수정)

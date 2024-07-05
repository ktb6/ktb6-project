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

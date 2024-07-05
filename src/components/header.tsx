import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-transparent text-black p-4">
      <div className="container mx-auto flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            <span>Team Blog</span>
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
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
